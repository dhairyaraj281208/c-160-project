AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleClickEvents: function() {
      //  Click Events
      this.el.addEventListener("click", evt => {
          this.showView();
      })
        
    },
    
    showView: function(){
        const skyEl = document.querySelector("#main-container")
        skyEl.setAttribute("material", {
          src: "assets/home.jpeg",
          color: '#fff'
        })
      },
    
  });