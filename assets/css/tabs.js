let tabs = ["intro","experience","coding","security"]

function switchTab(tab="intro"){
    console.log("Starting switchTab()");
    for(let tabId in tabs){
        let articleElement = document.getElementById(tabs[tabId]);
        let navElement = document.getElementById("nav_"+tabs[tabId]);
        if(tab != tabs[tabId]){
            articleElement.style.display = "none"
            navElement.classList.remove("active");
        } else {
            articleElement.style.display = "block"
            navElement.classList.add("active");
        }
    }
}