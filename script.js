document.addEventListener("DOMContentLoaded", () => {
    // 1. Project Data
    const projects = [
      {
        id: 1,
        title: "Pipette Water Tester",
        image: "images/project1.jpg",
        description: `
          <p>This was a group project for my engineering class. Our team consisted of four members from various engineering majors. Together, we designed and built a water tester that moves a pipette down 1 cm from the sludge.</p>
          
          <h3>Process Overview:</h3>
          <ol>
            <li><strong>Filling the Pipette:</strong> The pipette is filled from a cup of dye.</li>
            <li><strong>Dispensing Dye:</strong>
              <ul>
                <li><strong>First Cup:</strong> One drop of dye is dispensed.</li>
                <li><strong>Second Cup:</strong> Two drops of dye are dispensed.</li>
                <li><strong>Third Cup:</strong> Three drops of dye are dispensed.</li>
              </ul>
            </li>
          </ol>
          <p>I was responsible for the coding and graphical user interface (GUI) development. I created the interface for the application and connected the Arduino to ensure the machine operated properly.</p>
        `
      },
      {
        id: 2,
        title: "Actors Movies Analysis",
        
        downloadFile: "files/Proj1.zip", // <-- The downloadable file for project #2
        description: `
          <p>This project reads a file containing a list of actors with the movies they're in. Using a map data structure, the application provides options to find:</p>
          <ul>
            <li><strong>Common actors</strong> between two movies.</li>
            <li><strong>Unique actors</strong> for each movie.</li>
            <li><strong>Co-actors</strong> who have acted with a given actor.</li>
          </ul>
          <p>It demonstrates organizing code with headers, classes, and more advanced file I/O techniques in C++.</p>
        `
      },
      {
        
        
          id: 3,
          title: "AutoComplete Search Querry",
          downloadFile: "files/Proj2.zip", 
          description: `
            <h3>Short Project Summary (Autocomplete Me)</h3>
            <p>I developed an autocomplete application that uses binary search and custom sorting 
            to quickly find and rank query strings by their matching prefixes.</p>
            <p>The core components include a Term class (with operator overloading and static compare 
            functions) and an Autocomplete class that stores Term objects in a template-based 
            SortingList structure. By sorting terms lexicographically and searching for matched 
            prefixes via binary search, the program efficiently returns the top matches in descending 
            order of weight.</p>
            <p>This project highlights skills in templates, sets, search algorithms, operator 
            overloading, and data structures for high-performance, prefix-based query completion.</p>
          `
        
        
        
        
      },
      {
        id: 4, 
        title: "Graph + BFS Implementation",
        downloadFile: "files/Graph.cpp", 
        description: `
          <h3>Short Project Summary (Graph + BFS)</h3>
          <p>I created an undirected graph class (Graph) using an adjacency map and 
          implemented a Breadth-First Search (BFS) algorithm to find the shortest path between 
          vertices. The BFS stores distances in a map, tracks the path to each vertex, and 
          handles both connected and disjoint graphs. This project strengthened my skills in 
          data structures, class design, and algorithmic problem-solving.</p>
        `
      }
      
      // more projects 
    ];
  
    // 2. Grab References to Modal Elements
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalFiles = document.getElementById("modal-files");
    const closeButton = document.querySelector(".close-button");
  
    /**
     * Returns an <img> HTML string if the project has an `image`
     */
    function getProjectImageHTML(project) {
      if (!project.image) return "";
      return `
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="project-modal-image" 
        />
      `;
    }
  
    /**
     * Returns a download link HTML if `downloadFile` is provided
     */
    function getProjectDownloadHTML(project) {
      if (!project.downloadFile) return "";
      // 'download' attribute suggests downloading instead of opening in browser
      // Adjust text or label as you wish
      return `
        <a 
          href="${project.downloadFile}" 
          class="project-modal-download" 
          download
        >
          Download My Code
        </a>
      `;
    }
  
    /**
     * Function to open the modal with the project's data
     * @param {number} projectId - The id of the project to open
     */
    function openModal(projectId) {
      const project = projects.find((p) => p.id === Number(projectId));
      if (!project) {
        console.error(`Project with ID=${projectId} not found.`);
        return;
      }
  
      // Set modal title
      modalTitle.textContent = project.title;
  
      // Combine image HTML + description
      const imageHTML = getProjectImageHTML(project);
      modalDescription.innerHTML = imageHTML + project.description;
  
      // Populate download links if any
      modalFiles.innerHTML = getProjectDownloadHTML(project);
  
      // Display modal
      modal.style.display = "block";
    }
  
    // 3. Function to close the modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    // 4. Event Listener for Project Cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-project");
        openModal(projectId);
      });
    });
  
    // 5. Event Listener for Close Button
    closeButton.addEventListener("click", closeModal);
  
    // 6. Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    //  Close modal on "Escape" key press
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
      }
    });
  });
  