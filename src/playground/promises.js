const promise = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        //resolve('Resolve data');
        reject('Something went wrong');
    },4500);    
});

promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});