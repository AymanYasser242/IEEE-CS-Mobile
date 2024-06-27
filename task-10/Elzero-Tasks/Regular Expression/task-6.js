let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /^(?:https?:\/\/)?(?:www\.)?[\w.-]+\.\w+(?::\d+)?(?:\/\S*)?$/;

console.log(url1.match(re)); // ['elzero.org']
console.log(url2.match(re)); // ['http://elzero.org']
console.log(url3.match(re)); // ['https://elzero.org']
console.log(url4.match(re)); // ['https://www.elzero.org']
console.log(url5.match(re)); // ['https://www.elzero.org:8080/articles.php?id=100&cat=topics']
