var http = require("http");
var url = require("url");
var q1 = require('./q1');

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query; 
    
  
	if(pathname == "/fibonacci")
	{
		var num = parseInt(query['num']);
		if(num>=0)
			response.write('result is '+ q1.fibonacci(num).toString());
		
		else response.write("fibonacci sequence is only for non-negative numbers");

	}
	else{
	var par1 = parseInt(query['a']);
    var par2 = parseInt(query['b']);
		if(pathname == "/add")
			response.write((par1+par2).toString());
 		else if(pathname == "/subtract")
			response.write((par1-par2).toString());
		else if(pathname == "/multiply")
			response.write((par1*par2).toString());
		else if(pathname == "/divide")
		{
		if(par2 == 0)
			response.write('devision by zero!! are you serious?');
		else response.write((par1/par2).toString());
		}
		else	response.write("operation not defined");
   

	}
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;