const { id_list, report, k } = require("./data");
const solution = require("./solution");

const answer = solution(id_list, report, k);

console.log(answer);
