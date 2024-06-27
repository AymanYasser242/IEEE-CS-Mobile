async function fetchMultipleAPIs(apiUrls) {
  try {
    const fetchPromises = apiUrls.map((url) =>
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch from ${url}: ${response.statusText}`
          );
        }
        return response.json();
      })
    );
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    throw error;
  }
}

const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/comments/1",
];

fetchMultipleAPIs(apiUrls)
  .then((results) => {
    console.log("Combined results:", results);
  })
  .catch((error) => {
    console.error("Error in fetching APIs:", error);
  });
