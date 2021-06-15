/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* Base Variable Definitions
let artWorks = [];
let id = 'id'

/**========================================================================
 **                           fb.read
 *?  firebase read function that should be generalised

 *@return n/a
 *========================================================================**/
fb.read = function() {
    var galDBRoot = firebase.database().ref('gallery/');
    galDBRoot.once('value').then(
        (_snapshot) => {
            _snapshot.forEach(function(childSnapshot) {
                let artObject = {
                    "nameOfArt": childSnapshot.child("nameOfArt").val(),
                    "authorOfArt": childSnapshot.child("authorOfArt").val(),
                    "url": childSnapshot.child('urlOfArt').val(),
                    "dateOfUpload": childSnapshot.child('dateOfUpload').val(),
                    "id": childSnapshot.key,
                }
                console.log(artWorks)
                artWork.add(artObject)
            })
        });

}