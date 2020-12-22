
var playerNames = [];

function getRandomPlayer() {
    var name = playerNames[Math.floor(Math.random() * playerNames.length)];
    return name
}

const ruleDeck = [
    {
        "nameRule": false,
        "RuleString": "Take 3 sips if you say someone elses name"
    },
    {
        "nameRule": false,
        "RuleString": "Take a sip if you are wearing blue"
    },
    {
        "nameRule": false,
        "RuleString": "Reverse buffalo is in effect"
    },
    {
        "nameRule": false,
        "RuleString": "Switch shirts with the person to your left"
    },
    {
        "nameRule": true,
        "RuleString": ", kill your drink"
    }
];

const MIN_SIP = 2
const MAX_SIP = 6

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
        document.getElementById("playername").innerHTML = "<span style='color: gray; font-size: 50px'>" + getRandomPlayer() + "</span>";
    } else {
        document.getElementById('playername').innerHTML = ''
    }


    document.getElementById("rule").innerHTML = "<span style='color: gray; font-size: 50px'>" + rule.RuleString + "</span>";

    document.body.style.backgroundColor = getColor()
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
        document.body.style.transition = "background 3s";

        const randomColor = () => getColor()
        const changeColor = () => document.body.style.backgroundColor = randomColor()

        setInterval(() => {
            changeColor()
        }, 1000)

        // start color animation as soon as document is ready
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                changeColor()
            }
        }
    }

}


function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)'
}



const list = document.getElementById('todo-list')


//This function deletes a list element selected
function deleteToDo(elem) {

    list.removeChild(elem);

}




