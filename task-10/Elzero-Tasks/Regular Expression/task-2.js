let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let pattern = /\bOs\w*O\b/g;

let matchedNames = specialNames.match(pattern);
console.log(matchedNames);
