//   function to create a clock 
function updateTime() {
    const time = document.querySelector(".displayTime");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";
    time.innerText = `${hours % 12 || 12}:${minutes.toString().padStart(2
      , "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
  }
  setInterval(updateTime, 1000);