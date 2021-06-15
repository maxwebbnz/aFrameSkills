/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

var sceneEl = document.querySelector('a-scene');

let artWork = {
    add: function() {
        for (var i = 0; i < artWorks.length; i++) {
            console.log(artWorks[i].id.authorOfArt)
            sceneEl = document.querySelector('a-scene');
            var planeId = document.createElement('a-plane');
            planeId.setAttribute('src', artWorks[i].id.urlOfArt);
            planeId.setAttribute('position', '0 1.47 -4.4265')
            sceneEl.appendChild(planeId);
        }
    }
}

AFRAME.registerComponent('painting ', {
    init: function() {
        // This will be called after the entity has properly attached and loaded.
        console.log('I am ready!');
    }
});