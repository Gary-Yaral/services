const title = document.querySelector("#title");
const text = document.querySelector("#message");
const year = document.querySelector("#year");
const btnClose = document.querySelector("#whatsapp");
const date = new Date();

function showModal(service) {
  document.getElementById("modal").classList.remove("hidden");
  title.value = service;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  sendMesage();
});

function sendMesage() {
  if (title.value.length === 0) {
    Swal.fire({
      title: "Atención",
      icon: "info",
      text: "Debes escribir el tipo de servicio",
    });
    return;
  }

  if (text.value.length === 0) {
    Swal.fire({
      title: "Atención",
      icon: "info",
      text: "Debes describir tu idea...",
    });
    return;
  }
  let string = "📱 *";
  for (let i = 0; i < title.value.length; i++) {
    let char = title.value[i];
    if (char === " ") {
      char = "%20";
    }
    string = string + char;
  }

  string += "*%20✅%0A";

  for (let i = 0; i < text.value.length; i++) {
    let char = text.value[i];
    if (char === " ") {
      char = "%20";
    }
    string = string + char;
  }

  title.value = "";
  text.value = "";
  closeModal();
  window.location =
    "https://api.whatsapp.com/send?phone=593982055157&text=" + string;
}

year.innerHTML = date.getFullYear();
