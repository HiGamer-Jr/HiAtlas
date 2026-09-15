# HiAtlas institucional

Site institucional HiAtlas com quatro rotas e visual claro. Repositório oficial: https://github.com/HiGamer-Jr/HiAtlas, branch `main`. Workspace local: `D:\Site HiAtlas`.

O código existente foi recuperado de `D:\Cargo.Ops\institutional` e comparado com a cópia local e o repositório oficial antes da sincronização. As logos originais são preservadas em `public/brand/`; somente a versão clara é utilizada na interface. O cabeçalho não exibe a assinatura ao lado da logo.

## Estrutura

- `src/components/`: navegação, marca, dashboard demonstrativo e componentes reutilizáveis.
- `src/pages/`: Início, O HiAtlas, Soluções e Contato.
- `src/sections/home/`: seções independentes da Home.
- `src/data/`, `src/services/` e `src/styles.css`: conteúdo, envio do formulário e estilos.
- Testes `*.test.ts` e `*.test.tsx` próximos aos componentes e serviços.
- `scripts/`: otimização das logos, prerenderização e verificação do build.
- `public/brand/`: PNGs originais e versões WebP.
- Configuração: Vite, TypeScript, npm, lockfile e `.env.example` sem credenciais.

## Execução local

```powershell
npm ci
npm run dev
```

Preview: http://127.0.0.1:5180

```powershell
npm test
npm run lint
npm run build
npm run preview
```

O build gera HTML com conteúdo e metadados próprios em cada rota. O host deve servir arquivos `index.html` por diretório e configurar uma página 404 para URLs desconhecidas. A aparência permanece clara independentemente da preferência do sistema ou de uma seleção de tema antiga. O site não grava preferências nem dados do formulário no navegador.

O `.gitignore` exclui dependências, builds, caches, logs, arquivos `.env` reais e padrões comuns de credenciais. `npm ci` instala as versões registradas no lockfile; não é necessário copiar dependências de outro projeto.

## Antes da publicação comercial

Configurar `.env` conforme `.env.example`: origem pública real, endpoint de formulário e WhatsApp oficial. Nenhuma credencial pode usar prefixo VITE_. O endpoint deve validar os campos e consentimento, limitar requisições, implementar proteção antispam, definir retenção e tratamento dos dados e aceitar CORS da origem do site. O cliente só confirma sucesso após resposta HTTP 2xx.

Sem endpoint o formulário informa que o envio não está configurado; sem número real não há link fictício de WhatsApp. Políticas de Privacidade e Termos de Uso oficiais ainda precisam ser fornecidos. O site não foi publicado automaticamente.

Os indicadores do dashboard são fictícios e identificados como demonstrativos. Os módulos são apresentados como visão de produto, com escopo/disponibilidade a confirmar na demonstração.

`legacy-peer-deps` contorna uma falha interna do npm 10 na resolução de peers opcionais do Vitest; o lockfile mantém as versões resolvidas.
