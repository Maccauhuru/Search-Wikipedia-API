$(document).ready(function() {
  $("#searchText").focus();
  $("#searchBtn").click(function() {
    var searchText = $("#searchText").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchText +
      "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
        $("#output").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend(
            "<a href=" +
              data[3][i] +
              ">" +
              data[1][i] +
              "</a><p>" +
              data[2][i] +
              "</p>"
          );
        }
        $("#searchText").val(" ");
      },
      fail: function(errorMessage) {
        alert("error");
      }
    });
  });
  $("#searchText").keypress(function(e) {
    if (e.which == 13) {
      $("#searchBtn").click();
    }
  });
});
