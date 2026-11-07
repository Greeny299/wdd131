// 1. click on button to roll dice
const rollButton = document.querySelector('#rollButton');
// 2. roll only the dice that are not held
rollButton.addEventListener('click', function() {
    const diceToRoll = [...document.querySelectorAll('#gameboard img')]
        .filter(image => !document.querySelector(`input.${image.className}`).checked);

    if (diceToRoll.length === 0) {
        return;
    }
// 3. disable the button while rolling
    rollButton.disabled = true;
    diceToRoll.forEach(image => {
        image.src = 'assets/die_rolling.gif';
    });
// 4. land on a random number between 1 and 6 for each die
    window.setTimeout(() => {
        diceToRoll.forEach(image => {
            // const result = Math.floor(Math.random() * 6);
            // shows the result of the die roll as a gif and rand result is used to select the correct gif
            const randomNumber = Math.floor(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });
        rollButton.disabled = false;
    }, 1000);
});

