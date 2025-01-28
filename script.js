// JavaScript for Interactivity
document.getElementById("cta-btn").addEventListener("click", function() {
    alert("Exploring BMW vehicles...");
});

const vehicleButtons = document.querySelectorAll(".cta-btn");
vehicleButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Learn more about the vehicle.");
    });
});
