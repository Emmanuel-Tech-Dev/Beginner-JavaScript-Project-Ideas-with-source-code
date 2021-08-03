const humburger = document.querySelector(".humburger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const link = document.querySelectorAll("li");

humburger.addEventListener("click", () => {
    this.focus();
    navlinks.classList.toggle("open"); 
});
// closes the humburger menu a link is clicked
Array.from(link).forEach(element => {
    element.addEventListener("click", () => {
        humburger.click()
    });
});


