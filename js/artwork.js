/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* Setting up Enviroment
//! Taken from https://aframe.io/docs/1.2.0/introduction/javascript-events-dom-apis.html#removing-a-component-with-removeattribute
var sceneEl = document.querySelector('a-scene');

let artWork = {
    /**========================================================================
     **                           artWork.add
     *?  Pulls data from fb.read and transforms them into pieces of art.
     *@return n/a
     *========================================================================**/
    add: function() {
        for (var i = 0; i < artWorks.length; i++) {
            let min = -3.733
            let max = 3.864
            let randomXPos = Math.random() * (max - min) + min
                // console.log(artWorks[i].id.authorOfArt)
            sceneEl = document.querySelector('a-scene');
            var planeId = document.createElement('a-plane');
            planeId.setAttribute('src', artWorks[i].id.urlOfArt);
            planeId.setAttribute('position', randomXPos + ' 1.47 -4.4265')
            sceneEl.appendChild(planeId);
        }
    }
}

// aFrame Component setup for later on?
AFRAME.registerComponent('painting ', {
    init: function() {
        // This will be called after the entity has properly attached and loaded.
        console.log('I am ready!');
    }
});