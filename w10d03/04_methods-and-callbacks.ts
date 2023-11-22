interface Dog {
  breed: string;
  name: string;
  goForWalk: (distance: number) => boolean;
}

const myDog: Dog = {
  breed: 'labrador retriever',
  name: 'doggo',
  goForWalk: (distance: number) => {
    return true;
  }
};

const higherOrderFunc = (cb: (name: string, age: number) => string): void => {
  cb('alice', 42);
};

higherOrderFunc((name: string, age: number) => { return 'hello' })
