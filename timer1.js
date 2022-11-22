const timer = (num) => {
  let newNum = num.slice(2);
  newNum = newNum.map(x => Number(x));
  console.log(newNum);

  for (let n of newNum) {
    // console.log(n);
    if (isNaN(n)) {
      console.log(n, " is NaN");
      continue;
    }
    else {
      if(n >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
          process.stdout.write(`p...${n} `);
        }, n);
      }
      else {
        console.log(n, " is less than 0");
        continue;
      }
      
    }
  }
};

timer(process.argv);