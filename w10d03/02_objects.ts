interface User {
  id?: number;
  email: string;
  password: string;
}

const user: User = {
  id: 2,
  email: 'a@a.com',
  password: 'hello',
};

const users: User[] = [];
users.push(user);
