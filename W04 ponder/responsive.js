// 1. Select menu from the DOM
let menuButton = document.querySelector(".menu-btn");

// 2. Add event listener to the menu button

// unnamed or anonymous function
// fat arrow function
menuButton.addEventListener("click", (e) => {
    // 3. toggle whether the links are displayed or not
    let nav = document.querySelector("nav");
    if (nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = '';
    }

    //ternary operator
    nav.style.display = nav.style.display === '' ? 'flex' : '';

    // 4. toggle X animation for menu button
    menuButton.classList.toggle('change');
});
