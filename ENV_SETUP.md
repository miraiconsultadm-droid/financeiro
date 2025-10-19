# 🔐 Configuração de Variáveis de Ambiente

Após criar o repositório no GitHub e fazer deploy no Vercel, configure as seguintes variáveis de ambiente:

## No Vercel Dashboard

Vá em: **Settings** → **Environment Variables** e adicione:

### Database
```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.vwkzrcfewxekcowbhvzf.supabase.co:5432/postgres
```

### JWT
```
JWT_SECRET=gere-uma-string-aleatoria-aqui-com-32-caracteres
```

### Manus OAuth
```
VITE_APP_ID=seu-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im
```

### Owner Info
```
OWNER_OPEN_ID=seu-owner-id
OWNER_NAME=seu-nome-completo
```

### App Configuration
```
VITE_APP_TITLE=Sistema de Controle Financeiro e Investimentos
VITE_APP_LOGO=https://seu-logo-url.png
```

### Supabase
```
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key-do-supabase
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-do-supabase
```

### Manus APIs
```
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=sua-api-key
```

## Onde Encontrar Essas Informações

### Supabase
1. Acesse https://app.supabase.com
2. Selecione seu projeto
3. **Settings** → **API** para encontrar as chaves
4. **Settings** → **Database** para a connection string

### Manus OAuth
- Você receberá essas informações quando criar a aplicação no Manus

### JWT Secret
- Gere uma string aleatória. Você pode usar:
```bash
openssl rand -base64 32
```

## Próximas Etapas

1. Configure todas as variáveis no Vercel
2. Faça o deploy
3. Acesse a URL do seu projeto
4. Faça login
5. Carregue os dados do Diego

