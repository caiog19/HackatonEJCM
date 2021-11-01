const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const PRIV_KEY = fs.readFileSync(path.join(__dirname, "..", "..", "id_rsa_priv.pem"), 'utf-8');

const checkPassword = (password, hash, salt) => {
	const hashFromReq = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
	return hashFromReq === hash;
}

const generatePassword = (password) =>{
	const salt = crypto.randomBytes(32).toString('hex');
	const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
	return {
		salt: salt,
		hash: hash
	};
}

module.exports = {
	checkPassword,
	generatePassword
}