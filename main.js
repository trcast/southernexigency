var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus == 1) {
    document.getElementById("artist_arrow").style.transform = "rotate(90deg)";

        document.getElementById("curator").style.transform = "translateY(19vw)";
        document.getElementById("curator_line").style.transform = "translateY(19vw)";
        document.getElementById("curator_arrow").style.transform = "translateY(19vw)";

        document.getElementById("writing").style.transform = "translateY(19vw)";
        document.getElementById("writing_line").style.transform = "translateY(19vw)";
        document.getElementById("writing_arrow").style.transform = "translateY(19vw)";

        document.getElementById("seeing").style.transform = "translateY(19vw)";
        document.getElementById("seeing_line").style.transform = "translateY(19vw)";
        document.getElementById("seeing_arrow").style.transform = "translateY(19vw)";

      document.getElementById("index_one").style.opacity = "100%";
      document.getElementById("index_two").style.opacity = "100%";
      document.getElementById("index_three").style.opacity = "100%";
      document.getElementById("index_four").style.opacity = "100%";
      document.getElementById("index_five").style.opacity = "100%";
      document.getElementById("index_six").style.opacity = "100%";
      document.getElementById("index_seven").style.opacity = "100%";
      document.getElementById("index_eight").style.opacity = "100%";
      document.getElementById("index_nine").style.opacity = "100%";
      document.getElementById("index_ten").style.opacity = "100%";

          document.getElementById("index_one").style.transform = "translateZ(100)";
          document.getElementById("index_two").style.transform = "translateZ(100)";
          document.getElementById("index_three").style.transform = "translateZ(100)";
          document.getElementById("index_four").style.transform = "translateZ(100)";
          document.getElementById("index_five").style.transform = "translateZ(100)";
          document.getElementById("index_six").style.transform = "translateZ(100)";
          document.getElementById("index_seven").style.transform = "translateZ(100)";
          document.getElementById("index_eight").style.transform = "translateZ(100)";
          document.getElementById("index_nine").style.transform = "translateZ(100)";
          document.getElementById("index_ten").style.transform = "translateZ(100)";

    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    document.getElementById("artist_arrow").style.transform = "rotate(0deg)";

        document.getElementById("curator").style.transform = "translateY(0vw)";
        document.getElementById("curator_line").style.transform = "translateY(0vw)";
        document.getElementById("curator_arrow").style.transform = "translateY(0vw)";

      document.getElementById("index_one").style.opacity = "0%";
      document.getElementById("index_one").style.opacity = "0%";
      document.getElementById("index_two").style.opacity = "0%";
      document.getElementById("index_three").style.opacity = "0%";
      document.getElementById("index_four").style.opacity = "0%";
      document.getElementById("index_five").style.opacity = "0%";
      document.getElementById("index_six").style.opacity = "0%";
      document.getElementById("index_seven").style.opacity = "0%";
      document.getElementById("index_eight").style.opacity = "0%";
      document.getElementById("index_nine").style.opacity = "0%";
      document.getElementById("index_ten").style.opacity = "0%";

      document.getElementById("index_one").style.transform = "translateZ(1)";
      document.getElementById("index_two").style.transform = "translateZ(1)";
      document.getElementById("index_three").style.transform = "translateZ(1)";
      document.getElementById("index_four").style.transform = "translateZ(1)";
      document.getElementById("index_five").style.transform = "translateZ(1)";
      document.getElementById("index_six").style.transform = "translateZ(1)";
      document.getElementById("index_seven").style.transform = "translateZ(1)";
      document.getElementById("index_eight").style.transform = "translateZ(1)";
      document.getElementById("index_nine").style.transform = "translateZ(1)";
      document.getElementById("index_ten").style.transform = "translateZ(1)";

      document.getElementById("writing").style.transform = "translateY(0vw)";
      document.getElementById("writing_line").style.transform = "translateY(0vw)";
      document.getElementById("writing_arrow").style.transform = "translateY(0vw)";

      document.getElementById("seeing").style.transform = "translateY(0vw)";
      document.getElementById("seeing_line").style.transform = "translateY(0vw)";
      document.getElementById("seeing_arrow").style.transform = "translateY(0vw)";

    toggleStatus = 1;
  }
}
