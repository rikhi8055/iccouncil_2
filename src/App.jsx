import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Globe, Search, ShoppingCart, UserRound,
  Star, BookOpen, BadgeCheck, Building2, ClipboardList, CreditCard,
  FolderGit2, FileDown, Timer, Layers, Filter, GraduationCap
} from "lucide-react";

/** Assets **/
const A = {
  logo: "/assets/logo.png",
  hero: ["/assets/dummy/hero-1.jpg","/assets/dummy/hero-2.jpg","/assets/dummy/hero-3.jpg"],
  course: {
    hazmat:"/assets/dummy/course-hazmat.jpg",
    safety:"/assets/dummy/course-safety.jpg",
    compliance:"/assets/dummy/course-compliance.jpg",
    workstation:"/assets/dummy/course-workstation.jpg"
  },
  badges: [
    "/assets/dummy/badge-1.png","/assets/dummy/badge-2.png","/assets/dummy/badge-3.png",
    "/assets/dummy/badge-4.png","/assets/dummy/badge-5.png","/assets/dummy/badge-6.png"
  ],
  combos: ["/assets/dummy/combo-1.jpg","/assets/dummy/combo-2.jpg","/assets/dummy/combo-3.jpg"],
  avatars: ["/assets/dummy/avatar-1.jpg","/assets/dummy/avatar-2.jpg","/assets/dummy/avatar-3.jpg"],
  faq:"/assets/dummy/helpdesk.jpg",
  refund:"/assets/dummy/secure-payment.jpg",
  roles:{learner:"/assets/dummy/role-learner.jpg", admin:"/assets/dummy/role-admin.jpg"},
  flow:{
    watch:"/assets/dummy/flow-watch.jpg",
    assess:"/assets/dummy/flow-assess.jpg",
    cert:"/assets/dummy/flow-certificate.jpg",
    nav:"/assets/dummy/flow-navigate.jpg",
    status:"/assets/dummy/flow-status.jpg"
  }
};

