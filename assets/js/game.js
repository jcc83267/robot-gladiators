var playerName=window.prompt("What is your robot's name?"); //ask for name
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//loging info
console.log(playerName, playerAttack, playerHealth);

var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;

var fight=function() {
    //Alert player that round is starting
    window.alert("Welcome to Robot Gladiators!");
    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to igth then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money
            playerMoney -= 2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }
    
}

fight();
