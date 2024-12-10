import $ from "jquery";
import { debounce } from "lodash";

$(document).ready(function () {
  const para_1 = $("<p></p>").text("ALX Dashboard");
  const para_2 = $("<p></p>").text("Dashboard data for the students");
  const btn = $("<button></button>").text("Click here to get started");
  const para_3 = $("<p></p>").attr("id", "count");
  const para_4 = $("<p></p>").text("Copyright - ALX");
  let count = 0;

  $("body").append(para_1);
  $("body").append(para_2);
  $("body").append(btn);
  $("body").append(para_3);
  $("body").append(para_4);

  const paraCount = $("p#count");
  const updateBtn = $("button");
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
