for (let i = 0; i<=10; i++){
    console.log("Hey, how are you!" + i)
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users){
    console.log(user);
}

const LoggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
}

for (const keys in LoggedInUser){
    console.log(LoggedInUser[keys]);
}

let isFinished = false

while(!isFinished){
  isFinished =   confirm('Do you want to quit')
}