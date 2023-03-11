const http=require('http')
const server=http.createServer((req,res)=>
{
if(req.url==='/')
{
    res.end('welocome to our home page')
}
if(req.url==='/about')
{
    res.end('about url of the server')
}
res.end(`
<h1>oops</h1>
<p>we cant find your search page in the url</p>
<a href="/">back to home</a>
`)
}) 

server.listen(5000)