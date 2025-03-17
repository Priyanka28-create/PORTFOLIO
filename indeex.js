const username = "your-username";  Priyanka28-create
const repoContainer = document.getElementById("projects");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available"}</p>
      `;
      repoContainer.appendChild(projectDiv);
    });
  })
  .catch(error => console.error("Error fetching repos:", error));
