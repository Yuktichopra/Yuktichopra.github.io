# Content Management Guide

This guide explains how to update content on your website without touching the code.

## Directory Structure

All editable content is stored in JSON files under `src/content/site/`:

```
src/content/site/
├── hero.json           # Homepage hero section
├── timeline.json       # Homepage timeline
├── currently.json      # Homepage "Currently" section
├── recent-writing.json # Homepage recent articles
├── contact.json        # Homepage contact section
├── navigation.json     # Main navigation menu
├── about.json          # About page content
└── research.json       # Research page content
```

## How to Update Content

### 1. Homepage Hero Section (`hero.json`)
```json
{
  "name": "Your Name",
  "tagline": "Your Professional Title",
  "description": "Brief description of what you do",
  "logoAlt": "Logo alt text",
  "logoTooltip": "Tooltip text"
}
```

### 2. Timeline (`timeline.json`)
Add new years or entries to showcase your journey:
```json
{
  "timeline": [
    {
      "year": "2025",
      "entries": [
        {
          "date": "Month",
          "title": "Achievement or Event",
          "type": "project|writing|research|milestone",
          "link": "/optional-link"  // Optional
        }
      ]
    }
  ]
}
```

**Entry Types:**
- `milestone`: Major achievements (displayed with •)
- `research`: Research work (displayed with ○)
- `writing`: Blog posts or publications (displayed with ―)
- `project`: Projects or initiatives (displayed with □)

### 3. Currently Section (`currently.json`)
Update what you're working on:
```json
{
  "activities": [
    {
      "category": "Research",
      "description": "What you're researching"
    }
  ]
}
```

### 4. Recent Writing (`recent-writing.json`)
Add or update featured blog posts:
```json
{
  "articles": [
    {
      "title": "Article Title",
      "summary": "Brief summary",
      "date": "Jan 2025",
      "readTime": "8 min",
      "link": "/blog/article-slug"
    }
  ]
}
```

### 5. Navigation (`navigation.json`)
Add or reorder navigation items:
```json
{
  "mainNav": [
    { "label": "Menu Item", "href": "/path" }
  ]
}
```

### 6. About Page (`about.json`)
Update your bio, education, and interests:
```json
{
  "intro": {
    "greeting": "Your greeting",
    "description": "Your introduction"
  },
  "sections": [
    {
      "title": "Section Title",
      "content": "Section content"
    }
  ],
  "education": {
    "degrees": [
      {
        "degree": "Degree Name",
        "institution": "University",
        "year": "Year"
      }
    ]
  }
}
```

### 7. Research Page (`research.json`)
Update research areas and publications:
```json
{
  "areas": [
    {
      "title": "Research Area",
      "description": "Description",
      "status": "Current|Ongoing|Completed",
      "topics": ["Topic 1", "Topic 2"]
    }
  ],
  "publications": {
    "papers": [
      {
        "title": "Paper Title",
        "authors": "Authors",
        "journal": "Journal Name",
        "year": "2024"
      }
    ]
  }
}
```

## Blog Posts

Blog posts are markdown files in `src/content/blog/`:

1. Create a new `.mdx` file: `your-post-slug.mdx`
2. Add frontmatter:
```markdown
---
title: "Your Post Title"
date: "2025-01-15"
summary: "Brief summary"
tags: ["neuroscience", "research"]
---

Your content here...
```

## Quick Tips

1. **JSON Validation**: Make sure your JSON is valid (no trailing commas, proper quotes)
2. **Links**: Internal links start with `/` (e.g., `/blog`, `/about`)
3. **Dates**: Use consistent format (e.g., "Jan 2025" or "2025-01-15")
4. **Images**: Place images in `public/images/` and reference as `/images/filename.png`

## Common Updates

### Adding a Timeline Entry
1. Open `src/content/site/timeline.json`
2. Find the appropriate year (or add a new year)
3. Add your entry to the entries array
4. Save the file

### Updating Homepage Description
1. Open `src/content/site/hero.json`
2. Edit the `description` field
3. Save the file

### Adding a Research Publication
1. Open `src/content/site/research.json`
2. Add to the `publications.papers` array
3. Save the file

## Development Workflow

After making changes:
1. Save the JSON file
2. The development server will auto-refresh
3. Check your changes at `http://localhost:3000`
4. Commit your changes when satisfied

## Deployment

After updating content:
```bash
npm run build
npm run deploy
```

This will build and deploy your updated site.