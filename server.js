const http = require ('http')

http.createServer((req,res)=>{
   // res.writeHead(200, {'content-type':' text/plain'})
   res.end("Hello")
}).listen(5000)






// const { text } = require('stream/consumers')

//   http.createServer((req , res)=>{
//      console.log("server created");
//      res.writeHead(200, {'content-type':' text/plain'})
//     //  res.end ("<h1> hello word </h1>")
//     res.write(uc("hello word "))
//     res.end ()
//  }).listen(4000)


// const url = require('url ')
//  var adr = "https://in.bookmyshow.com/explore/home/pune"
//  var q = url.parse(adr, true)
//  console.log ("hostname is:" , q.host);
//  console .log("path is :" , q.pathname);

 