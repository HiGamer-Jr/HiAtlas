# HiAtlas institucional

Site público independente da aplicação em `../frontend`, com quatro rotas, temas claro e escuro e logos oficiais. Os PNGs fornecidos pelo usuário são preservados integralmente.

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

O build gera HTML com conteúdo e metadados próprios em cada rota. O host deve servir arquivos `index.html` por diretório e configurar uma página 404 para URLs desconhecidas. A preferência de tema é o único dado persistido no navegador; sem preferência explícita, acompanha o sistema.

## Antes da publicação comercial

Configurar `.env` conforme `.env.example`: origem pública real, endpoint de formulário e WhatsApp oficial. Nenhuma credencial pode usar prefixo VITE_. O endpoint deve validar os campos e consentimento, limitar requisições, implementar proteção antispam, definir retenção e tratamento dos dados e aceitar CORS da origem do site. O cliente só confirma sucesso após resposta HTTP 2xx.

Sem endpoint o formulário informa que o envio não está configurado; sem número real não há link fictício de WhatsApp. Políticas de Privacidade e Termos de Uso oficiais ainda precisam ser fornecidos. O site não foi publicado automaticamente.

Os indicadores do dashboard são fictícios e identificados como demonstrativos. Os módulos são apresentados como visão de produto, com escopo/disponibilidade a confirmar na demonstração.

`legacy-peer-deps` contorna uma falha interna do npm 10 na resolução de peers opcionais do Vitest; o lockfile mantém as versões resolvidas.
