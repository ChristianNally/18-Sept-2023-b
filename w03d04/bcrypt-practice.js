const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const password = 'monkeyFuzz';

const hash = bcrypt.hashSync(password, 10);

console.log('hash:', hash);

const hashedPassword = '$2a$10$2eHplYh2PzDF7/FeUR8k7.Z6dCHj4rFW0T6YClazyH/VwxkYPRbau';

// const result = bcrypt.compareSync('monkeyFuzz', hashedPassword);

// console.log('result:', result);
