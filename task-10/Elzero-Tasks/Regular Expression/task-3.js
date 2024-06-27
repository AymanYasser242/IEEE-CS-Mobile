let phone = "+(995)-123 (4567)";
let phonePattern = /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/;

console.log(phonePattern.test(phone));
