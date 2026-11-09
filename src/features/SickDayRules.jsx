import { useState } from "react";

const COLORS = {
  ocean: "#2E86AB", coral: "#F46036", mint: "#56C596",
  sunshine: "#FFD166", lavender: "#9B8EC4", deep: "#1A3A4A",
  red: "#C0392B", amber: "#E67E22", soft: "#F7F3EE",
};

// ── Emergency quick-reference data (UK) ──────────────────────────────────────
const EMERGENCIES = [
  {
    id: "hypo",
    emoji: "📉",
    title: "Low Blood Glucose (Hypoglycaemia)",
    threshold: "3.9 mmol/L or below",
    color: COLORS.coral,
    urgency: "Act immediately",
    symptoms: ["Shakiness or trembling", "Sweating, pale skin", "Hunger, irritability", "Difficulty concentrating or glazed look", "Confusion or slurred speech"],
    steps: [
      { step: "1", action: "Give fast-acting carbohydrate — the amount depends on age", detail: "Under 5: about 5g · Ages 5–10: about 10g · Ages 10–17: about 15g · never more than 20g. Examples for 10g: 3–4 glucose tablets, 120ml Lucozade, 2–3 jelly babies or 1 tube of GlucoGel. Your child's team may give different amounts — follow their plan." },
      { step: "2", action: "Wait 10–15 minutes", detail: "Stay with your child. Do not give more yet — give the glucose time to work." },
      { step: "3", action: "Recheck blood glucose", detail: "If it is still below 5.6 mmol/L (or the level in your team's plan), give the same amount again and recheck in 10–15 minutes." },
      { step: "4", action: "Do they need a snack?", detail: "If your team's plan says so — for example around exercise, at bedtime, or after more than one hypo — follow with a small starchy snack such as a slice of toast. Chocolate, milk and biscuits act too slowly to treat a hypo." },
    ],
    warning: "NEVER put food or drink in the mouth of a child who is unconscious, fitting or cannot swallow safely. Use glucagon and call 999 — see the next card.",
    callOOO: false,
  },
  {
    id: "severe-hypo",
    emoji: "🚨",
    title: "Severe Low — Child Cannot Swallow",
    threshold: "Unconscious, seizing, or unable to swallow",
    color: COLORS.red,
    urgency: "Call 999 immediately",
    symptoms: ["Unconscious or unresponsive", "Seizure or convulsions", "Unable to swallow safely", "Treatment with food or drink has not worked"],
    steps: [
      { step: "1", action: "Call 999 now", detail: "Tell them your child has type 1 diabetes and is unconscious or seizing, and that you think it is a severe low blood glucose." },
      { step: "2", action: "Use glucagon if you have it", detail: "Use the glucagon your diabetes team prescribed, with the dose and instructions they gave you. Nasal glucagon (e.g. Baqsimi): insert the tip into one nostril and press the plunger. Glucagon injection (e.g. GlucaGen HypoKit): follow the kit instructions." },
      { step: "3", action: "Place them on their side", detail: "Recovery position — in case of vomiting. Put nothing in their mouth." },
      { step: "4", action: "Stay with your child", detail: "Do not leave them alone. Glucagon usually works within about 10–15 minutes. Once they are fully awake and can swallow, follow the steps on the previous card." },
    ],
    warning: "After glucagon is used, your child should always be checked by a doctor — even if they recover quickly. Tell your diabetes team.",
    callOOO: true,
  },
  {
    id: "dka",
    emoji: "⚠️",
    title: "Diabetic Ketoacidosis (DKA)",
    threshold: "High blood glucose + ketones + vomiting",
    color: COLORS.red,
    urgency: "Go to A&E now",
    whatIsDka: "DKA happens when the body cannot use glucose for energy due to a lack of insulin. Instead, it breaks down fat, producing ketones. Ketones build up in the blood and can become life-threatening if not treated quickly.",
    symptoms: ["Blood glucose persistently above 14 mmol/L", "Blood ketones of 1.5 mmol/L or above (3.0 or above means DKA is likely)", "Vomiting or tummy pain", "Deep, rapid breathing", "Fruity or sweet smell on breath", "Extreme tiredness, drowsiness or confusion"],
    steps: [
      { step: "1", action: "Go to your nearest A&E now", detail: "Do not wait to see if it improves — DKA can develop quickly. Call 999 if your child is drowsy, confused or struggling to breathe. A hospital that treats children is best." },
      { step: "2", action: "Do NOT stop insulin", detail: "Even if your child is vomiting and not eating — insulin must continue. Never stop insulin without advice from your diabetes team." },
      { step: "3", action: "Check ketones", detail: "Whenever your child is unwell, and any time blood glucose is above 14 mmol/L for more than 2 hours. At 1.5 or above, speak to your diabetes team straight away. At 3.0 or above, DKA is likely — go to hospital." },
      { step: "4", action: "Bring everything", detail: "Bring all insulin, pump equipment, your ketone meter and a list of current doses to A&E." },
    ],
    warning: "When in doubt — go. Early DKA is easier to treat than advanced DKA. Do not wait for a call back from your diabetes team if your child is vomiting.",
    callOOO: true,
  },
];

