const lastElement = (arr) => {
    const [last] = [...arr].reverse();
     return last;
   }
   
   console.log(lastElement([1, 2, 3, 4, 5])); // 5