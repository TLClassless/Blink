import { auth } from "./firebase.js";
import { userstate, userprofile } from "./store.js";

auth.onAuthStateChanged((user) => {
  if (user) {
    userstate.set(true);
    var profile = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      uid: user.uid,
      token: user.xa,
    };
    userprofile.set(profile);
    localStorage.setItem("Profile", JSON.stringify(profile));

    console.log("Logged In");
  } else {
    userstate.set(false);
    userprofile.set(0);
    console.log("Logged Out");
  }
});

export default auth;
