// Counter App with a Dark Mode feature


// Dark Mode
const body = document.querySelector("body");
const switchbtn = document.getElementById("darkmode");

switchbtn.addEventListener("click", () => {
    if (switchbtn.checked) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
});

// The counter properties
const header = document.getElementById("header");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
var count = 0;


increase.onclick = function () {
    count += 1;
    header.innerHTML = count ;
};
decrease.onclick = function () {
    count -= 1;
    header.innerHTML = count;
};
reset.onclick = function () {
    count = 0;
    header.innerHTML = count;
};

