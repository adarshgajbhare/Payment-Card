const card = document.querySelector(".card");

// Set initial transition property
card.style.transition = "all ease 0.5s";

function handleClick() {
    console.log("@@@@@@@@@@@@@@@@@@");

    // Reset transform before applying rotation
    card.style.transform = "none";

    // Trigger reflow (forces the browser to repaint)
    card.offsetHeight;

    // Apply rotation
    card.style.transform = "rotateY(360deg)";

    console.log("@################# @@@");
}

card.addEventListener("click", handleClick);
