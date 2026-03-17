## Deploy com GitHub Pages

Este projeto está configurado para ser publicado no GitHub Pages usando o `gh-pages`.

### 📋 Configurações Necessárias

As seguintes configurações já estão em lugar:

**1. `npm package.json`**

```json
{
  "homepage": "FlixReact/",
  "scripts": {
    "build": "react-scripts build",
    "deploy": "gh-pages -d build"
  }
}
```

- `homepage`: Define o caminho base do repositório (importante para rotas corretas)
- `build`: Compila a aplicação para produção
- `deploy`: Publica os arquivos da pasta `build` no GitHub Pages

**2. `vite.config.ts`**

```typescript
export default defineConfig({
  base: "/FlixReact/", // Mesma rota do homepage
  build: {
    outDir: "build", // Pasta de saída do build
  },
});
```

**3. `tsconfig.json`**
A configuração padrão está correta para produção.

### 🚀 Passo a Passo para Deploy

#### **Passo 1: Instalar Dependências**

```bash
npm install
```

#### **Passo 2: Compilar em Produção**

```bash
npm run build
```

Isso gera uma pasta `build/` com todos os arquivos otimizados.

#### **Passo 3: Fazer Deploy**

```bash
npm run deploy
```

Este comando:

- Lê os arquivos da pasta `build/`
- Envia para a branch `gh-pages` do repositório
- Publica automaticamente no GitHub Pages

#### **Passo 4: Configurar no GitHub**

1. Vá para o repositório no GitHub
2. Abra **Settings** → **Pages**
3. Em "Build and deployment":
   - **Source**: Selecione `Deploy from a branch`
   - **Branch**: Selecione `gh-pages` e `/root`
4. Clique em **Save**

Sua aplicação estará disponível em: `https://seu-usuario.github.io/FlixReact/`

#### **Passo 5: Verificar o Deploy**

- Vá para **Actions** no GitHub para ver o status do deploy
- Aguarde a conclusão (geralmente alguns minutos)
- Acesse o URL da sua aplicação

### ⚙️ Entendendo as Configurações

| Configuração             | Propósito                                                             |
| ------------------------ | --------------------------------------------------------------------- |
| `homepage`               | Define a rota base (`/FlixReact/`) - importante para links e recursos |
| `base` em vite.config.ts | Garante que os assets sejam carregados da rota correta                |
| `outDir: 'build'`        | Especifica onde os arquivos compilados serão salvos                   |
| Branch `gh-pages`        | GitHub Pages publica dessa branch automaticamente                     |

### 🔧 Solução de Problemas

**Rotas retornam 404?**

- Verifique se `homepage` e `base` estão iguais
- Certifique-se de usar rotas relativas com React Router

**Deploy não aparece atualizado?**

- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Aguarde alguns minutos para o GitHub atualizar
- Verifique se a branch `gh-pages` foi criada com sucesso

**Erro ao rodar `npm run deploy`?**

- Instale gh-pages: `npm install --save-dev gh-pages`
- Verifique se tem permissão de write no repositório
- Garanta que executou `npm run build` antes

### 📝 Comando Rápido (Tudo de uma vez)

```bash
npm run build && npm run deploy
```
