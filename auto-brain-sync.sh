#!/bin/bash

LOGFILE="brain-sync.log"

echo "🧠 Brain sync started at $(date)" >> "$LOGFILE"

while true; do
    if ! git diff --quiet; then
        git add .
        git commit -m "Auto brain sync at $(date)"
        git push origin $(git branch --show-current)
        echo "✅ Changes detected and pushed at $(date)" >> "$LOGFILE"
    fi
    sleep 30
done

