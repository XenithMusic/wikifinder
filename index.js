function begin() {
    goal = document.getElementById("goalpage")
    goalsrc = goal.contentWindow.location.href
    console.log(goalsrc)
    goal.setAttribute("src","https://randomincategory.toolforge.org/?category=Wikipedia%20level-4%20vital%20articles&cmnamespace=&cmtype=&returntype=subject")
}
function submit() {
    if (typeof goalsrc !== 'undefined') {
        console.log("checking")
        currentsrc = goal.contentWindow.location.href
        console.log(currentsrc)
        if (goalsrc == currentsrc) {
            console.log("woo")
        } else {
            console.log("damn you")
        }
    }
}
setTimeout(begin,5000)