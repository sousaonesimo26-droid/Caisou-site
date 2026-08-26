# README - CAISOU Comércio e Serviços

Site institucional da CAISOU Angola para fornecimento de equipamentos laboratoriais, TI e capacitação técnica.

## 🚀 Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra no navegador: `http://localhost:3000`

---

## 📦 Como gerar os arquivos para produção (Build)

```bash
npm run build
```
Os arquivos prontos e otimizados serão gerados na pasta `dist/`.

---

## 🔥 Como publicar no Firebase Hosting

1. Instale o Firebase CLI (caso não tenha):
   ```bash
   npm install -g firebase-tools
   ```

2. Faça login na sua conta Google:
   ```bash
   firebase login
   ```

3. Inicialize o projeto no Firebase (ou use o `firebase.json` já incluso):
   ```bash
   firebase init hosting
   ```
   - Pasta pública: `dist`
   - Configurar como SPA (Single-page app): `Yes`
   - Sobrescrever index.html: `No`

4. Gere a build e publique:
   ```bash
   npm run build
   firebase deploy
   ```

---

## ☁️ Como publicar no Cloudflare Pages

1. No painel do Cloudflare (dash.cloudflare.com), crie uma nova aplicação em **Pages**.
2. Conecte seu repositório Git ou envie a pasta `dist`.
3. Comando de build: `npm run build`
4. Diretório de saída: `dist`
