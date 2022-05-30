// Add the coffee to local storage with key "coffee"


let url="https://masai-mock-api.herokuapp.com/coffee/menu";
let coffee=JSON.parse(localStorage.getItem("coffee"))||[];
let data=fetch(url)
.then(function(data){
    return data.json();
    
})
.then(function(data){
    console.log(data)
    displaydata(data.menu.data);
})
.catch(function(data){
    console.log(data);
})

var menu=document.getElementById("menu")
function displaydata(data){
    console.log(data)
    data.forEach(function(el){
        console.log(el)
        let box=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let title=document.createElement("h2");
        title.innerText=el.title;
        let price=document.createElement("h2");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function(){
            addtobucket(el)
        })

        btn.innerText="Add To Bucket";
        btn.style.cursor="pointer"
        

        box.append(img,title,price,btn);
        menu.append(box);
    })
    
}
function addtobucket(element){
    bucket.push(element)
    localStorage.setItem("coffee",JSON.stringify(coffee))
}
console.log(bucket);





