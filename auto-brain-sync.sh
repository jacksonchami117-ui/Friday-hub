#!/bin/bash
# Watch all files (except .git) and push changes automatically
find . -not -path "*/.git/*" | entr -r sh -c '
    if ! git diff --quiet; then
        git add .
        git commit -m "Auto brain sync at $(date)"
        git push origin $(git branch --show-current)
        echo "✅ Changes detected and pushed at $(date)"
    else
        echo "🟦 No changes detected, skipping..."
    fi
'
#!/bin/bash
echo "🧠 Auto brain sync started. Watching for changes..."
while true; do
    find . -type f ! -path "./.git/*" | entr -d ./push-to-brain.sh "Auto brain sync at $(date)"
done
