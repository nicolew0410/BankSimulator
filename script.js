
function test1(){
    document.querySelector(".clue1").addEventListener("keyup", function (event){
        if (event.target.value == "knight"){
            var helpful = alert("Which clue gave it away for you? Check off as many as you like. ")
            document.querySelector("p").style.display = "block";
            document.querySelector(".information1").style.display = "block";
        }
    }
)}
test1()

function fullName(){
    var name = document.getElementById("nameInput").value;
    document.getElementById("fullNameInput").innerHTML = "You entered:  " + name;
}
function birthDateFunction(){
    var birthDate = document.getElementById("birthDateInput").value;
    document.getElementById("birthInput").innerHTML = "You entered:  " + birthDate;
}
function userFunction() {
    var username = document.getElementById("usernameInput").value;
    document.getElementById("userInput").innerHTML = "You entered:  " + username;
}
function passwordFunction(){
    var password = document.getElementById("passwordInput").value;
    document.getElementById("passInput").innerHTML = "You entered: " + password;
}
document.getElementById("thankMessage").innerHTML = "Thank you for answering our questions. We will now create a ID for you...";