// ── Sick day rules data (UK) ─────────────────────────────────────────────────
const SICK_SECTIONS = [
  {
    id: "rule1",
    emoji: "💉",
    color: COLORS.ocean,
    title: "Never stop insulin",
    subtitle: "The most important sick day rule",
    content: "Even if your child is not eating, insulin must continue. When the body is fighting illness, it releases stress hormones that raise blood glucose — often significantly. The need for insulin typically increases during illness.\n\nNever stop or reduce insulin without advice from your diabetes team. If you are unsure what to do, call your team.",
    keyPoint: "If your child cannot eat: contact your diabetes team for advice on insulin doses during illness. Never make significant changes to insulin without speaking to them first.",
  },
  {
    id: "rule2",
    emoji: "📊",
    color: COLORS.coral,
    title: "Check blood glucose more often",
    subtitle: "At least every 2–3 hours during illness",
    content: "Illness causes unpredictable blood glucose swings. Normal checking intervals are not enough when your child is unwell.\n\nDuring illness, check blood glucose:\n• At least every 2–3 hours during the day\n• Overnight too (set an alarm)\n• Before and after any vomiting\n• Any time your child seems more unwell than expected",
    keyPoint: "If you use a CGM, ask your diabetes team whether to tighten your alert settings during illness.",
  },
  {
    id: "rule3",
    emoji: "🧪",
    color: COLORS.amber,
    title: "Check ketones",
    subtitle: "Whenever your child is unwell — and when blood glucose stays high",
    content: "Ketones form when the body breaks down fat for energy, as it cannot use glucose due to the lack of insulin. This happens faster during illness.\n\nCheck ketones:\n• Whenever your child is unwell, even if blood glucose looks normal\n• Any time blood glucose is above 14 mmol/L for more than 2 hours\n• Any time your child is vomiting\n• Any time your child has symptoms of DKA (see the Emergency Guide)\n• First thing in the morning when unwell\n\nBlood ketone levels (check your own team's sick day plan, which comes first):\n• Below 0.6 mmol/L — normal. Keep monitoring.\n• 0.6–1.4 mmol/L — raised. Follow your team's sick day plan, recheck in 2 hours, and call your team if unsure or rising.\n• 1.5 mmol/L or above — speak to your diabetes team straight away.\n• 3.0 mmol/L or above — DKA is likely. Go to hospital now.",
    keyPoint: "Ketones of 1.5 mmol/L or above: speak to your diabetes team straight away. If you cannot reach them, or your child is vomiting or unwell, go to A&E. Never wait for ketones to fall on their own.",
  },
  {
    id: "rule4",
    emoji: "💧",
    color: COLORS.mint,
    title: "Keep fluids up",
    subtitle: "Especially when blood glucose is high",
    content: "High blood glucose causes fluid loss through increased urination. Combined with illness — fever, vomiting, reduced intake — dehydration can develop quickly in children.\n\nEncourage fluids:\n• Small, frequent sips rather than large amounts\n• If blood glucose is high: water is best\n• If blood glucose is low — treat it as a hypo first, then encourage fluids\n• If vomiting: very small sips every few minutes",
    keyPoint: "If your child cannot keep any fluids down, or shows signs of dehydration (dry mouth, no tears, very little wee), get medical help — call your diabetes team or NHS 111 (England, Scotland, Wales).",
  },
  {
    id: "rule5",
    emoji: "🍞",
    color: COLORS.sunshine,
    title: "Eating during illness",
    subtitle: "When appetite is poor",
    content: "When appetite is poor during illness, try to encourage small amounts of food. Children still need to eat — even when blood glucose is high.\n\nIf blood glucose is in range or low, easy options include:\n• Plain crackers or dry toast\n• Banana\n• Plain rice or pasta\n• Plain yoghurt\n\nIf your child is eating less, their insulin doses may need to be adjusted — speak to your diabetes team.",
    keyPoint: "Never withhold food from a child who is unwell. Contact your diabetes team for advice on managing food and insulin together during illness.",
  },
  {
    id: "rule6",
    emoji: "🩺",
    color: COLORS.lavender,
    title: "When to call your diabetes team",
    subtitle: "Call early — do not wait",
    content: "Many families wait too long before calling. Your diabetes team would rather hear from you early than see your child in A&E.\n\nCall your diabetes team (or their out-of-hours line) if:\n• Blood glucose is above 14 mmol/L for more than 2 hours and not coming down\n• Ketones are 0.6 mmol/L or above and rising — and always at 1.5 or above\n• Your child is vomiting and cannot keep fluids or insulin down\n• Your child seems increasingly unwell or confused\n• You are unsure what to do",
    keyPoint: "Most UK children's diabetes teams offer 24-hour telephone advice. Save the number in your phone now — before you need it. If you cannot get through, NHS 111 can help in England, Scotland and Wales (in Northern Ireland, use your hospital's out-of-hours number).",
  },
  {
    id: "rule7",
    emoji: "🚑",
    color: COLORS.red,
    title: "Go to A&E if…",
    subtitle: "Do not wait for a call back",
    content: "Go to your nearest A&E — without waiting for a call back from your team — if:\n\n• Blood ketones are 3.0 mmol/L or above\n• Your child is vomiting and ketones are 1.5 mmol/L or above\n• Blood glucose is above 14 mmol/L with ketones and vomiting\n• Your child is vomiting continuously and cannot keep anything down\n• Your child has a fruity or sweet smell on their breath\n• You are frightened — trust your instincts\n\nCall 999 instead if your child is drowsy, confused, very difficult to wake, or breathing rapidly or deeply.",
    keyPoint: "Tell A&E staff straight away: 'My child has type 1 diabetes and I am worried about DKA.' Those words will get you seen faster.",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function EmergencyCard({ em, isOpen, onToggle }) {
  return (
    <div className={`sdr-emerg-card ${isOpen ? "open" : ""}`}
      style={{ "--em-color": em.color }}>
      <div className="sdr-emerg-header" onClick={onToggle}>
        <div className="sdr-emerg-left">
          <div className="sdr-emerg-emoji">{em.emoji}</div>
          <div>
            <div className="sdr-emerg-title">{em.title}</div>
            <div className="sdr-emerg-threshold">{em.threshold}</div>
          </div>
        </div>
        <div className="sdr-emerg-right">
          {em.callOOO && <span className="sdr-ooo-badge">999</span>}
          <span className="sdr-chevron">{isOpen ? "▲" : "▼"}</span>
        </div>
      </div>

      {isOpen && (
        <div className="sdr-emerg-body">
          {em.callOOO && (
            <div className="sdr-call-bar">
              🚨 Call 999 (or 112) · NHS 111 for urgent advice (England, Scotland, Wales)
            </div>
          )}

          {em.whatIsDka && (
            <div className="sdr-dka-explainer">
              <div className="sdr-dka-label">What is DKA?</div>
              <p>{em.whatIsDka}</p>
            </div>
          )}

          <div className="sdr-emerg-section">
            <div className="sdr-emerg-section-label">Signs and symptoms</div>
            <ul className="sdr-symptom-list">
              {em.symptoms.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <div className="sdr-emerg-section">
            <div className="sdr-emerg-section-label">What to do — step by step</div>
            {em.steps.map(s => (
              <div key={s.step} className="sdr-step">
                <div className="sdr-step-num" style={{ background: em.color }}>{s.step}</div>
                <div>
                  <div className="sdr-step-action">{s.action}</div>
                  <div className="sdr-step-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sdr-warning-box" style={{ borderColor: em.color }}>
            <span className="sdr-warning-icon">⚠️</span>
            <span>{em.warning}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function SickSection({ sec, isOpen, onToggle }) {
  return (
    <div className={`sdr-sick-card ${isOpen ? "open" : ""}`}
      style={{ "--s-color": sec.color }}>
      <div className="sdr-sick-header" onClick={onToggle}>
        <div className="sdr-sick-emoji">{sec.emoji}</div>
        <div className="sdr-sick-titles">
          <div className="sdr-sick-title">{sec.title}</div>
          <div className="sdr-sick-subtitle">{sec.subtitle}</div>
        </div>
        <span className="sdr-chevron">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="sdr-sick-body">
          <div className="sdr-sick-content">
            {sec.content.split("\n").map((line, i) => (
              line.trim() === ""
                ? <br key={i} />
                : <p key={i} style={{ margin: "0 0 6px 0" }}>{line}</p>
            ))}
          </div>
          <div className="sdr-key-point">
            <span className="sdr-key-icon">💡</span>
            <span>{sec.keyPoint}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function SickDayRules() {
  const [activeTab, setActiveTab] = useState("sick");
  const [openEmerg, setOpenEmerg] = useState("hypo");
  const [openSick, setOpenSick] = useState("rule1");

  return (
    <div>
      {/* Emergency banner */}
      <div className="sdr-emergency-banner">
        <div className="sdr-banner-icon">🚨</div>
        <div>
          <div className="sdr-banner-title">Medical emergency? Call 999 immediately.</div>
          <div className="sdr-banner-sub">Unconscious child · Seizure · Cannot breathe normally · DKA suspected</div>
        </div>
      </div>

      <div className="section-header">
        <h2>{activeTab === "sick" ? "🤒 Sick Day Rules" : "⚡ Emergency Guide"}</h2>
        <p>{activeTab === "sick"
          ? "What to do when your child with type 1 diabetes is unwell. These rules could prevent a hospital admission."
          : "Step-by-step guidance for low blood glucose, severe lows, and DKA. Save this page to your home screen."
        }</p>
      </div>

      {/* Tab toggle */}
      <div className="sdr-tabs">
        <button
          className={`sdr-tab ${activeTab === "sick" ? "active" : ""}`}
          onClick={() => setActiveTab("sick")}>
          🤒 Sick Day Rules
        </button>
        <button
          className={`sdr-tab ${activeTab === "emergency" ? "active" : ""}`}
          onClick={() => setActiveTab("emergency")}>
          ⚡ Emergency Guide
        </button>
      </div>

      {/* SICK DAY RULES */}
      {activeTab === "sick" && (
        <div>
          <div className="sdr-intro-box">
            <div className="sdr-intro-title">📋 The 7 Sick Day Rules</div>
            <p className="sdr-intro-text">Illness is one of the most challenging situations in type 1 diabetes management. Stress hormones released during illness raise blood glucose unpredictably — and the rules change. Print this page and put it on your fridge.</p>
          </div>

          {SICK_SECTIONS.map(sec => (
            <SickSection
              key={sec.id}
              sec={sec}
              isOpen={openSick === sec.id}
              onToggle={() => setOpenSick(openSick === sec.id ? null : sec.id)}
            />
          ))}

          <div className="sdr-print-note">
            💡 Tip: Save or screenshot this page so you have it available when your child is unwell and you need it quickly.
          </div>
        </div>
      )}

      {/* EMERGENCY GUIDE */}
      {activeTab === "emergency" && (
        <div>
          <div className="sdr-intro-box" style={{ borderColor: COLORS.red, background: "#FFF5F5" }}>
            <div className="sdr-intro-title" style={{ color: COLORS.red }}>⚡ Tap each section to expand</div>
            <p className="sdr-intro-text">This guide covers the three most important emergencies in type 1 diabetes. Bookmark this page — and save your diabetes team's 24-hour number in your phone right now.</p>
          </div>

          {EMERGENCIES.map(em => (
            <EmergencyCard
              key={em.id}
              em={em}
              isOpen={openEmerg === em.id}
              onToggle={() => setOpenEmerg(openEmerg === em.id ? null : em.id)}
            />
          ))}

          {/* Quick reference numbers */}
          <div className="sdr-numbers-box">
            <div className="sdr-numbers-title">📞 Key numbers — save these now</div>
            <div className="sdr-numbers-grid">
              <div className="sdr-number-row"><span className="sdr-number-label">Emergency (UK)</span><span className="sdr-number-val">999 or 112</span></div>
              <div className="sdr-number-row"><span className="sdr-number-label">NHS 111 — urgent advice (England, Scotland, Wales)</span><span className="sdr-number-val">111</span></div>
              <div className="sdr-number-row"><span className="sdr-number-label">Your diabetes team — 24-hour line</span><span className="sdr-number-val">Add yours →</span></div>
              <div className="sdr-number-row"><span className="sdr-number-label">Diabetes UK helpline (Mon–Fri, 9am–6pm)</span><span className="sdr-number-val">0345 123 2399</span></div>
              <div className="sdr-number-row"><span className="sdr-number-label">Your local A&amp;E</span><span className="sdr-number-val">Add yours →</span></div>
            </div>
          </div>

          <div className="sdr-print-note">
            💡 Screenshot the emergency guide and save it to your phone's photos — so it's accessible even without internet.
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="sdr-disclaimer">
        Educational resource only. This guide is for general information and does not replace the specific sick day plan provided by your diabetes care team. Always follow your team's personalised plan. In an emergency, call 999.
      </div>
    </div>
  );
}
