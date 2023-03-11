const http=require('http')
const uc=require('upper-case')
const server=http.createServer((req,res)=>{
//res.end('npm package in server')
//res.writeHead(200, {'Content-Type': 'text/html'});
res.write(uc.upperCase("hello World!"));
res.end()
/*res.end(`<h1>oops</h1>
<p>we cant find your search page in the url</p>
<a href="/">back to home</a>
`);*/
})
server.listen(800)