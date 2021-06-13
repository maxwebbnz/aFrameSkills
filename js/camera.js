/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */
let walls = []
AFRAME.registerComponent('rotation-reader', {
    init: function() {
        // `this.el` is the element.
        // `object3D` is the three.js object.

        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        console.log(this.el.object3D.rotation);

        // `position` is a three.js Vector3.
        console.log(this.el.object3D.position);
    }
});

AFRAME.registerComponent('wallbounds', {
    init: function() {
        // Do something on every scene tick or frame.
        // `position` is a three.js Vector3.
        walls.push = [{
            pos: this.el.object3D.position,
            id: this.el.id
        }]
    }
});