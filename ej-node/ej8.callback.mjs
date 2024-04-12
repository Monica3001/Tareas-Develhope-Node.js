import * as fs from 'node:fs'

fs.writeFile('file-1.txt', 'hello',function (error){
    if (error){
       return console.error(error);
    }
    console.log('file saved')
})
