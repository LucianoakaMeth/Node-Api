var http = require('http');
var {info, error} = require('./modules/my-log');
var {countries} = require('countries-list');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    
    var parsed = url.parse(req.url);
    console.log('parsed:', parsed);

    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log('query:',query);

    if(pathname=== '/'){
        res.writeHead(200,{'Content-Type' :'text/html'});
        res.write('<html><body><p>Hello</p></body></html>');
        res.end();
    }else if(pathname=== '/exit'){
        res.writeHead(200,{'Content-Type' :'text/html'});
        res.write('<html><body><p>Bye</p></body></html>');
        res.end();
    }
    else if(pathname=== '/info'){
        var result = info(pathname);
        res.writeHead(200,{'Content-Type' :'text/html'});
        res.write(result);
        res.end();
    }else if(pathname=== '/error'){
        var result = error(pathname);
        res.writeHead(200,{'Content-Type' :'text/html'});
        res.write(result);
        res.end();
    } else if(pathname=== '/country'){
        res.writeHead(200,{'Content-Type' :'application/json'});
        res.write(JSON.stringify(countries(query.code)));
        res.end();
    }else{
        res.writeHead(404,{'Content-Type' :'text/html'});
        res.write('<html><body><p>Not Found</p></body></html>');
        res.end();
    }   
});

server.listen(4000);
console.log('Running on port 4000');
