/* Rendering and interactions. You normally will not need to edit this file. */
/* ---- render ---- */
const $=id=>document.getElementById(id);
const ttl=s=>String(s).replace(" · ",": ");
const esc=s=>String(s).replace(/ · /g,", ").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const socialsHtml=()=>SOCIALS.map(s=>`<a class="soc" href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");
$("socialsTop").innerHTML=socialsHtml(); $("socialsBottom").innerHTML=socialsHtml();


function chip(p){const c=CAT[p.category];return `<span class="chip" style="color:var(${c.c})">${c.n}</span>`}
function statusTag(p){if(!p.status)return"";const s=STATUS[p.status];return `<span class="status"><i style="background:var(${s.c})"></i>${s.n}, ${esc(p.lastUpdated)}</span>`}
function resHtml(t){const [a,...b]=String(t).split(" · ");return `<b>${esc(a)}</b>${b.length?`<span>${esc(b.join(", "))}</span>`:""}`}
function card(p,opts={}){
  const sub=p.category==="hackathon"?esc(p.event||p.module||""):p.category==="school"?esc(p.module):statusTag(p);
  return `<button class="card" type="button" data-slug="${p.slug}" aria-label="Open ${esc(ttl(p.title))}">
    ${pic(p,"Photo · cover")}
    <div class="bd"><div class="meta">${opts.chip?chip(p):""}<span class="stk">${sub}</span></div>
    <h3>${esc(ttl(p.title))}</h3><p>${esc(p.summary)}</p>
    <div class="res">${resHtml(p.result)}</div></div></button>`;
}
const byRank=(a,b)=>(a.rank??99)-(b.rank??99);
$("featuredGrid").innerHTML=PROJECTS.filter(p=>p.featured).sort(byRank).map(p=>card(p,{chip:true})).join("");

const TIER={1:{k:"gold",n:"1st place"},2:{k:"silver",n:"2nd place"},3:{k:"bronze",n:"3rd place"}};
const tierOf=p=>{const t=TIER[p.placement]||{k:"honour",n:String(p.placement)};return {k:t.k,n:p.label||t.n}};
const rankOf=p=>typeof p.placement==="number"?p.placement:(p.finalist?5:4);
function pic(p,label){return p.cover
  ?`<div class="photo has-img"><img src="${p.cover}" alt="${esc(ttl(p.title))} at ${esc(p.event||"")}" style="object-position:${p.pos||"50% 50%"}" loading="lazy"></div>`
  :`<div class="photo"><span>${esc(p.coverNote||label)}</span></div>`}
const hacks=PROJECTS.filter(p=>p.category==="hackathon"&&p.event&&p.placement!=null)
  .sort((a,b)=>rankOf(a)-rankOf(b)||String(b.date).localeCompare(String(a.date)));
const counts={gold:0,silver:0,bronze:0,honour:0}; hacks.forEach(p=>counts[tierOf(p).k]++);
$("fameLegend").innerHTML=[["gold","1st place"],["silver","2nd place"],["bronze","3rd place"],["honour","Finalist and special awards"]]
  .filter(([k])=>counts[k]).map(([k,n])=>`<span class="t-${k}"><i></i>${n} (${counts[k]})</span>`).join("");
$("wall").innerHTML=hacks.map(p=>{const t=tierOf(p);return `<button class="frame t-${t.k}" type="button" data-slug="${p.slug}" aria-label="${esc(t.n)}, ${esc(p.event)}: open ${esc(ttl(p.title))}">
  <div class="mount">${pic(p,"Photo · team or demo")}${p.video?'<span class="vid-tag">Has video</span>':""}</div>
  <div class="plaque"><div class="rank">${esc(t.n)}</div>${p.sub?`<div class="ev">${esc(p.sub.replace(/ · /g,", "))}</div>`:""}<div class="ev">${esc(p.event)}</div></div>
  <div class="cap"><b>${esc(ttl(p.title))}</b>${esc(p.summary)}</div></button>`}).join("");


const KC={work:"--c-work",research:"--c-school",leadership:"--c-lead",volunteer:"--c-passion",interest:"--c-hack"};
function tl(list){return [...list].sort(byRank).map(e=>`<article class="xcard" style="--kc:var(${KC[e.kind]})">
  ${e.cover?`<div class="photo has-img"><img src="${e.cover}" alt="${esc(e.alt||e.org)}" loading="lazy" style="object-position:${e.pos||"50% 50%"}"></div>`:`<div class="photo"><span>Photo</span></div>`}
  <div class="bd"><div class="when">${e.kind[0].toUpperCase()+e.kind.slice(1)}, ${esc(e.when)}</div>
  <h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div><ul>${e.bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul></div></article>`).join("")}
$("expTl").innerHTML=tl(EXPERIENCE); $("leadTl").innerHTML=tl(LEADERSHIP);

/* the room's lights come on once, the first time the wall is in view */
(()=>{const w=$("wall");if(!("IntersectionObserver" in window)){w.classList.add("lit");return}
  const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){w.classList.add("lit");io.disconnect()}},{threshold:.25});io.observe(w)})();
/* rail controls: arrows + position */
document.querySelectorAll(".rail").forEach(r=>{
  const n=r.children.length;
  const ctl=document.createElement("div"); ctl.className="rail-ctl";
  ctl.innerHTML=`<span class="pos"></span><span class="arrows"><button type="button" aria-label="Scroll left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button><button type="button" aria-label="Scroll right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button></span>`;
  r.before(ctl);
  const [prev,next]=ctl.querySelectorAll("button"), pos=ctl.querySelector(".pos");
  const step=()=>Math.max(r.clientWidth*.8,240);
  const smooth=matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";
  prev.addEventListener("click",()=>r.scrollBy({left:-step(),behavior:smooth}));
  next.addEventListener("click",()=>r.scrollBy({left:step(),behavior:smooth}));
  const upd=()=>{const max=r.scrollWidth-r.clientWidth-2;
    prev.disabled=r.scrollLeft<=2; next.disabled=r.scrollLeft>=max;
    ctl.hidden=max<=0;
    const first=[...r.children].findIndex(c=>c.offsetLeft+c.offsetWidth/2>=r.scrollLeft);
    const vis=[...r.children].filter(c=>c.offsetLeft>=r.scrollLeft-4&&c.offsetLeft+c.offsetWidth<=r.scrollLeft+r.clientWidth+4).length;
    pos.textContent=max<=0?"":`${first+1}–${Math.min(n,first+Math.max(vis,1))} of ${n}`;};
  r.addEventListener("scroll",()=>requestAnimationFrame(upd),{passive:true});
  addEventListener("resize",upd); upd();
});

/* detail view */
const veil=$("veil"), sheet=$("sheet"); let lastFocus=null;
function open(slug){
  const p=PROJECTS.find(x=>x.slug===slug); if(!p)return;
  lastFocus=document.activeElement;
  const extra=p.category==="hackathon"?[["Event",p.event],["Team",p.team||"—"],["Organiser",p.organiser],["Placement",p.label||p.placement],["Prize",p.prize||"—"]]
    :p.category==="school"?[["Module",p.module]]:[["Status",STATUS[p.status].n],["Last updated",p.lastUpdated]];
  const facts=[...extra,["Role",p.role],["Team size",p.teamSize],["Stack",p.stack.join(", ")]];
  sheet.innerHTML=`<div class="top"><div>${chip(p)}<h3 id="dTitle">${esc(ttl(p.title))}</h3></div>
    <button class="btn" id="closeD" type="button">Close</button></div>
    ${p.video?"":p.cover?`<div class="photo has-img" style="aspect-ratio:16/9"><img src="${p.cover}" alt="${esc(ttl(p.title))}" style="object-position:${p.pos||"50% 50%"}"></div>`:`<div class="photo" style="aspect-ratio:16/8"><span>${esc(p.coverNote||"Cover photo")}</span></div>`}
    ${p.video?`<figure class="video-fig"><video controls playsinline preload="none" poster="${p.cover||""}" src="${p.video}"></video><figcaption>Our entry for the video side contest</figcaption></figure>`:""}
    <div class="res">${resHtml(p.result)}</div>
    <dl class="facts">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    <div class="body">${(p.body||[]).map(([k,v])=>`<p><b>${esc(k)}.</b> ${esc(v)}</p>`).join("")}</div>
    ${p.authors?`<p class="authors"><b>Authors.</b> ${esc(p.authors)}</p>`:""}
    ${p.lessons?`<div class="lessons"><h4>${esc(p.lessonsTitle||"Lessons learnt")}</h4><ol>${p.lessons.map(([t,d])=>`<li><b>${esc(t)}</b> ${esc(d)}</li>`).join("")}</ol>${p.strengths?`<p class="kept"><b>What held up.</b> ${esc(p.strengths)}</p>`:""}</div>`:""}
    ${p.gallery?`<div class="gal">${p.gallery.map(g=>`<figure><div class="photo has-img"><img src="${g.src}" alt="${esc(g.caption)}" loading="lazy" style="object-position:${g.pos||"50% 50%"};object-fit:${g.fit||"cover"}"></div><figcaption>${esc(g.caption)}</figcaption></figure>`).join("")}</div>`
      :""}
    <div class="btns">${p.repo?`<a class="btn primary" href="${p.repo}" target="_blank" rel="noopener">View code on GitHub</a>`:`<span class="repo-note">${esc(p.repoNote||"Code isn't public.")}</span>`}${p.demo?`<a class="btn" href="${p.demo}" target="_blank" rel="noopener">${esc(p.demoLabel||"Live demo")}</a>`:""}</div>`;
  veil.hidden=false; document.body.style.overflow="hidden";
  $("closeD").addEventListener("click",close); $("closeD").focus();
}
function close(){veil.hidden=true;document.body.style.overflow="";if(lastFocus)lastFocus.focus()}
document.addEventListener("click",e=>{const t=e.target.closest("[data-slug]");if(t)open(t.dataset.slug)});
veil.addEventListener("click",e=>{if(e.target===veil)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!veil.hidden)close()});

$("copyEmail").addEventListener("click",async()=>{
  const b=$("copyEmail"), e=b.dataset.email;
  try{await navigator.clipboard.writeText(e);b.textContent="Copied"}
  catch{b.textContent=e}
  setTimeout(()=>b.textContent="Copy email",2200);
});
