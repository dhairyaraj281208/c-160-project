AFRAME.registerComponent('place-side-view', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
        this.createPlaces()
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },


    crearePlaceThumbNail: function (position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true);

        entityEl.setAttribute("id", `place-${id}`);
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
        });
        entityEl.setAttribute("material", {
            src: "./assets/R.png",
            opacity: 0.9
        });

        entityEl.setAttribute("position", position);
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },
    createPlaces: function(){
        const sideViewContainer = document.querySelector("#side-view-container")

        let previousXPosition = -10;
        let previousYPosition = 10;
        for(var i = 1; i <= 1; i++){
            const position = {
                x: (previousXPosition),
                y: (previousYPosition),
                z: -40
            }
            const entityEl = this.crearePlaceThumbNail(position, i)
            sideViewContainer.appendChild(entityEl)
        }
    },
    
});

