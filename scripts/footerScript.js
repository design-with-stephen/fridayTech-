document.addEventListener("DOMContentLoaded", () => {
  fetch("./../components/footer.html")
      .then(Response => Response.text())
      .then(data => {
          document.getElementById("footer").innerHTML = data;

      }).catch(error => console.error("error occurred during loading", error));
})

// function to get the year
function UpdateYear() {
    const year = new Date();
    const yearDisplay = document.getElementById("year");
    yearDisplay.innerText = year.getFullYear();
  }
  UpdateYear();