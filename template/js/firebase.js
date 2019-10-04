const config = {
        apiKey: "AIzaSyD5FMicrqioOtJ3ttA3-4Xz-A4dAzHtrl0",
        authDomain: "i-am-beginner-iot.firebaseapp.com",
        databaseURL: "https://i-am-beginner-iot.firebaseio.com",
        projectId: "i-am-beginner-iot",
        storageBucket: "",
        messagingSenderId: "154260610511",
        appId: "1:154260610511:web:226b9d27570355e07e86ba"
    
    };
firebase.initializeApp(config);
var database = firebase.database(); 
console.log("database",database);
/* var leadsRef = database.ref('i-am-beginner-iot');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log("childData",childData);
    }); }); */
    

  