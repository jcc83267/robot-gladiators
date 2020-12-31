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
//player info
var playerInfo={
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;  
    }, //commma!
    refillHealth: function() {
        if(playerInfo.money>=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            //increase health and decrease money
            this.health += 20;
            this.money -= 7;
            console.log("player's health is " + playerInfo.health);
        }
        else {
            window.alert("You don't have enough money!");
        }
    }, //commma!
    upgradeAttack: function() {
        if(playerInfo.money>=7) {
            window.alert("Upgradin player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
            console.log("player's attack is " + playerInfo.attack);
        }
        else {
            window.alert("You don't have enough money!");
        } 
    }
}
//loging info
console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money);
//enemy info
var enemyInfo= [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Andriod",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
]

//function to fight robots
var fight=function(enemy) {
    //Alert player that round is starting
    while(enemy.health > 0 && playerInfo.health > 0) {
        var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to skip  
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip=window.confirm("Are you sure you'd like to quit?");
            //if yes leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerInfo.money=Math.max(0, playerInfo.money-10);
                console.log("playerInfo.money ", playerInfo.money);
                break;
            }
        }
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        var damage=randomNumber(enemy.attack - 3, enemy.attack);
        enemy.health=Math.max(0, enemy.health-damage);
        // Log a resulting message to the console so we know that it worked.            
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        //Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            //award player money for winning
            playerInfo.money += 20;
            //leave loop
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        damage=randomNumber(playerInfo.attack-3,playerInfo.attack);
        playerInfo.health=Math.max(0, playerInfo.health-damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        //Check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }    
}

//function to start game
var startGame=function() {
    //reset player stats
    playerInfo.reset();
    for(var i=0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //let players know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemy.health before starting new fight
            pickedEnemyObj.health=randomNumber(40, 60);
            //use debugger to pause script from running and check
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) { 
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE"://new case
        case "leave":
            window.alert("leaving the store.");
            //do nothing function will end
            break;
        case "godmode":
            playerInfo.attack=99;
            playerInfo.health=999;
            playermoney=999;
            break;
        default:
            window.alert("You did not pick a valid option. Try again");
            shop();
            break;
    }
}

//start the game when the page loads
startGame();









