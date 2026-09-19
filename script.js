const button = document.querySelector("#recordButton");
const message = document.querySelector("#message");
const patientSelect = document.querySelector("#patientSelect");

button.addEventListener("click", () => {
  const patient = patientSelect.value;

  message.textContent = `${patient}のリハビリ記録を追加しました。`;
});