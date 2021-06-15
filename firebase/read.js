/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

// Base Variable Definitions
let artWorks = [];
let id = 'id'

fb.read = function() {
    var galDBRoot = firebase.database().ref('gallery/');
    galDBRoot.on('value', (snapshot) => {
        const data = snapshot.val();
        artWorks.push(data)
        artWork.add()
        console.log(snapshot.val())
    });

}