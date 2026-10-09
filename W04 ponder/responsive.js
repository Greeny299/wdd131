// 1. Select menu from the DOM
let menuButton = document.querySelector(".menu-btn");

// 2. Add event listener to the menu button

// unnamed or anonymous function
// fat arrow function
menuButton.addEventListener("click", (e) => {
    // 3. toggle whether the links are displayed or not
    let nav = document.querySelector("nav");
    nav.classList.toggle('hide');

    // 4. toggle X animation for menu button
    menuButton.classList.toggle('change');
});
