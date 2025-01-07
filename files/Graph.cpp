#include "Graph.h"
#include <queue>
#include <iostream>
using namespace std;

 // default constructor
    Graph::Graph(){

    }
    
    // to check if an edge exists between v and w
    bool Graph::hasEdge(char v, char w) const{
        if (adjMap.find(v) == adjMap.end()) {
        return false;
    }
    if (adjMap.find(w) == adjMap.end()) {
        return false;
    }
    return adjMap.at(v).find(w) != adjMap.at(v).end()&&adjMap.at(w).find(v) != adjMap.at(w).end();


    } 
    
    // to add an edge beween v and w to the graph
    void Graph::addEdge(char v, char w){
        adjMap[v].insert(w);
        adjMap[w].insert(v);

    }

    // Apply BFS traversal to find the shortest path from the given source s to destination t
    // return the distnace from s to t
    // if s or t does not exist, return INVALID_VERTEX (=-2) 
    // if there is no path from s to t, return NOPATH (=-1)
    // store the shortest path distance from the given source s  to vertex w in distance map<w, distance>
    // store which next vertex to go through on the shortest path to the given source s in go_through map<w, v>. 
    // Here a pair <w, v> in go_through map represents on the shortest path from w to the given source s, it needs to take the path: w-->v...-->s  
    int Graph::BFS(char s, char t, map<char, int>& distance, map<char, char>& go_through) const{
        //source s
        //find t
        if(adjMap.find(s)==adjMap.end()||adjMap.find(t)==adjMap.end()){
return INVALID_VERTEX;
        }
        for(auto it=adjMap.begin(); it!=adjMap.end(); it++){

        distance[it->first]=-1;

        }
        queue<char> q;
        distance[s]=0;
        go_through[s]=s;
        q.push(s);
        char current=s;
        while(!q.empty()&&current!=t){
            char current = q.front();
            q.pop(); 
            for(char n:adjMap.at(current)){

                
                if(distance[n]==-1){
                distance[n]=1;
                go_through[n]=current;
                q.push(n);
                
                
        
                    if (n == t) {
                     return distance[n];}

                    
                }



            }
        }




        return NOPATH;
    }
    
