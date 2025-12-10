# Contributing to github-stack-cli

[English](#english) | [Português](#português)

---

## English

Thank you for your interest in contributing to github-stack-cli! This document provides guidelines for contributing to the project.

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/github-stack-cli.git`
3. Install dependencies: `bun install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

### Development Workflow

1. Make your changes
2. Run tests: `bun test`
3. Check code style: `bun run lint`
4. Format code: `bun run format`
5. Type check: `bun run typecheck`

### Code Style

- We use ESLint and Prettier for code formatting
- Run `bun run format` before committing
- Follow TypeScript best practices
- Add proper type annotations
- Avoid using `any` type when possible

### Commit Messages

We follow the Conventional Commits specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add support for organization analysis
fix: handle rate limit errors correctly
docs: update installation instructions
```

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage

### Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass
3. Update documentation if you're changing functionality
4. Link any relevant issues in the PR description
5. Wait for review from maintainers

### Reporting Bugs

When reporting bugs, please include:

- Operating system and version
- Bun version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages or screenshots

### Feature Requests

We welcome feature requests! Please:

- Check if the feature has already been requested
- Clearly describe the feature and its use case
- Explain why it would be useful to most users

---

## Português

Obrigado pelo seu interesse em contribuir com github-stack-cli! Este documento fornece diretrizes para contribuir com o projeto.

### Começando

1. Faça um fork do repositório
2. Clone seu fork: `git clone https://github.com/SEU_USUARIO/github-stack-cli.git`
3. Instale as dependências: `bun install`
4. Crie uma nova branch: `git checkout -b feature/nome-da-sua-feature`

### Fluxo de Desenvolvimento

1. Faça suas alterações
2. Execute os testes: `bun test`
3. Verifique o estilo do código: `bun run lint`
4. Formate o código: `bun run format`
5. Verifique os tipos: `bun run typecheck`

### Estilo de Código

- Usamos ESLint e Prettier para formatação de código
- Execute `bun run format` antes de fazer commit
- Siga as melhores práticas do TypeScript
- Adicione anotações de tipo apropriadas
- Evite usar o tipo `any` quando possível

### Mensagens de Commit

Seguimos a especificação Conventional Commits:

- `feat:` - Novas funcionalidades
- `fix:` - Correções de bugs
- `docs:` - Alterações na documentação
- `style:` - Alterações de estilo de código (formatação, etc.)
- `refactor:` - Refatoração de código
- `test:` - Adição ou atualização de testes
- `chore:` - Tarefas de manutenção

Exemplos:
```
feat: adiciona suporte para análise de organizações
fix: trata erros de limite de taxa corretamente
docs: atualiza instruções de instalação
```

### Testes

- Escreva testes para novas funcionalidades
- Garanta que todos os testes passem antes de submeter PR
- Busque boa cobertura de testes

### Processo de Pull Request

1. Atualize o README.md se necessário
2. Garanta que todos os testes passem
3. Atualize a documentação se estiver alterando funcionalidades
4. Vincule quaisquer issues relevantes na descrição do PR
5. Aguarde a revisão dos mantenedores

### Reportando Bugs

Ao reportar bugs, por favor inclua:

- Sistema operacional e versão
- Versão do Bun
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Mensagens de erro ou screenshots

### Solicitações de Funcionalidades

Aceitamos solicitações de funcionalidades! Por favor:

- Verifique se a funcionalidade já foi solicitada
- Descreva claramente a funcionalidade e seu caso de uso
- Explique por que seria útil para a maioria dos usuários
