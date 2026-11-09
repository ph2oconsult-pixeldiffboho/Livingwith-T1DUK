import { useState } from "react";
import "./App.css";
import GlucoseExplainer from "./features/GlucoseExplainer";
import ScenarioSimulator from "./features/ScenarioSimulator";
import LearningPath from "./features/LearningPath";
import IsThisNormal from "./features/IsThisNormal";
import SchoolActivityCompanion from "./features/SchoolActivity";
import GlucosePatterns from "./features/GlucosePatterns";
import ExplainMyGlucose from "./features/ExplainMyGlucose";
import Onboarding from "./features/Onboarding";
import Dashboard from "./features/Dashboard";
import DisclaimerPage from "./features/DisclaimerPage";
import PatternProfile from "./features/PatternProfile";
import GlucoseExplorer from "./features/GlucoseExplorer";
import TeenPage from "./features/TeenPage";
import SickDayRules from "./features/SickDayRules";

const HERO_EXAMPLES = [
  {
    src: "/pizza-effect-example.png",
    alt: "CGM graph showing delayed glucose spike after pizza dinner",
    caption: "Delayed spike 2.5 hours after dinner — likely the pizza effect",
  },
  {
    src: "/soccer-effect-example.png",
    alt: "CGM graph showing glucose rise after football training",
    caption: "Glucose rose 4 hours after football training — exercise effect",
  },
];

function HeroExampleCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % HERO_EXAMPLES.length), 4000);
    return () => clearInterval(t);
  }, []);
  const ex = HERO_EXAMPLES[active];
  return (
    <div className="hero-example-img-wrap">
      <div className="hero-example-label">Here's what the analysis looks like</div>
      <img key={active} src={ex.src} alt={ex.alt} className="hero-example-img hero-example-img--fade" />
      <div className="hero-example-caption">
        <span className="hero-example-caption-tag">Pattern detected</span>
        {ex.caption}
      </div>
      <div className="hero-carousel-dots">
        {HERO_EXAMPLES.map((_, i) => (
          <button key={i} className={`hero-carousel-dot ${i === active ? "active" : ""}`} onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  );
}


const COLORS = {
  ocean: "#2E86AB",
  coral: "#F46036",
  mint: "#56C596",
  sunshine: "#FFD166",
  lavender: "#9B8EC4",
  deep: "#1A3A4A",
  soft: "#F7F3EE",
  muted: "#8A9BB0",
};

const inspiringPeople = [
  { name: "Theresa May", field: "Former UK Prime Minister", diagnosed: "Adulthood (2012)", fact: "Diagnosed with type 1 diabetes in 2012 while serving as Home Secretary, and became Prime Minister in 2016.", emoji: "🇬🇧", color: COLORS.ocean },
  { name: "Gary Mabbutt", field: "Footballer & diabetes campaigner", diagnosed: "Age 17", fact: "Went on to captain Tottenham Hotspur for 11 years and win 16 caps for England.", emoji: "⚽", color: COLORS.mint },
  { name: "Nick Jonas", field: "Musician & Actor", diagnosed: "Age 13", fact: "Co-founded the charity Beyond Type 1 and has toured the world as a musician and actor.", emoji: "🎵", color: COLORS.coral },
  { name: "Alexander Zverev", field: "Professional Tennis Player", diagnosed: "Early childhood", fact: "Has played at the highest level of professional tennis, including world top-10 rankings.", emoji: "🎾", color: COLORS.lavender },
  { name: "Sonia Sotomayor", field: "US Supreme Court Justice", diagnosed: "Age 7", fact: "Became a Justice of the US Supreme Court in 2009.", emoji: "⚖️", color: COLORS.sunshine },
  { name: "Jay Cutler", field: "NFL Quarterback", diagnosed: "Age 25", fact: "Diagnosed in 2008 and went on to a long career in the NFL.", emoji: "🏈", color: COLORS.mint },
  { name: "Mary Tyler Moore", field: "Actress & Activist", diagnosed: "Age 33", fact: "Became a prominent campaigner for diabetes research.", emoji: "🎬", color: COLORS.coral },
];

const childModules = [
  {
    id: "what-is-t1d", title: "What's happening in my body?", emoji: "🫀", color: COLORS.ocean, ageGroup: "All ages",
    description: "A friendly journey through how insulin works — with simple words.",
    content: `Your body has a special organ called the **pancreas**. In most people, it makes a helpful molecule called **insulin** — like a tiny key 🔑 that lets sugar into your cells for energy.\n\nWith type 1 diabetes, the body's own defense system accidentally attacks the cells that make insulin. It's not anyone's fault — not yours, not your parents'. It just happens.\n\nNow you get to be your own superhero — checking your blood sugar and giving your body the insulin it needs! 💪`,
    activity: "Draw your pancreas and give it a superhero cape!",
    funFact: "Your pancreas is about the size of your hand — pretty small for such an important job! 🖐️",
  },
  {
    id: "blood-sugar", title: "Understanding my blood sugar", emoji: "📊", color: COLORS.coral, ageGroup: "Ages 6+",
    description: "Learn what blood sugar is, why it matters, and what the numbers mean.",
    content: `**Blood sugar** (also called blood glucose) is the amount of sugar floating in your blood. You need just the right amount — not too much, not too little!\n\n🟢 **In range** (about 4–10 mmol/L): Feels great! You have energy to play, think and laugh.\n\n🔴 **Too low (Hypo)**: You might feel shaky, hungry, or dizzy. Quick fix: eat some fast sugar like juice or glucose tablets!\n\n🟡 **Too high (Hyper)**: You might feel tired or need to go to the bathroom a lot. Insulin helps bring it back down.`,
    activity: "Keep a 3-day 'mood and blood sugar' journal. Do you notice any patterns?",
    funFact: "Your brain uses 20% of all the sugar in your blood — it's a super hungry organ! 🧠",
  },
  {
    id: "coping", title: "It's okay to feel big feelings", emoji: "💙", color: COLORS.lavender, ageGroup: "All ages",
    description: "Type 1 diabetes can bring up lots of emotions. All of them are completely normal.",
    content: `Finding out your child has type 1 diabetes can feel overwhelming. You might feel:\n\n😢 **Sad** — It's okay to grieve. This is a big change.\n😡 **Angry** — "Why me?" is a completely fair question.\n😰 **Scared** — New things can feel scary, but you'll learn to manage them.\n😌 **Hopeful** — Millions of people live amazing lives with type 1 diabetes!\n\nTalk to your parents, a counsellor, or another child with type 1 diabetes. You are **never** alone in this. There are whole communities of type 1 diabetes families who understand exactly what you're going through. 🤝`,
    activity: "Write a letter to your future self — a version of you who has learned to live brilliantly with type 1 diabetes.",
    funFact: "Over 8.4 million people worldwide live with type 1 diabetes. That's a huge community rooting for you! 🌍",
  },
  {
    id: "daily-life", title: "Type 1 diabetes in my daily life", emoji: "☀️", color: COLORS.mint, ageGroup: "Ages 8+",
    description: "How to handle school, sports, sleepovers and everything in between.",
    content: `Type 1 diabetes comes with you everywhere — and that's actually okay! Here's how to handle some common situations:\n\n🏫 **At school**: Tell a trusted teacher. Keep snacks and your kit nearby. You have the right to check your blood sugar anytime.\n\n⚽ **Playing sports**: Exercise can lower blood sugar — have snacks ready, let your coach know, and wear your medical ID.\n\n🌙 **Sleepovers**: Talk to your parents and your friend's parents beforehand. Set a nighttime alarm to check your levels.\n\n🎂 **Parties & treats**: You can still eat birthday cake! You'll just learn how to balance it with insulin. Nothing is fully off limits.`,
    activity: "Create a 'diabetes kit' checklist for your school bag — what do you need every day?",
    funFact: "Many athletes with type 1 diabetes have competed in the Olympics and professional sports! 🏅",
  },
];

const parentModules = [
  {
    id: "parent-understanding", title: "Understanding type 1 diabetes: The Science", icon: "🔬", color: COLORS.ocean,
    description: "What type 1 diabetes actually is — and crucially, what it isn't.",
    content: `type 1 diabetes is an **autoimmune condition** where the body's immune system mistakenly destroys the beta cells in the pancreas that produce insulin. Without insulin, glucose cannot enter cells and accumulates in the bloodstream.\n\n**This is NOT:**\n• Caused by eating too much sugar\n• A lifestyle disease (that is Type 2)\n• Something your child or you caused\n• Curable through diet alone\n\n**This IS:**\n• Manageable with insulin therapy, monitoring, and lifestyle awareness\n• A condition thousands of children thrive with every single day\n• Something your whole family will adapt to — and you will adapt.\n\nCurrent treatment involves insulin delivery (via injections or pump) and continuous blood glucose monitoring. Technology has made this more manageable than ever before.`,
    keyTakeaway: "Type 1 diabetes is manageable. Your child can live a full, extraordinary life.",
  },
  {
    id: "parent-emotional", title: "Supporting your child emotionally", icon: "❤️", color: COLORS.coral,
    description: "How to be present without increasing fear or anxiety.",
    content: `The diagnosis is a grief process — for you AND your child. Research shows that parental anxiety directly affects a child's adaptation to type 1 diabetes. Here's how to help:\n\n**DO:**\n✅ Acknowledge their feelings without minimising them\n✅ Use calm, factual language about type 1 diabetes management\n✅ Celebrate their resilience and small wins\n✅ Involve them in age-appropriate decisions about their care\n✅ Connect with other type 1 diabetes families — peer support is invaluable\n\n**AVOID:**\n❌ Projecting your own fears onto them\n❌ Over-monitoring to the point of anxiety\n❌ Making type 1 diabetes the centre of every family conversation of every family conversation\n❌ Treating them as fragile — they are strong!\n\nPsychological support for both child and parent is a legitimate and important part of type 1 diabetes care.`,
    keyTakeaway: "Your calm is their calm. Your resilience models theirs.",
  },
  {
    id: "parent-school", title: "Navigating school & social life", icon: "🏫", color: COLORS.mint,
    description: "Advocating for your child while fostering independence.",
    content: `**At School (England):**\nSchools have a legal duty to support pupils with medical conditions (Children and Families Act 2014) and must have regard to the Department for Education's statutory guidance. Work with the school and your diabetes team to agree an **Individual Healthcare Plan (IHP)** — a written plan setting out what support your child needs, when, and from whom. Key inclusions:\n• Freedom to check blood glucose and treat lows immediately\n• Access to snacks without waiting for permission\n• Trained staff for emergencies — your diabetes team or school nurse can help arrange training\n• Medicines and monitoring equipment kept accessible, not locked away\n• Clear communication with you, and a plan for trips and PE\n\nThe plan should be reviewed at least once a year, or sooner if your child's needs change. Scotland, Wales and Northern Ireland have their own guidance — ask your diabetes team or Diabetes UK what applies where you live.\n\n**Building Independence:**\nAge-appropriate independence in diabetes management is a health outcome in itself. Children who have ownership over their care tend to have better long-term outcomes. Start small:\n• Ages 6–8: Recognise symptoms, tell adults\n• Ages 8–12: Participate in carb counting, understand their kit\n• Ages 12+: Growing autonomy with parental oversight\n\n**Social situations:**\nCoach your child on how to briefly explain type 1 diabetes to peers. Most children are curious, not unkind. Normalising it early makes social life much easier.`,
    keyTakeaway: "Advocate fiercely AND foster independence — both are acts of love.",
  },
  {
    id: "parent-tech", title: "Technology & Management Tools", icon: "📱", color: COLORS.lavender,
    description: "The remarkable technology that helps manage type 1 diabetes today.",
    content: `Type 1 diabetes management has transformed remarkably in recent decades:\n\n**Continuous Glucose Monitors (CGMs)**\nDevices like Dexcom G7 and Libre 3 check blood sugar every few minutes, sending alerts to your phone. No more constant finger pricks.\n\n**Insulin Pumps**\nDelivers continuous insulin through a small cannula. Some systems like Omnipod and Tandem t:slim X2 can communicate with CGMs for semi-automated dosing.\n\n**Closed-Loop / Hybrid Closed-Loop Systems**\nSometimes called an "artificial pancreas" — the CGM and pump communicate automatically to adjust insulin based on glucose trends. Life-changing for many families.\n\n**Apps & Data**\nApps allow parents to view their child's glucose levels remotely. This "share" feature provides peace of mind without constant intrusion.\n\n**Important**: Work with your diabetes team to find the right combination for your child's age, activity level, and lifestyle.`,
    keyTakeaway: "The technology available today is extraordinary — and it keeps improving.",
  },
];

const resources = [
  { name: "Diabetes UK", url: "https://www.diabetes.org.uk", description: "The UK's leading diabetes charity — information, a helpline (0345 123 2399, Mon–Fri 9am–6pm), and support for families and children.", type: "National Support", emoji: "🏥", color: COLORS.sunshine },
  { name: "Breakthrough T1D UK", url: "https://breakthrought1d.org.uk", description: "The UK arm of the global type 1 diabetes research charity (formerly JDRF UK). Research news, information and community events for families.", type: "Research & Support", emoji: "🔬", color: COLORS.ocean },
  { name: "NHS — Type 1 diabetes", url: "https://www.nhs.uk/conditions/type-1-diabetes/", description: "Clear NHS information on type 1 diabetes: symptoms, treatment and living with the condition.", type: "NHS Information", emoji: "🩺", color: COLORS.mint },
  { name: "Beyond Type 1", url: "https://beyondtype1.org", description: "International peer support community, education resources, and tools for people living with type 1 diabetes.", type: "Community & Education", emoji: "🤝", color: COLORS.coral },
  { name: "Children with Diabetes", url: "https://childrenwithdiabetes.com", description: "A large online community for kids, families, and adults with type 1 diabetes (US-based).", type: "Family Community", emoji: "👨‍👩‍👧", color: COLORS.lavender },
  { name: "T1D Exchange", url: "https://t1dexchange.org", description: "Registry and research platform connecting people with type 1 diabetes to research studies (mainly US-based).", type: "Research Platform", emoji: "📊", color: COLORS.ocean },
];

const mentalHealthLinks = [
  { name: "Diabetes UK — emotional wellbeing", url: "https://www.diabetes.org.uk", desc: "Information and support for the emotional side of living with or caring for someone with diabetes, plus the Diabetes UK helpline.", emoji: "🧠", color: COLORS.lavender },
  { name: "Samaritans", url: "https://www.samaritans.org", desc: "Free listening support, 24 hours a day. Call 116 123 — you do not have to be suicidal to call.", emoji: "📞", color: COLORS.coral },
  { name: "Childline", url: "https://www.childline.org.uk", desc: "Free, confidential support for anyone under 19. Call 0800 1111, 24 hours a day.", emoji: "🌟", color: COLORS.lavender },
  { name: "Shout", url: "https://giveusashout.org", desc: "Free, confidential 24/7 text support. Text SHOUT to 85258 if you are in crisis and need to talk.", emoji: "💬", color: COLORS.ocean },
  { name: "YoungMinds", url: "https://www.youngminds.org.uk", desc: "Mental health information and support for young people and for parents worried about a child, including what to do in a crisis.", emoji: "🌿", color: COLORS.mint },
  { name: "The Mix", url: "https://www.themix.org.uk", desc: "Free support for under-25s. Call 0808 808 4994 (3pm–midnight daily).", emoji: "💙", color: COLORS.ocean },
  { name: "DiabetesSisters – Diabetes Distress", url: "https://diabetessisters.org/mental-health", desc: "Guidance specifically on 'diabetes distress' — the emotional burden unique to managing a chronic condition (US-based).", emoji: "❤️‍🩹", color: COLORS.sunshine },
];

const treatments = [
  {
    title: "Insulin Therapy", emoji: "💉", color: COLORS.ocean,
    summary: "The foundation of all type 1 diabetes management. Everyone with type 1 diabetes requires insulin to survive.",
    detail: `**Multiple Daily Injections (MDI)**\nThe traditional approach: fast-acting insulin with meals, plus long-acting background insulin once or twice daily. Widely available and effective.\n\n**Insulin Pumps**\nA small wearable device delivering a continuous low dose of insulin, with extra doses for meals. Removes the need for multiple daily injections. Several manufacturers make pumps — your diabetes team will explain what they offer.\n\n**Common insulins**\nRapid-acting: NovoRapid, Humalog, Fiasp. Long-acting: Lantus, Tresiba.\n\n**Accessibility in the UK**\nInsulin is prescribed by your child's diabetes team and GP, and prescriptions are free for children. Your diabetes team will talk you through pens, pumps and the other equipment from the point of diagnosis.`,
  },
  {
    title: "Continuous Glucose Monitors (CGMs)", emoji: "📡", color: COLORS.coral,
    summary: "Small wearable sensors that check blood glucose every few minutes — day and night.",
    detail: `CGMs have transformed type 1 diabetes management by providing real-time glucose data, trend arrows, and alerts.\n\n**Dexcom**: A sensor worn on the body that streams glucose readings to a phone or smartwatch, with alerts.\n\n**Abbott FreeStyle Libre**: A small sensor worn on the arm, widely used in the UK, with optional real-time alerts on some models.\n\n**Medtronic Guardian**: Works with some Medtronic pumps as part of closed-loop systems.\n\n**Accessibility in the UK**\nCGM for children is provided through NHS children's diabetes teams. Who is offered which system depends on NICE guidance and local arrangements, so ask your diabetes team what is available to you.`,
  },
  {
    title: "Closed-Loop Systems ('Artificial Pancreas')", emoji: "🤖", color: COLORS.mint,
    summary: "CGM and pump communicate automatically to adjust insulin — the closest thing to a functioning pancreas.",
    detail: `Hybrid closed-loop systems represent the biggest leap forward in type 1 diabetes technology in decades.\n\n**How it works**: The CGM reads glucose every few minutes and sends data to the pump, which automatically adjusts insulin — increasing if glucose is rising, reducing if falling.\n\n**Access on the NHS**\nNICE (technology appraisal TA943) recommends hybrid closed loop systems for children and young people with type 1 diabetes under 19. NHS England began a phased roll-out on 1 April 2024, planned over five years, so availability varies between services. There is no separate application — keep attending your child's diabetes appointments, where the team will discuss options with you.\n\nSystems differ by manufacturer; your team will explain which ones they offer.\n\n**DIY Looping**: Some families use open-source systems (Loop, AndroidAPS). Not officially approved but widely used — discuss with your diabetes team.`,
  },
  {
    title: "Emerging & Future Treatments", emoji: "🔭", color: COLORS.lavender,
    summary: "Exciting therapies in development that could transform — or even cure — type 1 diabetes.",
    detail: `**Teplizumab (Tzield)**\nThe first drug approved to **delay the onset** of T1D in at-risk individuals — a landmark milestone in modifying the disease course. Approved by the FDA in the US in 2022 — ask your diabetes team about its availability in the UK.\n\n**Stem Cell Therapies**\nResearchers are working to grow new insulin-producing beta cells from stem cells. Vertex Pharmaceuticals has reported promising early clinical results.\n\n**Beta Cell Encapsulation**\nTransplanting beta cells in a protective capsule that shields them from the immune system — potentially removing the need for daily insulin.\n\n**Islet Cell Transplantation**\nAvailable only at a small number of specialist centres, for severe cases. Replaces destroyed beta cells, though immune suppression is currently required.\n\n**Smart Insulin**\nInsulin molecules that only activate when blood sugar is high. Still in clinical trials but could be game-changing.\n\nFollow Breakthrough T1D (breakthrought1d.org) for the latest updates on all these therapies.`,
  },
];

const researchOpportunities = [
  { name: "Breakthrough T1D Clinical Trials", url: "https://www.breakthrought1d.org/t1d-resources/clinical-trials/", desc: "Search for open trials funded and vetted by Breakthrough T1D. Includes prevention, cure, and management studies.", emoji: "🧬", color: COLORS.ocean, who: "Children & Adults" },
  { name: "NIHR Be Part of Research", url: "https://bepartofresearch.nihr.ac.uk", desc: "The NHS and NIHR service for finding health research studies in the UK. Search for 'type 1 diabetes'.", emoji: "🇬🇧", color: COLORS.mint, who: "All ages, UK" },
  { name: "ISRCTN Registry", url: "https://www.isrctn.com", desc: "A UK-based registry of clinical trials. Search 'type 1 diabetes' to see studies open in the UK and elsewhere.", emoji: "📋", color: COLORS.sunshine, who: "All ages" },
  { name: "T1D Exchange Registry", url: "https://t1dexchange.org/registry/", desc: "A large type 1 diabetes research registry (mainly US-based). Your data helps researchers understand real-world outcomes.", emoji: "📊", color: COLORS.coral, who: "Children & Adults" },
  { name: "TrialNet – Prevention Studies", url: "https://www.trialnet.org", desc: "International network studying type 1 diabetes prevention and delay. Screening availability varies by country — check whether a site is open near you.", emoji: "🔍", color: COLORS.lavender, who: "Relatives of people with type 1 diabetes" },
  { name: "ClinicalTrials.gov", url: "https://clinicaltrials.gov/search?cond=Type+1+Diabetes", desc: "The world's most comprehensive clinical trials database. Filter by age, location, and phase to find opportunities near you.", emoji: "🌐", color: COLORS.ocean, who: "Global — all ages" },
];

const seedMessages = [
  { id: 1, author: "Sarah M.", avatar: "👩", role: "Parent", time: "2 days ago", text: "Just joined this community after my 8-year-old was diagnosed last month. Still processing everything but finding so much comfort reading through these posts. Thank you all. 💙" },
  { id: 2, author: "James T.", avatar: "👨", role: "Parent", time: "2 days ago", text: "Welcome Sarah. We were exactly where you are 18 months ago. It gets so much easier. The first few weeks are the hardest — reach out anytime." },
  { id: 3, author: "Lily (age 14)", avatar: "👧", role: "type 1 diabetes advocate", time: "1 day ago", text: "Hi! I've had type 1 diabetes since I was 6. I want any newly diagnosed kids reading this to know — you will be absolutely fine. I play netball, go to sleepovers, eat birthday cake. It becomes normal. 🎉" },
  { id: 4, author: "Rachel K.", avatar: "👩‍⚕️", role: "Diabetes Educator", time: "1 day ago", text: "Such a wonderful thread. For any parents feeling overwhelmed by the numbers and technology — please remember, no one expects perfection. We aim for 'good enough' most days, not perfect. That's genuinely the clinical advice! 😊" },
  { id: 5, author: "Tom B.", avatar: "👦", role: "Parent", time: "20 hours ago", text: "Quick question for the group — how do you handle the school canteen situation? My son (10) feels embarrassed counting carbs in front of friends." },
  { id: 6, author: "Maria S.", avatar: "👩", role: "Parent", time: "18 hours ago", text: "Tom — we pre-loaded his most common lunch choices into the app so he can just tap and go. Looks exactly like what his friends are doing on their phones! Made a huge difference to his confidence." },
];

function formatContent(text) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        <br />
      </span>
    );
  });
}

