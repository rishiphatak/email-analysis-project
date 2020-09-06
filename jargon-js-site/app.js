

// var GitHub = require("github-api")

let aggieString = " ";

function addWord(word) {
    aggieString = (aggieString + " " + word)
    console.log(aggieString)
    document.getElementById("a1").innerHTML = aggieString
}

function addBoxWord() {
    if(document.getElementById("fname").value !="longhorns"){
        aggieString = (aggieString + " " + document.getElementById("fname").value)
        addWord("")
        document.getElementById("fname").value = ""
    }
    else{
        aggieString = "NO T-SIPS ALLOWED, SAW EM OFF"
    }
}

function createFile() {
    var blob = new Blob([aggieString], { type: "text/plain;charset=utf-8" });
  
    console.log(aggieString)

    saveAs(blob, "aggie.txt");

}


