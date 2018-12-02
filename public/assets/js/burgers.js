// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#devour").on("click", function(event) {
    var id = $(this).data("id");
    

    var devouredBurger = {
      devoured: true
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

  $("#make-it").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#textarea").val().trim(),
      devoured: false
    };

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
