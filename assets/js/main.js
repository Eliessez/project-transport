const menuBurger = document.querySelector("#burger");
const navigation = document.querySelector('#navigation');
menuBurger.addEventListener('click',()=>{
    navigation.classList.toggle('active')
})
document.addEventListener('click', (e)=>{
  if (!menuBurger.contains(e.target)) {
    navigation.classList.remove('active')
  }
})

const buttonMenuTransporteur = document.querySelector("#transport");
const subMenuTransporteur = document.querySelector("#submenu-transporteur ");

buttonMenuTransporteur.addEventListener("click", () => {
  subMenuTransporteur.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !buttonMenuTransporteur.contains(e.target) &&
    !subMenuTransporteur.contains(e.target)
  ) {
    subMenuTransporteur.classList.remove("active");
  }
});

const buttonMenuParticulier = document.querySelector("#particulier");
const subMenuParticulier = document.querySelector("#submenu-particulier");

buttonMenuParticulier.addEventListener("click", () => {
  subMenuParticulier.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (
    !buttonMenuParticulier.contains(e.target) &&
    !subMenuParticulier.contains(e.target)
  ) {
    subMenuParticulier.classList.remove("active");
  }
});

const buttonMenuMoncompte = document.querySelector("#mon-compte");
const subMenuMoncompte = document.querySelector("#submenu-mon-compte");

buttonMenuMoncompte.addEventListener("click", () => {
  subMenuMoncompte.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!buttonMenuMoncompte.contains(e.target)) {
    subMenuMoncompte.classList.remove("active");
  }
});
