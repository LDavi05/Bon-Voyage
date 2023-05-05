const configZone = document.querySelector(".config-zone");
const configBTN = document.querySelector(".config-btn");
const configBTN2 = document.querySelector(".config-btn2");
const closeConfigBTN = document.querySelector(".close-config");

const openConfig = () => {
  configZone.classList.remove("config-closed");
}

const closeConfig = () => {
  configZone.classList.add("config-closed");
}

configBTN.addEventListener("click", openConfig);
configBTN2.addEventListener("click", openConfig);
closeConfigBTN.addEventListener("click", closeConfig);
