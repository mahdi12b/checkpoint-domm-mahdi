// BOUTON (+) //
// declration des variables
let btnPlus = document.querySelectorAll(".plus");

let qte = document.querySelectorAll(".qte");
// evenets
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    // alert("hello");
     qte[i].innerHTML++;
    // qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
  });
}
// BOUTON (-) //
let btnMoins = document.querySelectorAll('.moins')
for (let i = 0; i < btnMoins.length  ; i++) {
  btnMoins[i].addEventListener('click', () => {
    if (qte[i].innerHTML > 1 ) {
    qte[i].innerHTML = Math.abs(Number(qte[i].innerHTML) - 1)
    }
  });
  }
  // DELETE /
  let closee = document.querySelectorAll('.close')
  for ( let i = 0 ; i < closee.length ; i++){
    closee[i].addEventListener('click', () => {
      closee[i].parentNode.parentNode.parentNode.parentNode.removeChild(closee[i].parentNode.parentNode.parentNode)
      prixTotal.innerHTML = prixTotal.innerHTML - (prixElem[i].innerHTML*qte[i].innerHTML)
    })
  }

  // LIKE //
like = document.querySelectorAll('#like')
for ( let i = 0 ; i < like.length ; i++ ){
  like[i].addEventListener('dblclick', () => {
     if(like[i].classList.contains ('far')){
       like[i].classList.remove('far')
       like[i].classList.add('fas')
     }
     else if ( like[i].classList.contains('fas')){
       like[i].classList.remove('fas')
       like[i].classList.add('far')
     }
  }
  )}


  // btnPlus prix tottal //
let prixTotal = document.querySelector('.totalPrice')
 let prixElem = document.querySelectorAll('.priceElem')
 for ( let i = 0 ; i < btnPlus.length ; i++){
  btnPlus[i].addEventListener('click', () => {
    btnMoins[i].removeAttribute('disabled')
   prixTotal.innerHTML= Number(prixTotal.innerHTML) + Number(prixElem[i].innerHTML) 
 })}


// btnMoins prix totql 
for ( let i = 0 ; i < btnMoins.length ; i++){
  btnMoins[i].addEventListener('click', () =>{
    if ( qte[i].innerHTML >= 1){
     
    if ( qte[i].innerHTML == 1){
      btnMoins[i].setAttribute('disabled', '')
    }
     prixTotal.innerHTML =  Number(prixTotal.innerHTML) - Number(prixElem[i].innerHTML)
    }
  })
}










 
 

 

