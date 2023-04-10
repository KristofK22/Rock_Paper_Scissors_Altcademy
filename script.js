/* JavaScript for Rock, Paper, Scissors website */
/* Built and Designed by Kristof Kiraly */

/* Test clicker code...
var clicks = 0;

function onClick() {

  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

}; */

/* const soloCheckbox = document.querySelector(".switch-button-checkbox");

//Function to determine checkbox state
soloCheckbox.addEventListener("change", (e) => {
	this.checkboxValue = e.target.checked ? "on" :
	"off";
	console.log(this.checkboxValue);
}); */

// Run page load SlideUpFromBottom animation only once
// does not work...obviously =(
/* window.addEventListener(('load'), () => {

  if (document.querySelector('#Heading') !== null) {
		
    window.sessionStorage.setItem('Heading', 'displayed');

  }
	
});

if (window.sessionStorage.getItem('Heading')) {

  document.querySelector('#Heading').classList.remove('.SlideUpFromBottom')

}; */

// Game Logic
const game = () => {

	var playerScore = 0;
	var computerScore = 0;
	var round = 0;

	// Function to
	const playGame = () => {

		const rock = document.querySelector(".Rock");
		const paper = document.querySelector(".Paper");
		const scissors = document.querySelector(".Scissors");
		const playerOptions = [rock, paper, scissors];
		const computerOptions = ["Rock", "Paper", "Scissors"];

		// Function to start playing the game
		playerOptions.forEach(option => {

			option.addEventListener("click", function () {

				const roundCounter = document.querySelector(".Round_Counter");
				round++;
				roundCounter.innerText = round;

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];
				const soloCheckbox = document.querySelector(".switch-button-checkbox");

				// Function to check who wins
				winner(this.innerText, computerChoice)

				// Calling gameOver function
				if (playerScore === 2 || computerScore === 2) {

					gameOver(playerOptions, roundCounter);

				} else {};

				//Function to switch between "Best of 3" OR "Solo"
				if (soloCheckbox.checked === true) {

					if (playerScore === 1 || computerScore === 1) {

						gameOver(playerOptions, roundCounter);

					} else {};

				} else {};

			});

		});

	};

	// Function to decide winner
	const winner = (player, computer) => {

		const result = document.querySelector(".Result");
		const playerScoreCounter = document.querySelector(".Player_Score_Counter");
		const computerScoreCounter = document.querySelector(".Computer_Score_Counter");
		player = player.toLowerCase();

		if (player == computer) {

			result.textContent = "Tie";

		} else if (player == "Rock") {

			if (computer == "Paper") {

				result.textContent = "Computer Won";
				computerScore++;
				computerScoreCounter.textContent = computerScore;

			} else {

				result.textContent = "Player Won";
				playerScore++;
				playerScoreCounter.textContent = playerScore;

			};

		} else if (player == "Scissors") {

			if (computer == "Rock") {

				result.textContent = "Computer Won";
				computerScore++;
				computerScoreCounter.textContent = computerScore;

			} else {

				result.textContent = "Player Won";
				playerScore++;
				playerScoreCounter.textContent = playerScore;

			};


		} else if (player = "Paper") {

			if (computer == "Scissors") {

				result.textContent = "Computer Won";
				computerScore++;
				computerScoreCounter.textContent = computerScore;

			} else {

				result.textContent = "Player Won";
				playerScore++;
				playerScoreCounter.textContent = playerScore;

			};

		};

	};

	// Function to run when game is over
	const gameOver = (playerOptions, roundCounter) => {
		
		const result = document.querySelector(".Result");
		const gameOverDiv = document.querySelector(".GameOverDiv");
		const gameOver = document.querySelector(".GameOver");
		const reloadBtn = document.querySelector(".ReloadBtn");

		playerOptions.forEach(option => {

			option.style.display = "none";
			
		});

		gameOverDiv.style.cssText += ';display:block !important;'
		gameOver.style.display = "block";
		reloadBtn.style.display = "inline-block";

		gameOver.innerText = "Game Over!!";

		if (playerScore > computerScore) {

			result.innerText = "You Won The Game";

		} else if (playerScore < computerScore) {

			result.innerText = "You Lost The Game";

		} else {

			result.innerText = "Tie";

		};

		reloadBtn.innerText = "Restart";
		reloadBtn.addEventListener("click", () => {

			window.location.reload();

		});

	};

	// Calling playGame function inside game
	playGame();

};

// Calling the game function
game();
