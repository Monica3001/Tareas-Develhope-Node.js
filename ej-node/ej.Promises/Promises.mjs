//---------------------normal function:

import * as fs from 'node:fs/promises';

fs.readFile('file-1.txt', {encoding: 'utf-8'})
.then(function (file1data){
    console.log('data 1 :', file1data)
})
.then(function (){
   return fs.readFile('file-2.txt', { encoding: 'utf-8' })
})
.then(function (file2data){
    console.log('data 2 :', file2data)
})
.catch(function(error){
    console.error(error)
})


//-------------------------arrow funtion:

import * as fs from 'node:fs/promises';

fs.readFile('file-1.txt', {encoding: 'utf-8'})
.then((file1data) => console.log('data 1 :', file1data))
.then(() => fs.readFile('file-2.txt', { encoding: 'utf-8' }))
.then((file2data) => console.log('data 2 :', file2data))
.catch((error) => console.error(error));
