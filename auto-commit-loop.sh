#!/bin/bash
while true
do
    git add .
    git commit -m "Friday auto-commit at $(date)" || true
    git push origin auto-updates
    sleep 300  # wait 5 minutes
done
