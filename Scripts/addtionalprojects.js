// Array of additional projects
const additionalProjects = [
    {
        title: "Kids Camp",
        description: "Kids deserve a break and need exercise. We can help parents get a break ",
        imageUrl: "./images/kids.jpg",
        altText: "Kids Camp"
    },
    {
        title: "Movie Day",
        description: "This would be a community event where you can watch movies. We show films collect money for charity and makes sure the whole community has a blast.",
        imageUrl: "./images/watching-movies.png",
        altText: "Movie Day"
    },
    // Add more projects as needed
];

// Function to load more projects
function loadMoreProjects() {
    let projectcard = document.getElementById('project-container');

    additionalProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.altText}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectcard.appendChild(projectCard);
    });

    // Optionally, hide the Load More button after loading the projects
    document.getElementById('loadMoreBtn').style.display = 'none';
}

// Event listener for the Load More button
document.getElementById('loadMoreBtn').addEventListener('click', loadMoreProjects);
