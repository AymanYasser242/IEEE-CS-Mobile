let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

Object.keys(myFriends[chosen - 1]).forEach((key, index) => {
  if (Array.isArray(myFriends[chosen - 1][key])) {
    console.log(`${myFriends[chosen - 1][key][chosen]}`);
  } else if (index === 2) {
    console.log(myFriends[chosen - 1][key] ? "Available" : "Not Available");
  } else {
    console.log(`${myFriends[chosen - 1][key]}`);
  }
});

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"
