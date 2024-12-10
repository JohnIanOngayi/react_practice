import $ from "jquery";
import { debounce } from "lodash";
import "./body.css";

$(document).ready(function () {
  const para_2 = $("<p></p>").text("Dashboard data for the students");
  const btn = $("<button></button>").text("Click here to get started");
  const para_3 = $("<p></p>").attr("id", "count");

  let count = 0;

  $("body").append(para_2);
  $("body").append(btn);
  $("body").append(para_3);

  const paraCount = $("p#count");

  const updateBtn = $("button");

  console.log("Init body");

  function updateCounter(text) {
    paraCount.text(text);
  }

  updateBtn.on(
    "click",
    debounce(() => {
      console.log("clicked");
      count++;
      updateCounter(count);
    }, 250),
  );
});
