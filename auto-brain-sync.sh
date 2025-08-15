#!/bin/bash
echo "🧠 Auto brain sync started. Watching for changes..."
while true; do
    find . -type f ! -path "./.git/*" | entr -d ./push-to-brain.sh "Auto brain sync at $(date)"
done
