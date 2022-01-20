// 8 Ball excersice

let userName = 'Justin'
userName ? console.log(`Hello ${userName}!`) 
: console.log('Hello!')
let userQuestion = 'what time is it?'
console.log(`${userName} ${userQuestion}`)
const randomNumber = Math.floor(Math.random() * 10);
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  case 8:
  eightBall = 'I will be king of the pirates'
  break;
  case 9:
  eightBall = 'Youll never really know'
}
console.log(`The eight ball answered: ${eightBall}`);