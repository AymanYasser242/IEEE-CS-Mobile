async function fetchWithRetry(url, retries, delay) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.warn(
        `Retrying... Attempts left: ${retries}. Error: ${error.message}`
      );
      await new Promise((res) => setTimeout(res, delay));
      return fetchWithRetry(url, retries - 1, delay);
    } else {
      throw new Error(
        `Failed to fetch after ${retries} attempts: ${error.message}`
      );
    }
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchWithRetry(apiUrl, 3, 1000)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
