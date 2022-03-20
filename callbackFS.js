const {readFile} = require('fs');

readFile('file.txt', 'utf8', function(err, data){
	if(err){
        console.log("error:",err)
    }
    else{
        console.log(data);
        console.log("reading finished");
    }
});

console.log('readFile called');
