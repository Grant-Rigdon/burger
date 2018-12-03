// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#devour").on("click", function(event) {
    var id = $(this).data("id");
    

    var devouredBurger = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#make-it").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("button clicked")
    var newBurger = {
      name: $("#textarea").val().trim(),
      devoured: 0
    };
    console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
