# FRIDAY — Main Brain Hub

**Source of truth** for projects, SOPs, prompts, decisions, and test logs.  
Use this repo as the single place all chats and VAs reference.

## Quick Start
1) Push this repo to GitHub (private recommended).  
2) In Vercel: New Project → Import GitHub → select this repo.  
   - Build Command: `npm run build:hub`  
   - Output Directory: `dist`
3) Open the Vercel preview/live URL and bookmark it. This is your **Hub Site**.
4) Share the repo & Hub Site links in every working chat.

## Structure
```
friday-hub/
├─ README.md
├─ projects/
│  └─ website-maker/
│     ├─ plan.md
│     ├─ sop/
│     │  ├─ INDEX.md
│     │  ├─ sop-001-add-decision.md
│     │  ├─ sop-002-update-sop.md
│     │  └─ sop-003-ship-change.md
│     ├─ prompts/
│     │  └─ HUB_CHAT_PROMPT.txt
│     ├─ infra/
│     │  └─ vercel-setup.md
│     ├─ ux/ (wireframes/screens)
│     └─ runs/ (test logs, retros)
├─ ops/
│  ├─ conventions.md
│  ├─ glossary.md
│  └─ va-onboarding.md
├─ ledger/
│  ├─ decisions.jsonl
│  └─ issues.jsonl
└─ .github/
   ├─ ISSUE_TEMPLATE.md
   ├─ PULL_REQUEST_TEMPLATE.md
   └─ workflows/
      └─ export-docs.yml
```

## Rules of Engagement
- All decisions → `/ledger/decisions.jsonl` (1 line JSON per decision).
- All new/updated SOPs → `/projects/<proj>/sop/` and `INDEX.md`.
- Significant changes to plan → update `/projects/<proj>/plan.md` and add a decision.
