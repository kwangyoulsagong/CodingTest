const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const solution = (a, b) => {};
const [a, b] = input[0].split(" ").map(Number);
solution(a, b);
