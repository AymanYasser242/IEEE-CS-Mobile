let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

friends.forEach((friend, index) => {
  if (!friend.startsWith("A")) {
    console.log(index + 1 + " => " + friend);
  }
});
