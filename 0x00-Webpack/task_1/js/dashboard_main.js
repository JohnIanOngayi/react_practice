import $ from "jquery";

$(document).ready(function () {
  const para_1 = $("<p></p>").text("ALX Dashboard");
  const para_2 = $("<p></p>").text("Dashboard data for the students");
  const btn = $("<button></button>").text("Click here to get started");
  const para_3 = $("<p></p>").attr("id", "count");
  const para_4 = $("<p></p>").text("Copyright - ALX");
});
