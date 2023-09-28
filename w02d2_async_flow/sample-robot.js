// function sleepFor(sleepDuration) {
//   const nowObject = new Date();
//   const startTime = nowObject.getTime();
//   while (new Date().getTime() < startTime + sleepDuration) {
//       /* do nothing */
//   }
// }

//                'look', 500, getUp
const doAction = (name, duration, nextAction) => {
  console.log(`Starting ${name}`);
  setTimeout(() => {
    console.log(`Ending ${name}`);
    if (nextAction){
      nextAction();
    }
  }, duration);
};

//
// look
//
const look = () => {
  doAction('look', 500, null);
};

const intervalReference = setInterval(() => {
  look();
}, 500);

//
// getUp
//
const getUp = () => {
  doAction('getUp', 3500, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 5000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 2500, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 3000, null);
  clearInterval(intervalReference);
};

// sleepFor(10000);
// look();

getUp();
console.log("I am done being programmed.");
