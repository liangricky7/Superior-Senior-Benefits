# Superior Senior Benefits — Website Owner's Guide

*A plain-English guide to running and updating your website. No coding required.*

---

## Table of Contents
1. What you own and where it lives
2. The three tools (in plain English)
3. One-time setup
4. How to make a change (the everyday routine)
5. How your changes go live
6. Example requests you can copy
7. Golden rules
8. GitHub, explained simply
9. AWS Amplify (your hosting), explained simply
10. If something goes wrong
11. Glossary
12. Who to call

---

## 1. What you own and where it lives

You own a **website** — a set of files that, together, show your business online. Those files live in three places, and each has one job:

- **GitHub** — the safe filing cabinet that stores your website and remembers every version.
- **AWS Amplify** — the service that takes those files and shows them to the public on the internet.
- **Claude Code** — your assistant. You talk to it in plain English, and it does the actual editing for you.

You will spend almost all of your time talking to **Claude Code**. The other two mostly run themselves.

> **The big idea:** You describe what you want → Claude makes the change → the change is saved to GitHub → Amplify automatically puts it live. You never touch the code yourself.

---

## 2. The three tools (in plain English)

| Tool | Think of it as… | What you do with it |
|------|-----------------|---------------------|
| **Claude Code** | A skilled assistant sitting next to you | Tell it what to change, in normal sentences |
| **GitHub** | A filing cabinet with a perfect memory | Nothing day-to-day; it quietly saves every version |
| **AWS Amplify** | The printing press that publishes to the web | Nothing day-to-day; it auto-publishes when you save |

You do **not** need to understand how they work internally. You only need to know the routine in Section 4.

---

## 3. One-time setup

You only do this once. If a technical helper set your computer up already, you can skip to Section 4.

**A. Accounts to have (someone can help you create these):**
- A **GitHub** account (free) — invited to the project.
- An **AWS** account — where Amplify runs and where billing lives.
- A **Claude** account/subscription — to use Claude Code.

**B. Install Claude Code on your computer:**
- Claude Code runs in an app called the **Terminal** (already on your Mac; search for "Terminal" in Spotlight).
- Ask your helper to install Claude Code once and confirm that typing `claude` in the Terminal starts it.

**C. Get a copy of the website onto your computer:**
- Your helper will "clone" (download) the project once so it sits in a folder, for example:
  `Documents/GitHub/Superior-Senior-Benefits`
- After that, it's always there and ready.

> You do this section **once**. Everyday work is just Section 4.

---

## 4. How to make a change (the everyday routine)

This is the part you'll actually use. It's five steps.

**Step 1 — Open the Terminal.**
Press `Cmd + Space`, type `Terminal`, press Enter.

**Step 2 — Go to your website folder.** Type this and press Enter:
```
cd Documents/GitHub/Superior-Senior-Benefits
```

**Step 3 — Start your assistant.** Type this and press Enter:
```
claude
```

**Step 4 — Ask for what you want, in plain English.** For example:
> "Change the phone number in the footer to (555) 123-4567."

Claude will make the change and tell you what it did. If it asks a question, answer in normal words.

**Step 5 — See it, then publish it.**
- To preview on your own screen first, say: *"Show me the site locally so I can look before publishing."*
- When you're happy, say: *"Publish this / make it live."*
Claude will confirm, then send it to GitHub and Amplify will put it online within a few minutes.

That's the whole routine. **Talk → review → publish.**

---

## 5. How your changes go live

You don't upload anything by hand. Here's the automatic chain once you say "publish":

1. Claude **saves** your change into GitHub (this is called a "commit and push").
2. Amplify **notices** the new version automatically.
3. Amplify **rebuilds** the site and **publishes** it.
4. In a few minutes, your live website shows the change.

If you refresh your website and don't see the change yet, wait 2–3 minutes and refresh again.

---

## 6. Example requests you can copy

Copy these and adjust the details. Claude understands normal language, so you don't have to phrase them perfectly.

**Text changes**
- "Change the headline to 'Medicare made simple.'"
- "Fix the typo in the Committed to Helping paragraph."
- "Update the copyright year in the footer to 2027."

**Contact info**
- "Update the phone number everywhere on the site to (555) 123-4567."
- "Change the booking link to this new one: https://…"

