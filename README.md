# Yukti Chopra - Personal Website

A clean, minimalist personal portfolio website showcasing neuroscience research, science communication, and projects.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```


## 📁 Project Structure

```
yukipedia/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog listing and posts
│   │   ├── research/        # Research showcase
│   │   ├── projects/        # Projects portfolio
│   │   ├── resources/       # Curated resources
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable React components
│   ├── content/            # Content management
│   │   ├── blog/           # MDX blog posts
│   │   ├── research/       # Research data
│   │   ├── projects/       # Projects data
│   │   └── resources/      # Resources links
│   ├── config/             # Site configuration
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
│   ├── images/            # Images
│   ├── icons/             # Favicons
│   └── og/                # Open Graph images
└── docs/                  # Documentation
```

## 🎨 Design Principles

- **Clean & Minimalist**: Abundant white space, clear typography
- **Bright & Positive**: Light theme with cyan accents
- **Scientific Yet Approachable**: Professional but accessible
- **Mobile-First**: Responsive design for all devices

## 📝 Content Management

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on:
- Adding blog posts
- Managing research publications
- Updating projects
- Curating resources

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for rich blog posts
- **Deployment**: Optimized for Vercel
- **Analytics**: Vercel Analytics & Speed Insights

## 📄 Key Pages

- **Home** (`/`): Introduction and featured content
- **About** (`/about`): Professional bio and background
- **Research** (`/research`): Academic work and publications
- **Blog** (`/blog`): Science communication articles
- **Projects** (`/projects`): Initiatives and nonprofit work
- **Resources** (`/resources`): Curated educational links
- **Contact** (`/contact`): Get in touch

## 🔧 Configuration

Main configuration file: `src/config/site.ts`

Update this file to change:
- Site metadata
- Navigation menu
- Social media links
- Content categories

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy --prod
```

### Static Export
```bash
npm run build
# Static files in .next/out/
```

## 📊 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimized
- Static generation for fast loading
- Image optimization with Next.js

## 🤝 Contributing

This is a personal website, but suggestions are welcome!

## 📮 Contact

- Email: choprayukti9498@gmail.com
- LinkedIn: linkedin.com/in/yukti-chopra

## 📜 License

© 2025 Yukti Chopra. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
