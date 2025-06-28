# Blog Card Layout - Usage Guide

## Overview

Your Jekyll blog now features a beautiful project-card style layout inspired by modern portfolio sites. Each blog post is displayed as an interactive card with hover effects, responsive design, and full light/dark mode support.

## Features

### 🎨 **Card Design**
- **Project-style cards** with rounded corners and subtle shadows
- **Hover animations** with smooth transitions and lift effects
- **Responsive layout** that adapts to any screen size
- **Clickable cards** - entire card links to the post

### 🖼️ **Image Support**
- **Featured images** displayed at the top of each card
- **Automatic optimization** with proper aspect ratios
- **Fallback design** for posts without images
- **Hover effects** on images with subtle transforms

### 🏷️ **Post Metadata**
- **Publication dates** with proper semantic markup
- **Tag system** with styled tag pills
- **Excerpt preview** with smart truncation
- **Read more indicators** for clear call-to-action

### 🎭 **Theme Support**
- **Dark mode** with blue accent colors (`#7dd3fc`)
- **Light mode** with warm yellow accents (`#fbbf24`)
- **Smooth transitions** between themes
- **Consistent styling** across all components

## Creating Blog Posts

### Basic Post Structure

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-06-28 10:00:00 -0000
tags: [tag1, tag2, tag3]
image: "path/to/your/image.jpg"
---

Your post content goes here!
```

### Front Matter Options

- **`layout: post`** - Uses the post layout for individual posts
- **`title`** - Post title displayed on card and post page
- **`date`** - Publication date (YYYY-MM-DD HH:MM:SS timezone)
- **`tags`** - Array of tags (optional)
- **`image`** - Featured image URL (optional)

### Image Guidelines

**Recommended dimensions:** 800x400 pixels (2:1 aspect ratio)
**Supported formats:** JPG, PNG, WebP
**Sources:** Unsplash, local files, or any web URL

Example with Unsplash:
```yaml
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
```

## Layouts

### Blog Homepage (`layout: blog`)
- Displays all posts as cards in a responsive grid
- Includes hero title and navigation buttons
- Shows "No posts" message when empty
- Automatically sorts posts by date (newest first)

### Individual Posts (`layout: post`)
- Clean, readable typography
- Navigation back to homepage
- Styled code blocks and images
- Tag display and metadata

## Customization

### Card Styling
Edit `_sass/_blog-cards.scss` to customize:
- Card colors and borders
- Hover effects and animations
- Typography and spacing
- Responsive breakpoints

### Theme Colors
Edit `_sass/_variables.scss` to change:
- Accent colors for light/dark modes
- Background colors
- Typography colors
- Animation timings

### Layout Structure
Edit `_layouts/blog.html` and `_layouts/post.html` to modify:
- Page structure
- Navigation elements
- Metadata display
- Content organization

## Responsive Design

### Desktop (1024px+)
- 3-column card grid
- Full hover effects
- Large typography
- Spacious padding

### Tablet (768px - 1024px)
- 2-column card grid
- Maintained hover effects
- Adjusted typography
- Optimized spacing

### Mobile (< 768px)
- Single-column layout
- Touch-friendly interactions
- Compressed typography
- Reduced padding

## Performance Features

- **Efficient SCSS** with modular architecture
- **CSS Custom Properties** for easy theming
- **Optimized images** with proper loading
- **Smooth animations** with GPU acceleration
- **Accessibility support** with proper ARIA labels

## Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **CSS Grid and Flexbox** support required
- **CSS Custom Properties** support required
- **Graceful degradation** for older browsers

## Getting Started

1. **Add your posts** to the `_posts` directory
2. **Include featured images** for best visual impact
3. **Use descriptive tags** for better organization
4. **Write engaging excerpts** in your post content
5. **Test responsive design** on different devices

Your blog is now ready to showcase your content with a professional, modern card-based layout! 🎉
