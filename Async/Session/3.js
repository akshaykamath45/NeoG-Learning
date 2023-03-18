function fakeFetch(msg,shouldReject){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldReject){
                reject(`error from server : ${msg}`);
            }
            resolve(`from server : ${msg}`);
        },3000);
    })
}


fakeFetch("Yo Bro !",true)//true means reject
.then(data=>console.log(data))
.catch(err=>console.error(err))//this will be executed


fakeFetch("Yo Bro !",false)//false means resolve
.then(data=>console.log(data))//this will be executed
.catch(err=>console.error(err));