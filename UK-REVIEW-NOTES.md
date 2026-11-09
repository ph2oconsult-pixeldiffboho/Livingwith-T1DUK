# UK edition — review notes (read before launch)

Prepared 9 November 2026. This edition was forked from the Australian build and localised for the UK.
It has **not** been reviewed by a UK clinician. The items below need that review before families rely on it.

## A. Safety-critical content that needs UK paediatric diabetes clinician sign-off

| Area | What the UK edition says | Basis | Why it needs review |
|---|---|---|---|
| Hypo threshold | Treat at 3.9 mmol/L or below; recheck in 10–15 min; repeat if still below 5.6 | Alder Hey and GOSH children's diabetes leaflets | Trusts differ. GOSH page carries a 2020 review date. |
| Hypo carbohydrate amounts | Age-banded: ~5g under 5, ~10g ages 5–10, ~15g ages 10–17, max 20g, with examples (glucose tablets, Lucozade, jelly babies, GlucoGel) | Alder Hey leaflet PIAG 108 | **The Australian build used a single 15g rule for all ages.** Tablet strengths vary by brand (GOSH lists 3g per tablet) — confirm examples. |
| Follow-up snack | Only "if your team's plan says so" | Alder Hey / GOSH | Practice varies by team. |
| Severe hypo | Call 999 immediately for unconscious/fitting; use prescribed glucagon; **no glucagon doses given in the app** | Alder Hey leaflet (which gives doses and a "999 if no recovery in 10 min" rule) | Deliberately more conservative than the leaflet. Confirm. |
| Ketone thresholds | <0.6 normal; 0.6–1.4 raised (follow team plan); **1.5+ speak to diabetes team straight away**; **3.0+ DKA likely — go to hospital** | NICE patient information on hyperglycaemia; ACDC sick-day guideline (2018); Gloucestershire leaflet | **Australian build sent families to the emergency department at 1.5.** UK sources differ in detail; many teams use their own bands. |
| Check ketones when | Whenever unwell, and BG >14 for >2 hours | ACDC guideline | Pump families are often told to check sooner. |
| Never stop insulin | Retained | ACDC guideline | — |
| Out-of-hours route | Team's 24-hour line → NHS 111 (England, Scotland, Wales) → A&E. Northern Ireland: hospital/GP out-of-hours | Wikipedia (NHS 111 coverage) | NI 111 status was only confirmed via Wikipedia (last updated 2020). |
| Glucagon | "Many teams prescribe a kit — ask yours" | — | Australian text said every child should have one. UK prescribing practice varies. |
| Carb-ratio example | "ICR 1:15, 60g carbs = 4 units" kept in Learning Path and PDF (labelled illustrative) | — | A worked dose example. Consider removing. |
| "Ask your team before correcting an exercise spike" | Softened from "Do not correct aggressively" | — | Confirm wording. |

## B. Facts I could not verify (treat as unconfirmed)

- **NICE NG18 CGM eligibility for children** — the NICE pages would not load. The app says only "access depends on NICE guidance and your local team". No criteria are stated.
- **HbA1c targets** — deliberately not stated. The Numbers page only explains mmol/mol (48 mmol/mol ≈ 6.5%).
- **Hybrid closed loop** — verified from NHS England: NICE TA943 covers under-19s; phased roll-out from 1 April 2024 over five years.
- **School guidance** — England only, from the DfE statutory guidance PDF (Children and Families Act 2014 s.100). The copy I fetched is dated April 2014; check the current version. Scotland, Wales and Northern Ireland have their own guidance (the app says so but does not describe it).
- **"Prescriptions are free for children"** — stated as a UK-wide fact; not checked against each nation's rules.
- **Teplizumab UK status** — app says "ask your team"; not checked.
- **Deep links not opened:** `nhs.uk/conditions/type-1-diabetes/`, `bepartofresearch.nihr.ac.uk`, `isrctn.com`, `themix.org.uk`, `giveusashout.org`, `samaritans.org`, `childline.org.uk`. Domain-level links to Diabetes UK / Breakthrough T1D UK were checked.
- **Carb reference values** (Learning Path, School & Activity guide) use cups and some Australian-style items (party pie → "mini pie or sausage roll"). Foods were relabelled, **numbers were not re-verified for UK products**.
- **Inspiring Lives** — facts re-checked this session only for Theresa May (diagnosed 2012, disclosed 2013) and Gary Mabbutt (diagnosed at 17; Tottenham captain; 16 England caps). Others (Jonas, Sotomayor, Cutler, Moore, Zverev) were not re-verified.

