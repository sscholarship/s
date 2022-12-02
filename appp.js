 const firebaseConfig = {
    apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
    authDomain: "formdata-b7401.firebaseapp.com",
    projectId: "formdata-b7401",
    storageBucket: "formdata-b7401.appspot.com",
    messagingSenderId: "44569804899",
    appId: "1:44569804899:web:ffe6af4efafd322d09b856"
  };
  firebase.initializeApp(firebaseConfig);
var firestore= firebase.firestore();
const db= firestore.collection("userrrrr");
function myFunction() {
  location.replace("./home.html");
}
let submitButton =document.getElementById('submit');
submitButton.addEventListener("click",(e) => {
e.preventDefault();

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var mobile=document.getElementById("mobile").value;
var password=document.getElementById("password").value;
var gender=document.getElementById("gender").value;
if(name==""||!(/^[a-zA-Z]/).test(name)){
    if(name=="")alert("enter name ...");else alert("enter alphbet only for name..");
}

 else if(email==""||!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){if(email=="") alert("enter email ..."); else alert("email not correct...")}
else if(mobile==""||mobile.length<10){
  if(mobile=="")alert('enter phone number ....');else {alert("phone number is not 10 digit...") }
} 
 else  if(gender==""){alert("enter gender ..."); }
else{
 var  date=Date();
db.doc().set({ 
name:name,
email:email,
password:password,
gender:gender,
}).then(()=>{
alert(" As soon as possible we wil notify you , your best offer ... ");
setTimeout(myFunction,500);
}).catch((error)=>{
    console.log(error)
})
}
});

 
