
var playerNames = [];

function getRandomPlayer() {
    var name = playerNames[Math.floor(Math.random() * playerNames.length)];
    return name
}

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
    }

];

//This function deletes a list element selected
function removePlayer(elem) {
    const list = document.getElementById('players-list')

    //This line is needed to get rid of the 'X' in the string after the actual player
    nameString = elem.innerText.substring(0, elem.innerText.length - 1)


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
        list.innerHTML = list.innerHTML + "<li id = 'clicks'>" + document.getElementById("playerName").value + "          " +
            "</input>" + "<button type='button' class = 'btn btn-danger todo-delete' value = clicks onclick = 'removePlayer(this.parentElement)'>X</button></li>"
    }
    document.getElementById('playerName').value = ''

}

function getRule() {
    var rule = ruleDeck[Math.floor(Math.random() * ruleDeck.length)];

    if (rule.nameRule == true) {
        document.getElementById("playername").innerHTML = "<span style='color: #696969; font-size: 50px'>" + getRandomPlayer() + "</span>";
    } else {
        document.getElementById('playername').innerHTML = ''
    }


    document.getElementById("rule").innerHTML = "<span style='color: #696969; font-size: 50px'>" + rule.RuleString + "</span>";

    document.body.style.backgroundColor = getGoodLookingColor()
}

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
    colorArray = ["#FF474A", "#FFE6A7", "#8C2B76", "#F487B6", "#FDE12D", "#6A8E7F", "#CD8B76", "#76B041", "#F0B67F", "#E1F2FE"]
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}