var firebaseConfig = {
    apiKey: "AIzaSyCBmLzaBPZbnsegQrjZcDpvbN8w9h2d7rc",
    authDomain: "proyectosilabofacci.firebaseapp.com",
    projectId: "proyectosilabofacci",
    storageBucket: "proyectosilabofacci.appspot.com",
    messagingSenderId: "699282351939",
    appId: "1:699282351939:web:6083ec4e36c3c8f26f71f6",
    measurementId: "G-XK2WTMYLHT"
  };
 firebase.initializeApp(firebaseConfig);
 
 let db = firebase.firestore();

 const SaveUser = (user)=>{
    db.collection("Registro_usuarios").add({
        user,
    })
    .then(function(docRef) {
        correcto();

    })
    .catch(function(error){
        incorrecto();
    });
 }
 const correcto =()=>{
    if(Swal.fire(
        'Exelente!',
        'Se registró correctamente!',
        'success'
      ))
      window.location='home.html';
 }

 const incorrecto =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo registrar!',
        'error'
      )
 }

$("#btnsave").on('click',()=>{
 let usuario_r = $("#usuario").val();
 let nombre_r = $("#nombre").val();
 let contraseña_r = $("#password").val();
 let contraseña2_r = $("#password2").val();
 let correo_r = $("#correo").val();
 let telefono_r = $("#telefono").val();
 
 const user ={
     usuario_r,
     nombre_r,
     contraseña_r,
     contraseña2_r,
     correo_r,
     telefono_r
 }

SaveUser(user);

})
//---------------------------------------------------------------------------------------------------------------------
//Colección de Credenciales de Usuario
const Savecredenciales = (credencial)=>{
    db.collection("Registro_credenciales").add({
        credencial,
    })
    .then(function(docRef) {
        exitoso();

    })
    .catch(function(error){
        fallo();
    });
 }

 const exitoso =()=>{
    if(Swal.fire(
        'Exelente!',
        'Datos ingresados correctamente!',
        'success'   
      ))
        window.location='home.html';

 }
const fallo =()=>{
    Swal.fire(
        'ERROR!',
        'Datos NO fueron guardados correctamente!',
        'error'
      )
 }
$("#btnsavec").on('click',()=>{
 let usuario_rc = $("#usuario").val();
 let contraseña_rc = $("#password").val();

 const credencial ={
     usuario_rc,
     contraseña_rc
     
 }

Savecredenciales(credencial);
})


