"""Builds public/T1D-First-90-Days-Guide.pdf (UK edition) from tools/learningpath.json.
Run from the project root:
  node tools/extract_learningpath.cjs tools/learningpath.json
  python3 tools/build_90day_pdf.py
Requires: reportlab
"""
import json, re, sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, PageBreak, KeepTogether, Table, TableStyle, NextPageTemplate
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

FD = "/usr/share/fonts/truetype/dejavu/"
pdfmetrics.registerFont(TTFont("Body", FD + "DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("Body-Bold", FD + "DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Body-Italic", FD + "DejaVuSans-Oblique.ttf"))
pdfmetrics.registerFont(TTFont("Body-BoldItalic", FD + "DejaVuSans-BoldOblique.ttf"))
pdfmetrics.registerFontFamily("Body", normal="Body", bold="Body-Bold", italic="Body-Italic", boldItalic="Body-BoldItalic")

DEEP = colors.HexColor("#1A3A4A"); OCEAN = colors.HexColor("#2E86AB"); MUTED = colors.HexColor("#6B7F8E")
CREAM = colors.HexColor("#F7F3EE"); RED = colors.HexColor("#C0392B"); SUN = colors.HexColor("#FFD166")
FOOT = "Living Brilliantly with T1D · UK edition · Educational only — not medical advice"

data = json.load(open("tools/learningpath.json", encoding="utf-8"))

def clean(t):
    t = re.sub(r"[\U0001F000-\U0001FFFF☀-➿️‍]", "", t)  # strip emoji
    t = t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    return t.strip()

body = ParagraphStyle("body", fontName="Body", fontSize=9.6, leading=14.2, textColor=DEEP, spaceAfter=4)
bul = ParagraphStyle("bul", parent=body, leftIndent=14, bulletIndent=3, spaceAfter=2)
h_topic = ParagraphStyle("ht", fontName="Body-Bold", fontSize=12.5, leading=16, textColor=OCEAN, spaceBefore=12, spaceAfter=5)
h_week = ParagraphStyle("hw", fontName="Body-Bold", fontSize=20, leading=24, textColor=colors.white)
h_tag = ParagraphStyle("htg", fontName="Body", fontSize=10.5, leading=14, textColor=colors.white)
h_wk_small = ParagraphStyle("hws", fontName="Body-Bold", fontSize=9, leading=12, textColor=SUN)
toc_w = ParagraphStyle("tw", fontName="Body-Bold", fontSize=11, leading=15, textColor=DEEP, spaceBefore=9)
toc_t = ParagraphStyle("tt", fontName="Body", fontSize=9.6, leading=13.5, textColor=MUTED, leftIndent=12)
h_big = ParagraphStyle("hb", fontName="Body-Bold", fontSize=18, leading=22, textColor=DEEP, spaceAfter=8)

def topic_flow(title, content, wkcolor):
    out = [Paragraph(clean(title), h_topic)]
    lines = content.split("\n")
    num = 0
    for ln in lines:
        raw = ln.strip()
        if not raw:
            continue
        m = re.match(r"^(\d+)\.\s+(.*)", raw)
        if raw.startswith("•"):
            out.append(Paragraph(clean(raw[1:]), bul, bulletText="•"))
        elif m:
            out.append(Paragraph(clean(m.group(2)), bul, bulletText=m.group(1) + "."))
        else:
            out.append(Paragraph(clean(raw), body))
    return out

def on_page(c, doc):
    c.saveState()
    c.setFont("Body", 7.5); c.setFillColor(MUTED)
    c.drawString(18 * mm, 10 * mm, FOOT)
    c.drawRightString(A4[0] - 18 * mm, 10 * mm, str(doc.page))
    c.restoreState()

def cover(c, doc):
    W, H = A4
    c.setFillColor(DEEP); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(OCEAN); c.rect(0, H * 0.34, W, 6, fill=1, stroke=0)
    c.setFillColor(SUN); c.rect(0, H * 0.34 - 10, W * 0.3, 4, fill=1, stroke=0)
    c.setFillColor(colors.white); c.setFont("Body-Bold", 30)
    c.drawString(22 * mm, H * 0.62, "Your First 90 Days")
    c.setFont("Body-Bold", 20); c.drawString(22 * mm, H * 0.62 - 28, "with type 1 diabetes")
    c.setFont("Body", 12); c.setFillColor(colors.HexColor("#CFE3EC"))
    c.drawString(22 * mm, H * 0.62 - 62, "A structured learning guide for newly diagnosed families")
    c.drawString(22 * mm, H * 0.62 - 80, "6 weeks · 18 topics · UK edition")
    c.setFont("Body", 9.5); c.setFillColor(colors.white)
    c.drawString(22 * mm, 30 * mm, "Living Brilliantly with T1D")
    c.setFillColor(colors.HexColor("#9FB8C6"))
    c.drawString(22 * mm, 24 * mm, "Educational only — not medical advice. Always follow your child's diabetes team.")

class Doc(BaseDocTemplate):
    def __init__(self, fn):
        super().__init__(fn, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=18*mm,
                         title="Your First 90 Days with Type 1 Diabetes (UK)", author="Living Brilliantly with T1D")
        fr = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="f")
        self.addPageTemplates([PageTemplate(id="cover", frames=[fr], onPage=cover),
                               PageTemplate(id="main", frames=[fr], onPage=on_page)])

story = [NextPageTemplate("main"), PageBreak()]
story += [Paragraph("Contents", h_big)]
for w in data:
    story.append(Paragraph(f"Week {w['week']} — {clean(w['title'])}", toc_w))
    for t in w["topics"]:
        story.append(Paragraph("› " + clean(t["title"]), toc_t))
story.append(Spacer(1, 10))
story.append(Paragraph("Everyone's child and care plan is different. Where this guide gives examples, your own diabetes team's advice always comes first.", ParagraphStyle("n", parent=body, textColor=MUTED, fontName="Body-Italic")))

for w in data:
    story.append(PageBreak())
    col = colors.HexColor(w.get("color", "#2E86AB"))
    hdr = Table([[Paragraph(f"WEEK {w['week']}", h_wk_small)],
                 [Paragraph(clean(w["title"]), h_week)],
                 [Paragraph(clean(w.get("tagline", "")), h_tag)]],
                colWidths=[A4[0] - 36 * mm])
    hdr.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), col), ("LEFTPADDING", (0, 0), (-1, -1), 12),
                             ("RIGHTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (0, 0), 12),
                             ("BOTTOMPADDING", (0, -1), (-1, -1), 12), ("TOPPADDING", (0, 1), (-1, -1), 2)]))
    story.append(hdr)
    for t in w["topics"]:
        story += topic_flow(t["title"], t["content"], col)

