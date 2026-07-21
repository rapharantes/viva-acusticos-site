# Viva Acústicos — versão React/Next.js

Reconstrução do site em Next.js 16 + Tailwind CSS v4, a partir do design e conteúdo reais extraídos do WordPress (cores, tipografia, espaçamentos, textos e imagens originais).

## Rodar localmente

```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Gerar build de produção

```bash
npm run build
npm run start
```

## Páginas incluídas

- `/` — Home (hero, serviços, tipos de evento, galeria, depoimentos, avaliações Google, clientes, formulário de orçamento)
- `/aluguel-de-som-e-iluminacao` — Página de aluguel de som e iluminação
- `/politica-de-privacidade` — Política de privacidade (texto legal original)
- `/obrigado` — Página de agradecimento pós-formulário

## O que ainda falta plugar (pendências conhecidas)

1. **Formulário de contato**: os dois formulários (hero e seção de orçamento) hoje só redirecionam para `/obrigado` no clique — não enviam e-mail/WhatsApp de verdade ainda. Precisa conectar a um backend (rota de API própria, um serviço tipo Resend/EmailJS, ou webhook para o WhatsApp/CRM).
2. **Avaliações do Google**: o botão "Veja nossas avaliações" aponta pro link fixo do Google — se quiser mostrar as notas/reviews dentro do site (como o plugin Trustindex fazia), precisa integrar a API do Google Places.
3. **Cookie banner**: funcional (grava a escolha no navegador), mas não bloqueia scripts de terceiros (GTM etc.) antes do consentimento — se isso for importante para LGPD, precisa condicionar o carregamento do Google Tag Manager à aceitação.
4. **Google Tag Manager**: não foi adicionado ainda. Se for usar, é só inserir o snippet no `layout.tsx`.

## Deploy

O jeito mais simples é publicar na [Vercel](https://vercel.com) (mesma empresa do Next.js): conecta o repositório Git e o deploy roda sozinho a cada push. Também funciona em qualquer host que rode Node.js.

## Fonte do conteúdo

Textos, imagens e estrutura foram extraídos diretamente do banco de dados original do WordPress (dados do Elementor), garantindo fidelidade ao conteúdo real — não foi um "chute" visual.
