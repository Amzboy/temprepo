const http = require('http');
function help(){
    
}
 const server = http.createServer((req, res) => {
 if(req.url === '/'){
     res.end('Hi there')
 }
 else if(req.url === '/about'){
     res.end('Here is our short history')
 }
 else{res.end('Tupid')}
 })

 server.listen(5000)