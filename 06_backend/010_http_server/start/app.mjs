import * as http from "http";

const server = http.createServer(function (req, res){
   console.log(req.url);
   if (req.url === '/hello') {
       res.end('bye');
   } else {
       res.end('hello');
   }
});

server.listen(8080);