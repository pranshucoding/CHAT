const firebaseConfig = {
      apiKey: "AIzaSyB3oAsS3RILavNZZdsKdS5l0G2hVKCHfn0",
      authDomain: "chatbuster-pranshuagarwal.firebaseapp.com",
      databaseURL: "https://chatbuster-pranshuagarwal-default-rtdb.firebaseio.com",
      projectId: "chatbuster-pranshuagarwal",
      storageBucket: "chatbuster-pranshuagarwal.appspot.com",
      messagingSenderId: "1070893327459",
      appId: "1:1070893327459:web:84b7e025385327e48b8456",
      measurementId: "G-4QBH9JKZFT"
    };
    firebase.initializeApp(firebaseConfig);
    Username = localStorage.getItem("Username");
    document.getElementById("Username").innerHTML="Welcome "+Username;
    function Addroom(){
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({purpose : "Adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"<div><hr>"
       document.getElementById("output").innerHTML+=row;
      });});}
       
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location="index.html";
}