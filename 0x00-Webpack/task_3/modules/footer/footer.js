import $ from "jquery";
import "./footer.css";

$(document).ready(function () {
  const footer = $("<footer><p>Copyright - ALX</p></footer>");

  $("body").append(footer);

  console.log("Init footer");
});
