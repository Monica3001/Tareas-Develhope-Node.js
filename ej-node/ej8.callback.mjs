import * as fs from 'node:fs'

fs.writeFile('file-1.txt', 'hello 1',function (error){
    if (error){
       return console.error(error);
    }
    console.log('file saved')
})

fs.writeFile('file-2.txt', 'hello 2',function (error){
    if (error){
       return console.error(error);
    }
    console.log('file saved')
})
