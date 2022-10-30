//user profile window
let profileIcon = document.querySelector(".user");
let profileWindow = document.querySelector(".user-info");

profileIcon.addEventListener("click", ()=>{
    let visibility = profileWindow.classList.length;
    if(visibility===3){
        profileWindow.classList.remove("user-info-hidden");
    }
    else{
        profileWindow.classList.add("user-info-hidden");
    }
})
document.addEventListener("click", (e)=>{
    if(e.target.className=="icon user"){}
    else if(e.target.className!=="fil"){
        profileWindow.classList.add("user-info-hidden");
   }
})

let notifications = document.querySelector(".notifications");
let bell = document.querySelector(".bell");
bell.addEventListener("click", ()=>{
    let visibility = notifications.classList.length;
    if(visibility===3){
        notifications.classList.remove("notifications-hidden");
    }
    else{
       notifications.classList.add("notifications-hidden");
    }
})
document.addEventListener("click", (e)=>{
    if(e.target.className=="icon bell"){}
    else if(e.target.className!=="fil2"){
        notifications.classList.add("notifications-hidden");
   }
})




//For secondary nav menu to appear on hover
let navIcons = document.querySelector(".icons");
let hoverNav = document.querySelector(".links");
navIcons.addEventListener("mouseover", ()=>{
    hoverNav.classList.add("links-hover");
    navIcons.addEventListener("mouseleave", ()=>{
        hoverNav.classList.remove("links-hover")
    })
})


//make nav menu more interactive
let navSvgs = document.getElementsByClassName("nav-svg");
let svgLi = document.getElementsByClassName("svg-li");
let navName = document.getElementsByClassName("nav-name");


//blue hover effect
document.addEventListener("mouseover", (e)=>{
    let eTar = e.target.classList;
    if(eTar[0]!==undefined && eTar[0].includes("nav-svg")){
        let index = eTar[1] - 1;
        navName[index].classList.add("links-hovered");
        navSvgs[index].addEventListener("mouseleave", ()=>{
            navName[index].classList.remove("links-hovered");
        })
    }
})

//nav click
for(let x=0;x<navSvgs.length;x++){
    navSvgs[x].addEventListener("click",()=>{
        let length = navSvgs[x].classList.length;
        if(length==2){
            navSvgs[x].classList.add("icons-clicked");
            navName[x].classList.add("links-clicked");
            removeOthers(x);
        }
        else{
            navSvgs[x].classList.remove("icons-clicked");
        }
        if(x!==0){
            underConstruction(x);
        }
        if(x==0){
            cardContainer.style.visibility="visible";
            underC.style.visibility="hidden";
            currentTitle.textContent="Dashboard";
    
        }
    });
}
function removeOthers(x){
    for(let z=0;z<navSvgs.length;z++){
        if(z===x){}
        else{
            navSvgs[z].classList.remove("icons-clicked")
            navName[z].classList.remove("links-clicked");
    }
    }            
}
let underC = document.getElementById("under-construction");
let currentTitle = document.getElementById("current-title");
function underConstruction(x){
    switch(x){
        case 1: 
        currentTitle.textContent="Workouts"; break;
        case 2:
        currentTitle.textContent="Statistics"; break;
        case 3:
        currentTitle.textContent="History"; break;
        case 4:
        currentTitle.textContent="Settings"; break;
        case 5:
        currentTitle.textContent="Support"; break;
    }
    underC.style.visibility="visible";
    cardContainer.style.visibility="hidden";

}


//for bullshit graph thing
window.onload = function selectDropdown(){
    let graphTime = document.querySelector(".graph-time");
    let graphCal = document.querySelector(".graph-calories");
    let select = document.getElementById("select-weekly");
    select.addEventListener("input", ()=>{
        if(select.value === "time"){
            graphTime.style.display="block";
            graphCal.style.display="none";
        }
        else{
            graphTime.style.display="none";
            graphCal.style.display="block";
        }
    })
}

// hide/show announcement aside section on right
let hideAnn = document.querySelector(".hide-ann");
let showAnn = document.querySelector(".show-ann");
let ann = document.querySelector(".announcements");
let cardContainer = document.querySelector(".card-container");
hideAnn.addEventListener("click", ()=>{
    cardContainer.classList.add("card-container-hidden-ann");
    ann.style.display="none";
    showAnn.style.display="block";
    showAnn.addEventListener("click", ()=>{
        showAnn.style.display="none";
        ann.style.display="grid";
        cardContainer.classList.remove("card-container-hidden-ann");
        
    })
})

//this shit doesn't even work
window.addEventListener("scroll", ()=>{
    let links = document.querySelector(".links");
    if(window.scrollY > 7){
        links.style.borderRadius= "0px";
    }
    else{
        links.style.borderRadius = "50px 0 0 0";
    }
})


//unnecessary stuff
let editBtn = document.querySelector(".edit-button");
editBtn.addEventListener("click", saveFunc);
function saveFunc(){
    let statDiv = document.querySelectorAll(".stat-figure");
    for(let x=0;x<statDiv.length;x++){
        statDiv[x].addEventListener("input", ()=>{
            if(statDiv[x].textContent.length>4){
                statDiv[x].textContent=statDiv[x].textContent.slice(0,-1);
            }
        })
        statDiv[x].contentEditable=true;
        statDiv[x].classList.add("div-input-on");
    }
    editBtn.textContent="Save";
    editBtn.removeEventListener("click", saveFunc);
    editBtn.addEventListener("click", ()=>{
        editBtn.textContent="Edit";
        for(let x=0; x<statDiv.length;x++){
        statDiv[x].contentEditable=false;
        statDiv[x].classList.remove("div-input-on");
        }
       editBtn.addEventListener("click", saveFunc);
    })
}