**Photos**
- "Replace the founder photo with the new one — the file is on my Desktop called matthew-new.jpg."
  *(Claude will copy your file into the project so the site doesn't depend on your computer.)*

**Documents / downloads**
- "Link the footer 'Privacy Policy' to this PDF in my Downloads folder."
  *(Claude will bring the PDF into the website itself and link to that copy — never to your computer.)*

**Sections & layout**
- "Add a testimonials section below the founder section."
- "Make the buttons a little bigger on phones."

**Publishing**
- "Show me the site so I can review it."
- "Looks good — publish it."

---

## 7. Golden rules

1. **Just describe the goal.** You don't need the "right words." Say what you want to happen.
2. **Review before you publish.** Ask to see it first if you're unsure.
3. **One change at a time is fine.** You can always come back for more.
4. **If Claude asks a question, answer plainly.** It only asks when it needs to get something right.
5. **Nothing is permanent.** GitHub remembers every past version — anything can be undone (see Section 10).
6. **Files on your computer get copied in.** When you point Claude at a photo or PDF on your Mac, it copies that file into the website so the live site never breaks if you move or delete the original.
7. **When in doubt, ask Claude.** e.g. *"Is it safe to do this?"* or *"What will this change?"*

---

## 8. GitHub, explained simply

**What it is:** an online filing cabinet that stores your website and keeps a dated history of every version.

**Why you care:** it means you can never truly "break" the site — an earlier version is always recoverable.

**What you actually do with it:** almost nothing. Claude saves to GitHub for you when you publish. Occasionally you might:
- **See history:** ask Claude, *"Show me the recent changes we've made."*
- **Undo:** ask Claude, *"Undo the last change and put back the previous version."*

You do not need to log into GitHub for daily work.

---

## 9. AWS Amplify (your hosting), explained simply

**What it is:** the service that actually shows your website to the public.

**Why Amplify:** it's low-maintenance. It's connected to your GitHub filing cabinet, so whenever a new version is saved, Amplify **automatically** rebuilds and publishes — no manual uploading.

**Things you'll do occasionally (with a helper the first time):**
- **Connect the site (one time):** In the Amplify console, "Host web app" → connect your GitHub repo → pick the `main` branch. Amplify detects the build automatically. After this, it's automatic forever.
- **Custom domain:** In Amplify → "Domain management," add your domain (e.g. `superiorseniorbenefits.com`) and follow the steps. Do this once.
- **Check a deploy:** The Amplify dashboard shows a green checkmark when the latest publish succeeded.

**Cost:** Amplify is usage-based and typically very inexpensive for a small marketing site (often a few dollars a month or less). Keep an eye on the AWS billing page, or ask a helper to set a billing alert.

> **After the one-time connection, you rarely open Amplify at all.** Publishing happens automatically when you say "publish" to Claude.

---

## 10. If something goes wrong

**"I published, but I don't see the change."**
Wait 2–3 minutes and refresh. Still nothing? Ask Claude: *"Did my last change publish successfully?"*

**"I don't like the change I just made."**
Ask Claude: *"Undo the last change."* Then publish again.

**"The site looks broken."**
Ask Claude: *"Please go back to the last version that worked, and publish it."* GitHub keeps every version, so this is safe.

**"Claude is asking me something I don't understand."**
Reply: *"Explain that in simpler terms and recommend the best option."*

**"The Terminal shows red text / an error."**
Copy the message and paste it to Claude with: *"I got this error — what does it mean and how do we fix it?"*

**Still stuck?** See Section 12.

---

## 11. Glossary

- **Claude Code** — your plain-English assistant that edits the site.
- **Terminal** — the app where you type `claude` to start.
- **Repository ("repo")** — the project folder / your website's files.
- **GitHub** — online storage that keeps every version of the repo.
- **Commit / Push** — saving a change into GitHub (Claude does this for you).
- **Deploy / Publish** — putting the change live on the internet (Amplify does this automatically).
- **AWS Amplify** — the hosting service that publishes your site.
- **Branch (`main`)** — the official live version of your site.
- **Build** — the automatic step that turns the files into the finished website.

---

## 12. Who to call

Fill this in and keep it handy:

- **Technical helper / developer:** ________________________
- **GitHub account email:** ________________________
- **AWS account email / login:** ________________________
- **Domain registrar (where the web address was bought):** ________________________

---

*You've got this. The routine is always the same: open the Terminal, start Claude, say what you want, review, and publish.*