Verified numbers: Diabetes UK helpline 0345 123 2399, Mon–Fri 9am–6pm. Childline 0800 1111 (under 19, 24/7). Samaritans 116 123. Shout: text SHOUT to 85258. The Mix 0808 808 4994 (3pm–midnight, under 25).

## C. Before you deploy

1. **API key is exposed.** `VITE_ANTHROPIC_API_KEY` is compiled into the public JavaScript. Anyone can read it from the browser and use your key. Move the Anthropic call to a server-side function (e.g. a Vercel function) and keep the key server-side. Do this before any public UK launch.
2. **Domain.** Replace `REPLACE-WITH-UK-DOMAIN` in `public/sitemap.xml` and `public/robots.txt`.
3. **Privacy / UK GDPR.** A child's glucose screenshot is health data sent to a US-based processor (Anthropic). The UI now says "We don't store your image; it is sent to an AI service (Anthropic)" and the privacy page notes processing may occur outside the UK. A UK data-protection review (and ICO registration question for the operator) is recommended.
4. **Fix the images:** "Soccer" labels in three example charts were repainted to "Football" by script (slightly different font weight). `pattern-library.png` has garbled axes from the AI image generator (e.g. "18:00 AM", "72:00 AM", y-values out of order). Regenerate, or replace with charts drawn by the app.
5. **Decision for you — DigiBete.** It is UK-based and used by many UK clinics. It is also the closest comparable product. I did not add it to Resources; that's a positioning call.

## D. Problems found in the *Australian* app (not changed here)

- **Inspiring Lives quotes** were invented text attributed to real people (Theresa May, Halle Berry, Nick Jonas, Mary Tyler Moore, Anne Rice and others). Replaced here with factual one-liners. Halle Berry was removed (diabetes type disputed); James Norton, Elliott Yamin, Anne Rice, Sarah Klau were not carried over (unverified).
- **Community Forum** shows seeded posts that look like real members, and posts written by users are not shared with anyone. The UK edition adds a "preview" notice.
- **"Not stored or shared"** wording on the upload panel and hero is inaccurate (image goes to Anthropic).
- Same exposed API key (see C1).
- Single 15g hypo rule and 1.5 mmol/L → emergency department rule differ from UK practice (not wrong for Australia necessarily; check with an Australian clinician).

## E. What changed from the Australian build

Emergency numbers (000 → 999/112, NHS 111); helplines (Diabetes UK, Samaritans, Childline, Shout, The Mix); NHS/NICE access content replacing NDSS; England school guidance (IHP) replacing DMMP; UK research links; football not soccer; Marmite, crisps, sweets, cereal bar; UK food-label advice; "paediatric diabetes team / diabetes specialist nurse" replacing endocrinologist/educator; en-GB dates; First 90 Days PDF rebuilt (generator now in `tools/`); AI prompt told the family is in the UK; remaining named hormones removed; HbA1c explainer added.

## Sources used

Diabetes UK contact page; NHS England hybrid closed loop page; Alder Hey hypoglycaemia leaflet (PIAG 108); GOSH hypoglycaemia page; NICE patient information (hyperglycaemia/ketones); ACDC sick-day guideline v4 (2018); Gloucestershire Hospitals blood ketone leaflet; DfE statutory guidance on supporting pupils with medical conditions; CWP and YoungMinds helpline pages; Wikipedia (NHS 111, Gary Mabbutt).
