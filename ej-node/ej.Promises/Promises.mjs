//PROMISES AND CALLBACK FUNCTIONS IN NODE JS

//-------------------------then function:

import * as fs from 'node:fs/promises';

fs.readFile('file-1.txt', {encoding: 'utf-8'}) //lee archivo

.then(function (file1data){
    console.log('data 1 :', file1data) //imprime archivo
})
.then(function(){
   return fs.readFile('file-2.txt', { encoding: 'utf-8' }) //lee archivo
})
.then(function (file2data){
    console.log('data 2 :', file2data) //imprime archivo
})
.catch(function(error){
    console.error(error)
})

//-------------------------arrow funtion:

import * as fs from 'node:fs/promises';

fs.readFile('file-1.txt', {encoding: 'utf-8'}) //lee archivo
.then((file1data) => console.log('data 1 :', file1data))//imprime archivo
.then(() => fs.readFile('file-2.txt', { encoding: 'utf-8' })) //lee archivo
.then((file2data) => console.log('data 2 :', file2data))//imprime archivo
.catch((error) => console.error(error));


//---------------------------async await:

import * as fs from 'node:fs/promises';

async function outputFiles(){
    try{
        const file1data = await fs.readFile('file-1.txt', {encoding: 'utf-8'})
        console.log('data 1 :', file1data);

        const file2data = await fs.readFile('file-2.txt', { encoding: 'utf-8' })
        console.log('data 2 :', file2data)

    }catch(error){
        console.error(error)
    }
}
outputFiles();


//-------------------async await Promise.all:

import * as fs from 'node:fs/promises';

async function outputAllFiles(){
    try{
        const data = await Promise.all ([
        fs.readFile('file-1.txt', {encoding: 'utf-8'}),
        fs.readFile('file-2.txt', { encoding: 'utf-8' })
        ])
    }catch(error){
        console.error(error)
    }
}
outputAllFiles();


//because we are in Ecma script module(.mjs)
//we can call the promise outside the async function
//also call top level await:

import * as fs from 'node:fs/promises';

    try{
        const data = await Promise.all ([
        fs.readFile('file-1.txt', {encoding: 'utf-8'}),
        fs.readFile('file-2.txt', { encoding: 'utf-8' })
        ])
    }catch(error){
        console.error(error)
    }


