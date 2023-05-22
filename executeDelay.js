
const executeDelay = (delay, fun) => {
  setTimeout(fun(), 5*1000 );
};

const printHello = () => {
  console.log('Hello!');
}

executeDelay(2, printHello);