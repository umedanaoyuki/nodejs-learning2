import * as http from "http";

const server = http.createServer(function (req, res){
   console.log(req.url);
   if (req.url === '/hello') {
       res.end('<script>window.alert("frontend")</script>');
   } else {
       res.end('hello');
   }
});

server.listen(8080);