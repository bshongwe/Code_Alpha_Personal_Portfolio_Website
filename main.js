// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

// Function to toggle the animation of nav links
const toggleNavLinkAnimation = () => {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
            console.log(index / 7 + 0.5);
        }
    });
};

// Burger menu click event listener
selectElement(".burger-menu-icon").addEventListener("click", () => {
    const navList = selectElement(".nav-list");
    navList.classList.toggle("active");  // Toggle the 'active' class for the navigation list
    selectElement(".burger-menu-icon").classList.toggle("toggle"); // Toggle the 'toggle' class for the burger icon

    toggleNavLinkAnimation();  // Call the function to animate the nav links
});

// Nav link click event listener
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navList = selectElement(".nav-list");
        navList.classList.toggle("active");  // Toggle the 'active' class for the navigation list
        selectElement(".burger-menu-icon").classList.toggle("toggle");  // Toggle the 'toggle' class for the burger icon

        toggleNavLinkAnimation();  // Call the function to animate the nav links
    });
});
