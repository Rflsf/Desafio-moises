function validarFormulario() {
  var emailInput = document.getElementById("email")
  var senhaInput = document.getElementById("senha")

  if (emailInput.value.trim() === "" || senhaInput.value.trim() === "") {
    alert("Por favor, preencha todos os campos corretamente!")
    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error")
    }
    if (senhaInput.value.trim() === "") {
      senhaInput.classList.add("error")
    }
    return false
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailInput.value.match(emailRegex)) {
    alert("Por favor, insira um endereço de e-mail válido!")
    emailInput.classList.add("error")
    return false
  }

  alert("Formulário enviado com sucesso!")
  return true
}
