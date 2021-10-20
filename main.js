var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K","A"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var cuttedArray = [];
const hands = ['Royal flush', 'Straight flush', 'Four of a kind', 'Full house',
    'Flush', 'Straight', 'Three of a kind', 'Two pairs', 'Pair', 'High card']  

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
    document.getElementById('lblResult').innerHTML = '';
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck(true, deck);
}

function sortByLowToHigh() {
	if(cuttedArray.length) {
		cuttedArray.sort((a, b) => a.Value.localeCompare(b.Value));
	}
	console.log("cuttedArray", cuttedArray);
	renderDeck(false);
}

function renderDeck(isRerender, deck, isRunDeck)
{
    if(deck) cuttedArray = deck;
	document.getElementById('deck').innerHTML = '';
    document.getElementById('runDeck').innerHTML = '';

	for(var i = 0; i < cuttedArray.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + cuttedArray[i].Suit;
		value.innerHTML = cuttedArray[i].Value;
		card.appendChild(value);
		card.appendChild(suit);	
		if(!isRunDeck) document.getElementById("deck").appendChild(card);
        if(isRunDeck) document.getElementById("runDeck").appendChild(card);
	}
}

function runProcess() {
    var n = 5;
	const newArray = cuttedArray.length ? cuttedArray.slice(0, n) : deck.slice(0, n);
	cuttedArray = newArray;
    renderDeck(true, cuttedArray, true);
}


function PokerHand() {
    //get ranks of hands 
    
	const joinedValues = cuttedArray.length ? cuttedArray.map(r => r.Value + r.Suit.charAt(0)) : null;
	if(joinedValues == null) { showResult(null); return; }

    const handOne = joinedValues.join(' '); // ('AC 4S 5S 8C AH'); // joinedValues;
    //const handTwo = ('4S 5S 8C AS AD');
    
    let rankArray = [];
    let suitArray = [];

    
    let arrayHandOne = handOne.split(" ");
    //let arrayHandTwo = handTwo.split(" ");
    
    function sorted(arrayHand) { // added the parameter required
        let sortedHand = [];
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < arrayHand.length; j++ ) { 
                if (cards[i] === arrayHand[j].charAt(0)) {
                    sortedHand.push(arrayHand[j])
                }
            }   
        }
        return sortedHand;
    }
    
    
    let sortedHandOne = sorted(arrayHandOne); // sorted() did not take any parameters before
    //let sortedHandTwo = sorted(arrayHandTwo);
    function suitAndRank(sortedHand) { // changed the param name
        for (i = 0; i< sortedHand.length; i++) { // removed sted as is not really needed
            rankArray.push(sortedHand[i].charAt(0))
            suitArray.push(sortedHand[i].charAt(1)) 
        } 
    }
    
    suitAndRank(sortedHandOne); // was not being called before
    // suitAndRank(sortedHandTwo);
    
    function countSuites(suitArray) {
        let suitCount = {};
        suitArray.forEach(function(x) { suitCount[x] = (suitCount[x] || 0)+1; });
            return suitCount;
    }
    
    function countRanks(rankArray) {
        let rankCount = {};
        rankArray.forEach(function(x) { rankCount[x] = (rankCount[x] || 0)+1; });
            return rankCount;
    }
    
    function isFlush() {
        let cS = countSuites(suitArray);
        if(Object.keys(cS).find(key => cS[key] === 5)) {
            return true;
        } else {
            return false;
        }
    }
    
    function isStraight() {
        let index = cards.indexOf(rankArray[0])
        let ref = cards.slice(index, index + 5).join("")
        let section = rankArray.slice(0).join("")
            if (section === "10JQKA" && section === ref) {
                return "ROYALSTRAIGHT";
            } else if (section === "A2345" || section === ref) {
                return "STRAIGHT"; 
            }else {
                return "FALSE";
            }
    }
    
    function pairs() {
        let rS = countRanks(rankArray)
        return Object.keys(rS).filter((key) => rS[key] === 2).length
    }

	function showResult(result) {
		document.getElementById("lblResult").innerHTML = result ? result : 'No result';
	}
    
    
    function whichHand() {
        let rS = countRanks(rankArray)
        if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
            console.log('Royal Flush');
			showResult("Royal Flush");
        } else if (isFlush() === true && isStraight() === "STRAIGHT") {
            console.log("Straight Flush");
			showResult("Straight Flush");
        } else if (Object.keys(rS).find(key => rS[key] === 4)) {
            console.log("Four of a Kind");
			showResult("Four of a Kind");
        } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 2) {
            console.log("Full House");
			showResult("Full House");
        } else if (isFlush() === true) { // problem here as isFlush is a function not a variable, otherwise it returns undefined
            console.log("Flush");
			showResult("Flush");
        } else if (isStraight() === "STRAIGHT") { // problem again, isStraight is a function too so it should be isStraight() instead of isStraight, otherwise it returns undefined
            console.log("Straight");
			showResult("Straight");
        } else if (Object.keys(rS).find(key => rS[key] === 3)) {
            console.log("Three of a Kind");
			showResult("Three of a Kind");
        } else if (pairs() === 2) {
            console.log("Two Pair");
			showResult("Two Pair");
        }else if(pairs() === 1) {
            console.log("Pair");
			showResult("Pair");
        }else {
            console.log('High Card', rankArray[rankArray.length-1])
			showResult(`High Card ${rankArray[rankArray.length-1]}`);
        }
    }
    
      return whichHand();
    }
    
function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;