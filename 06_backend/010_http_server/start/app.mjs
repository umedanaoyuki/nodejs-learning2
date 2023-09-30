import * as http from "http";

const server = http.createServer(function (req, res){
   console.log("成功");
   console.log(req.url);
   res.end('hello');
});

server.listen(8080);