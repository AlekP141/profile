console.log("test")

const light = document.querySelector("#light")
const dark = document.querySelector("#dark")

light.addEventListener("click", (e) => {
  document.querySelectorAll(".primary").forEach(el => {
    el.style.color = "#151515"
  })
  document.querySelectorAll(".primary-border").forEach(el => {
    el.style.borderColor = "#151515"
  })
  document.querySelectorAll(".secondary").forEach(el => {
    el.style.color = "#ebebeb"
  })
  document.querySelectorAll(".secondary-background").forEach(el => {
    el.style.backgroundColor = "#ebebeb"
  })
  dark.classList.toggle("current-toggle")
  light.classList.toggle("current-toggle")

});

dark.addEventListener("click", (e) => {
  document.querySelectorAll(".primary").forEach(el => {
    el.style.color = "#ebebeb"
  })
  document.querySelectorAll(".primary-border").forEach(el => {
    el.style.borderColor = "#ebebeb"
  })
  document.querySelectorAll(".secondary").forEach(el => {
    el.style.color = "#151515"
  })
  document.querySelectorAll(".secondary-background").forEach(el => {
    el.style.backgroundColor = "#151515"
  })
  dark.classList.toggle("current-toggle")
  light.classList.toggle("current-toggle")
});