function ForumTab() {
  const [messages, setMessages] = useState(seedMessages);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Parent");
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  const handlePost = () => {
    if (!text.trim() || !name.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      author: name.trim(),
      avatar: role === "type 1 diabetes advocate" ? "🌟" : "💬",
      role, time: "Just now", text: text.trim(),
    }]);
    setText(""); setName(""); setPosted(true);
    setTimeout(() => setPosted(false), 3000);
  };

  return (
    <>
      <div className="section-header">
        <h2>💬 Community Forum</h2>
        <p>A safe, warm space for type 1 diabetes families to connect, share experiences, ask questions, and support one another. You are never alone.</p>
      </div>
      <div className="forum-disclaimer">
        <strong>Community guidelines:</strong> This forum is a peer support space. Please be kind and respectful. For medical advice, always consult your diabetes team. <br /><em>Preview: the posts below are examples to show how the forum could work — they are not from real community members, and anything you write here is not yet shared with other families.</em>
      </div>
      <div className="forum-messages">
        {messages.map(msg => (
          <div key={msg.id} className="forum-message">
            <div className="forum-avatar">{msg.avatar}</div>
            <div className="forum-body">
              <div className="forum-meta">
                <span className="forum-author">{msg.author}</span>
                <span className="forum-role">{msg.role}</span>
                <span className="forum-time">{msg.time}</span>
              </div>
              <div className="forum-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="forum-compose">
        <h3 style={{ marginBottom: 16, fontSize: "1rem", fontWeight: 800, color: COLORS.deep }}>Share your thoughts or ask a question</h3>
        <div className="forum-fields">
          <input className="forum-input" placeholder="Your name or first name" value={name} onChange={e => setName(e.target.value)} />
          <select className="forum-select" value={role} onChange={e => setRole(e.target.value)}>
            <option>Parent</option>
            <option>Type 1 diabetes advocate</option>
            <option>Family Member</option>
            <option>Healthcare Professional</option>
            <option>Other</option>
          </select>
        </div>
        <textarea className="forum-textarea" placeholder="Write your message here — a question, a story, some encouragement..." value={text} onChange={e => setText(e.target.value)} rows={4} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button className="forum-post-btn" onClick={handlePost}>Post to community →</button>
          {posted && <span style={{ color: COLORS.mint, fontWeight: 700, fontSize: "0.9rem" }}>✓ Posted! Thank you.</span>}
        </div>
      </div>
    </>
  );
}

function MentalHealthTab() {
  return (
    <>
      <div className="section-header">
        <h2>🧠 Mental Health & Wellbeing</h2>
        <p>Type 1 diabetes affects the whole family emotionally — not just physically. Seeking support is a sign of strength, not struggle.</p>
      </div>
      <div className="mh-banner">
        <div style={{ fontSize: "2rem", marginBottom: 12 }}>💙</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", marginBottom: 8 }}>Diabetes Distress is real — and common</div>
        <div style={{ fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.9 }}>
          Research shows that up to 45% of people with type 1 diabetes experience significant diabetes-related distress — and parents face their own significant emotional burden. Feeling anxious, exhausted, or overwhelmed is a normal response to a genuinely demanding situation. The resources below are here for you.
        </div>
      </div>
      <div className="resources-grid" style={{ marginBottom: 32 }}>
        {mentalHealthLinks.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-card" style={{ "--res-color": r.color }}>
            <span className="resource-emoji">{r.emoji}</span>
            <div className="resource-name">{r.name}</div>
            <div className="resource-desc">{r.desc}</div>
            <div className="resource-link" style={{ color: r.color }}>Visit →</div>
          </a>
        ))}
      </div>
      <div className="mh-tips">
        <div style={{ fontWeight: 800, fontSize: "1rem", color: COLORS.deep, marginBottom: 16 }}>🌿 Evidence-based coping strategies</div>
        {[
          { emoji: "🤝", tip: "Connect with other type 1 diabetes families", detail: "Peer support consistently shows better emotional outcomes than professional support alone. Online and in-person communities make a profound difference." },
          { emoji: "📓", tip: "Don't aim for perfect diabetes management", detail: "Aiming for perfection causes burnout. Most diabetes teams are happy with 70% time-in-range — 'good enough' is genuinely the clinical goal." },
          { emoji: "🧘", tip: "Mindfulness & breathing techniques", detail: "Short daily mindfulness practices reduce diabetes distress. Apps like Headspace and Calm offer short guided practices that many families find helpful." },
          { emoji: "💬", tip: "Talk to a psychologist who understands chronic illness", detail: "Ask your diabetes team — children's diabetes teams in the UK should be able to offer or arrange psychological support." },
        ].map(item => (
          <div key={item.tip} className="mh-tip-card">
            <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{item.emoji}</div>
            <div style={{ fontWeight: 800, marginBottom: 6, color: COLORS.deep }}>{item.tip}</div>
            <div style={{ fontSize: "0.875rem", color: "#4A6070", lineHeight: 1.5 }}>{item.detail}</div>
          </div>
        ))}
      </div>
      <div className="crisis-box">
        <div style={{ fontWeight: 800, marginBottom: 8 }}>🆘 If you or your child needs urgent support</div>
        <div style={{ fontSize: "0.9rem", lineHeight: 1.9 }}>
          <strong>Samaritans:</strong> 116 123 — free, 24/7<br />
          <strong>Childline (under 19):</strong> 0800 1111 — free, 24/7<br />
          <strong>Shout:</strong> text SHOUT to 85258 — free, 24/7<br />
          <strong>NHS 111 (England):</strong> call 111 and choose the mental health option<br />
          <strong>Emergency:</strong> 999
        </div>
      </div>
    </>
  );
}

