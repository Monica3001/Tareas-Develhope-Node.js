//generador de random ID
//Use the Node.js REPL to list the methods provided by the Node.js core crypto module. 
//Use one of these methods to generate a random ID.

//en el terminal de node :
// console.log(Object.keys(require('crypto'))); 
// y aparece la lista de methods que trae.

const crypto = require('crypto');
const randomId = crypto.randomUUID();
console.log(randomId);