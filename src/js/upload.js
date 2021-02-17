import { storage } from "./firebase.js";

var storageRef = storage.ref();

export const videoUpload = () => {
  console.log("up");
  storageRef.child("video/vid1.mp4").put("video/vid1.mp4");
};
