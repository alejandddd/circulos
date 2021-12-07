let texto = document.getElementById("texto")
let formas = document.getElementById("formas");
let color = document.getElementById("color");
let btn = document.getElementById("btn");
let tasks = [];

console.log(texto.value);
console.log(formas.value)
console.log(color.value);

const get_data_localstorage = () => {
  tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
};


