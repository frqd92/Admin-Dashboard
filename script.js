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