let readlineSync = require("readline-sync");
let userinput = readlineSync.questionInt("enter 1 for signup or enter 2 for login");
var userDetails = { "name": "", "sName": "", "email": "", "user": "", "pass": "" }
const fs = require('fs')        
if (userinput == 1) {
    var FirstName = readlineSync.question("Enter the First name")
    var SeconName = readlineSync.question("Enter the Last name")
    var email = readlineSync.question("Enter the Email")
    var username = readlineSync.question("Enter the the Username")
    var Password = readlineSync.question("Enter the the Paasword")                
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if (Password.match(paswd)){
        var userDetails = { "name": FirstName, "sName": SeconName, "email": email, "user": username, "pass": Password }
        const jsonString = JSON.stringify(userDetails);
        fs.writeFileSync(username+".json", jsonString);
    }else{
        console.log('Sorry your password id weak !')
    }
    
}
else{
    var username=readlineSync.question("enter the the username")
    let open=fs.readFileSync(username+".json")
    var read=JSON.parse(open)
    if (username==read["user"]){
        var Password=readlineSync.question("enter the the paasword")
        if (Password==read["pass"]){
            console.log("login succussefull")
        }else{
            console.log("password incoorect")
        }
    }else{
        console.log("username is wrong")
    }
    
}

