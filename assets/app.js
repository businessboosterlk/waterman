const EMAIL="waterman@eureka.lk";
/* icons */
const IC={
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s7 7.6 7 12a7 7 0 0 1-14 0C5 9.6 12 2 12 2z"/></svg>',
  ro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="10" rx="2"/><path d="M8 7V5M16 7V5M2 12h2M20 12h2M9 12h6"/></svg>',
  soft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M6 8c0 3 2.5 4 6 4M18 8c0 3-2.5 4-6 4"/><circle cx="12" cy="18" r="3"/></svg>',
  dm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="6" height="18" rx="1.5"/><rect x="13" y="3" width="6" height="18" rx="1.5"/><path d="M5 9h6M13 15h6"/></svg>',
  stp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10l3-6h12l3 6M8 15a2 2 0 0 0 4 0 2 2 0 0 1 4 0"/></svg>',
  etp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h4l2 4h10v12H4z"/><path d="M8 14a2 2 0 0 0 4 0 2 2 0 0 1 4 0"/></svg>',
  recycle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>',
  flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v7l-4 2v-9z"/></svg>',
  uv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
  pump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="14" r="6"/><path d="M9 8V4h6v4M13 4h4"/></svg>',
  resin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="8" r="2"/><circle cx="13" cy="7" r="2"/><circle cx="17" cy="11" r="2"/><circle cx="9" cy="14" r="2"/><circle cx="15" cy="16" r="2"/></svg>',
  hotel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V5l9-3 9 3v16"/><path d="M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01"/></svg>',
  factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V9l6 4V9l6 4V6l6 15z"/><path d="M3 21h18"/></svg>',
  hospital:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6"/></svg>',
  apt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',
  muni:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a3 3 0 0 0 6 0V3M9 3v18M17 3c-1.5 0-2 2-2 5s.5 5 2 5v8"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  assess:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  design:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  install:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 7l3-3 4 4-3 3M14 7l-9 9v3h3l9-9M14 7l-3 3"/></svg>',
  commission:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M5 8l3 3M22 12h-4M19 5l-3 3"/><circle cx="12" cy="15" r="6"/><path d="M12 13v2l1.5 1"/></svg>',
  maintain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  hub:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 7l3-4h12l3 4M8 12a2 2 0 0 0 4 0 2 2 0 0 1 4 0"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 3.2 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L9.1 9.9a16 16 0 0 0 6 6l1.3-1.35a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
};

