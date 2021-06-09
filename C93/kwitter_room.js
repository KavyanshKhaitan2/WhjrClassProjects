// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDCTgGXRTHci5H06ax3wl5v33joKsUFv8",
  authDomain: "whjr-class-project-c93.firebaseapp.com",
  projectId: "whjr-class-project-c93",
  storageBucket: "whjr-class-project-c93.appspot.com",
  messagingSenderId: "441738723579",
  appId: "1:441738723579:web:da575a4c5e56344d55305e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}
getData();
