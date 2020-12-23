
var playerNames = [];

var ruleCount = 0;

const ruleDeck = [
    {
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Play never have I ever starting with 3 fingers up"
    },
    {
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Take a sip if you are wearing blue"
    },
    {
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Reverse buffalo is in effect"
    },
    {
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Play never have I ever starting with 3 fingers up"
    },
    {
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", kill your drink"
    },
    {
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", pack a bowl"
    },
    {
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", drink with two hands until your name is mentioned in a rule again"
    },
    {
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you're the question master. Anytime you ask someone a question and they respond, they have to drink one."
    },
    {
        "nameRule": true,
        "virusRule": true,
        "RuleString": ", talk in a British accent until the game tells you to stop"
    }

];


function getRandomPlayer() {
    var name = playerNames[Math.floor(Math.random() * playerNames.length)];
    return name
}

//This function deletes a player from the game on the click of the 'X' next to the player's name
function removePlayer(elem) {
    const list = document.getElementById('players-list')

    //This line is needed to get rid of the 'X' in the string after the actual player name
    nameString = elem.innerText.substring(0, elem.innerText.length - 2)

    console.log(nameString)


    const index = playerNames.indexOf(nameString);
    if (index > -1) {
        playerNames.splice(index, 1);
    }

    list.removeChild(elem);

    console.log("playernames is now without " + elem.innerText + ". This is the remaining list: " + playerNames)

}

function addPlayerName() {

    if (document.getElementById("playerName").value.length == 0) {
        alert("This player needs to have an actual name dude.")
    } else {
        playerNames.push(document.getElementById("playerName").value)

        const list = document.getElementById('players-list')
        list.innerHTML = list.innerHTML + "<li id = 'clicks'>" + document.getElementById("playerName").value + "          " + "<button type='button' class = 'btn btn-danger todo-delete' value = clicks onclick = 'removePlayer(this.parentElement)'>X</button></li>"
    }
    document.getElementById('playerName').value = ''
    console.log(playerNames)
}

//generates a random string that is 5 characters long so that we can ID virus rules to keep track of them
function generateVirusRuleID() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
}

//generates a random int between a min and and max int, (preferably 5 and 10)
//this function is meant for tracking the amount of rules after a specific virus has been displayed so that it can also end before the game ends
//probably want to have min always be around 5 and max always be around 10
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRule() {
    var rule = ruleDeck[Math.floor(Math.random() * ruleDeck.length)];

    if (ruleCount > 10) {
        document.getElementById("get_rule").style.visibility = "hidden"
        document.getElementById("rule").innerHTML = "Game Over!"
    } else {


        if (rule.virusRule == true) {
            document.getElementById('virus').innerHTML = "<span style='color: #696969; font-size: 50px'>Virus!</span>";
        } else {
            document.getElementById('virus').innerHTML = ''
        }


        if (rule.nameRule == true) {
            document.getElementById("playername").innerHTML = "<span style='color: #696969; font-size: 50px'>" + getRandomPlayer() + "</span>";
        } else {
            document.getElementById('playername').innerHTML = ''
        }


        document.getElementById("rule").innerHTML = "<span style='color: #696969; font-size: 50px'>" + rule.RuleString + "</span>";

        document.body.style.backgroundColor = getGoodLookingColor()

        ruleCount++;

        console.log(ruleCount);
    }
}


//This switches the game from the home page with the player names listed to diaplying actual rules
function startGame() {
    if (playerNames.length == 0) {
        alert("You need to enter at least one name to play!")
    } else {
        var divsToHide = document.getElementsByClassName("start");
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.visibility = "hidden";
            divsToHide[i].style.display = "none";
        }
        document.getElementById("get_rule").style.visibility = "visible"

        /* this is all logic for a color gradient animation that I thought would be a good idea but actually makes it hard to read the rules

        //does a color animation whenever a the game is started, super trippy and definitely not needed but hey I like to experiment w animations and colors
        document.body.style.transition = "background 3s";

        const randomColor = () => getColor()
        const changeColor = () => document.body.style.backgroundColor = randomColor()

        setInterval(() => {
            changeColor()
        }, 1000)

        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                changeColor()
            }
        }
        */
    }

}

/*selects random color from a range of shades derived from #FF474A taken from color.adobe.com*/
function getColor() {
    shadeArray = ["#FF474A", "#FF5C5F", "#FF3336", "#FF7073", "#FF1F22", "#FF8587", "#FF0A0E", "#FF999B", "#FF0004", "#FFADAF"]
    return shadeArray[Math.floor(Math.random() * shadeArray.length)];
}

/*Gets a random color that looks nice and also makes it easy to read gray text
  but also please feel free to change these colors bc idk if they actually look good with gray text lmao
*/

function getGoodLookingColor() {
    colorArray = ["#FF474A", "#FFE6A7", "#F487B6", "#FDE12D", "#6A8E7F", "#CD8B76", "#76B041", "#F0B67F", "#E1F2FE"]
    var colour = colorArray[Math.floor(Math.random() * colorArray.length)];
    console.log(colour);
    return colour;
}