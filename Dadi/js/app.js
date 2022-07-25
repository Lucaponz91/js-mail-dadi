const yourDice = [1, 2, 3, 4, 5, 6];
const aiDice = [1, 2, 3, 4, 5, 6]; 
const submitElement = document.querySelector('input[type="submit"]');
submitElement.addEventListener('click', function () {
    let yourRandomDice = yourDice[Math.floor(Math.random()*yourDice.length)];
    console.log(yourRandomDice);
    let aiRandomDice = aiDice[Math.floor(Math.random()*aiDice.length)];
    console.log(aiRandomDice);
    if ( yourRandomDice === aiRandomDice) {
        alert("Pareggio!");
    } else if (yourRandomDice > aiRandomDice) {
        alert("Hai vinto!");
    } else {
        alert("L'IA ti è superiore.");
    }


}
)
