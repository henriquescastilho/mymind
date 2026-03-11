# MyMind

MyMind e um repositório-base para organizar conhecimento e fluxos com IA sem expor dados pessoais.

Este projeto foi pensado para quem quer publicar materiais no GitHub com um processo claro de higienização, estrutura e colaboração.

## Objetivo

- Organizar conteúdo de forma reproduzível
- Reduzir risco de vazamento de dados sensíveis
- Criar um padrão prático para uso com Codex ou Claude Code

## O que existe hoje

- `MODELO_CORINGA_COPILOTOS.md`: prompt-base para saneamento de dados e organização antes de abrir o repositório
- `KIT_PERGUNTAS_E_PROMPT.md`: kit anonimo de perguntas + prompt final para Codex/Claude Code construir a primeira versao

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

3. Abra e adapte o modelo:
```bash
cat MODELO_CORINGA_COPILOTOS.md
```

4. Execute a triagem local de riscos antes de qualquer publicação:
```bash
rg -n "@|cpf|telefone|tel|endereco|address|token|secret|senha|password|api[_-]?key|bearer|cookie" .
```

## Convite para novas features

Contribuições são bem-vindas, especialmente para:

- novos templates de organização
- checklists de privacidade para diferentes contextos
- automações de validação local antes de `git push`
- exemplos de estrutura pública sem dados sensíveis

Se quiser propor algo:

1. Abra uma issue com problema, contexto e proposta objetiva.
2. Se houver alinhamento, abra um PR pequeno e fácil de revisar.
3. Evite incluir qualquer dado pessoal real nos exemplos.

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

Se identificar qualquer informação sensível no histórico, trate antes de continuar. Em casos necessários, reescreva o histórico com ferramentas adequadas e valide com backup.
