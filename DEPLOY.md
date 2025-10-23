# Deploy no GitHub Pages

## Passos para deploy:

1. **Build do projeto:**
   ```bash
   npm run build
   ```
   Isso criará a pasta `dist/` com os arquivos estáticos.

2. **Configurar GitHub Pages:**
   - Faça push do código para o GitHub
   - Vá em Settings > Pages no repositório
   - Selecione "GitHub Actions" como source

3. **Criar workflow (opcional - automático):**
   Crie `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Deploy Manual:

Se preferir fazer manualmente:
```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:SEU_USUARIO/SEU_REPO.git main:gh-pages
```

## URL do site:
`https://SEU_USUARIO.github.io/SEU_REPO/`

## Notas:
- O arquivo `.nojekyll` previne processamento Jekyll do GitHub
- `base: "./"` garante caminhos relativos corretos
- O roteamento client-side pode precisar de fallback 404.html
