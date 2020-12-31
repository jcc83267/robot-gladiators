/* Game States
"WIN" - Player robot has defeated all enemy-robots
    * Fight all enemy-robots
    * Defeat each enemy-robot
"LOSE" - Player robot's health is zero or less
*/    
//window.alert("Welcome to Robot Gladiators!");

//function to generate random number
var randomNumber=function(min, max) {
    var value = Math.floor(Math.random() *(max-min+1)) + min;
    return value;
}

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
                playerMoney=Math.max(0, playerMoney-10);
                console.log("playerMoney ", playerMoney);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage=randomNumber(enemyAttack-3, enemyAttack);
        enemyHealth=Math.max(0, enemyHealth-damage);
        // Log a resulting message to the console so we know that it worked.            
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney += 20;
            //leave loop
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        damage=randomNumber(playerAttack-3,playerAttack);
        playerHealth=Math.max(0, playerHealth-damage);
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
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm=window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm) {
                    shop();
                }
            }
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
var shop=function() {
    //ask player what they'd like to do
    var shopOptionPrompt=window.prompt(
        "Would you like ot REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //using switch to carry out function
    switch(shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if(playerMoney>=7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health and decrease money
                playerHealth+=20;
                playerMoney-=7;
                console.log("player's health is " + playerHealth);
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": //new case
        case "upgrade":
            if(playerMoney>=7) {
                window.alert("Upgradin player's attack by 6 for 7 dollars.");
                playerAttack+=6;
                playerMoney-=7;
                console.log("player's attack is " + playerAttack);
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE"://new case
        case "leave":
            window.alert("leaving the store.");
            //do nothing function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again");
            shop();
            break;
    }
}

var playerName=window.prompt("What is your robot's name?"); //ask for name
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//loging info
console.log(playerName, playerAttack, playerHealth);
var enemyNames=["Roborto","Amy Andriod","Robo Trumble"];
var enemyHealth=randomNumber(40, 60);
var enemyAttack=12;

//start the game when the page loads
startGame();









