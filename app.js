const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addList = document.querySelector(".add-list");

addList.addEventListener("click", function () {
  // create an LI
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  // Add input value

  newLi.appendChild(liContent);
  //Attach to UL
  userList.appendChild(newLi);
});
