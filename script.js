let navIcons = document.querySelector(".icons");
let hoverNav = document.querySelector(".links");
navIcons.addEventListener("mouseover", ()=>{
    hoverNav.classList.add("links-hover");
    navIcons.addEventListener("mouseleave", ()=>{
        hoverNav.classList.remove("links-hover")
    })
})
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

window.addEventListener("scroll", ()=>{
    let links = document.querySelector(".links");
    if(window.scrollY > 7){
        links.style.borderRadius= "0px";
    }
    else{
        links.style.borderRadius = "50px 0 0 0";
    }
})

