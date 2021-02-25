import { auth } from "./firebase.js";

export var username = "";

export var apiUrl = "http://localhost:5002/blink-31c54/us-central1/app/api/";

export async function newAccountApi() {
  auth.currentUser.getIdToken().then(function (token) {
    console.log("Sending request", "with ID token in Authorization header.");
    console.log(token);
    var req = new XMLHttpRequest();
    req.onload = function () {
      console.log(req.responseText);
    };
    req.onerror = function () {
      console.log(this);
    };
    req.open("GET", apiUrl + "user-auth", true);
    req.setRequestHeader("Authorization", "Bearer " + token);
    req.setRequestHeader("username", username);
    req.send();
  });
}
