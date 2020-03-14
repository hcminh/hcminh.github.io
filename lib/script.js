const root = document.documentElement;
const cards = document.getElementsByClassName("card");
const setElement = document.getElementById("set");
const infomationElement = document.getElementById("infomation");

function clickCardEvent() {
    infomationElement.setAttribute("class", "show");
    setElement.setAttribute("class", "set-backforce");
}

function clickInfoEvent() {
    infomationElement.setAttribute("class", "");
    setElement.setAttribute("class", "");
}