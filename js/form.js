import { validarCPF, showToast } from "./utils.js";
import { enviarFormulario } from "./api.js";

export function configurarFormulario() {
  const form = document.getElementById("formCadastro");
  const btn = document.getElementById("btnEnviar");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cpf = document.getElementById("cpf").value;
    if (!validarCPF(cpf)) {
      showToast("CPF inválido");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Enviando...";

    try {
      const res = await enviarFormulario(form);

      if (res.result === "success") {
        document.getElementById("modalSucesso").style.display = "flex";
      } else if (res.message === "CPF_DUPLICADO") {
        showToast("CPF já cadastrado");
      }
    } catch {
      showToast("Erro de conexão");
    }

    btn.disabled = false;
    btn.textContent = "Confirmar Agendamento";
  });
}
