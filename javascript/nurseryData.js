  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDomYX2wsV7LCmSm2wxgvHscmqmpJT-qI8",
    authDomain: "daffodils-15b09.firebaseapp.com",
    databaseURL: "https://daffodils-15b09.firebaseio.com",
    projectId: "daffodils-15b09",
    storageBucket: "daffodils-15b09.appspot.com",
    messagingSenderId: "775307173188",
    appId: "1:775307173188:web:d79c1cc0a8025348b34b11",
    measurementId: "G-VX8Q27N119"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


  //start DOM element

  const submitBtn = document.querySelector('#submit');

  
let nurseryName = document.querySelector('#nurseryName');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let nurseryWebsite = document.querySelector('#nurseryWebsite');
let city = document.querySelector('#city');
let show = document.getElementById('success');

const db = firestore.collection("newNursery");

submitBtn.addEventListener('click',function(){
    console.log('started');

    let nurseryNameInput = nurseryName.value;
    let phoneInput = phone.value;
    let emailInput = email.value;
    let nurseryWebsiteInput = nurseryWebsite.value;
    let cityInput = city.value;


    //access the database
    db.doc()
      .set({
          nurseryName : nurseryNameInput,
          phone : phoneInput,
          email : emailInput,
          website : nurseryWebsiteInput,
          city: cityInput
        
      })
      .then(function() {
          console.log(cityInput);
              console.log('successful');
              

      })
      .catch(function(error){
          console.log(error);
      });
      alert("successfully submitted");
});

