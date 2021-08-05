const box= document.getElementById("box");
const button = document.getElementById("button");
const text = document.getElementById("text");
const sent = document.getElementById("send");

button.addEventListener("click", () => {
    box.classList.toggle("box");
    box.style.display = "block";
    if (box.className === "box") {
        text.style.display = "block";
        button.style.marginTop = 40 + "%";
  
    } else {
        text.style.display = "none";
        button.style.marginTop = 0;

    }

});

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: text.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        status.classList.add("success")
        text.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add("error");
    });

     
}
text.addEventListener("submit", handleSubmit)


