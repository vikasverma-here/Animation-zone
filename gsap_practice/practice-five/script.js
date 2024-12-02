let heading = document.querySelector("h1")

let text = heading.textContent

let spliting = text.split("")
const divide = text.length/2

let clutter = ""
spliting.forEach((ele , ind)=>{
    if(ind<divide){
     clutter+=`<span class="a" >${ele}</span>`
    }else{
        clutter+=`<span class="b" >${ele}</span>`
    }
})

heading.innerHTML=clutter

gsap.from("h1 .a",{
    y:150,
    opacity:0,
    duration:1,
    stagger:0.2
})
gsap.from("h1 .b",{
    y:-150,
    opacity:0,
    duration:1,
    stagger:0.2
})

console.log(clutter)
console.log(text)
console.log(divide)
console.log(spliting)