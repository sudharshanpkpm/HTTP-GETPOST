http = require('http');
url = require('url');
querystring = require('querystring');
function onRequest(request,response)
{
    var path = url.parse(request.url).pathname;
    console.log('request for'+path+'received.');
    var query = url.parse(request.url).query;
    console.log(query);
    var name = querystring.parse(query)["username"];
    var email = querystring.parse(query)["email"];
    response.write('Hello '+name+', your email id '+email+' has registred');
    response.end();

}
http.createServer(onRequest).listen(8000);
console.log('Server has started.....'); 