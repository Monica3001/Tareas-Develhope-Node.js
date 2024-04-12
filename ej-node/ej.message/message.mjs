import clc from 'cli-color';

function outputMessage(message){
    console.log(clc.greenBright(`the message is ${message}`))
}

outputMessage('hey there !')
