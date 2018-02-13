const promise = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve('Resolve data');
        //reject('Something went wrong');
    },4500);    
});

promise.then((data)=>{
    console.log('1',data);
    return 'some data';
})
.then((str)=>{
    console.log('does this run?');
}).catch((err)=>{
    console.log(err);
});