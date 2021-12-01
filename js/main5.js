let mail=document.querySelector('.name-js')
let phone=document.querySelector('.phone-js')

let elem1 = document.querySelector('.btn-js')

function regi(){
    if (mail.value !='' && phone.value !=''){
        alert("Спасибо за то, что выбрали нас. В ближайшее время мы с вами свяжемся.")
        window.location.href="index.html"
    }
    else {
        alert("Незваный гость. Уходи!")}
}
