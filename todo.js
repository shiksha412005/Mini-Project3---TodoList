let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let newul = document.createElement("li");
  newul.innerText = inp.value;

  let dltBtn = document.createElement("button");
  dltBtn.innerText = "delete";
  dltBtn.classList.add("delete");
  newul.appendChild(dltBtn);

  ul.appendChild(newul);
  inp.value = "";
});

//------------------------------------------Event delegation----------------------------------//

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let par = event.target.parentElement;
    par.remove();
  }
});
