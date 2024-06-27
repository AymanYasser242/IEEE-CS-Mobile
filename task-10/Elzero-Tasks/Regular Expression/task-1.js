let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipv6Pattern = /^(?:[a-fA-F0-8]{1,4}:){7}[a-fA-F0-8]{1,4}$/;

console.log(ipv6Pattern.test(ip)); 
