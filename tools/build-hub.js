import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "dist");
fs.mkdirSync(OUT, { recursive: true });

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

const toHtml = (md) => {
  // simple markdown to html (headings + paragraphs)
  return md
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
};

const sections = [
  ["Start Here", "README.md"],
  ["Website Maker Plan", "projects/website-maker/plan.md"],
  ["SOP Index", "projects/website-maker/sop/INDEX.md"],
  ["Ops Conventions", "ops/conventions.md"],
  ["VA Onboarding", "ops/va-onboarding.md"]
];

const nav = sections.map(([t,_],i)=>`<a href="#s${i}">${t}</a>`).join(" | ");
const body = sections.map(([t,f],i)=>`<section id="s${i}"><h1>${t}</h1>${toHtml(read(f))}</section>`).join("\n");

const html = `<!doctype html><meta charset="utf-8">
<title>FRIDAY — Hub</title>
<style>
body{font-family:system-ui,Arial;margin:32px;max-width:980px}
nav{position:sticky;top:0;background:#fff;padding:12px 0 16px;border-bottom:1px solid #eee;margin-bottom:24px}
nav a{margin-right:12px;text-decoration:none}
section{margin:40px 0}
h1{margin:12px 0 8px}
code,pre{background:#fafafa;padding:4px 6px;border-radius:6px}
</style>
<nav>${nav}</nav>
${body}`;

fs.writeFileSync(path.join(OUT, "index.html"), html);
console.log("Built hub → dist/index.html");
