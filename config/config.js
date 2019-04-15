process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

let urlDB
if (process.env.NODE_ENV === 'local'){
	urlDB = 'mongodb://localhost:27017/test';
}
else {
	urlDB = 'mongodb+srv://Sprint02:t-whitecode@sprint02-5la4f.mongodb.net/test?retryWrites=true'
}

process.env.URLDB = urlDB
