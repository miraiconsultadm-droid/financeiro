# 💰 Sistema de Controle Financeiro e Investimentos

Um sistema completo de controle financeiro pessoal desenvolvido com tecnologias modernas.

## 🎯 Funcionalidades

- 📊 **Controle de Gastos**: Registre gastos diários com suporte a parcelas
- 💼 **Plano de Contas**: Estruturado em CENTRO, CLASSIFICAÇÃO e RUBRICA
- 💳 **Meios de Pagamento**: Gerencie diferentes formas de pagamento
- 📈 **Investimentos**: Acompanhe sua carteira de investimentos
- 📥 **Importação/Exportação**: Importe dados do Excel e exporte relatórios
- 🎨 **Design MirAI**: Interface moderna com dark mode e cores vibrantes

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Banco de Dados**: Supabase (PostgreSQL)
- **ORM**: Drizzle ORM
- **Deploy**: Vercel + GitHub
- **Autenticação**: Manus OAuth

## 📋 Pré-requisitos

- Node.js 18+
- pnpm
- Conta no GitHub
- Conta no Vercel
- Conta no Supabase

## 🛠️ Instalação Local

```bash
# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Fazer push das migrações
pnpm db:push

# Iniciar desenvolvimento
pnpm dev
```

## 📦 Deploy

Veja [DEPLOY.md](./DEPLOY.md) para instruções completas de deploy no Vercel.

## 📁 Estrutura do Projeto

```
.
├── client/                 # Frontend React + Vite
│   └── src/
│       ├── pages/         # Páginas da aplicação
│       ├── components/    # Componentes reutilizáveis
│       ├── lib/           # Utilitários
│       └── hooks/         # Custom hooks
├── server/                # Backend Express
├── drizzle/               # Schema e migrações
├── public/                # Arquivos estáticos
├── DEPLOY.md              # Guia de deploy
└── ENV_SETUP.md           # Configuração de variáveis
```

## 🔐 Variáveis de Ambiente

Veja [ENV_SETUP.md](./ENV_SETUP.md) para a lista completa de variáveis necessárias.

## 📝 Licença

MIT

## 🤝 Suporte

Para dúvidas ou problemas, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Drizzle ORM](https://orm.drizzle.team)

