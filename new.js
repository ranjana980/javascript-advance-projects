const fs = require('fs')
let open = fs.readFileSync("Drivers.json")
var read = JSON.parse(open)
console.log("Welcome to the OLA APP")
function Cab() {
    console.log("Here is Auto Drivers Details")
    var cab=0
    var index=0
    while (cab<read.length){
        if (read[cab]["Model"]=="cab"){
            console.log(index+1,read[cab])
            index++
        }
        cab++
    }
}
function Taxi() {
    console.log("Here is Auto Drivers Details")
    var taxi=0
    var index=0
    while (taxi<read.length){
        if (read[taxi]["Model"]=="taxi"){
            console.log(index+1,read[taxi])
            index++
        }
        taxi++
    }
}
function Auto() {
    console.log("Here is Auto Drivers Details")
    var auto=0
    var index=0
    while (auto<read.length){
        if (read[auto]["Model"]=="auto"){
            console.log(index+1,read[auto])
            index++
        }
        auto++
    }
}
const readlineSync=require("readline-sync")
var user=readlineSync.question("Enter the current location:- ")
var user2=readlineSync.question("Enter the destination Point:- ")
var AutoType=readlineSync.question("Enter the auto type:- ")
if (AutoType=="cab"){
    Cab()
}
else if(AutoType=="taxi"){
    Taxi()
}
else{
    Auto()
}
var selectTheDriver=readlineSync.questionInt("Enter the number which you want:- ")
console.log(read[selectTheDriver-1]["Model"],read[selectTheDriver-1]["id"],"is Booked")
j=0
var n=""
while(j<5){
    n=n+Math.floor((Math.random() * 10) + 1)
    j++
}
console.log("It is your otp please varify ",n)
var otpInput=readlineSync.questionInt("Enter the otp:- ")
if (otpInput===Number(n)){
    console.log("OTP Varified auto is ready for go:- ")
}
else{
    console.log("Invalid Otp")
}
console.log("Auto is Started From",user)
setTimeout(()=>{
    (console.log("you arrived",user2))
},10000)
setTimeout(()=>{
    (input=readlineSync.questionInt("Pay auto charge:- "))
},15000)
setTimeout(()=>{
    (a=read[selectTheDriver-1]["income"]=read[selectTheDriver-1]["income"]+input)
},16000)
setTimeout(()=>{
    (input1=readlineSync.question("Please give your Valuable review for us:-"))
},17000)
setTimeout(()=>{
    (read[selectTheDriver-1]["Review"].push(input1))
},18000)
setTimeout(()=>{
    (console.log(read[selectTheDriver-1]))
},19000)


