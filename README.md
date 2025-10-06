# Sabrina Lisia - Portfólio de Arquitetura

Portfólio profissional de arquitetura e design de **Sabrina Lisia**, desenvolvido com Next.js 14, React 18, TypeScript e Tailwind CSS.

## 🎨 Sobre o Projeto

Site portfólio moderno e responsivo para apresentação de projetos de arquitetura, urbanismo e design. O site inclui:

- **Home**: Apresentação com hero section, sobre, projetos em destaque e depoimentos
- **Portfolio**: Galeria de projetos com filtros por categoria
- **Sobre**: Filosofia, valores e processo de trabalho
- **Contato**: Formulário de contato e informações

## 🚀 Tecnologias

- **Next.js 14.2.5** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **Gray Matter** - Parser de frontmatter para projetos MDX
- **Framer Motion** - Animações suaves

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Rotas do Next.js App Router
│   ├── page.tsx           # Página inicial
│   ├── portfolio/         # Página de portfólio
│   ├── sobre/             # Página sobre
│   ├── contato/           # Página de contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── SectionTitle.tsx
└── lib/                   # Utilitários e funções
    └── mdx.ts            # Funções para gerenciar projetos MDX

content/
└── portfolio/            # Arquivos markdown dos projetos
```

## 🎨 Paleta de Cores

- **Verde Principal**: `#2D5016` (balaio-green)
- **Bege**: `#F5F1E8` (balaio-beige)
- **Escuro**: `#1A1A1A` (balaio-dark)

## 📝 Adicionando Projetos

Para adicionar novos projetos ao portfólio, crie um arquivo `.md` em `content/portfolio/`:

```markdown
---
title: "Nome do Projeto"
category: "Residencial"
location: "São Paulo, SP"
year: "2024"
coverImage: "/images/projeto.jpg"
description: "Descrição breve do projeto"
---

# Conteúdo do projeto em Markdown
```

## 🚀 Deploy

O projeto pode ser facilmente deployado em:

- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- Qualquer plataforma que suporte Next.js

## 📄 Licença

© 2024 Sabrina Lisia. Todos os direitos reservados.
