document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Interactive button clicks for projects
    document.querySelectorAll(".project button").forEach(button => {
        button.addEventListener("click", function () {
            alert("Thank you for supporting this project! Your vote has been counted.");
        });
    });

    // Stake button interaction
    const stakeButton = document.querySelector("#stake button");
    if (stakeButton) {
        stakeButton.addEventListener("click", function () {
            alert("Staking feature coming soon! Stay tuned.");
        });
    }
});