const SERVICES=[
  {i:'drop',t:'Water Treatment',d:'Filtration and clarifiers to turn any raw source into clean, reliable supply.'},
  {i:'ro',t:'Reverse Osmosis',d:'RO plants for pure drinking and process water at any capacity.'},
  {i:'soft',t:'Water Softening',d:'Ion-exchange softeners that remove calcium and magnesium hardness.'},
  {i:'dm',t:'Demineralization',d:'DM plants for high-purity, low-conductivity process water.'},
  {i:'stp',t:'Sewage Treatment',d:'Compact, reuse-ready sewage treatment plants (STP).'},
  {i:'etp',t:'Effluent Treatment',d:'Industrial wastewater treated to discharge standards (ETP).'},
  {i:'recycle',t:'Water Recycling',d:'Tertiary treatment and reuse for irrigation, flushing and cooling.'},
  {i:'flask',t:'Laboratory Testing',d:'Accurate chemical and microbiological water analysis, interpreted.'},
];
const PRODUCTS=[
  {i:'filter',t:'Filters & clarifiers'},{i:'soft',t:'Water softeners'},{i:'dm',t:'Demineralizers'},
  {i:'ro',t:'RO membranes & plants'},{i:'uv',t:'UV sterilizers'},{i:'filter',t:'Cartridge filters'},
  {i:'pump',t:'Dosing pumps'},{i:'resin',t:'Ion-exchange resins'},{i:'drop',t:'Water dispensers'},{i:'flask',t:'Lab & test kits'},
];
const INDUSTRIES=[
  {i:'hotel',t:'Hotels & Resorts',d:'Guest-grade water, pools and wastewater reuse.'},
  {i:'factory',t:'Factories & Industry',d:'Process water and compliant effluent treatment.'},
  {i:'hospital',t:'Hospitals & Healthcare',d:'High-purity water to healthcare standards.'},
  {i:'apt',t:'Apartments & Commercial',d:'Softening, RO and sewage treatment for buildings.'},
  {i:'muni',t:'Municipal & Community',d:'Community drinking water and sewage systems.'},
  {i:'fb',t:'Food & Beverage',d:'Purified process water for production lines.'},
];
const PROCESS=[
  {i:'assess',n:'01',t:'Assess & test',d:'We analyse your water and understand your site and goals.'},
  {i:'design',n:'02',t:'Design & propose',d:'A right-sized system design with a clear, costed proposal.'},
  {i:'install',n:'03',t:'Supply & install',d:'Quality equipment, engineered and installed to spec.'},
  {i:'commission',n:'04',t:'Commission',d:'Tested, tuned and handed over performing to target.'},
  {i:'maintain',n:'05',t:'Service & maintain',d:'Annual contracts keep your system running non-stop.'},
];
const SECTORS=[
  {k:'Hotel / Resort',ic:'hotel',note:'to a standard your guests will notice'},
  {k:'Factory / Industrial',ic:'factory',note:'to CEA discharge and process norms'},
  {k:'Apartment / Commercial',ic:'apt',note:'sized for your building and budget'},
  {k:'Hospital',ic:'hospital',note:'to healthcare water standards'},
  {k:'Municipal',ic:'muni',note:'for reliable community supply'},
  {k:'Food & Beverage',ic:'fb',note:'to food-grade purity'},
];
const NEEDS=[
  {k:'Clean drinking water',sys:'Reverse Osmosis (RO) Plant',why:'Multi-stage RO removes dissolved salts, chemicals and microbes for safe, great-tasting water.',scope:['Pre-filtration & sediment removal','RO membrane skid, sized to demand','UV sterilization & storage','Dosing and monitoring']},
  {k:'Remove hard water',sys:'Water Softening Plant',why:'Ion-exchange softening removes calcium and magnesium, protecting pipes, boilers and appliances.',scope:['Ion-exchange softener vessels','Automatic brine regeneration','Hardness testing & set-up','Optional twin-stream for non-stop supply']},
  {k:'High-purity process water',sys:'Demineralization / RO',why:'DM and RO deliver low-conductivity, high-purity water for sensitive processes.',scope:['DM / RO polishing train','Conductivity monitoring','Chemical dosing','Validation & reporting']},
  {k:'Treat sewage (STP)',sys:'Sewage Treatment Plant (STP)',why:'A compact biological STP treats sewage cleanly and can be reused for gardens and flushing.',scope:['Compact packaged STP','Aeration & clarification','Disinfection','Reuse-ready treated water']},
  {k:'Treat wastewater (ETP)',sys:'Effluent Treatment Plant (ETP)',why:'Physico-chemical and biological treatment brings industrial effluent to discharge standards.',scope:['Screening & equalization','Physico-chemical + biological stages','Sludge handling','Compliance to discharge norms']},
  {k:'Recycle & reuse water',sys:'Water Recycling System',why:'Tertiary treatment and RO polishing recover water for irrigation, flushing and cooling, cutting your bills.',scope:['Tertiary filtration','RO polishing','Storage & distribution','Water-saving reporting']},
  {k:'Test my water',sys:'Laboratory Water Analysis',why:'A full chemical and microbiological analysis, interpreted, so you know exactly where you stand.',scope:['Sample collection guidance','Chemical & bacteriological analysis','Interpreted lab report','Clear recommendations']},
];
let fSector=null,fNeed=null;

