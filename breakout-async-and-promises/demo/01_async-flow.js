// async code cannot start until the sync code is done

for (let i = 0; i < 1e9; i++) {
  const newDate = new Date();
}

setTimeout(() => {
  console.log('1. inside the top timeout');
}, 1);

setTimeout(() => {
  console.log('2. inside the bottom timeout');
}, 1);
