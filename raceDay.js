/*

Race Day

Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.



Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.



Race number:



Early adults receive a race number at or above 1000.

All others receive a number below 1000.

Start time:



Adult registrants run at 9:30 am or 11:00 am.

Early adults run at 9:30 am.

Late adults run at 11:00 am.

Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

 */



let raceNumber = Math.floor(Math.random() * 1000);



let earlyReg = false;

let age = 18;



if(age > 18 && earlyReg === true) {

  raceNumber += 1000;

} if(age > 18 && earlyReg === true) {

  console.log(`Runner number: ${raceNumber}. You will be racing at 9:30am`);

} else if(age > 18 && !earlyReg === true) {

  console.log(`Runner number: ${raceNumber}. You wll be racing at 11:00am.`);

} else if (age < 18) {

  console.log(`Runner number: ${raceNumber}. You wll be racing at 12:30pm.`);

} else {

  console.log(`Runner's please see the registration desk promptly`);

}