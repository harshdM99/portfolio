// 1. SMOOTH SKILL WIDTH FILLING CODE
var skillsContainer = document.getElementById("skills-container");
var skillsInnerBox = document.querySelectorAll("#skills .inner-box");
var intervalId;

window.addEventListener("scroll", checkScroll)
var animationDone = false;
// var intervalId;

function initializeBars(){
    for(let bar of skillsInnerBox){
        bar.style.width = 0 + "%";
    }
}
initializeBars();

// CASE 1 
function fillBars(){
    for(let bar of skillsInnerBox){
        let newWidth = 0;
        let maxWidth = parseInt(bar.getAttribute("data-fill-value"));
        intervalId = setInterval(()=>{
            
            if(newWidth >= maxWidth) {
                clearInterval(intervalId);
                return;
            }
            newWidth++;
            bar.style.width = newWidth + "%";

        }, 10);
    }
}

// CASE 2
function fillBar(bar){
    let newWidth = 0;
    let maxWidth = parseInt(bar.getAttribute("data-fill-value"));
    let intervalId = setInterval(()=>{
        
        if(newWidth >= maxWidth) {
            clearInterval(intervalId);
            return;
        }
        newWidth++;
        bar.style.width = newWidth + "%";

    }, 10);
} 

var animationDoneArr = Array(skillsInnerBox.length).fill(false);
function checkScroll(){
    // CASE 1 : FILL ALL BARS WHENEVER CONTAINER IS VISIBLE
    // let yPosition = skillsContainer.getBoundingClientRect()['y'];

    // if(window.scrollY == 0){
    //     animationDone = false;
    // }
    // if(!animationDone && yPosition < window.innerHeight){
    //     console.log(yPosition);
    //     fillBars();
    //     animationDone = true;
    // }

    // FILL ONLY THE BARS WHICH ARE VISIBLE
    for(let i=0; i<skillsInnerBox.length; i++){
        let yPosition = skillsInnerBox[i].getBoundingClientRect()['y'];
        
        if(window.scrollY == 0){
            animationDoneArr[i] = false;
        }
        if(!animationDoneArr[i] && yPosition < window.innerHeight){
            fillBar(skillsInnerBox[i]);
            animationDoneArr[i] = true;
        }

    }
};