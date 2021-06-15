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
    add: function(artObjec) {
        console.log('hello')
        let min = -3.733
        let max = 3.864
        let randomXPos = Math.random() * (max - min) + min;
        // console.log(artWorks[i].id.authorOfArt)
        sceneEl = document.querySelector('a-scene');
        var planeId = document.createElement('a-plane');
        planeId.setAttribute('src', artObjec.url);
        planeId.setAttribute('id', artObjec.id);
        planeId.setAttribute('position', randomXPos + ' 1.47 -4.4265')
        sceneEl.appendChild(planeId);
        // Add in Artwork Info Plane
        var artWorkInfo = document.createElement('a-plane');
        artWorkInfo.setAttribute('id', artObjec.id + '-infoPlane');
        artWorkInfo.setAttribute('position', randomXPos + ' 0.683 -4.4265')
        artWorkInfo.setAttribute('scale', '1.56 0.35 1')
        artWorkInfo.setAttribute('material', 'color:  #987676')
        sceneEl.appendChild(artWorkInfo);
        // Add in Artwork Info Plane - Art Work nameOfArt
        var artWorkInfoArtName = document.createElement('a-text');
        artWorkInfoArtName.setAttribute('id', artObjec.id + '-infoPlane(artworkname)');
        artWorkInfoArtName.setAttribute('position', randomXPos + ' 0.683 -4.4265')
        artWorkInfoArtName.setAttribute('scale', '0.610 0.610 1')
        artWorkInfoArtName.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value:' + artObjec.nameOfArt)
        sceneEl.appendChild(artWorkInfoArtName);

    }
}

// aFrame Component setup for later on?
AFRAME.registerComponent('painting ', {
    init: function() {
        // This will be called after the entity has properly attached and loaded.
        console.log('I am ready!');
    }
});