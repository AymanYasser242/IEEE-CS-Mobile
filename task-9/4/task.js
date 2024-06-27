async function downloadContents(urls) {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.text())
    );
    const contents = await Promise.all(fetchPromises);
    return contents;
  } catch (error) {
    console.error("Error downloading contents:", error);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

downloadContents(urls).then((contents) => {
  contents.forEach((content) => {
    console.log(content);
  });
});
