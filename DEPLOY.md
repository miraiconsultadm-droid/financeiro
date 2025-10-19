# 🚀 Guia Completo de Deploy - Sistema de Controle Financeiro

## Pré-requisitos

- ✅ Conta no GitHub
- ✅ Conta no Vercel
- ✅ Conta no Supabase
- ✅ Este repositório clonado localmente

## Passo 1: Preparar o Supabase

### 1.1 Criar Projeto no Supabase
1. Acesse https://app.supabase.com
2. Clique em "New Project"
3. Preencha os dados:
   - **Name**: financial-control-system
   - **Database Password**: Mirai2025$1 (ou sua senha)
   - **Region**: Escolha a mais próxima
4. Clique em "Create new project"
5. Aguarde a criação (pode levar alguns minutos)

### 1.2 Obter Connection String
1. No Supabase Dashboard, vá em **Settings** → **Database**
2. Copie a **Connection String** (PostgreSQL)
3. Anote também:
   - **Anon Key** (Settings → API)
   - **Service Role Key** (Settings → API)
   - **Project URL** (Settings → API)

### 1.3 Fazer Push das Migrações (Opcional - Vercel faz automaticamente)
```bash
export DATABASE_URL="postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres"
pnpm db:push
```

## Passo 2: Fazer Push para GitHub

### 2.1 Criar Repositório no GitHub
1. Acesse https://github.com/new
2. **Repository name**: financial-control-system
3. **Description**: Sistema de Controle Financeiro e Investimentos
4. Selecione **Public** ou **Private**
5. Clique em **Create repository**

### 2.2 Fazer Push do Código
```bash
# Clone este repositório (se ainda não fez)
git clone https://github.com/seu-usuario/financial-control-system.git
cd financial-control-system

# Adicione os arquivos
git add .
git commit -m "Initial commit: Sistema de Controle Financeiro"
git push origin master
```

## Passo 3: Deploy no Vercel

### 3.1 Conectar Vercel ao GitHub
1. Acesse https://vercel.com/dashboard
2. Clique em **Add New** → **Project**
3. Clique em **Import Git Repository**
4. Conecte sua conta GitHub
5. Selecione o repositório `financial-control-system`
6. Clique em **Import**

### 3.2 Configurar Variáveis de Ambiente
Na página de configuração do Vercel, clique em **Environment Variables** e adicione:

```
DATABASE_URL=postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres
JWT_SECRET=gere-uma-string-aleatoria
VITE_APP_ID=seu-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im
OWNER_OPEN_ID=seu-owner-id
OWNER_NAME=seu-nome
VITE_APP_TITLE=Sistema de Controle Financeiro e Investimentos
VITE_APP_LOGO=https://seu-logo-url
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=sua-api-key
```

### 3.3 Deploy
1. Clique em **Deploy**
2. Aguarde o build completar
3. Você receberá uma URL como: `https://seu-projeto.vercel.app`

## Passo 4: Usar o Sistema

### 4.1 Primeiro Login
1. Acesse a URL do seu projeto no Vercel
2. Clique em "Começar Agora"
3. Faça login com suas credenciais Manus

### 4.2 Carregar Dados do Diego
1. Vá em **Configurações**
2. Clique em **Carregar Plano de Contas do Diego**
3. Os dados serão importados automaticamente

### 4.3 Começar a Usar
- **Dashboard**: Veja o resumo de gastos
- **Lançamentos**: Registre novos gastos
- **Investimentos**: Acompanhe sua carteira
- **Configurações**: Gerencie plano de contas

## Troubleshooting

### Erro: "Failed to connect to database"
- Verifique se o `DATABASE_URL` está correto
- Certifique-se de que a senha não contém caracteres especiais não escapados
- Teste a connection string localmente

### Erro: "OAuth callback failed"
- Verifique se `VITE_APP_ID` está correto
- Confirme que a URL do Vercel está registrada nas configurações OAuth

### Erro: "Cannot find module"
- Certifique-se de que todas as dependências foram instaladas
- Verifique o arquivo `package.json`

## Próximos Passos

Após o deploy bem-sucedido:

1. ✅ Teste o login
2. ✅ Crie um novo lançamento
3. ✅ Teste o cadastro de plano de contas
4. ✅ Importe os dados do Diego
5. ✅ Teste a exportação para Excel

## Suporte

Para dúvidas:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Drizzle ORM](https://orm.drizzle.team)

## Atualizações Futuras

Para fazer atualizações no código:
1. Faça as mudanças localmente
2. Commit e push para GitHub
3. Vercel fará o deploy automaticamente

