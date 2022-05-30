// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffee=JSON.parse(localStorage.getItem("coffee"));

var bucket =document.getElementById("bucket")
function displaydata(coffee){
    console.log(coffee)

    coffee.forEach(function(el){

        let box=document.createElement("div")

        let image=document.createElement("img");
        image.src=el.image;

        let title=document.createElement("h3");
        title.innerText=el.title;

        let price=document.createElement("h3");
        price.innerText=el.price;

        let btn=document.createElement("img");
        btn.innerText="remove_coffee";
        btn.setAttribute("id","remove_coffee")
        btn.innerHTML="checkout";
        btn.addEventListener("click",function(){
// locationChange()
        })
        
    })
}

