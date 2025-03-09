const inpt = document.querySelector("input");
const addBtn = document.querySelector(".addItm");
const itmContainer = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  let itm = document.createElement("li");
  let delBtn = document.createElement("button");
  let edtBtn = document.createElement("button");
  edtBtn.innerHTML = "Edit";
  delBtn.innerHTML = "delete";
  edtBtn.setAttribute("class", "edit");
  delBtn.setAttribute("class", "delete");
  let btnContainer = document.createElement("div");
  btnContainer.setAttribute("class", "buttons");
  btnContainer.appendChild(delBtn);
  btnContainer.appendChild(edtBtn);

  let inputVal = inpt.value;
  inpt.value = "";
  itm.setAttribute("class", "item");

  let txt = document.createTextNode(inputVal);
  itm.appendChild(btnContainer);
  itm.appendChild(txt);

  itmContainer.appendChild(itm);
  let edtsCount = document.querySelectorAll(".edit");
  let delsCount = document.querySelectorAll(".delete");
  delBtn.addEventListener("click", function (evt) {
    itm.remove();
    inpt.value = "";
  });

  edtBtn.addEventListener("click", function (evt) {
    addBtn.innerHTML = "Edit";

    let parent = edtBtn.parentElement.parentElement;
    addBtn.addEventListener("click", function (evt) {
      let newVal = document.querySelector("input").value;
      parent.innerHTML = newVal;
      addBtn.innerHTML = "Add";
      let sf = document.querySelectorAll("li");
      let ss = sf[0];
      // alert(ss.lenght);
      for (let i = 0; i < sf.length; i++) {
        let singular = sf[i];
        if (singular.lenght === 0) {
          singular.remove();
        }
      }
    });
  });
});
