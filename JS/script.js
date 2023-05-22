let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#12387F ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.querySelector("#sub").value = "Submiting..";
//   fetch(
//     "https://script.google.com/macros/s/AKfycbxmRPpRz2GDTNSWyvvQClyDF4YF5qi5e1_Oi2ur-o9OdIja3B2Lngdy3P9iPR_Z19bt/exec",
//     {
//       method: "POST",
//       body: data,
//     }
//   ).then((data) => {
//     document.querySelector("#msg").innerHTML = data;
//     document.querySelector("#sub").value = "Submit";
//   });
// });
