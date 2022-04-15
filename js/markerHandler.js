AFRAME.registerComponent("marker-handler" , {
  init: function() {
    this.el.addEventListener("markerfound" , () => {
      console.log("The marker is found")
    })
    this.el.addEventListener("markerlost" , () => {
      console.log("The marker is lost")
    })
  },
  handleMarkerFound: function() {
    var buttonDiv = document.getElementById("button-div")
    buttonDiv.style.display = "flex"

    var ratingButton = document.getElementById("rating-button")
    var orderButton = document.getElementById("order-button")
    ratingButton.addEventListener("click", function() {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Walk in progress"
      })
    })
    orderButton.addEventListener("click", function() {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks for Order!",
        text: "  ",
        timer: 2000,
        button: false
      })
    })
  },
  handleMarkerLost: function() {
    var buttonDiv = document.getElementById("button-div")
    buttonDiv.style.display = "none"
  }
})