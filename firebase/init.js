/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */
let fb = {}

fb.init = function() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCCyTtEiKGgNBIUfNYmh5MgwdHBozFWxv8",
        authDomain: "dtec-aframegallery.firebaseapp.com",
        projectId: "dtec-aframegallery",
        storageBucket: "dtec-aframegallery.appspot.com",
        messagingSenderId: "543942551785",
        appId: "1:543942551785:web:5c3e825e0b93d256a12878",
        measurementId: "G-4WYNS6GY1X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}

$(document).ready(function() {
    fb.init()
})