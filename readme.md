In server,js, we will connect node and express
Connect mongodb Atlas to Nodejs 
            ---login your mongodb atlas ->craete a database and collection -> get the url of this connection ->click overview->click connect->connect using mongodb compass->copy url
Create the connection file :- dbConnect.js , here, we can use process.env environment
make a folder named models
make a folder named routes
in model, first parameter is collection name and section parameter is schema