var buttonsPlus = document.querySelectorAll(".bi-plus-square-fill")
var buttonsMoins = document.querySelectorAll(".bi-dash-square-fill")
var buttonsSupp = document.querySelectorAll(".btn-danger")
var total = document.querySelector(".total").firstChild
var subtotal = document.querySelector(".sub-total")

Array.from(buttonsPlus).map(el => {
    el.addEventListener("click", () => {
        console.log(el.previousElementSibling.innerHTML)
        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) + 1
        let price = el.parentElement.nextElementSibling.innerHTML.replace(" Dt", "")
       subtotal.innerHTML = parseInt(subtotal.innerHTML.replace(" Dt", "")) + parseInt(price) 
       total.innerHTML = parseInt(total.innerHTML.replace(" Dt", "")) + parseInt(price)
    })
})
Array.from(buttonsMoins).map(el=>{
    el.addEventListener("click", ()=>{
        if(el.nextElementSibling.innerHTML > 1){
        console.log(el.nextElementSibling.innerHTM)
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) - 1
        let price = el.parentElement.nextElementSibling.innerHTML.replace(" Dt", "")
        subtotal.innerHTML = parseInt(subtotal.innerHTML.replace(" Dt", "")) - parseInt(price) 
        total.innerHTML = parseInt(total.innerHTML.replace(" Dt", "")) - parseInt(price)
    }})
})
console.log(buttonsSupp)
Array.from(buttonsSupp).map(el=>{
    el.addEventListener("click", ()=>{
        el.parentElement.parentElement.remove()
    })
})