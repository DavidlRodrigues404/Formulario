export function showToast(message, type = "error") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div>${type === "error" ? "⚠️" : "✅"}</div>
    <div><strong>${type === "error" ? "Atenção" : "Sucesso"}</strong><br>${message}</div>
  `; 
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++)
    soma += cpf[i] * (10 - i);

  let resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto != cpf[9]) return false;

  soma = 0;
  for (let i = 0; i < 10; i++)
    soma += cpf[i] * (11 - i);

  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;

  return resto == cpf[10];
}
