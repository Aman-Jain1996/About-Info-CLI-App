var readLineSync=require('readline-sync');
var chalk= require('chalk') ;
const log = console.log;
var aman= chalk.bold.bgBlack.underline('Aman Jain');

log(chalk.bold('Welcome to  About Info CLI App....... '));
log('\n');
log('This App is a quiz about basic info of '+ aman);
log('\n');
var userName = readLineSync('Let me have your name first !!' , {hideEchoook:true});

var questionOne ={
  question:'Where do i live currently?',
  answer : 'Kanpur'
}

var questionTwo ={
  question:'Where do i work currently?',
  answer : 'Infosys'
}

var questionThree ={
  question:'What is my Month of Birth?',
  answer : 'November'
}

var questionFour ={
  question:"Current Working City?",
  answer : 'Pune'
}

var questionFive ={
  question:"Favourite IPL Team?",
  answer : 'CSK'
}


var question =[questionOne,questionTwo,questionThree, questionFour,questionFive];

for (var i=0 ; i < question.length ; i++){
  log(chalk.green(question[i].question))
}