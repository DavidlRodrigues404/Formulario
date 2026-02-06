import { scriptURL, maxVagas, opcoes } from "./config.js"; 

export function carregarEstados() {
  return fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(r => r.json());
}

export function carregarCidades(uf) {
  return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .then(r => r.json());
}

export function carregarVagas() {
  return fetch(scriptURL).then(r => r.json());
}

export function enviarFormulario(form) {
  return fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  }).then(r => r.json());
}
