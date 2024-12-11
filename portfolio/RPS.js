// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  // Function to play a round
  function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice.toLowerCase(), computerChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("result").textContent = result;

  
    console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);
    console.log(result);
  }
  
  // Example usage
  playRound("Rock");
  playRound("PAPER");
  playRound("ScIssOrS");
