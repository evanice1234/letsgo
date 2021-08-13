var firebaseConfig = {
    apiKey: "AIzaSyAfeC8a0QfG9tsLGYxb4gPRR-pKV1jRFm0",
    authDomain: "cls95-648b6.firebaseapp.com",
    databaseURL: "https://cls95-648b6-default-rtdb.firebaseio.com",
    projectId: "cls95-648b6",
    storageBucket: "cls95-648b6.appspot.com",
    messagingSenderId: "1073983407938",
    appId: "1:1073983407938:web:ae4b2a580399e515a0eadb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!";

  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"pink"
        });
        localStorage.setItem("room_name",room_name);

        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("room_name "+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row; 
    
    });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}