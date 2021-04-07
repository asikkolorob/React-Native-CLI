var http = require('http');
var URL = require('url');

var server=http.createServer(function (req,res) {
//******************************************************************************************************* */
    //URL Module
    var MyUrl = 'https://www.youtube.com/watch?v=JWnpfkA6V2A&list=PLkyGuIcLcmx2qXaZkjCL8-P78i2J5rDOa&index=9';
    var MyUrlObj = URL.parse(MyUrl,true);

    var MyHostName = MyUrlObj.host;
    var MyPathName = MyUrlObj.pathname;
    var MySearchName = MyUrlObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(MySearchName);
    res.end();

//******************************************************************************************************** */
        //request response
        // if(req.url=="/"){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('<h1>This is Home Page</h1>')
        //     res.end();
        // }

        // else if(req.url=="/about"){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('<h1>This is About Page</h1>')
        //     res.end();
        // }

        // else if(req.url=="/contact"){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('<h1>This is Contact Page</h1>')
        //     res.end();
        // }
});

server.listen(1010);
console.log("Server Run Success");