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
room_name =  localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:Username,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.value(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+messeage +"</h4>";
like_button = "<button class = 'btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>"+Like+"</span></button><hr>";
row = name_with_tag+message_with_tag+span_with_tag;
document.getElementById("output").innerHTML+= row;
      } });  }); }
getData();

function updateLike(message_id){
console.log("Click on Like button - "+message_id);
button_id=message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like : updated_likes});



}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }

