let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// Methoud 1
if (haystack.includes(needle)) {
  console.log("Found");
}

// Methoud 2
haystack.forEach((stack) => {
  if (stack == needle) {
    console.log("Found");
  }
});

// Methoud 3
for (let stack of haystack) {
  if (stack == needle) {
    console.log("Found");
  }
}
// Methoud 4
let index = haystack.indexOf(needle);
if (index >= 0) {
  console.log("Found");
}
