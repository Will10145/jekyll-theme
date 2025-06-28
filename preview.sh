#!/bin/bash

# Jekyll Theme Preview Script
# This script starts the Jekyll development server with preview configuration

echo "🚀 Starting Jekyll Theme Preview..."
echo "📝 Using preview configuration with live reload enabled"
echo ""

# Check if bundle is installed
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler not found. Please install with: gem install bundler"
    exit 1
fi

# Install dependencies if needed
if [ ! -f "Gemfile.lock" ]; then
    echo "📦 Installing dependencies..."
    bundle install
fi

echo "🔧 Configuration: _config_preview.yml"
echo "🌐 Server: http://localhost:4000"
echo "🔄 Live reload: Enabled"
echo ""
echo "✨ Features included:"
echo "   • Modern project-card layout"
echo "   • Optimized SCSS architecture"
echo "   • Enhanced hover animations"
echo "   • Responsive design"
echo "   • About page"
echo "   • Sample blog posts"
echo ""
echo "Press Ctrl+C to stop the server"
echo "---"

# Start Jekyll with preview configuration
bundle exec jekyll serve --config _config_preview.yml --livereload --drafts
