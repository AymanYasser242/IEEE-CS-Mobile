fetch("./data.json")
  .then((response) => response.json())
  .then((articles) => {
    const root = document.getElementById("root");
    for (let i = 0; i < 5; i++) {
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";
      articleDiv.innerHTML = `
                    <h3>${articles[i].title}</h3>
                    <p>${articles[i].description}</p>
                `;
      root.appendChild(articleDiv);
    }
  })
  .catch((error) => console.error("Error fetching articles:", error));
