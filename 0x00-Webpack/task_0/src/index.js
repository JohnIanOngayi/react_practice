import $ from "jquery";

const para_1 = $("<p></p>").text("ALX Dashboard");
const para_2 = $("<p></p>").text("Dashboard data for the students");
const para_3 = $("<p></p>").text("Copyright - ALX");

$(document).ready(function () {
  $("body").append(para_1);
  $("body").append(para_2);
  $("body").append(para_3);
});
