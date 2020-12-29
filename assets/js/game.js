/* Game States
"WIN" - Player robot has defeated all enemy-robots
    * Fight all enemy-robots
    * Defeat each enemy-robot
"LOSE" - Player robot's health is zero or less
*/    
//window.alert("Welcome to Robot Gladiators!");
var playerName=window.prompt("What is your robot's name?"); //ask for name
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//loging info
console.log(playerName, playerAttack, playerHealth);
var enemyNames=["Roborto","Amy Andriod","Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;


//function to fight robots
var fight=function(enemyName) {
    //Alert player that round is starting
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to skip  
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip=window.confirm("Are you sure you'd like to quit?");
            //if yes leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney -= 10;
                console.log("playerMoney ", playerMoney);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.            
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney += 20
            //leave loop                
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }    
}

//function to start game
var startGame=function() {
    //reset player stats
    playerHealth=100;
    playerAttack=10;
    playerMoney=10;
    for(var i=0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //let players know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth=50;
            //use debugger to pause script from running and check
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!")
            endGame();
        }
    }
    endGame();
}

//function to end the entire game
var endGame=function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0) { 
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm=window.confirm("Would you like to play again?") 
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}



//function for shop













//start the game when the page loads
startGame();









