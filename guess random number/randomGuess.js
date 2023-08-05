const guessFunction = () => {
    while (true) {
        let guess = prompt("Enter a number to guess");
        if (Math.floor(Math.random() * 10) == guess) { //range 0-9
            alert("You guess was correct");
            break;

        } else {
            alert("You guess was wrong");
            continue;
        }
    }
};

guessFunction();