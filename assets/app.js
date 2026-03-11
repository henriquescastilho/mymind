const form = document.getElementById("prompt-form");
const promptOutput = document.getElementById("prompt-output");
const copyButton = document.getElementById("copy-output");
const stateNodes = {
  empty: document.querySelector('[data-state="empty"]'),
  loading: document.querySelector('[data-state="loading"]'),
  error: document.querySelector('[data-state="error"]'),
  success: document.querySelector('[data-state="success"]')
};

function showState(nextState) {
  Object.entries(stateNodes).forEach(([key, element]) => {
    element.classList.toggle("is-visible", key === nextState);
  });
}

function buildPrompt({ objetivo, publico, arquivos }) {
  return [
    "Voce vai me ajudar a construir a versao inicial de um projeto publico sem dados pessoais.",
    "",
    "Contexto base:",
    `- Objetivo: ${objetivo}`,
    `- Publico: ${publico}`,
    `- Arquivos iniciais esperados: ${arquivos.join(", ") || "README.md"}`,
    "",
    "Regras:",
    "- Nao incluir dados pessoais reais.",
    "- Usar placeholders para qualquer dado identificavel.",
    "- Entregar mudancas pequenas e revisaveis.",
    "- Incluir convite para contribuicoes e novas features no README.",
    "",
    "Entregue no final:",
    "1) O que mudou",
    "2) Arquivos alterados",
    "3) Como testar",
    "4) Riscos e rollback"
  ].join("\n");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const objetivo = document.getElementById("objetivo").value.trim();
  const publico = document.getElementById("publico").value.trim();
  const arquivos = [...document.querySelectorAll('input[name="arquivos"]:checked')].map(
    (node) => node.value
  );

  if (!objetivo || !publico) {
    showState("error");
    return;
  }

  showState("loading");

  window.setTimeout(() => {
    promptOutput.textContent = buildPrompt({ objetivo, publico, arquivos });
    showState("success");
  }, 850);
});

copyButton.addEventListener("click", async () => {
  const text = promptOutput.textContent;

  if (!text) {
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Prompt copiado";
  } catch {
    copyButton.textContent = "Nao foi possivel copiar";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copiar prompt";
  }, 1300);
});
