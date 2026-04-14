# Loft Prainha Arraial

Site em Next.js + TypeScript para divulgar um loft de temporada na Prainha, em Arraial do Cabo, com foco em marketing, SEO, conversão para reserva externa e suporte multilíngue.

## Rodar localmente

1. Instale o Node.js 20 ou superior.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

4. Abra `http://localhost:3000`.

## Ajustes importantes

- Troque o link placeholder de reserva em `lib/content.ts`.
- Atualize WhatsApp, Instagram e endereço em `lib/content.ts`.
- Substitua os textos provisórios pelo conteúdo real do imóvel em `lib/content.ts`.
- Substitua os SVGs em `public/images/` por fotos reais do loft quando estiverem disponíveis.
- Ajuste o domínio em `app/sitemap.ts`.

## Estrutura

- `app/`: páginas do site
- `app/[locale]/`: rotas multilíngues em português, espanhol e inglês
- `components/`: componentes reutilizáveis
- `lib/content.ts`: conteúdo centralizado do loft, blog e contatos
- `lib/i18n.ts`: configuração de idiomas e rotas
- `lib/weather.ts`: ponto de integração preparado para clima e informações do dia
- `public/images/`: artes SVG usadas como imagens placeholder
