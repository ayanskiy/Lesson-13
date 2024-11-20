let isLoggedIn = true;
let userName = "Аян";
let profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2NgTLaAhwax8ADJoioSGTcwDMAJFKF3leg&s";
let correctPassword = "12345";
let userPassword = "54321";
let age = 28;
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

// #1
if(isLoggedIn == true) {
    console.log("User is logged in");
}
else if(isLoggedIn == false) {
    console.log("User is not logged in");
}
// #2
if (userName) {
    console.log(`Привет, ${userName}!`);
} 
else {
    console.log("Welcome, Guest!");
}
// #3
if (profilePic) {
    console.log("Profile picture is set");
}
else {
    console.log("No profile picture");
}
// #4
if (userPassword === correctPassword) {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}
// #5
if (age < 13) {
    console.log("Child");
} 
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} 
else if (age >= 20 && age <= 64) {
    console.log("Adult");
} 
else {
    console.log("Senior");
}
// 6
console.log(`Температура в градусах Фаренгейта: ${fahrenheit}`);