# Emergency + disclaimer page
story.append(PageBreak())
story.append(Paragraph("Emergency numbers and help (UK)", h_big))
rows = [
    ["Emergency (ambulance, fire, police)", "999 or 112"],
    ["NHS 111 — urgent advice (England, Scotland, Wales)", "111"],
    ["Your diabetes team — 24-hour line", "____________________"],
    ["Your local A&E", "____________________"],
    ["Diabetes UK helpline (Mon–Fri, 9am–6pm)", "0345 123 2399"],
    ["Samaritans (free, 24/7)", "116 123"],
    ["Childline (under 19, free, 24/7)", "0800 1111"],
    ["Shout (free text, 24/7)", "Text SHOUT to 85258"],
]
tbl = Table([[Paragraph(clean(a), body), Paragraph("<b>" + clean(b) + "</b>", body)] for a, b in rows],
            colWidths=[(A4[0] - 36 * mm) * 0.62, (A4[0] - 36 * mm) * 0.38])
tbl.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), CREAM), ("LINEBELOW", (0, 0), (-1, -2), 0.5, colors.white),
                         ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
                         ("TEXTCOLOR", (0, 0), (-1, 0), RED)]))
story += [tbl, Spacer(1, 6),
          Paragraph("In Northern Ireland, NHS 111 is not available in the same way — use your hospital's out-of-hours number or GP out-of-hours service.", ParagraphStyle("s", parent=body, fontSize=8.5, textColor=MUTED)),
          Spacer(1, 14), Paragraph("Medical disclaimer", ParagraphStyle("md", parent=h_topic, textColor=DEEP)),
          Paragraph("This guide is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek guidance from your qualified healthcare provider — including your paediatric diabetes team, diabetes specialist nurse, and GP — for any questions about your child's medical condition, treatment plan, or medications.", body),
          Paragraph("Never disregard professional medical advice or delay seeking it because of something you have read in this guide. Insulin doses, ratios and protocols mentioned here are illustrative examples only — your child's actual doses must be set by your diabetes team.", body),
          Paragraph("In an emergency, call 999.", ParagraphStyle("e", parent=body, fontName="Body-Bold", textColor=RED))]

out = sys.argv[1] if len(sys.argv) > 1 else "public/T1D-First-90-Days-Guide.pdf"
Doc(out).build(story)
print("built", out)
