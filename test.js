function PokerHand() {
    //get ranks of hands 
    
    const handOne = ('AC 4S 5S 8C AH');
    //const handTwo = ('4S 5S 8C AS AD');
    
    let rankArray = [];
    let suitArray = [];
    
    // let rankArrayTwo = [];
    // let suitArrayTwo = [];
    
    const suits = ["C", "D", "H", "S"]
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    
    let arrayHandOne = handOne.split(" ");
    //let arrayHandTwo = handTwo.split(" ");
    
    function sorted(arrayHand) { // added the parameter required
        let sortedHand = [];
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < arrayHand.length; j++ ) { 
                if (ranks[i] === arrayHand[j].charAt(0)) {
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
        let index = ranks.indexOf(rankArray[0])
        let ref = ranks.slice(index, index + 5).join("")
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
    
    
    function whichHand() {
        let rS = countRanks(rankArray)
        if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
            console.log('Royal Flush')
        } else if (isFlush() === true && isStraight() === "STRAIGHT") {
            console.log("Straight Flush")
        } else if (Object.keys(rS).find(key => rS[key] === 4)) {
            console.log("Four of a Kind")
        } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 2) {
            console.log("Full House")
        } else if (isFlush() === true) { // problem here as isFlush is a function not a variable, otherwise it returns undefined
            console.log("Flush")
        } else if (isStraight() === "STRAIGHT") { // problem again, isStraight is a function too so it should be isStraight() instead of isStraight, otherwise it returns undefined
            console.log("Straight")
        } else if (Object.keys(rS).find(key => rS[key] === 3)) {
            console.log("Three of a Kind")
        } else if (pairs() === 2) {
            console.log("Two Pair")
        }else if(pairs() === 1) {
            console.log("Pair")
        }else {
            console.log('High Card', rankArray[rankArray.length-1])
        }
    }
    
      return whichHand();
    }
    
    // const hands = ['Royal flush', 'Straight flush', 'Four of a kind', 'Full house',
    //     'Flush', 'Straight', 'Three of a kind', 'Two pairs', 'Pair', 'High card']  
    //     //compare ranks of hands and return results 
    
    PokerHand();