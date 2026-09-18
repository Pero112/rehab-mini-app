const button = document.querySelector("#recordButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "リハビリ記録を追加しました。";
});