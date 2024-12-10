import $ from "jquery";
import "./header.css";

$(document).ready(function () {
  const para_1 = $("<h1></h1>").text("ALX Dashboard");

  const para_5 = $("<div></div>").attr("id", "logo");

  $("body").append(para_5);
  $("body").append(para_1);

  console.log("Init header");
});
