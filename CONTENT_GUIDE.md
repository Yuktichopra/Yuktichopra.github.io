# Content Management Guide

This guide explains how to add and manage content on your personal website.

## 📝 Blog Posts

### Location
`src/content/blog/`

### File Format
MDX files with frontmatter metadata

### Creating a New Blog Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Name it with a URL-friendly slug: `my-post-title.mdx`
3. Add frontmatter and content:

```mdx
---
title: "Understanding Working Memory: A Deep Dive"
date: "2025-01-08"
summary: "Exploring the mechanisms behind our brain's temporary storage system"
tags: ["neuroscience", "working-memory", "cognition"]
featured: true
image: "/images/blog/working-memory-hero.jpg"
---

# Introduction

Your content here using Markdown...

## Subheading

More content with **bold** and *italic* text.

### Code Examples
```python
# You can include code
import numpy as np
```

### Images
![Alt text](/images/blog/figure-1.png)

### Citations
Research shows this effect[^1].

[^1]: Author et al. (2024). Journal Name.
```

### Blog Post Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Post title |
| date | string | Yes | Publication date (YYYY-MM-DD) |
| summary | string | Yes | Brief description (150 chars) |
| tags | array | Yes | Category tags |
| featured | boolean | No | Show on homepage |
| image | string | No | Hero image path |

### Blog Categories
- Neuroscience
- Working Memory
- Longevity
- Science Communication
- AI & Neurotech

## 🔬 Research Publications

### Location
`src/content/research/publications.json`

### Format
JSON array of publication objects

### Adding a Publication

Edit `src/content/research/publications.json`:

```json
{
  "publications": [
    {
      "id": "chopra-2024-working-memory",
      "title": "Neural Correlates of Working Memory Capacity",
      "authors": ["Chopra, Y.", "Smith, J.", "Johnson, K."],
      "year": 2024,
      "journal": "Journal of Cognitive Neuroscience",
      "volume": 36,
      "issue": 4,
      "pages": "123-145",
      "doi": "10.1234/jcn.2024.123",
      "abstract": "Brief abstract...",
      "keywords": ["working memory", "EEG", "computational modeling"],
      "pdf": "/papers/chopra-2024.pdf",
      "code": "https://github.com/yuktichopra/wm-analysis",
      "data": "https://osf.io/xxxxx",
      "featured": true
    }
  ]
}
```

### Publication Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier |
| title | string | Yes | Paper title |
| authors | array | Yes | Author list |
| year | number | Yes | Publication year |
| journal | string | Yes | Journal/conference name |
| doi | string | No | Digital Object Identifier |
| pdf | string | No | Link to PDF |
| code | string | No | Code repository |
| data | string | No | Dataset link |
| featured | boolean | No | Highlight on research page |

## 💡 Projects

### Location
`src/content/projects/projects.json`

### Format
JSON array of project objects

### Adding a Project

Edit `src/content/projects/projects.json`:

```json
{
  "projects": [
    {
      "id": "thinking-about-thinking",
      "title": "Thinking About Thinking",
      "category": "nonprofit",
      "description": "A nonprofit dedicated to making neuroscience accessible",
      "longDescription": "Detailed description...",
      "date": "2023-Present",
      "status": "active",
      "featured": true,
      "image": "/images/projects/tat-logo.png",
      "links": {
        "website": "https://thinkingaboutthinking.org",
        "github": "https://github.com/thinking-about-thinking",
        "blog": "/blog/introducing-tat"
      },
      "technologies": ["Science Communication", "Event Planning", "Content Creation"],
      "outcomes": [
        "500+ community members",
        "12 public events hosted",
        "50+ educational articles"
      ]
    }
  ]
}
```

### Project Categories
- nonprofit
- research
- content-series
- educational
- technical

## 📚 Resources

### Location
`src/content/resources/links.json`

### Format
Categorized JSON structure

### Adding Resources

Edit `src/content/resources/links.json`:

```json
{
  "categories": {
    "Neuroscience Communicators": [
      {
        "title": "Ben Rein, Ph.D.",
        "url": "https://benrein.com",
        "description": "Neuroscientist studying social interactions",
        "tags": ["neuroscience", "science-communication"]
      }
    ],
    "Health & Longevity": [
      {
        "title": "Huberman Lab",
        "url": "https://hubermanlab.com",
        "description": "Science-based tools for everyday life",
        "tags": ["neuroscience", "health", "longevity"]
      }
    ]
  }
}
```

### Resource Categories
- Neuroscience Communicators
- Health & Longevity
- Academic Resources
- Science Writing
- Research Tools
- Educational Platforms

## 🖼️ Images

### Location
`public/images/`

### Organization
```
public/images/
├── blog/          # Blog post images
├── projects/      # Project screenshots
├── research/      # Research figures
├── profile/       # Personal photos
└── misc/          # Other images
```

### Image Guidelines
- Use descriptive filenames: `working-memory-task-diagram.png`
- Optimize for web (< 500KB per image)
- Preferred formats: WebP, PNG, JPG
- Dimensions: 1200px width for hero images

## 🔄 Content Workflow

### Blog Post Workflow
1. Create MDX file in `src/content/blog/`
2. Add frontmatter metadata
3. Write content with Markdown
4. Add images to `public/images/blog/`
5. Test locally with `npm run dev`
6. Publish

### Research Update Workflow
1. Edit `src/content/research/publications.json`
2. Add publication details
3. Upload PDF to `public/papers/` (optional)
4. Link code/data repositories
5. Test and publish

### Project Update Workflow
1. Edit `src/content/projects/projects.json`
2. Add project information
3. Upload screenshots to `public/images/projects/`
4. Add relevant blog posts
5. Test and publish

## ✅ Content Checklist

Before publishing new content:

- [ ] Spell check and grammar review
- [ ] All links are working
- [ ] Images are optimized
- [ ] Metadata is complete
- [ ] Categories/tags are appropriate
- [ ] Mobile preview looks good
- [ ] SEO description is compelling
- [ ] Related content is linked

## 🎨 Content Style Guide

### Writing Tone
- Professional yet approachable
- Clear and concise
- Avoid excessive jargon
- Include lay summaries for technical content

### Formatting
- Use headings to structure content
- Keep paragraphs short (3-4 sentences)
- Use bullet points for lists
- Include visuals to break up text

### SEO Best Practices
- Include keywords naturally
- Write descriptive titles (50-60 chars)
- Create compelling summaries (150-160 chars)
- Use alt text for images

## 📊 Content Analytics

Track content performance:
- Page views (Vercel Analytics)
- Time on page
- Most popular posts
- Search terms
- Social shares

## 🚀 Publishing

After adding content:

```bash
# Test locally
npm run dev

# Build and check for errors
npm run build

# Deploy (if using Vercel)
vercel deploy --prod
```

## 💬 Need Help?

- Check existing content for examples
- Review MDX documentation
- Test changes locally first
- Keep backups of content files