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
let icons = document.querySelector(".icons")



icons.addEventListener("mouseover", (e)=>{
    let eTar = e.target.classList;

    if(eTar[0]!==undefined && eTar[0].includes("nav-svg")){
        let index = eTar[1] - 1;
        navName[index].classList.add("links-hovered");
        navSvgs[index].addEventListener("mouseleave", ()=>{
            navName[index].classList.remove("links-hovered");
        })
    }
})




// document.addEventListener("click", (e)=>{
  
//     if(e.target.classList=="svg-li" || e.target.classList=="nav-svg"){
        
//     }
    
// })









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


