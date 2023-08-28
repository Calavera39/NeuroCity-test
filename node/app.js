const http = require('http');
const fs = require('fs');
const os = require("os");

const hostname = '127.0.0.1';
const port = 3000;
const userHomeDir = os.homedir();


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

fs.writeFileSync('./text.txt', 'Some string', (err) => {
     if(err) {
         return console.log(err)
     }
 })

const fileContent = fs.readFileSync('./text.txt', "utf8");
console.log(fileContent)

const reverseSting = (str) => {
    return str.split("").reverse().join("");
}

fs.writeFileSync('./reversedtext.txt', reverseSting(fileContent), (err) => {
    if(err) {
        return console.log(err)
    }
})

console.log(userHomeDir)
console.log(os.type())

