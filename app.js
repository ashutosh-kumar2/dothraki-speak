var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector(".output")

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occurred", error)
    alert("Something wrong with server. Please try again after some time")
}

function clickHandler(){
    var inputText = txtInput.value //input
    fetch(getTranslationURL(inputText)) //calling server for processing
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);