# Beltrão Santos Engenharia

Site institucional da **Beltrão Santos Engenharia**, empresa de engenharia estrutural atuante desde 1991 em Belo Horizonte, MG. Homepage única com seções de apresentação, princípios, serviços, tipos de projeto, galeria, processo de trabalho, contato e localização.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de tema em `app/globals.css`)
- [Framer Motion](https://www.framer.com/motion/) — animações sutis de entrada (respeita `prefers-reduced-motion`)
- [Lucide React](https://lucide.dev) — ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Estrutura

```
app/
  layout.tsx      # fontes (Manrope, Inter, Geist Mono), SEO e metadados
  page.tsx        # composição da homepage
  globals.css     # tokens de cor/tipografia e utilitários (grid técnico, rótulos)
components/
  Navbar.tsx      # navegação fixa com backdrop blur e menu mobile
  Hero.tsx        # seção de abertura
  About.tsx       # empresa / desde 1991
  Principles.tsx  # quatro pilares
  Services.tsx    # especialidades
  ProjectTypes.tsx
  ProjectGallery.tsx
  Process.tsx     # etapas de trabalho (timeline)
  CTA.tsx         # seção escura de autoridade
  Contact.tsx     # canais de contato (telefone / e-mail)
  Map.tsx         # Google Maps incorporado
  Footer.tsx
  Logo.tsx        # logo + wordmark
  Reveal.tsx      # wrapper de animação ao rolar
lib/
  data.ts         # dados das seções (serviços, princípios, etapas, contato)
public/
  logo.png        # logo oficial
  images/         # imagens das seções
```

## Identidade visual

A paleta de verdes foi extraída diretamente do logo oficial:

| Token | Cor | Uso |
| --- | --- | --- |
| `green` | `#054205` | CTAs, números, acentos |
| `green-mid` | `#205820` | hovers em fundo escuro |
| `green-dark` | `#032e03` | estado hover de botões |
| `bg` | `#f7f8f5` | fundo principal |
| `ink` | `#171a18` | texto e seções escuras |

Tipografia: **Manrope** (títulos), **Inter** (texto) e **Geist Mono** (rótulos técnicos decorativos).

## Trocando as imagens

As imagens atuais em `public/images/` são placeholders (SVG). Para usar fotografias reais, substitua os arquivos mantendo os nomes ou atualize os caminhos em `lib/data.ts` (`projectTypes` e `galleryItems`) e em `components/Hero.tsx`.

## Contato

- Telefone: (31) 3225-8276
- E-mail: beltraosantoseng@gmail.com

---

Engenharia Estrutural • Belo Horizonte, MG • Desde 1991