function TreatmentsTab() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className="section-header">
        <h2>💊 Treatments & Accessibility</h2>
        <p>A clear guide to current type 1 diabetes treatments, what's available in the UK, and how access works through the NHS.</p>
      </div>
      <div className="ndss-banner">
        <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🇬🇧</div>
        <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 6 }}>Treatment and technology through the NHS</div>
        <div style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          In the UK, your child's insulin and diabetes supplies are prescribed through the NHS, and prescriptions are free for children. Which technology is offered — CGM, pumps, hybrid closed loop — depends on national NICE guidance and what your local children's diabetes service can provide. Ask your diabetes team what is available to you, starting from the first few weeks after diagnosis.
        </div>
      </div>
      <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
        {treatments.map(t => (
          <div key={t.title} className="treatment-card" style={{ "--t-color": t.color }}>
            <div className="treatment-header" onClick={() => setOpen(open === t.title ? null : t.title)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{t.emoji}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: COLORS.deep }}>{t.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#4A6070", marginTop: 2 }}>{t.summary}</div>
                </div>
              </div>
              <span className="treatment-chevron">{open === t.title ? "▲" : "▼"}</span>
            </div>
            {open === t.title && (
              <div className="treatment-detail">{formatContent(t.detail)}</div>
            )}
          </div>
        ))}
      </div>
      <div className="stay-current">
        <div style={{ fontWeight: 800, marginBottom: 8, color: COLORS.deep }}>📋 Questions to ask your diabetes team</div>
        <div style={{ fontSize: "0.9rem", color: "#4A6070", lineHeight: 1.9 }}>
          • Is my child eligible for a CGM on the NHS?<br />
          • Would an insulin pump be appropriate for my child's age and lifestyle?<br />
          • Is a closed-loop system suitable for us right now?<br />
          • What does hybrid closed loop access look like in our area?<br />
          • What support is available for us as a family (education days, psychology, peer groups)?
        </div>
      </div>
    </>
  );
}

