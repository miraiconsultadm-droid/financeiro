# 🚀 Instruções de Setup - Sistema de Controle Financeiro

## O que você tem agora

✅ Código-fonte completo pronto para deploy
✅ Configuração de banco de dados (Drizzle ORM + PostgreSQL)
✅ Estrutura frontend e backend
✅ Documentação completa

## Próximos Passos

### 1️⃣ Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Preencha:
   - **Repository name**: `financial-control-system`
   - **Description**: "Sistema de Controle Financeiro e Investimentos"
   - **Visibility**: Public ou Private (sua escolha)
3. Clique em **Create repository**
4. Você receberá uma URL como: `https://github.com/seu-usuario/financial-control-system.git`

### 2️⃣ Fazer Push do Código para GitHub

```bash
# Abra o terminal na pasta do projeto
cd /caminho/para/financial-control-system

# Configure o Git (se for a primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"

# Adicione o repositório remoto
git remote add origin https://github.com/seu-usuario/financial-control-system.git

# Faça o commit inicial
git add .
git commit -m "Initial commit: Sistema de Controle Financeiro"

# Faça o push
git branch -M master
git push -u origin master
```

### 3️⃣ Criar Projeto no Supabase

1. Acesse https://app.supabase.com
2. Clique em **New Project**
3. Preencha:
   - **Name**: financial-control-system
   - **Database Password**: Mirai2025$1 (ou sua senha)
   - **Region**: Escolha a mais próxima de você
4. Clique em **Create new project**
5. Aguarde a criação (pode levar alguns minutos)

### 4️⃣ Obter Credenciais do Supabase

Após o projeto ser criado:

1. Vá em **Settings** → **Database**
   - Copie a **Connection String** (PostgreSQL)
   - Anote o **Host**, **Port**, **Database**, **User**, **Password**

2. Vá em **Settings** → **API**
   - Copie **Project URL**
   - Copie **Anon Key**
   - Copie **Service Role Key**

### 5️⃣ Deploy no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique em **Add New** → **Project**
3. Clique em **Import Git Repository**
4. Conecte sua conta GitHub (se não estiver conectada)
5. Selecione o repositório `financial-control-system`
6. Clique em **Import**

### 6️⃣ Configurar Variáveis de Ambiente no Vercel

Na página de configuração do Vercel, adicione as seguintes variáveis:

```
DATABASE_URL=postgresql://postgres:Mirai2025$1@db.vwkzrcfewxekcowbhvzf.supabase.co:5432/postgres

JWT_SECRET=gere-uma-string-aleatoria-com-32-caracteres

VITE_APP_ID=seu-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im

OWNER_OPEN_ID=seu-owner-id
OWNER_NAME=seu-nome-completo

VITE_APP_TITLE=Sistema de Controle Financeiro e Investimentos
VITE_APP_LOGO=https://seu-logo-url.png

SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key

BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=sua-api-key
```

### 7️⃣ Fazer Deploy

1. Clique em **Deploy**
2. Aguarde o build completar (pode levar 5-10 minutos)
3. Você receberá uma URL como: `https://seu-projeto.vercel.app`

### 8️⃣ Usar o Sistema

1. Acesse a URL do seu projeto no Vercel
2. Clique em **Começar Agora**
3. Faça login com suas credenciais Manus
4. Vá em **Configurações** e clique em **Carregar Plano de Contas do Diego**
5. Comece a usar o sistema!

## 📚 Documentação Adicional

- **[DEPLOY.md](./DEPLOY.md)** - Guia detalhado de deploy
- **[ENV_SETUP.md](./ENV_SETUP.md)** - Explicação das variáveis de ambiente
- **[README.md](./README.md)** - Informações gerais do projeto

## ⚠️ Importante

- **Não faça commit do arquivo `.env`** - ele contém credenciais sensíveis
- **Não compartilhe suas chaves do Supabase** - elas são privadas
- **Guarde a senha do Supabase** - você precisará dela para acessar o banco

## 🆘 Troubleshooting

### Erro: "Cannot find module"
- Execute `pnpm install` localmente antes de fazer push

### Erro: "Failed to connect to database"
- Verifique se o `DATABASE_URL` está correto no Vercel
- Certifique-se de que a senha não contém caracteres especiais não escapados

### Erro: "OAuth callback failed"
- Verifique se `VITE_APP_ID` está correto
- Confirme que a URL do Vercel está registrada nas configurações OAuth

## 📞 Suporte

Se tiver dúvidas:
1. Consulte [DEPLOY.md](./DEPLOY.md)
2. Verifique [ENV_SETUP.md](./ENV_SETUP.md)
3. Acesse a documentação oficial:
   - [Vercel Docs](https://vercel.com/docs)
   - [Supabase Docs](https://supabase.com/docs)
   - [Drizzle ORM Docs](https://orm.drizzle.team)

---

**Pronto! Siga esses passos e seu sistema estará online em minutos! 🚀**

