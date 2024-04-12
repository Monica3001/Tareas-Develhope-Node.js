import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on('data',(data)=>{
    console.log(data)
})

setInterval(() => {
    emitter.emit('data','some data')
}, 2000);

// ctrl C : para detenerlo
