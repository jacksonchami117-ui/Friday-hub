# SOP-001: Add a Decision to the Hub
**Who:** VA/Owner  
**When:** Any decision is made in chats  
**Tools:** GitHub, this repo

1. Open `/ledger/decisions.jsonl`.
2. Append one JSON line:
   ```json
   {"id":"DEC-YYYY-MM-DD-XX","project":"website-maker","who":"<name>","why":"<reason>","decision":"<what>","links":["projects/website-maker/plan.md#anchor"],"chat":"<chat link>"}
   ```
3. Commit: `ledger: add DEC-YYYY-MM-DD-XX – <summary>` and open a PR.