const $=id=>document.getElementById(id);
function render(){
  if($('svcGrid'))$('svcGrid').innerHTML=SERVICES.map(s=>`<div class="svc"><div class="ic">${IC[s.i]}</div><h3>${s.t}</h3><p>${s.d}</p></div>`).join('');
  if($('prodGrid'))$('prodGrid').innerHTML=PRODUCTS.map(p=>`<div class="prod"><div class="ic">${IC[p.i]}</div><b>${p.t}</b></div>`).join('');
  if($('indGrid'))$('indGrid').innerHTML=INDUSTRIES.map(x=>`<div class="ind"><div class="ic">${IC[x.i]}</div><div><b>${x.t}</b><span>${x.d}</span></div></div>`).join('');
  if($('procTrack'))$('procTrack').insertAdjacentHTML('beforeend',PROCESS.map(p=>`<div class="pstep"><div class="dot">${IC[p.i]}</div><div class="no">${p.n}</div><h4>${p.t}</h4><p>${p.d}</p></div>`).join(''));
  if($('fSector'))$('fSector').innerHTML=SECTORS.map(s=>`<button class="f-chip" data-s="${s.k}" onclick="pickSector('${s.k.replace(/'/g,"")}')">${IC[s.ic]}${s.k}</button>`).join('');
  if($('fNeed'))$('fNeed').innerHTML=NEEDS.map((n,i)=>`<button class="f-chip" data-n="${i}" onclick="pickNeed(${i})">${n.k}</button>`).join('');
}
function pickSector(k){fSector=k;document.querySelectorAll('#fSector .f-chip').forEach(c=>c.classList.toggle('sel',c.dataset.s===k));buildFinder();}
function pickNeed(i){fNeed=i;document.querySelectorAll('#fNeed .f-chip').forEach(c=>c.classList.toggle('sel',+c.dataset.n===i));buildFinder();}
function buildFinder(){
  if(fNeed===null)return;
  const n=NEEDS[fNeed];const sec=SECTORS.find(s=>s.k===fSector);
  const secLine=sec?` for your ${sec.k.toLowerCase()}, ${sec.note}.`:'.';
  $('finderR').innerHTML=`<div class="orb"></div>
    <div class="fr-head">
      <span class="eyebrow">Recommended solution</span>
      <h3>${n.sys}</h3>
      <div class="sub">${n.why}${secLine}</div>
    </div>
    <ul class="fr-scope">${n.scope.map(s=>`<li>${IC.check}${s}</li>`).join('')}</ul>
    <button class="btn btn-light" style="width:100%" onclick="sendFinder()"><span>Request a proposal</span></button>`;
}
function requestProposal(subject,body){
  const s=encodeURIComponent('Waterman · '+subject);
  const b=encodeURIComponent(body||('Hello Waterman,\n\nI would like to request a proposal.\n\nName:\nOrganisation:\nLocation:\nRequirement:\n\nThank you.'));
  window.location.href=`mailto:${EMAIL}?subject=${s}&body=${b}`;
}
function sendFinder(){
  const n=NEEDS[fNeed];
  const body=`Hello Waterman,\n\nI'd like a proposal for a ${n.sys}.\n\nSector: ${fSector||'-'}\nNeed: ${n.k}\n\nName:\nOrganisation:\nLocation:\nDaily water volume (if known):\n\nThank you.`;
  requestProposal('Proposal request · '+n.sys,body);
}
/* contact form -> mailto */
function submitEnquiry(e){
  e.preventDefault();
  const f=e.target;
  const name=(f.name.value||'').trim();
  const org=(f.org.value||'').trim();
  const phone=(f.phone.value||'').trim();
  const need=f.need.value||'General enquiry';
  const msg=(f.message.value||'').trim();
  const body=`Hello Waterman,\n\nI'd like to enquire about: ${need}.\n\nName: ${name}\nOrganisation: ${org}\nPhone: ${phone}\n\n${msg}\n\nThank you.`;
  requestProposal('Enquiry · '+need,body);
  return false;
}

/* menu */
function openMenu(){$('mmenu').classList.add('open');$('mscrim').classList.add('open');document.body.style.overflow='hidden';}
function closeMenu(){$('mmenu').classList.remove('open');$('mscrim').classList.remove('open');document.body.style.overflow='';}
if($('hamb'))$('hamb').addEventListener('click',openMenu);

/* scroll: header, progress */
let ticking=false;
function onScroll(){
  const y=window.pageYOffset;
  if($('header'))$('header').classList.toggle('stick',y>50);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  if($('progress'))$('progress').style.width=(h>0?y/h*100:0)+'%';
  ticking=false;
}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true;}},{passive:true});

/* count-up */
function countUp(el){
  const target=+el.dataset.count,suf=el.dataset.suffix||'';const dur=1400,t0=performance.now();
  function step(t){const p=Math.min(1,(t-t0)/dur);const e=1-Math.pow(1-p,3);el.textContent=Math.round(e*target)+suf;if(p<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
  setTimeout(()=>{el.textContent=target+suf;},dur+400);
}

/* reveal + observers */
function reveal(){
  document.documentElement.classList.add('reveal-on');
  const rv=[...document.querySelectorAll('[data-rv]')];
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  rv.forEach(e=>io.observe(e));
  setTimeout(()=>rv.forEach(e=>{if(e.getBoundingClientRect().top<innerHeight)e.classList.add('in');}),400);
  const cio=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){countUp(e.target);cio.unobserve(e.target);}});},{threshold:.4});
  document.querySelectorAll('[data-count]').forEach(e=>cio.observe(e));
  const pio=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.pstep').forEach((s,i)=>setTimeout(()=>s.classList.add('on'),i*220));const f=$('procFill');if(f)f.style.width='100%';pio.disconnect();}});},{threshold:.3});
  const pt=$('procTrack');if(pt)pio.observe(pt);
}
render();reveal();onScroll();
