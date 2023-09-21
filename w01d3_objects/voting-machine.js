

// const voter1name = 'Barb';
// const voter2name = 'Sandy';
// const voter1age = 44;
// const voter2age = 15;
// const voter2DidVote = true;
// const voter3namme = 'Monkey';
// const voter1response = 'Trump';

const ageCheckFunctionDefinition = function (){
    console.log('this', this);
    const age = 1;   
    if (this.age < 18) {
        this.age = 18;
    } 
    if (this.age >= 18) {
        return true;
    }
    return false;
};

// ageCheckFunctionDefinition();

const voter1 = {
    name: 'Barb',
    age: 44,
    didVote: false,
    response: 'Trump',
    ageCheck: ageCheckFunctionDefinition
};

voter1.ageCheck();

const voter2 = {
    name: 'Sandy',
    age: 15,
    didVote: true,
    response: 'Biden',
    ageCheck: ageCheckFunctionDefinition
};

const voter3 = {
    name: 'Monkey',
    age: 21,
    didVote: true,
    response: 'Biden',
    ageCheck: ageCheckFunctionDefinition
};

const voter4 = {
    name: 'Nally',
    age: 52,
    didVote: true,
    response: 'Ross Perot',
    ageCheck: ageCheckFunctionDefinition
};

console.log('voter1.ageCheck()', voter1.ageCheck());
console.log('voter2.ageCheck()', voter2.ageCheck());


console.log('voter1.name', voter1.name);
const voters = [voter1, voter2, voter3, voter4];


//
// compact code for dealing with multiple voter objects
//
for (let ii = 0; ii < voters.length; ii++){
    console.log('voters[' + ii + '].name', voters[ii].name);
}


//
// how to get properties of an object
//

console.log('voter4.name', voter4.name);
console.log("voter4['name']", voter4['name']);

//
// loop over an objects properties
//

for (let key in voter4){
    console.log(`property name= ${key}`);
    console.log(`value of voter4['${key}'] = ${voter4[key]}`);
}


//
//
// passing parameter values into functions
//
//

function isOldEnoughToVote(age){

    if (age < 18) {
        age = 18;
    }

    if (age >= 18) {
        return true;
    }
    return false;
}


function isOldEnoughToVoteObjectVersion(voter){

    if (voter.age < 18) {
        voter.age = 18;
    }

    if (voter.age >= 18) {
        return true;
    }
    return false;
}


// voter2['age']
const ageValue = 15;

console.log(`voter2 is old enough to vote: ${ isOldEnoughToVote(ageValue) }`);
console.log(`voter2 is old enough to vote. they are ageValue years old: ${ ageValue }`);

console.log(`OV: voter2 is old enough to vote: ${ isOldEnoughToVoteObjectVersion(voter2) }`);
console.log(`OV: voter2 is old enough to vote. they are voter2.age years old: ${ voter2.age }`);



console.log('console', console);
// console.clear();