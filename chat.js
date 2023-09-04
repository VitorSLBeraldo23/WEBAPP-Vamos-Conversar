user_name = document.getElementById("user_name")

// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyCM5bW5PGY_NYj03bF8AViRtgyXb6tROHc",
    authDomain: "p-100vitor.firebaseapp.com",
    databaseURL: "https://p-100vitor-default-rtdb.firebaseio.com",
    projectId: "p-100vitor",
    storageBucket: "p-100vitor.appspot.com",
    messagingSenderId: "215653116368",
    appId: "1:215653116368:web:fe7e681e013cce34f431d5"
  };


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



