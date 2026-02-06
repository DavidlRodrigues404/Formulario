import { carregarEstados, carregarCidades, carregarVagas } from "./api.js";
import { configurarFormulario } from "./form.js";
import { opcoes, maxVagas } from "./config.js";

const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");

async function init() {

  // Estados
  const estados = await carregarEstados();
  estado.innerHTML = '<option value="">Selecione...</option>';
  estados.forEach(e => {
    estado.innerHTML += `<option value="${e.sigla}">${e.nome}</option>`;
  });

  estado.addEventListener("change", async () => {
    const cidades = await carregarCidades(estado.value);
    cidade.innerHTML = '<option value="">Selecione...</option>';
    cidades.forEach(c => {
      cidade.innerHTML += `<option value="${c.nome}">${c.nome}</option>`;
    });
  });

  // Vagas
  const dados = await carregarVagas();
  opcoes.forEach(op => {
    const ocup = dados[op.val] || 0;
    const rest = maxVagas - ocup;
    document.getElementById(`vagas-${op.id}`).textContent =
      rest <= 0 ? "ESGOTADO" : `${rest} vagas`;
  });

  configurarFormulario();
}

init();
