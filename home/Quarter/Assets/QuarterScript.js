
const prevNextBtn = document.querySelector('.mainContent .prevNextBTN .prevBTN');
var countItems = 1;
clearPage();
function clearPage() {
    for (var i = 1; i <= countPage.length; i++) {
        // alert(i)
        this["page" + i].style.display = "none";
    }
}
this["page" + 1].style.display = "flex";
function nextBTN() {

    countItems += 1;
    if (countItems > countPage.length) {
        countItems = countPage.length;
    } else {
        //alert(this["myContent"+countItems][0][0])
        // alert(["page"+1]);
        //this["page" + (countItems-1)].style.display = "none";
        clearPage();
        this["page" + countItems].style.display = "flex";
    }

}
function prevBTN() {
    countItems -= 1;
    if (countItems < 1) {
        countItems = 1;
    } else {
        // document.getElementById("titleCount").innerText = countItems.toString();
        clearPage();
        this["page" + countItems].style.display = "flex";
    }
}
