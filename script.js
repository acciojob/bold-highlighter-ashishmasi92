
let strong = document.querySelectorAll("strong")

console.log(strong)

function highlight() {
    //Write your code here
    for (let t of strong) {
        t.style.color = "#008002"
    }

}


function return_normal() {
    //Write your code here
for(let t of strong){
    t.style.color= "	#000000"
}

}
