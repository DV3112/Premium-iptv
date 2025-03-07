function animateCounter(id, target) {
    let counter = document.getElementById(id);
    let count = 0;
    let speed = 80; // Speed of counting

    let updateCounter = setInterval(() => {
        if (count < target) {
            count++;
            counter.innerText = count + "k+";
        } else {
            clearInterval(updateCounter);
        }
    }, speed);
}

// Run animation on load
window.onload = () => {
    animateCounter("counter1", 40);
    animateCounter("counter2", 10);
    animateCounter("counter3", 60);
};


// Get the channel container
const channelContainer = document.querySelector(".channels-container");

// Pause scrolling when hovering
channelContainer.addEventListener("mouseover", () => {
    channelContainer.style.animationPlayState = "paused";
});

// Resume scrolling when mouse leaves
channelContainer.addEventListener("mouseleave", () => {
    channelContainer.style.animationPlayState = "running";
});


function toggleChannels(id) {
    let channelList = document.getElementById(id);

    if (channelList.style.display === "block") {
        channelList.style.display = "none";
    } else {
        channelList.style.display = "block";
    }
}

document.querySelectorAll(".highlight-box").forEach((box) => {
    box.addEventListener("mousemove", function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let glow = this.querySelector("::before");
        this.style.setProperty("--x", x + "px");
        this.style.setProperty("--y", y + "px");
    });
});
