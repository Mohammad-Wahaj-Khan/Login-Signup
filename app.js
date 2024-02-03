function signup(){
    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

var userObject = {
    fullName,
    phoneNumber,
    email,
    password,
}


var getUsers = JSON.parse(localStorage.getItem("users"))
console.log(getUsers)
if(getUsers === null){
    var arr = []
    arr.push(userObject)
    console.log("first user signup")
    localStorage.setItem("users", JSON.stringify(arr))
    alert("User Signup")
    window.location.href = "./index.html"
}
else{
    console.log(getUsers)
    var findUser = getUsers.find(function(value){
        console.log(value.email)
        // console.log(value.password)
        // console.log(value.fullName)
        // console.log(value.phoneNumber)
        if(value.email === email){
            return true
        }
        // if(value.password === password){
        //     return true
        // }
    })
    if(findUser === undefined){
        getUsers.push(userObject)
        localStorage.setItem("users", JSON.stringify(getUsers))
        alert("User Signup")
        window.location.href = "./index.html"
    }
    else{
        alert("User Already Exist")
    }
}
}

function Login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    var Getuser = JSON.parse(localStorage.getItem("users"))
    

    var userIndex = Getuser.findIndex( function(value){
            if(value.email === email && value.password === password) return true
        })
        if(userIndex !== -1){
            alert("successfully login")
            window.location.replace("./home.html")
        }
        else{
            alert("Email OR password doesn't match")
        }
        console.log(userIndex)
}
