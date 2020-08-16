// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2ec7KFkjgMQSlMp467GxS7VfAr3vbSNA",
    authDomain: "form-d47d9.firebaseapp.com",
    databaseURL: "https://form-d47d9.firebaseio.com",
    projectId: "form-d47d9",
    storageBucket: "form-d47d9.appspot.com",
    messagingSenderId: "123339361861",
    appId: "1:123339361861:web:49f7d479d11b4606299d2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const signup = auth.createUserWithEmailAndPassword(email.value, password.value);
    signup.catch(e => alert(e.message));
    alert("Signed Up");
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const signup = auth.signInWithEmailAndPassword(email.value, password.value);
    signup.catch(e => alert(e.message));
    alert("Signed In" + email);
}

function signOut() {
    auth.signOut();
    alert("Signed Out");
}