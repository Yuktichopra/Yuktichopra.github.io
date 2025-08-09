# Development Guide

Technical documentation for maintaining and developing the website.

## 🛠 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git (optional)
- Code editor (VS Code recommended)

## 📦 Installation

```bash
# Clone or download the project
cd yukipedia

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 🏗 Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Deployment**: Vercel

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── [route]/           # Individual pages
│       └── page.tsx
├── components/            # React components
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   └── [component].tsx   # Other components
├── content/              # Content data
│   ├── blog/            # MDX blog posts
│   ├── research/        # Research JSON
│   └── projects/        # Projects JSON
├── config/              # Configuration
│   └── site.ts         # Site config
├── lib/                # Utilities
│   └── posts.ts        # Blog utilities
└── styles/             # Global styles
    └── globals.css     # Tailwind imports
```

## 🔧 Configuration Files

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for static export
  },
}
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `tailwind.config.ts`
```typescript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9', // Cyan
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
```

## 📝 Environment Variables

Create `.env.local` for local development:

```bash
# API Keys (if needed)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Email Service (future)
EMAIL_SERVICE_API_KEY=your-api-key
```

## 🎨 Styling

### Tailwind Classes Structure
```tsx
// Layout containers
<div className="container mx-auto px-4">

// Typography
<h1 className="text-4xl font-bold text-slate-900">
<p className="text-lg text-slate-700 leading-relaxed">

// Buttons
<button className="bg-cyan-600 text-white px-8 py-3 rounded-lg">

// Cards
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
```

### Color Palette
- Primary: `cyan-600` (#0EA5E9)
- Text: `slate-900` (#0F172A)
- Background: `white` (#FFFFFF)
- Accent: `gray-50` (#F9FAFB)

## 🚀 Development Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Building
npm run build        # Production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # TypeScript validation

# Format Code
npm run format       # Prettier formatting
```

## 📁 Adding New Features

### Creating a New Page

1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx`:

```tsx
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">New Page</h1>
    </div>
  );
}
```

3. Add to navigation in `src/config/site.ts`

### Creating a Component

1. Create file in `src/components/`
2. Export component:

```tsx
// src/components/my-component.tsx
interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### Adding MDX Support

MDX is configured for blog posts:

```tsx
// Custom MDX components
const mdxComponents = {
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  // Add more custom components
};
```

## 🐛 Debugging

### Common Issues

1. **Module not found errors**
   - Check tsconfig paths
   - Restart dev server

2. **Hydration errors**
   - Ensure client/server consistency
   - Check for browser-only code

3. **Build failures**
   - Run `npm run lint`
   - Check for TypeScript errors

### Debug Tools

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Analyze bundle size
npx next-bundle-analyzer

# Check for unused dependencies
npx depcheck
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Responsive on mobile
- [ ] Images load
- [ ] No console errors

### Performance Testing
```bash
# Lighthouse CLI
npx lighthouse http://localhost:3000

# Check Core Web Vitals
# Use Chrome DevTools > Lighthouse
```

## 📦 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Static Export

```bash
# Configure next.config.js
output: 'export'

# Build static files
npm run build

# Files in out/ directory
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Security

### Best Practices
- Never commit `.env` files
- Sanitize user inputs
- Use HTTPS in production
- Keep dependencies updated
- Implement CSP headers

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

## 📈 Performance Optimization

### Image Optimization
- Use Next.js Image component
- Provide width/height
- Use WebP format
- Lazy load images

### Code Splitting
- Dynamic imports for large components
- Route-based code splitting (automatic)

### Caching
```javascript
// API route caching
export const revalidate = 3600; // Cache for 1 hour
```

## 🔄 Update Workflow

1. **Development**
   ```bash
   git checkout -b feature/new-feature
   npm run dev
   # Make changes
   ```

2. **Testing**
   ```bash
   npm run lint
   npm run build
   npm run start
   ```

3. **Deployment**
   ```bash
   git add .
   git commit -m "Add new feature"
   git push
   vercel --prod
   ```

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/) - API testing
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 [PID]
```

### Clear Cache
```bash
rm -rf .next
rm -rf node_modules
npm install
```

### Reset Development Environment
```bash
npm run clean
npm install
npm run dev
```

## 📮 Support

For questions or issues:
- Check existing documentation
- Review error messages carefully
- Test in different browsers
- Try incognito/private mode

---

Last updated: January 2025