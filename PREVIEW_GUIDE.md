# Preview Configuration Guide

This guide shows how to preview your Jekyll theme with all the modern features implemented.

## Quick Start

### 1. Using the Preview Configuration

Run Jekyll with the preview configuration:

```bash
bundle exec jekyll serve --config _config_preview.yml --livereload
```

This will:
- Start the development server on `http://localhost:4000`
- Enable live reload for instant updates
- Show draft posts
- Use optimized settings for development

### 2. Standard Development

For regular development, use:

```bash
bundle exec jekyll serve --livereload
```

## Features Implemented

### ✅ Modern Project-Card Layout
- Blog posts displayed as interactive cards
- Hover animations with lift effect and image scaling
- Responsive grid layout
- Featured images support

### ✅ SCSS Optimization
- Modular SCSS architecture with 8 separate files
- CSS custom properties for theme consistency
- Mixins for reusable code
- Variables for easy customization

### ✅ Enhanced User Experience
- Removed sidebar and blog button for cleaner look
- Floating light mode toggle button
- Smooth animations and transitions
- Clickable card areas

### ✅ Content Pages
- Styled About page matching the theme
- Individual blog post layout with large headings
- Sample blog posts demonstrating the layout
- Theme-consistent navigation

## File Structure

```
_sass/
├── base.scss              # Main SCSS file importing all modules
├── _variables.scss        # Theme colors, fonts, and spacing
├── _mixins.scss          # Reusable SCSS mixins
├── _typography.scss      # Font styles and text formatting
├── _buttons.scss         # Button styles and interactions
├── _sidebar.scss         # Sidebar styles (legacy support)
├── _utilities.scss       # Utility classes
└── _blog-cards.scss      # Card layout and animations

_layouts/
├── default.html          # Base layout with navigation
├── blog.html            # Card-based blog listing
└── post.html            # Individual blog post layout

_posts/                   # Sample blog posts
about.md                 # Styled about page
index.md                 # Homepage
```

## Customization

### Colors and Theme
Edit `_sass/_variables.scss` to customize:
- Primary and secondary colors
- Background gradients
- Card styles
- Typography

### Card Layout
Modify `_sass/_blog-cards.scss` for:
- Card dimensions and spacing
- Hover effects
- Image handling
- Responsive breakpoints

### Navigation
Update `_layouts/default.html` to modify:
- Navigation items
- Light mode toggle
- Header styles

## Development Workflow

1. **Start Development Server**
   ```bash
   bundle exec jekyll serve --config _config_preview.yml --livereload
   ```

2. **View Your Site**
   Open `http://localhost:4000` in your browser

3. **Make Changes**
   - Edit SCSS files for styling
   - Modify layouts for structure
   - Add content in markdown files
   - Changes appear instantly with live reload

4. **Add New Posts**
   Create files in `_posts/` with format: `YYYY-MM-DD-title.md`

5. **Production Build**
   ```bash
   bundle exec jekyll build
   ```

## Troubleshooting

### Common Issues

1. **SCSS Compilation Errors**
   - Check syntax in `_sass/` files
   - Ensure all imports in `base.scss` are correct

2. **Layout Issues**
   - Verify layout frontmatter in markdown files
   - Check that layouts exist in `_layouts/`

3. **Live Reload Not Working**
   - Ensure you're using `--livereload` flag
   - Check that port 35729 is available

### Performance Tips

- Use `--incremental` flag for faster rebuilds
- Optimize images before adding to posts
- Minimize custom CSS for better load times

## Production Deployment

For production, use the standard config:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory, ready for deployment to GitHub Pages, Netlify, or any static hosting service.
