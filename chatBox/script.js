const btnSend = document.querySelector("button");
const container = document.querySelector(".chats");
btnSend.addEventListener("click", sendMsg);
function sendMsg() {
  let input = document.querySelector("input");
  let inpVal = input.value;
  let newMsg = document.createElement("spam");
  let msgContent = document.createElement("p");
  msgContent.innerHTML = inpVal;
  newMsg.appendChild(msgContent);
  newMsg.setAttribute("class", "clientMsg");
  container.appendChild(newMsg);
  input.value = "";
}
