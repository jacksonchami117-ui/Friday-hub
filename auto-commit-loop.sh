#!/bin/bash
while true
do
    git add .
    git commit -m "Friday auto-commit at $(date)" || true
    git push origin auto-updates
    sleep 120  # wait 2 minutes
done
