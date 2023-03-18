const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

fakeFetch("Hi",true)
.then((data)=>console.log(data))
.catch((err)=>console.error(err));

// Hi -- after 3 seconds