const TopBar = () => (
  <div className="header-top text-xs">
    <div className="container-outer py-2 flex items-center justify-between">
      <span>We look forward to serving your needs and helping you achieve excellence in Transportation & Logistics.</span>
      <span className="hidden sm:inline">Support: info@iccouncil.org • (307) 216-5303</span>
    </div>
  </div>
);

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/95 backdrop-blur border-b border-[var(--divider)]">
      <div className="container-outer flex items-center justify-between h-16">
        <a className="flex items-center gap-2 font-bold text-[var(--brand-secondary)] text-lg" href="#">
          <img src={A.logo} alt="ICCouncil logo" className="w-8 h-8 object-contain"/> ICCouncil
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[var(--txt)]">
          {['Courses','Certifications','Enterprise','Resources','About'].map(x=> <a key={x} href="#" className="hover:text-[var(--brand-primary)]">{x}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 rounded-xl focus-ring" onClick={()=> setShowSearch(v=>!v)}><Search className="w-5 h-5"/></button>
          <button aria-label="Language" className="p-2 rounded-xl focus-ring"><Globe className="w-5 h-5"/></button>
          <button aria-label="Cart" className="p-2 rounded-xl focus-ring"><ShoppingCart className="w-5 h-5"/></button>
          <a className="btn btn-secondary hidden sm:inline-flex" href="#">Register</a>
          <a className="btn btn-primary" href="#">Sign In</a>
        </div>
      </div>
      {showSearch && (
        <div className="border-t border-[var(--divider)]">
          <div className="container-outer py-3">
            <div className="flex items-center gap-2 bg-[var(--bg-soft)] rounded-xl px-3 py-2 border border-[var(--divider)]">
              <Search className="w-4 h-4 text-[var(--txt-muted)]"/>
              <input className="w-full bg-transparent outline-none text-sm" placeholder="Search courses, certifications…"/>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/** HERO — 3-slide max, no auto-rotate */
const Hero = () => {
  const [i,setI] = useState(0);
  const slides = [
    {eyebrow:"Update", title:"Mandated Trainings — Now Simplified", copy:"Stay compliant with DOT/FMCSA with guided paths for teams and individuals.", cta1:"Explore Courses", cta2:"View Certifications", img:A.hero[0]},
    {eyebrow:"For Teams", title:"Administrator Tools for Licenses & Tracking", copy:"Assign seats, track progress, and download certificates in one place.", cta1:"Manage Teams", cta2:"See Dashboard", img:A.hero[1]},
    {eyebrow:"Offer", title:"Combo Courses — Save More", copy:"Popular bundles with instant certification and 100% secure payments.", cta1:"Browse Combos", cta2:"Refund Policy", img:A.hero[2]},
  ];
  return (
    <section>
      <div className="container-outer grid md:grid-cols-2 gap-8 items-center py-10 md:py-14">
        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--txt-muted)] mb-2">{slides[i].eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--txt-strong)] leading-tight mb-3">{slides[i].title}</h1>
          <p className="text-[var(--txt)] mb-6 max-w-prose">{slides[i].copy}</p>
          <div className="flex gap-3 flex-wrap">
            <a className="btn btn-primary" href="#explore">{slides[i].cta1}</a>
            <a className="btn btn-secondary" href="#">{slides[i].cta2}</a>
          </div>
        </div>
        <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="h-64 md:h-80 rounded-2xl border border-[var(--divider)] overflow-hidden">
          <img src={slides[i].img} alt="Hero visual" className="w-full h-full object-cover"/>
        </motion.div>
      </div>
      <div className="container-outer flex items-center justify-between pb-6">
        <div className="flex items-center gap-2">
          <button aria-label="Previous" className="p-2 rounded-xl border border-[var(--divider)]" onClick={()=> setI((i+slides.length-1)%slides.length)}><ChevronLeft className="w-5 h-5"/></button>
          <button aria-label="Next" className="p-2 rounded-xl border border-[var(--divider)]" onClick={()=> setI((i+1)%slides.length)}><ChevronRight className="w-5 h-5"/></button>
        </div>
        <div className="flex gap-2">{slides.map((_,idx)=> <button key={idx} onClick={()=> setI(idx)} className={`h-2.5 rounded-full ${i===idx?'w-8 bg-[var(--brand-primary)]':'w-2.5 bg-[var(--divider)]'}`} aria-label={`Go to slide ${idx+1}`}/>)}</div>
      </div>
    </section>
  );
};

/** Course card */
const Card = ({c}) => (
  <a href="#" className="card card-hover overflow-hidden focus-ring" aria-label={c.title}>
    <img src={c.thumb} alt={c.alt} className="img-16x9"/>
    <div className="p-4">
      <div className="flex items-center gap-1 text-amber-500 mb-1">
        {Array.from({length:5}).map((_,i)=> <Star key={i} className={`w-4 h-4 ${i < Math.round(c.rating) ? '' : 'opacity-30'}`}/>)}
        <span className="text-xs text-[var(--txt-muted)] ml-1">{c.rating.toFixed(1)}</span>
      </div>
      <h3 className="font-semibold line-clamp-2">{c.title}</h3>
      <div className="flex flex-wrap gap-2 my-2">
        <span className="chip"><Timer className="w-3.5 h-3.5"/>{c.duration}</span>
        <span className="chip"><Layers className="w-3.5 h-3.5"/>{c.level}</span>
        <span className="chip">{c.category}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="font-bold">${c.price}</div>
        <button className="btn btn-secondary text-sm">View Details</button>
      </div>
    </div>
  </a>
);

/** Featured/Latest Courses (sync with Explorer later if needed) */
const data = [
  {id:1,title:"DOT HazMat Training: Placarding",duration:"4h",level:"Beginner",category:"HazMat",price:65,rating:4.9,thumb:A.course.hazmat,alt:"HazMat placarding training thumbnail"},
  {id:2,title:"Drug & Alcohol Safety for Drivers",duration:"3h",level:"Intermediate",category:"Safety",price:105,rating:4.8,thumb:A.course.safety,alt:"Driver safety eLearning course thumbnail"},
  {id:3,title:"FMCSA Supervisor Training",duration:"2h",level:"Beginner",category:"Compliance",price:99,rating:4.7,thumb:A.course.compliance,alt:"Supervisor compliance course cover"},
  {id:4,title:"Cargo Tank Rollover Prevention",duration:"1.5h",level:"Advanced",category:"Safety",price:65,rating:4.6,thumb:A.course.workstation,alt:"Workstation with driver training on screen"},
  {id:5,title:"DOT General Awareness",duration:"6h",level:"Beginner",category:"Compliance",price:132,rating:4.5,thumb:A.course.compliance,alt:"DOT general awareness course cover"},
];

const Featured = () => {
  const [cat, setCat] = useState("All");
  const cats = ["All","Compliance","Safety","HazMat","Cloud","Data"];
  const list = useMemo(()=> cat==="All"? data : data.filter(c=> c.category===cat),[cat]);
  return (
    <section className="container-outer py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Top Picks</div><h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2></div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-[var(--txt-muted)]">Category</label>
          <select value={cat} onChange={e=> setCat(e.target.value)} className="border border-[var(--divider)] rounded-xl px-3 py-2 text-sm focus-ring">{cats.map(x=> <option key={x}>{x}</option>)}</select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{list.slice(0,4).map(c=> <Card key={c.id} c={c}/>)}</div>
    </section>
  );
};

/** Explorer — visible filters + search */
const Explorer = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({category:new Set(), level:new Set(), price:new Set(), duration:new Set()});
  const toggle=(group,val)=> setFilters(p=>{const s=new Set(p[group]); s.has(val)?s.delete(val):s.add(val); return {...p,[group]:s};});
  const filtered = useMemo(()=> data.filter(c=>{
    if(query && !c.title.toLowerCase().includes(query.toLowerCase())) return false;
    if(filters.category.size && !filters.category.has(c.category)) return false;
    if(filters.level.size && !filters.level.has(c.level)) return false;
    return true;
  }),[query,filters]);

  const Chip = ({g,v}) => <button className={`chip ${filters[g].has(v)?'chip--selected':''}`} onClick={()=> toggle(g,v)}>{v}</button>;

  return (
    <section id="explore" className="border-t border-[var(--divider)] bg-[var(--bg-soft)]">
      <div className="container-outer py-10 md:py-14 grid lg:grid-cols-[320px_1fr] gap-8 items-start">
        <div className="card p-4 sticky top-20 h-max">
          <div className="flex items-center gap-2 text-sm font-semibold mb-3"><Filter className="w-4 h-4"/> Filters</div>
          <div className="mb-3">
            <div className="text-xs uppercase text-[var(--txt-muted)] mb-2">Keyword</div>
            <div className="flex items-center gap-2 bg-[var(--bg-soft)] rounded-xl px-3 py-2 border border-[var(--divider)]"><Search className="w-4 h-4 text-[var(--txt-muted)]"/><input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search courses…" className="w-full bg-transparent outline-none text-sm"/></div>
          </div>
          <div className="mb-3">
            <div className="text-xs uppercase text-[var(--txt-muted)] mb-2">Category</div>
            <div className="flex flex-wrap gap-2">{["Compliance","Safety","HazMat","Cloud","Data"].map(v=> <Chip key={v} g="category" v={v}/>)}</div>
          </div>
          <div className="mb-3">
            <div className="text-xs uppercase text-[var(--txt-muted)] mb-2">Difficulty</div>
            <div className="flex flex-wrap gap-2">{["Beginner","Intermediate","Advanced"].map(v=> <Chip key={v} g="level" v={v}/>)}</div>
          </div>
          <div className="mb-3">
            <div className="text-xs uppercase text-[var(--txt-muted)] mb-2">Price</div>
            <div className="flex flex-wrap gap-2">{["Free","Paid","Sale"].map(v=> <Chip key={v} g="price" v={v}/>)}</div>
          </div>
          <button className="btn btn-secondary w-full" onClick={()=> setFilters({category:new Set(), level:new Set(), price:new Set(), duration:new Set()})}>Clear All</button>
        </div>
        <div>
          <div className="flex items-end justify-between gap-4 mb-4">
            <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Explorer</div><h2 className="text-2xl md:text-3xl font-bold">Find the right course</h2></div>
            <span className="text-sm text-[var(--txt-muted)]">{filtered.length} results</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{filtered.map(c=> <Card key={c.id} c={c}/>)}</div>
        </div>
      </div>
    </section>
  );
};

/** Roles — Learner & Administrator */
const Roles = () => (
  <section className="container-outer py-10 md:py-14">
    <div className="flex items-end justify-between gap-4 mb-4"><div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Choose your role</div><h2 className="text-2xl md:text-3xl font-bold">Learner or Administrator</h2></div></div>
    <div className="grid md:grid-cols-2 gap-5">
      <div className="card card-hover p-6">
        <div className="rounded-xl overflow-hidden mb-4 border border-[var(--divider)]"><img src={A.roles.learner} alt="Learner watching an online course" className="img-16x9"/></div>
        <h3 className="font-semibold text-lg mb-1">Learner</h3>
        <p className="text-[var(--txt)] mb-4">Purchases and takes courses; tracks progress; downloads certificates.</p>
        <a className="btn btn-primary" href="#explore">Start Learning</a>
      </div>
      <div className="card card-hover p-6">
        <div className="rounded-xl overflow-hidden mb-4 border border-[var(--divider)]"><img src={A.roles.admin} alt="Administrator managing courses on laptop" className="img-16x9"/></div>
        <h3 className="font-semibold text-lg mb-1">Administrator</h3>
        <p className="text-[var(--txt)] mb-4">Manages team courses, assigns learners, tracks progress, downloads certificates.</p>
        <a className="btn btn-secondary" href="#flow">Manage Teams</a>
      </div>
    </div>
    <p className="text-sm text-[var(--txt-muted)] mt-3">Note: A single individual can be both roles.</p>
  </section>
);

/** Learning Flow — addresses course learning flow improvement */
const FlowStep = ({img, title, text}) => (
  <div className="card p-4">
    <img src={img} alt={title} className="img-16x9 rounded-xl border border-[var(--divider)] mb-3"/>
    <div className="font-semibold">{title}</div>
    <p className="text-sm text-[var(--txt)] mt-1">{text}</p>
  </div>
);

const LearningFlow = () => (
  <section id="flow" className="border-t border-[var(--divider)] bg-[var(--bg-soft)]">
    <div className="container-outer py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">How it works</div><h2 className="text-2xl md:text-3xl font-bold">Course Learning Flow</h2></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <FlowStep img={A.flow.watch} title="Watch chapters" text="Stream video lessons per chapter with progress save."/>
        <FlowStep img={A.flow.assess} title="Take assessments" text="Attempt quizzes and retake if needed."/>
        <FlowStep img={A.flow.cert} title="Download certificate" text="Auto-issue on completion; PDF download."/>
        <FlowStep img={A.flow.nav} title="Navigate easily" text="Switch between courses and chapters smoothly."/>
        <FlowStep img={A.flow.status} title="See status" text="Clear progress and completion indicators."/>
      </div>
    </div>
  </section>
);

/** Trust */
const Trust = () => (
  <section className="">
    <div className="container-outer py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Trust</div><h2 className="text-2xl md:text-3xl font-bold">Trusted. Secure. Compliant.</h2></div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        {A.badges.map((src,i)=> <div key={i} className="card p-4 text-center"><img src={src} alt={`Security or partner badge ${i+1}`} className="mx-auto w-20 h-20 object-contain"/><div className="text-sm mt-2">Badge {i+1}</div></div>)}
      </div>
      <p className="text-center text-[var(--txt)] mt-6">100% secure payments • PCI compliant gateways</p>
    </div>
  </section>
);

/** Combo slider (keep as current site behaviour: slider) */
const ComboCard = ({src, title}) => (
  <div className="min-w-[320px] max-w-[320px] snap-start card card-hover overflow-hidden">
    <img src={src} alt={`${title} combo`} className="img-16x9"/>
    <div className="p-4">
      <div className="mt-1 flex items-center gap-3">
        <span className="font-bold">$185.00</span>
        <span className="text-sm line-through text-[var(--txt-muted)]">$204.00</span>
        <span className="chip">COMBO50</span>
      </div>
    </div>
  </div>
);
const ComboSlider = () => {
  const ref = useRef(null);
  const left = ()=> ref.current?.scrollBy({left:-360,behavior:'smooth'});
  const right = ()=> ref.current?.scrollBy({left:360,behavior:'smooth'});
  return (
    <section className="container-outer py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Combos</div><h2 className="text-2xl md:text-3xl font-bold">Combo Courses</h2></div>
        <div className="flex gap-2">
          <button onClick={left} className="p-2 rounded-xl border border-[var(--divider)]"><ChevronLeft className="w-5 h-5"/></button>
          <button onClick={right} className="p-2 rounded-xl border border-[var(--divider)]"><ChevronRight className="w-5 h-5"/></button>
        </div>
      </div>
      <div ref={ref} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2">
        <ComboCard src={A.combos[0]} title="DOT Supervisor + D&A Safety"/>
        <ComboCard src={A.combos[1]} title="HazMat Placarding + Awareness"/>
        <ComboCard src={A.combos[2]} title="Driver Safety Essentials Pack"/>
      </div>
    </section>
  );
};

/** Testimonials */
const Testimonials = () => (
  <section className="border-t border-[var(--divider)]">
    <div className="container-outer py-10 md:py-14">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div><div className="text-xs uppercase text-[var(--txt-muted)] mb-1">Testimonials</div><h2 className="text-2xl md:text-3xl font-bold">What learners say</h2></div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {A.avatars.map((src,i)=> (
          <div key={i} className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <img src={src} alt={`Learner avatar ${i+1}`} className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <div className="font-semibold">Alex Carter</div>
                <div className="text-xs text-[var(--txt-muted)]">Logistics Manager</div>
              </div>
            </div>
            <p className="text-[var(--txt)]">“Clear content and easy certification download after completion. Exactly what we needed for DOT compliance.”</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** Support & Policies + Move Become an Instructor lower */
const SupportPolicies = () => (
  <section className="bg-[var(--bg-soft)] border-t border-[var(--divider)]">
    <div className="container-outer py-10 md:py-14 grid md:grid-cols-3 gap-5">
      <a className="card p-6 card-hover" href="#">
        <div className="flex items-center gap-3 mb-2"><UserRound className="w-6 h-6 text-[var(--brand-primary)]"/><h3 className="font-semibold text-lg">FAQ & Help Center</h3></div>
        <div className="rounded-xl overflow-hidden mb-3 border border-[var(--divider)]"><img src={A.faq} alt="Helpdesk" className="img-16x9"/></div>
        <p className="text-[var(--txt)]">Answers, how‑tos, and contact options—with typical response in 24h.</p>
      </a>
      <a className="card p-6 card-hover" href="#">
        <div className="flex items-center gap-3 mb-2"><BadgeCheck className="w-6 h-6 text-[var(--brand-primary)]"/><h3 className="font-semibold text-lg">Money‑Back & Refund Policy</h3></div>
        <div className="rounded-xl overflow-hidden mb-3 border border-[var(--divider)]"><img src={A.refund} alt="Secure payment" className="img-16x9"/></div>
        <p className="text-[var(--txt)]">Shop with confidence—clear terms and 100% secure payments.</p>
      </a>
      <a className="card p-6 card-hover" href="#">
        <div className="flex items-center gap-3 mb-2"><GraduationCap className="w-6 h-6 text-[var(--brand-primary)]"/><h3 className="font-semibold text-lg">Become an Instructor</h3></div>
        <p className="text-[var(--txt)]">Not a priority right now—moved down here to keep the hero and prime content focused.</p>
      </a>
    </div>
  </section>
);

/** Footer — keep structure; tidy spacing */
const Footer = () => (
  <footer className="border-t border-[var(--divider)]">
    <div className="container-outer py-10 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <div className="flex items-center gap-2 font-bold text-[var(--brand-secondary)] text-lg mb-2">
          <img src={A.logo} alt="ICCouncil logo" className="w-8 h-8 object-contain"/> ICCouncil
        </div>
        <p className="text-[var(--txt)]">We look forward to serving your needs and helping you achieve excellence in Transportation & Logistics.</p>
      </div>
      <div>
        <div className="font-semibold mb-3">Menu</div>
        <ul className="space-y-2">
          {['Courses','About','Terms','Privacy','Refund Policy','Become an Instructor'].map(x=> <li key={x}><a href="#" className="hover:text-[var(--brand-primary)]">{x}</a></li>)}
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-3">Quick Links</div>
        <ul className="space-y-2">
          {['Checkout','Insights','News','FAQs'].map(x=> <li key={x}><a href="#" className="hover:text-[var(--brand-primary)]">{x}</a></li>)}
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-3">Reach Us</div>
        <ul className="space-y-2 text-[var(--txt)]">
          <li>6470 East Johns Crossing, Suite 160, GA 30097</li>
          <li>(307) 216-5303</li>
          <li>info@iccouncil.org</li>
        </ul>
      </div>
    </div>
    <div className="divider"/>
    <div className="container-outer py-5 flex items-center justify-between text-xs text-[var(--txt-muted)]">
      <span>© {new Date().getFullYear()} iccouncil.org — All rights reserved</span>
      <span>English • Español</span>
    </div>
  </footer>
);

export default function App(){
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--txt)]">
      <TopBar/>
      <Navbar/>
      <main>
        <Hero/>
        <Featured/>
        <Explorer/>
        <Roles/>
        <LearningFlow/>
        <Trust/>
        <ComboSlider/>
        <Testimonials/>
        <SupportPolicies/>
      </main>
      <Footer/>
    </div>
  );
}
