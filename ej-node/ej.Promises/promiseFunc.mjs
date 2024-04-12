//example promise functions:

const someTask = new Promise (function(resolve, reject){
    setTimeout(()=> resolve('this is some data'), 2000)
    setTimeout(()=> reject(new Error('some error')), 2000) //prints this message in reason when error
})
console.log(someTask)

someTask.then(
    function (value){
        console.log('value', value)
        console.log('someTask', someTask)
    },
    function (reason){
        console.log('reason', reason)
        console.log('someTask', someTask)
    })
