var express = require('express')
var app = express()
var podio = require('podio-js')
var request = require('request');
var https = require('https');
var bodyParser = require('body-parser')
require('dotenv').config()





var data = {
  grant_type: 'password',
  username: process.env.NAME,
  password: process.env.PASSWORD,
  client_id: process.env.CLIENTID,
  client_secret: process.env.CLIENTSECRET 
}

function getToken(){
  console.log('getting token');
  console.log(data)
		var headers = {
         'Content-Type':'application/x-www-form-urlencoded'
				}

			// Configure the request
			var options = {
				url: 'https://podio.com/oauth/token',
				method: 'POST',
				headers: headers,
				form: data
			}

			// Start the request
			request(options, function (error, response, body) {
				if (!error && response.statusCode == 200) {
          // Print out the response body
          console.log(body)
					let json =JSON.parse(body);
          //console.log(json);
					token=json.refresh_token;
          //console.log(token);
          console.log(token)
          getData(token)
				}
			})
	}

  function getData(token){
  console.log(token);
   console.log('getting data');
	token=token;
const options ={
	url:'https://podio.com/app/15910555/',
	method:'GET',
	headers:{
		'Authorization': 'OAuth2 ' + token
	}
};
request(options, function (error, response, body) {
   
});
}


getToken()


app.listen(8080);