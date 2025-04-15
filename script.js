
let strong = document.querySelectorAll("strong")

console.log(strong)

function highlight() {
    //Write your code here
    for (let t of strong) {
  t.classList.remove("color2")
        t.classList.add("color1")
    }

}


function return_normal() {
    //Write your code here
for(let t of strong){
  t.classList.remove("color1")
  t.classList.add("color2")

}

}