function ResearchTab() {
  return (
    <>
      <div className="section-header">
        <h2>🔬 Participating in Research</h2>
        <p>Every family who participates in type 1 diabetes research helps bring a cure closer. Here's how to get involved — safely and confidently.</p>
      </div>
      <div className="research-why">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", marginBottom: 16, color: COLORS.deep }}>Why participate?</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 16, marginBottom: 8 }}>
          {[
            { emoji: "🧬", text: "Help scientists understand type 1 diabetes — potentially accelerating a cure" },
            { emoji: "💊", text: "Access cutting-edge treatments before they're widely available" },
            { emoji: "📊", text: "Contribute real-world data that changes clinical guidelines" },
            { emoji: "🤝", text: "Join a global community working toward the same goal" },
          ].map(item => (
            <div key={item.text} className="research-why-card">
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{item.emoji}</div>
              <div style={{ fontSize: "0.875rem", color: "#4A6070", lineHeight: 1.5 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="resources-grid" style={{ marginBottom: 28 }}>
        {researchOpportunities.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-card" style={{ "--res-color": r.color }}>
            <span className="resource-emoji">{r.emoji}</span>
            <div className="resource-type" style={{ color: r.color }}>{r.who}</div>
            <div className="resource-name">{r.name}</div>
            <div className="resource-desc">{r.desc}</div>
            <div className="resource-link" style={{ color: r.color }}>Explore →</div>
          </a>
        ))}
      </div>
      <div className="research-safe">
        <div style={{ fontWeight: 800, marginBottom: 10, fontSize: "1rem", color: COLORS.deep }}>✅ Participating safely — what to know</div>
        <div style={{ fontSize: "0.9rem", color: "#4A6070", lineHeight: 1.9 }}>
          • All legitimate trials are registered on a national or international registry<br />
          • Participation must be fully informed and voluntary — you can withdraw at any time<br />
          • A Research Ethics Committee must approve research involving children<br />
          • You will never be charged to participate in a clinical trial<br />
          • Ask your diabetes team before enrolling — they can help you assess suitability<br />
          • Some studies offer screening for siblings and relatives — ask the study team whether it is available where you live
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedModule, setSelectedModule] = useState(null);
  const [profile, setProfile] = useState(null);      // null = not onboarded yet
  const [onboarding, setOnboarding] = useState(true); // show onboarding on first visit

  // Two nav tiers: primary (always visible) + secondary (overflow)
  const primaryTabs = [
    { id: "home",       label: "Home",       emoji: "🏠" },
    { id: "isnormal",   label: "Normal?",    emoji: "🤔" },
    { id: "worried",    label: "Help now",    emoji: "🆘" },
    { id: "explainer",  label: "Explain",    emoji: "🔎" },
    { id: "sickday",    label: "Sick Day",   emoji: "🤒" },
    { id: "learning",   label: "90 Days",    emoji: "🗓️" },
  ];
  const secondaryTabs = [
    { id: "hypo",       label: "Hypo Guide",  emoji: "📉" },
    { id: "numbers",    label: "My Numbers",  emoji: "🔢" },
    { id: "teen",       label: "Teen Years",  emoji: "🧭" },
    { id: "activity",   label: "Life Guide",  emoji: "🏫" },
    { id: "clinicians",  label: "For Clinicians", emoji: "🏥" },
    { id: "explorer",   label: "Explorer",   emoji: "🔍" },
    { id: "patterns",   label: "Patterns",   emoji: "📈" },
    { id: "letter",     label: "Our Story",  emoji: "💌" },
    { id: "simulator",  label: "What If?",   emoji: "🎮" },
    { id: "child",      label: "For Kids",   emoji: "🌟" },
    { id: "parent",     label: "For Parents",emoji: "❤️" },
    { id: "treatments", label: "Treatments", emoji: "💊" },
    { id: "inspiring",  label: "Inspiring",  emoji: "✨" },
    { id: "mental",     label: "Wellbeing",  emoji: "🧠" },
    { id: "research",   label: "Research",   emoji: "🔬" },
    { id: "forum",      label: "Community",  emoji: "💬" },
    { id: "resources",  label: "Resources",  emoji: "📚" },
    { id: "disclaimer", label: "Disclaimer", emoji: "🔒" },
    { id: "profile",    label: "My Patterns", emoji: "🗂️" },
  ];
  const [moreOpen, setMoreOpen] = useState(false);
  const allTabs = [...primaryTabs, ...secondaryTabs];

  const switchTab = (id) => {
    setActiveTab(id);
    setSelectedModule(null);
    setMoreOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const completeOnboarding = (prof) => {
    setProfile(prof);
    setOnboarding(false);
  };

  // Show onboarding on first load — skip gracefully if it crashes
  if (onboarding) {
    try {
      return <Onboarding onComplete={completeOnboarding} />;
    } catch (e) {
      setOnboarding(false);
    }
  }

  return (
    <div className="app">
      {activeTab === "home" && (
      <div className="hero">
        <div className="hero-name">Living Brilliantly with T1D</div>
        <h1>When something looks wrong<br />on the monitor — <span>we help you understand why</span></h1>
        <p className="hero-connection">If your child has just been diagnosed, you are not alone. Most patterns have a clear explanation.</p>
        <p className="hero-sub">From meals and sport to overnight rises and illness — this app helps families make sense of blood glucose.</p>

        <div className="hero-ctas">
          <button className="hero-cta-primary" onClick={() => switchTab("isnormal")}>Is this normal? →</button>
          <button className="hero-cta-primary hero-cta-worried" onClick={() => switchTab("worried")}>I need help right now →</button>
        </div>
        <div className="hero-secondary-ctas">
          <button className="hero-letter-btn" onClick={() => switchTab("explainer")}>Explain a pattern</button>
          <button className="hero-letter-btn" onClick={() => switchTab("activity")}>Real-life situations</button>
          <button className="hero-letter-btn" onClick={() => switchTab("sickday")}>Sick day rules</button>
        </div>

        <p className="hero-inclusion">Works with CGM graphs and finger prick readings.</p>
        <p className="hero-byline">Created by a parent whose daughter lives with type 1 diabetes.</p>

        {/* CGM upload — the main CTA at the bottom of hero */}
        <div className="hero-cgm-footer">
          <div className="hero-cgm-label">Have a confusing glucose pattern?</div>
          <button className="hero-cgm-upload-btn" onClick={() => { switchTab("explainer"); setTimeout(() => { document.querySelector(".content")?.scrollIntoView({ behavior: "smooth" }); }, 80); }}>
            <span>📸</span> Upload your CGM graph →
          </button>
          <p className="hero-privacy">🔒 We don't store your image · Educational only — not medical advice</p>
        </div>

        <div className="hero-trust">
          <button className="hero-trust-link" onClick={() => switchTab("clinicians")}>🏥 For clinicians</button>
          <span>·</span>
          <button className="hero-trust-link" onClick={() => switchTab("disclaimer")}>Disclaimer & Privacy</button>
        </div>
      </div>
      )}

      {/* Clinician trust strip */}
      {activeTab === "home" && (
        <div className="clinician-strip">
          <span className="clinician-strip-icon">🏥</span>
          <span className="clinician-strip-text">Designed to complement clinical care — not replace it.</span>
          <button className="clinician-strip-link" onClick={() => switchTab("clinicians")}>For clinicians →</button>
        </div>
      )}

      {/* Primary nav */}
      <div className="nav-container">
        <div className="nav-shell">
          {/* Scrollable primary tabs */}
          <div className="nav-tabs">
            {primaryTabs.map(t => (
              <button key={t.id} className={`nav-tab ${activeTab === t.id ? "active" : ""}`} onClick={() => switchTab(t.id)}>
                <span className="tab-emoji">{t.emoji}</span>
                {t.label}
              </button>
            ))}
          </div>
          {/* More button — outside the overflow container */}
          <div className="more-wrapper">
            <button className={`nav-tab more-btn ${moreOpen ? "active" : ""}`} onClick={() => setMoreOpen(o => !o)}>
              <span className="tab-emoji">{moreOpen ? "✕" : "☰"}</span>
              More
            </button>
            {moreOpen && (
              <>
                <div className="more-backdrop" onClick={() => setMoreOpen(false)} />
                <div className="more-dropdown">
                  <div className="more-dropdown-title">More sections</div>
                  <div className="more-grid">
                    {secondaryTabs.map(t => (
                      <button key={t.id} className={`more-item ${activeTab === t.id ? "active" : ""}`} onClick={() => switchTab(t.id)}>
                        <span className="more-item-emoji">{t.emoji}</span>
                        <span className="more-item-label">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="content">

        {activeTab === "home" && (
          <Dashboard profile={profile} onNavigate={switchTab} />
        )}

        {activeTab === "worried" && (
          <div>
            <div className="section-header">
              <h2>🆘 Help right now</h2>
              <p>It's okay. You're in the right place. Let's work through this together.</p>
            </div>

            {/* Emergency first */}
            <div className="worried-emergency">
              <div className="worried-emergency-title">🚨 Is this an emergency?</div>
              <p className="worried-emergency-body">Call 999 immediately if your child is:</p>
              <div className="worried-emergency-signs">
                {["Unconscious or very difficult to wake", "Having a seizure or convulsion", "Breathing rapidly or deeply", "Confused, pale, and unresponsive to you", "Vomiting and you suspect high ketones"].map((s, i) => (
                  <div key={i} className="worried-sign"><span>🔴</span><span>{s}</span></div>
                ))}
              </div>
              <button className="worried-sickday-btn" onClick={() => switchTab("sickday")}>
                Open Emergency Guide →
              </button>
            </div>

            {/* Not an emergency — what's happening */}
            <div className="worried-calm">
              <div className="worried-calm-title">If it's not an emergency — what are you seeing?</div>
              <p className="worried-calm-sub">Tap what's happening right now:</p>
              <div className="worried-situations">
                {[
                  { emoji: "📈", label: "Blood glucose is high and not coming down", tab: "isnormal" },
                  { emoji: "📉", label: "Blood glucose is low or dropping fast", tab: "hypo" },
                  { emoji: "🌙", label: "Unusual reading in the middle of the night", tab: "isnormal" },
                  { emoji: "🍕", label: "Spike hours after a meal", tab: "isnormal" },
                  { emoji: "⚡", label: "Blood glucose went UP after sport or exercise", tab: "isnormal" },
                  { emoji: "⚽", label: "Blood glucose went LOW after sport or exercise", tab: "isnormal" },
                  { emoji: "🤒", label: "Child is unwell and blood glucose is unpredictable", tab: "sickday" },
                  { emoji: "🎢", label: "Blood glucose is all over the place today", tab: "isnormal" },
                  { emoji: "🔢", label: "What do these numbers actually mean?", tab: "numbers" },
                  { emoji: "🌱", label: "We are in the honeymoon phase — what should we expect?", tab: "isnormal" },
                  { emoji: "🧭", label: "My teenager is disengaging from diabetes management", tab: "teen" },
                ].map((s, i) => (
                  <button key={i} className="worried-situation-btn" onClick={() => switchTab(s.tab)}>
                    <span className="worried-sit-emoji">{s.emoji}</span>
                    <span className="worried-sit-label">{s.label}</span>
                    <span className="worried-sit-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Reassurance */}
            <div className="worried-reassurance">
              <div className="worried-reassurance-icon">💙</div>
              <p>Most unusual blood glucose readings have a clear explanation. This app can help you understand what's likely happening — but always follow your instincts. If you're genuinely frightened, call your diabetes team's out-of-hours line, NHS 111 (England, Scotland, Wales) or go to A&E. In Northern Ireland, use your hospital's out-of-hours number.</p>
            </div>

            {/* Out of hours numbers */}
            <div className="sdr-numbers-box">
              <div className="sdr-numbers-title">📞 Out-of-hours help</div>
              <div className="sdr-numbers-grid">
                <div className="sdr-number-row"><span className="sdr-number-label">Emergency (UK)</span><span className="sdr-number-val">999 or 112</span></div>
                <div className="sdr-number-row"><span className="sdr-number-label">NHS 111 — urgent advice (England, Scotland, Wales)</span><span className="sdr-number-val">111</span></div>
                <div className="sdr-number-row"><span className="sdr-number-label">Your diabetes team — 24-hour line</span><span className="sdr-number-val">Add yours →</span></div>
                <div className="sdr-number-row"><span className="sdr-number-label">Diabetes UK helpline (Mon–Fri, 9am–6pm)</span><span className="sdr-number-val">0345 123 2399</span></div>
                <div className="sdr-number-row"><span className="sdr-number-label">Your local A&amp;E</span><span className="sdr-number-val">Add yours →</span></div>
              </div>
            </div>
          </div>
        )}

        {/* ── HYPO QUICK GUIDE ── */}
        {activeTab === "hypo" && (
          <div>
            <div className="section-header">
              <h2>📉 Low Blood Glucose — What to Do</h2>
              <p>Quick, clear steps for treating a low. Save this page.</p>
            </div>

            <div className="hypo-hero">
              <div className="hypo-hero-title">Treating a hypo</div>
              <div className="hypo-hero-sub">Blood glucose 3.9 mmol/L or below — treat it even if your child feels fine</div>
              <div className="hypo-steps">
                {[
                  { num: "1", action: "Give fast-acting carbohydrate — the amount depends on age", detail: "Under 5: about 5g · Ages 5–10: about 10g · Ages 10–17: about 15g · never more than 20g. See the examples below. Your child's team may give different amounts — their plan comes first." },
                  { num: "2", action: "Wait 10–15 minutes", detail: "Stay with your child. Do not give more yet — give the glucose time to work." },
                  { num: "3", action: "Recheck blood glucose", detail: "If it is still below 5.6 mmol/L (or the level in your team's plan), give the same amount again and recheck in 10–15 minutes." },
                  { num: "4", action: "Do they need a snack?", detail: "If your team's plan says so — for example around exercise, at bedtime, or after more than one hypo — follow with a small starchy snack such as a slice of toast." },
                ].map(s => (
                  <div key={s.num} className="hypo-step">
                    <div className="hypo-step-num">{s.num}</div>
                    <div>
                      <div className="hypo-step-action">{s.action}</div>
                      <div className="hypo-step-detail">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hypo-section">
              <div className="hypo-section-title">How much fast-acting carbohydrate?</div>
              <div className="hypo-amounts">
                {[
                  { age: "Under 5", grams: "about 5g", eg: "1–2 glucose tablets · 60ml Lucozade · 1 jelly baby · ½ tube GlucoGel (under 1 year: less — your team will advise)" },
                  { age: "Ages 5–10", grams: "about 10g", eg: "3–4 glucose tablets · 120ml Lucozade · 2–3 jelly babies · 1 tube GlucoGel" },
                  { age: "Ages 10–17", grams: "about 15g", eg: "4–5 glucose tablets · 180ml Lucozade · 4–5 jelly babies · 1½ tubes GlucoGel" },
                ].map((r, i) => (
                  <div key={i} className="hypo-amount-row">
                    <div className="hypo-amount-head"><strong>{r.age}</strong><span>{r.grams}</span></div>
                    <div className="hypo-amount-eg">{r.eg}</div>
                  </div>
                ))}
              </div>
              <p className="hypo-note">Glucose tablet and gel strengths vary — check the grams of carbohydrate on your pack. Chocolate, milk and biscuits act too slowly to treat a hypo. Amounts are typical of NHS children's diabetes services; your own team's plan always comes first.</p>
            </div>

            <div className="hypo-section">
              <div className="hypo-section-title">Signs of a low to look for</div>
              <div className="hypo-symptoms">
                {[
                  { emoji: "😰", sign: "Pale, sweaty skin" },
                  { emoji: "🤝", sign: "Shaking or trembling" },
                  { emoji: "😠", sign: "Irritable, tearful, or mood change" },
                  { emoji: "😶", sign: "Glazed look, difficulty concentrating" },
                  { emoji: "🤤", sign: "Hungry, dizzy, or headache" },
                  { emoji: "😵", sign: "Confusion or slurred speech — more severe" },
                ].map((s, i) => (
                  <div key={i} className="hypo-symptom"><span>{s.emoji}</span><span>{s.sign}</span></div>
                ))}
              </div>
              <p className="hypo-note">Some children show no obvious symptoms — especially during sleep. This is why overnight CGM alerts matter.</p>
            </div>

            <div className="hypo-severe">
              <div className="hypo-severe-title">If your child is unconscious, fitting or cannot swallow — CALL 999</div>
              <p className="hypo-severe-body">Do not put food or drink in their mouth. Place them in the recovery position, use the glucagon your diabetes team prescribed (with the dose and instructions they gave you), and call 999 immediately. Tell the call handler your child has type 1 diabetes.</p>
              <div className="hypo-glucagon">
                <div className="hypo-glucagon-row"><strong>Nasal glucagon (e.g. Baqsimi):</strong> Insert the tip into one nostril, press the plunger firmly.</div>
                <div className="hypo-glucagon-row"><strong>Glucagon injection (e.g. GlucaGen HypoKit):</strong> Follow the kit instructions. Place your child on their side.</div>
              </div>
              <button className="worried-sickday-btn" style={{ marginTop: 14 }} onClick={() => switchTab("sickday")}>Open full Emergency Guide →</button>
            </div>

            <div className="hypo-section">
              <div className="hypo-section-title">After the low has resolved</div>
              <div className="hypo-after">
                {["Note the time, blood glucose reading, and what treatment was given",
                  "Think about what may have caused it — missed snack, more activity, insulin timing",
                  "If lows are happening regularly, contact your diabetes care team to review insulin doses",
                  "Do not over-treat — too much food after a low often causes a rebound high"].map((item, i) => (
                  <div key={i} className="hypo-after-item"><span className="hypo-after-bullet">✓</span><span>{item}</span></div>
                ))}
              </div>
            </div>

            <div className="sdr-disclaimer">Educational resource only. Always follow the specific hypo management plan provided by your diabetes care team. In an emergency, call 999.</div>
          </div>
        )}

        {/* ── UNDERSTANDING YOUR NUMBERS ── */}
        {activeTab === "numbers" && (
          <div>
            <div className="section-header">
              <h2>🔢 Understanding Your Numbers</h2>
              <p>What do blood glucose readings actually mean? A plain-language guide for newly diagnosed families.</p>
            </div>

            <div className="nums-ranges">
              {[
                { range: "Below 4.0", label: "Low — treat immediately", color: "#C0392B", bg: "#FFF0F0", border: "#E74C3C", emoji: "📉", what: "Treat with fast-acting carbohydrate now — see the Hypo Guide for amounts by age.", action: "Act now" },
                { range: "4.0 – 6.9", label: "In range — lower end", color: "#27AE60", bg: "#F0FFF5", border: "#56C596", emoji: "✅", what: "Good. This is where you want blood glucose to be. No action needed.", action: "All good" },
                { range: "7.0 – 10.0", label: "In range — ideal target", color: "#27AE60", bg: "#EEF8F4", border: "#56C596", emoji: "✅", what: "This is the target range for most children with type 1 diabetes.", action: "Target zone" },
                { range: "10.1 – 13.9", label: "Above range", color: "#E67E22", bg: "#FFF8F0", border: "#E67E22", emoji: "📈", what: "Higher than ideal. Monitor closely. Think about what may have caused it.", action: "Monitor" },
                { range: "14.0 – 15.9", label: "High", color: "#E67E22", bg: "#FFF3E8", border: "#E67E22", emoji: "⚠️", what: "Check ketones if persisting more than 2 hours. Contact your diabetes care team if not coming down.", action: "Check ketones" },
                { range: "16.0 and above", label: "Very high", color: "#C0392B", bg: "#FFF0F0", border: "#C0392B", emoji: "🚨", what: "Check ketones immediately. At 1.5 mmol/L or above, speak to your diabetes team straight away. At 3.0 or above, go to A&E.", action: "Urgent" },
              ].map((r, i) => (
                <div key={i} className="nums-range-card" style={{ background: r.bg, borderColor: r.border }}>
                  <div className="nums-range-header">
                    <span className="nums-emoji">{r.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div className="nums-range-val" style={{ color: r.color }}>{r.range} mmol/L</div>
                      <div className="nums-range-label">{r.label}</div>
                    </div>
                    <span className="nums-action-badge" style={{ background: r.color }}>{r.action}</span>
                  </div>
                  <p className="nums-what">{r.what}</p>
                </div>
              ))}
            </div>

            <div className="nums-tir">
              <div className="nums-tir-title">What is time in range?</div>
              <p>Time in range (TIR) is the percentage of the day your child spend between 4.0 and 10.0 mmol/L. Most diabetes care teams aim for 70% or more — that is at least 17 hours out of every 24.</p>
              <p style={{ marginTop: 10 }}>On a good week, some days will be better than others. That is completely normal. TIR is a weekly average, not a daily report card.</p>
              <div className="nums-tir-bar"><div className="nums-tir-fill">70% target</div></div>
            </div>

            <div className="nums-hba1c">
              <div className="nums-tir-title">What is HbA1c?</div>
              <p>Your child's diabetes team will probably also mention HbA1c — a blood test that reflects average blood glucose over about the last three months. In the UK it is reported in mmol/mol (for example, 48 mmol/mol is about 6.5% on the older % scale). Your team will explain the target that is right for your child, and it can change as your child grows.</p>
            </div>

            <div className="nums-facts">
              <div className="nums-facts-title">Things every newly diagnosed family should know</div>
              {[
                { emoji: "📈", fact: "Blood glucose changes constantly — before and after meals, during exercise, overnight, and with illness. A single high or low reading is not a crisis." },
                { emoji: "🎯", fact: "The goal is not perfect blood glucose. The goal is understanding what is happening and feeling more confident over time." },
                { emoji: "💉", fact: "Rapid-acting insulin peaks in 1–2 hours. Background insulin works over 12–24 hours. Timing matters enormously." },
                { emoji: "🌙", fact: "Blood glucose often rises overnight during childhood — especially between 2 AM and 6 AM. This is the dawn phenomenon. It is normal and expected." },
                { emoji: "⚽", fact: "Exercise can raise or lower blood glucose depending on the type, intensity, and timing. Both responses are normal." },
                { emoji: "😰", fact: "Stress, illness, and growth spurts all raise blood glucose — even without eating. This is not poor management. It is the nature of the condition." },
              ].map((f, i) => (
                <div key={i} className="nums-fact">
                  <span className="nums-fact-emoji">{f.emoji}</span>
                  <span className="nums-fact-text">{f.fact}</span>
                </div>
              ))}
            </div>

            <div className="sdr-disclaimer">Educational resource only. Target ranges may vary based on your child age, history, and individual care plan. Always follow the guidance of your diabetes care team.</div>
          </div>
        )}

        {activeTab === "clinicians" && (
          <div>
            <div className="section-header">
              <h2>🏥 For Clinicians & Healthcare Teams</h2>
              <p>Information for paediatric diabetes specialist nurses, consultants, dietitians and other members of children's diabetes teams considering this resource for families in their care.</p>
            </div>

            <div className="clin-what-it-is">
              <div className="clin-section-title">What this platform is</div>
              <p className="clin-body">Living Brilliantly with T1D is a free educational learning companion for families navigating type 1 diabetes. It is designed to help families understand <em>why</em> glucose behaves the way it does — not to replace clinical guidance or support treatment decisions.</p>
              <div className="clin-pillars">
                {[
                  { emoji: "📚", title: "Educational only", desc: "All content explains glucose behaviour in plain language. No dosing advice, no treatment recommendations." },
                  { emoji: "🔒", title: "No sensitive data collected", desc: "No medical records, glucose values, or personal health data are stored. CGM screenshots are processed by AI and immediately discarded." },
                  { emoji: "🆓", title: "Free, no registration", desc: "No sign-up, no clinic code, no subscription. Families access it immediately — including newly diagnosed families who may not yet have a clinical team established." },
                  { emoji: "🤝", title: "Complements clinical care", desc: "Every explanation includes a clear note that it does not replace advice from the diabetes care team. The platform explicitly reinforces the importance of clinical relationships." },
                ].map((p, i) => (
                  <div key={i} className="clin-pillar">
                    <span className="clin-pillar-emoji">{p.emoji}</span>
                    <div>
                      <div className="clin-pillar-title">{p.title}</div>
                      <div className="clin-pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="clin-features">
              <div className="clin-section-title">Features relevant to newly diagnosed families</div>
              {[
                { emoji: "🗓️", title: "First 90 Days structured guide", desc: "A 6-week learning path covering glucose patterns, meals, exercise, overnight behaviour, school management, and emergencies. Downloadable as a PDF." },
                { emoji: "🔎", title: "Glucose pattern explainer", desc: "Families can describe or upload a CGM screenshot to receive a plain-language explanation of what happened and why — framed as education, not diagnosis." },
                { emoji: "🤒", title: "Sick day rules & emergency guide", desc: "Step-by-step guidance for hypos, severe hypos, and DKA. Includes the 15-15 rule, glucagon protocols, and ketone thresholds. Signposts emergency services clearly." },
                { emoji: "🔍", title: "Glucose Explorer for children", desc: "Story-based learning tool helping children understand their own glucose patterns through guessing games and metaphors — builds confidence rather than anxiety." },
                { emoji: "🤔", title: "Is This Normal?", desc: "Reassurance guides for common patterns — overnight rises, post-exercise drops, variability, morning highs. Reduces unnecessary alarm while encouraging clinical contact when needed." },
              ].map((f, i) => (
                <div key={i} className="clin-feature-row">
                  <span className="clin-feature-emoji">{f.emoji}</span>
                  <div>
                    <div className="clin-feature-title">{f.title}</div>
                    <div className="clin-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="clin-safety">
              <div className="clin-section-title">Safety & disclaimer language</div>
              <p className="clin-body">Every AI-generated explanation includes the following statement:</p>
              <div className="clin-quote">"This explanation is designed to help families understand glucose behaviour. It does not replace advice from your diabetes care team and should not be used to make treatment decisions. Always follow your healthcare provider's guidance."</div>
              <p className="clin-body">The platform does not provide insulin dosing guidance, medication recommendations, or any form of clinical decision support. It uses "possible reasons" and "this might be" language throughout — never stating causes as fact.</p>
            </div>

            <div className="clin-built-by">
              <div className="clin-section-title">Built by a type 1 diabetes family</div>
              <p className="clin-body">This platform was created by a parent whose daughter lives with type 1 diabetes. Our family's experience navigating diagnosis, CGM patterns, school management, and sport inspired us to build the resource we wished had existed when we started.</p>
              <p className="clin-body">Our daughter is involved with Breakthrough T1D, and we remain closely connected to the T1D community. This is a community resource, not a commercial product.</p>
            </div>

            <div className="clin-contact">
              <div className="clin-contact-title">Questions or feedback from clinical teams</div>
              <p className="clin-body" style={{ marginBottom: 0 }}>We welcome feedback from healthcare professionals and are open to conversations about how this platform could better serve families in your care. We are also interested in forming relationships with UK children's diabetes teams and networks.</p>
            </div>
          </div>
        )}


        {activeTab === "child" && !selectedModule && (
          <>
            <div className="section-header">
              <h2>🌟 Learning together</h2>
              <p>Fun, honest, and age-appropriate modules to help your child understand type 1 diabetes — and feel truly empowered.</p>
            </div>
            <div className="modules-grid">
              {childModules.map(mod => (
                <div key={mod.id} className="module-card" style={{ "--card-color": mod.color }} onClick={() => setSelectedModule({ ...mod, type: "child" })}>
                  <span className="module-emoji">{mod.emoji}</span>
                  <div className="module-age" style={{ color: mod.color }}>{mod.ageGroup}</div>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === "child" && selectedModule?.type === "child" && (
          <div className="module-detail">
            <button className="back-btn" onClick={() => setSelectedModule(null)}>← Back to modules</button>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{selectedModule.emoji}</div>
            <h2>{selectedModule.title}</h2>
            <div className="module-age" style={{ color: selectedModule.color, marginBottom: 16 }}>{selectedModule.ageGroup}</div>
            <div className="detail-content">{formatContent(selectedModule.content)}</div>
            {selectedModule.funFact && <div className="fun-fact-box"><div className="box-label" style={{ color: COLORS.mint }}>✨ Fun Fact</div><div>{selectedModule.funFact}</div></div>}
            {selectedModule.activity && <div className="activity-box"><div className="box-label" style={{ color: COLORS.coral }}>🎨 Activity</div><div style={{ fontWeight: 600 }}>{selectedModule.activity}</div></div>}
          </div>
        )}

        {activeTab === "parent" && !selectedModule && (
          <>
            <div className="section-header">
              <h2>❤️ For Parents</h2>
              <p>Evidence-based, compassionate guides to help you become your child's strongest, most informed advocate — without the fear.</p>
            </div>
            <div className="modules-grid">
              {parentModules.map(mod => (
                <div key={mod.id} className="module-card" style={{ "--card-color": mod.color }} onClick={() => setSelectedModule({ ...mod, type: "parent" })}>
                  <span className="module-emoji">{mod.icon}</span>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === "parent" && selectedModule?.type === "parent" && (
          <div className="module-detail">
            <button className="back-btn" onClick={() => setSelectedModule(null)}>← Back to modules</button>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{selectedModule.icon}</div>
            <h2>{selectedModule.title}</h2>
            <div className="detail-content">{formatContent(selectedModule.content)}</div>
            {selectedModule.keyTakeaway && <div className="key-takeaway"><span style={{ fontSize: "1.4rem" }}>💡</span><span>{selectedModule.keyTakeaway}</span></div>}
          </div>
        )}

        {activeTab === "treatments" && <TreatmentsTab />}

        {activeTab === "inspiring" && (
          <>
            <div className="section-header">
              <h2>✨ Living brilliantly with T1D</h2>
              <p>These musicians, athletes, leaders, and artists all share one thing with your child — type 1 diabetes — and it has not limited what they have achieved.</p>
            </div>
            <div className="people-grid">
              {inspiringPeople.map(person => (
                <div key={person.name} className="person-card" style={{ "--person-color": person.color }}>
                  <span className="person-emoji">{person.emoji}</span>
                  <div className="person-name">{person.name}</div>
                  <div className="person-field" style={{ color: person.color }}>{person.field}</div>
                  <div className="person-diagnosed">Diagnosed: {person.diagnosed}</div>
                  <div className="person-quote" style={{ borderLeftColor: person.color }}>{person.fact}</div>
                </div>
              ))}
            </div>
            <div className="info-banner">
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>🌍</div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: COLORS.deep, marginBottom: 8 }}>Type 1 diabetes doesn't choose ordinary people</div>
              <div style={{ color: "#4A6070", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
                The list of people thriving with type 1 diabetes spans every field. Your child joins a remarkable community who prove every day that type 1 diabetes is a companion — not a ceiling.
              </div>
            </div>
          </>
        )}

        {activeTab === "sickday"   && <SickDayRules />}
        {activeTab === "explorer"  && <GlucoseExplorer />}
        {activeTab === "patterns"  && <GlucosePatterns />}
        {activeTab === "learning"  && <LearningPath profile={profile} />}
        {activeTab === "letter" && (
          <div className="open-letter">
            <div className="letter-header">
              <div className="letter-eyebrow">💌 An open letter</div>
              <h2>To parents of a child newly diagnosed with type 1 diabetes</h2>
            </div>
            <div className="letter-body">
              <p className="letter-lead">If your child has just been diagnosed with type 1 diabetes, your world may feel like it has changed overnight.</p>
              <p>Suddenly there are new words, new routines, and more decisions than you ever imagined.</p>
              <div className="letter-list">
                <span>Carb counting.</span>
                <span>Insulin doses.</span>
                <span>Glucose numbers.</span>
                <span>Highs. Lows. Alarms in the middle of the night.</span>
              </div>
              <p>It can feel overwhelming.</p>
              <p>Many parents describe the first months as a blur of information and worry — trying to learn quickly while also helping their child adjust to something none of you asked for.</p>
              <div className="letter-callout">If that is where you are right now, please know something important:<br /><strong>You will learn this.</strong></div>
              <p>Not all at once. Not perfectly. But step by step.</p>
              <p>Over time, the things that seem impossible today will slowly become part of your family's rhythm.</p>
              <p>You will learn how food affects glucose. You will learn how exercise changes things. You will learn how to manage the unexpected highs and lows.</p>
              <p>And your child will learn too.</p>
              <p>Children living with type 1 diabetes develop an extraordinary awareness of their own bodies. They grow in resilience, independence, and strength.</p>
              <div className="letter-divider">— ✦ —</div>
              <p>I know this because our family has walked this path.</p>
              <p>When my daughter was diagnosed, we had to learn everything from the beginning — just like you may be doing now. We experienced the same uncertainty, the same late nights checking glucose, the same constant questions about whether we were doing the right thing.</p>
              <p>But we also watched something remarkable happen.</p>
              <p>Our daughter grew stronger through the experience. Instead of defining her, type 1 diabetes became part of what shaped her determination and purpose.</p>
              <p><strong>Today she works with Breakthrough T1D</strong>, helping advance research and support for people living with type 1 diabetes.</p>
              <div className="letter-divider">— ✦ —</div>
              <p>This project was created because we remember how difficult those early months were.</p>
              <p>The goal is simple: to help families understand the everyday decisions that come with type 1 diabetes — and to feel more confident navigating them.</p>
              <p>No tool or guide will ever remove the condition entirely. But knowledge, experience, and support can make the journey much easier.</p>
              <div className="letter-closing">
                <p>If you are at the beginning of this path, please remember:</p>
                <p><strong>You are not alone.</strong><br /><strong>You will learn this.</strong><br /><strong>And your child can grow up to live an extraordinary life.</strong></p>
              </div>
            </div>
            <div className="letter-footer">
              <div className="letter-sig">With love and solidarity,</div>
              <div className="letter-sig-name">A T1D family, for T1D families</div>
              <button className="explain-btn" style={{ marginTop: 24 }} onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>Explore the app →</button>
            </div>
          </div>
        )}
        {activeTab === "explainer" && <ExplainMyGlucose />}
        {activeTab === "simulator" && <ScenarioSimulator />}
        {activeTab === "isnormal"  && <IsThisNormal onNavigate={switchTab} />}
        {activeTab === "activity"  && <SchoolActivityCompanion />}

        {activeTab === "mental" && <MentalHealthTab />}

        {/* ── TEEN YEARS — SUPPORTING ADOLESCENT INDEPENDENCE ── */}
        {activeTab === "teen" && (
          <TeenPage switchTab={switchTab} />
        )}
        {activeTab === "research" && <ResearchTab />}
        {activeTab === "forum" && <ForumTab />}

        {activeTab === "disclaimer" && (
          <DisclaimerPage onNavigate={switchTab} />
        )}

        {activeTab === "profile" && (
          <PatternProfile onNavigate={switchTab} />
        )}

        {activeTab === "resources" && (
          <>
            <div className="section-header">
              <h2>📚 Support & Resources</h2>
              <p>Trusted charities, research organisations, and peer communities — vetted for quality, accuracy, and family-friendliness.</p>
            </div>
            <div className="featured-resource">
              <span style={{ fontSize: "2rem" }}>🔬</span>
              <div>
                <div className="featured-label">Featured Partner</div>
                <div className="featured-name">Breakthrough T1D (formerly JDRF)</div>
                <div className="featured-desc">The world's leading T1D research funder. They've invested over $3 billion toward a cure. Find clinical trials, family resources, and local chapters at breakthrought1d.org</div>
              </div>
            </div>
            <div className="resources-grid">
              {resources.map(r => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-card" style={{ "--res-color": r.color }}>
                  <span className="resource-emoji">{r.emoji}</span>
                  <div className="resource-type" style={{ color: r.color }}>{r.type}</div>
                  <div className="resource-name">{r.name}</div>
                  <div className="resource-desc">{r.description}</div>
                  <div className="resource-link" style={{ color: r.color }}>Visit website →</div>
                </a>
              ))}
            </div>
            <div className="stay-current">
              <div style={{ fontWeight: 800, marginBottom: 6, color: COLORS.deep }}>🔔 Stay current</div>
              <div style={{ fontSize: "0.9rem", color: "#4A6070", lineHeight: 1.6 }}>
                Type 1 diabetes research is advancing rapidly. Breakthrough T1D UK and Diabetes UK both publish regular updates on clinical trials, new therapies, and technology approvals. Bookmark their news pages and sign up for newsletters to stay informed.
              </div>
            </div>
          </>
        )}

      </div>

      <div className="disclaimer-section">
        <div className="disclaimer-box">
          <div className="disclaimer-title">⚕️ Medical Disclaimer</div>
          <div className="disclaimer-text">
            The information provided in this application is intended for general educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment, and should not be relied upon as a substitute for professional medical consultation.
          </div>
          <div className="disclaimer-text">
            Always seek the guidance of your qualified healthcare provider — including your paediatric diabetes team, diabetes specialist nurse, or GP — with any questions you may have regarding your child's medical condition, treatment plan, medications, or devices. Never disregard professional medical advice or delay seeking it because of something you have read in this application.
          </div>
          <div className="disclaimer-text">
            In the event of a medical emergency, call <strong>999</strong> immediately.
          </div>
          <div className="disclaimer-text" style={{ opacity: 0.75 }}>
            Information about treatments, subsidies, and clinical trials is accurate to the best of our knowledge at time of publication but may change. Always verify current eligibility and availability with your healthcare team or the relevant organisation directly.
          </div>
        </div>
      </div>

      <div className="footer">
        <p>💙 A learning companion for families living with type 1 diabetes</p>
        <div className="footer-links">
          <button className="footer-link" onClick={() => switchTab("disclaimer")}>Disclaimer & Privacy</button>
          <span>·</span>
          <button className="footer-link" onClick={() => switchTab("forum")}>Contact & Feedback</button>
          <span>·</span>
          <span>Educational resource. Not medical advice.</span>
        </div>
        <p style={{ fontSize: "0.78rem", marginTop: 8, opacity: 0.6 }}>© {new Date().getFullYear()} Living Brilliantly with T1D. Educational resource. Not medical advice.</p>
      </div>
    </div>
  );
}
