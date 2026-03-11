# MyMind

MyMind é um repositório-base para organizar conhecimento e fluxos com IA sem expor dados pessoais.

O projeto foi pensado para quem quer publicar materiais no GitHub com processo claro de higienização, estrutura e colaboração.

## Objetivo

- Organizar conteúdo de forma reproduzível
- Reduzir risco de vazamento de dados sensíveis
- Criar um padrão prático para uso com Codex ou Claude Code

## O que existe hoje

- `MODELO_CORINGA_COPILOTOS.md`: prompt-base para saneamento de dados e organização antes de abrir o repositório
- `KIT_PERGUNTAS_E_PROMPT.md`: kit anônimo de perguntas + prompt final para Codex ou Claude Code gerar a primeira versão

## Como usar

1. Clone o repositório:
```bash
git clone https://github.com/<seu-usuario>/mymind.git
cd mymind
```

2. Preencha o kit de perguntas:
```bash
cat KIT_PERGUNTAS_E_PROMPT.md
```

3. Cole o prompt final no Codex ou Claude Code com suas respostas:
```bash
cat MODELO_CORINGA_COPILOTOS.md
```

4. Execute a triagem local antes de qualquer publicação:
```bash
rg -n "@|cpf|telefone|tel|endere[çc]o|address|token|secret|senha|password|api[_-]?key|bearer|cookie" .
```

## Convite para novas features

Contribuições são bem-vindas, especialmente para:

- novos templates de organização
- checklists de privacidade para diferentes contextos
- automações de validação local antes de `git push`
- exemplos de estrutura pública sem dados sensíveis

Para contribuir:

1. Abra uma issue com contexto, problema e proposta objetiva.
2. Alinhe o escopo antes de implementar.
3. Envie PR pequeno, direto e fácil de revisar.
4. Não inclua dados pessoais reais em exemplos, commits ou histórico.

## Padrão de contribuição

- Mudanças pequenas, com escopo claro
- Sem segredos, credenciais ou PII em commits
- Mensagens de commit diretas
- Prioridade para segurança e verificabilidade

## Roadmap inicial

- [ ] Adicionar `docs/PRIVACY.md` com política pública de dados
- [ ] Adicionar `CONTRIBUTING.md` com fluxo de PR
- [ ] Adicionar verificações automáticas para padrões sensíveis
- [ ] Criar templates por tipo de projeto (pessoal, produto, pesquisa)

## Segurança

Se identificar informação sensível no histórico, trate antes de continuar. Quando necessário, reescreva histórico com ferramenta adequada e validação com backup.
