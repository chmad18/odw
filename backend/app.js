let url = require('url');
let fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data){
        if(error){
            console.log(error);
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'content-Type': 'text/html'});

        let path = url.parse(request.url).pathname;
        switch (path) {
            case '/insert.html':
                renderHTML('./html/insert.html', response);
                break;
            
            case '/select.html':
                renderHTML('./html/select.html', response);
                break;

            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
}