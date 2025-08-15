#!/bin/bash
# Usage: ./push-to-brain.sh "Your commit message"

# Default message if none provided
MESSAGE=${1:-"Auto update from GPT brain"}

# Add all changes
git add .

# Commit changes
git commit -m "$MESSAGE"

# Push to current branch
git push origin $(git branch --show-current)
