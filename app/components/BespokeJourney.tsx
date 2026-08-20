"use client";
import {useEffect,useRef,useState} from "react";

const steps=[
 {k:"Discover",t:"It begins with a conversation.",d:"Your story, your style and the meaning behind the piece."},
 {k:"Select",t:"One idea comes into focus.",d:"Together, we refine the stone, silhouette and details."},
 {k:"Design",t:"A sketch becomes precise.",d:"Every line is translated into a considered technical design."},
 {k:"Approve",t:"Nothing moves forward without you.",d:"Review the final design and approve it personally."},
 {k:"Create",t:"The digital becomes physical.",d:"A resin prototype gives the design its first real form."},
 {k:"Reveal",t:"Crafted, set and finished by hand.",d:"Our artisans bring every detail to life."},
 {k:"Deliver",t:"From our hands to yours.",d:"Beautifully presented and delivered to you."}
];
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
export default function BespokeJourney(){const wrap=useRef<HTMLElement>(null);const [p,setP]=useState(0);useEffect(()=>{let raf=0;const go=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{if(!wrap.current)return;const r=wrap.current.getBoundingClientRect(),distance=wrap.current.offsetHeight-innerHeight;setP(clamp(-r.top/distance))})};go();addEventListener("scroll",go,{passive:true});addEventListener("resize",go);return()=>{removeEventListener("scroll",go);removeEventListener("resize",go);cancelAnimationFrame(raf)}} ,[]);const scene=Math.min(6,Math.floor(p*7));const sub=p*7-scene;return <section ref={wrap} className="journey" style={{"--journey":p,"--sub":sub} as React.CSSProperties}><div className={`journeyStage scene${scene}`}>
  <div className="journeyVisual" aria-hidden="true">
   <div className="scenePhoto consultation"><img src="/bespoke/consultation.webp" alt=""/></div>
   <div className="paper"><div className="ringSketch"><i/><i/><i/><span/></div></div>
   <div className="cad"><div className="cadGrid"/><div className="cadRing"><i/><i/><span/></div><b>FRONT</b><em>Ø 18.2 mm</em></div>
   <div className="phone"><div className="phoneTop"><span>‹</span><b>DIA Jewels</b><i>online</i></div><div className="chat"><p className="received">Here is the final design for your approval.<span className="cadThumb"><i/></span><small>10:42</small></p><p className="sent">It looks perfect. Let&apos;s go ahead.<small>10:44 ✓✓</small></p><b className="approved">APPROVED</b></div></div>
   <div className="scenePhoto craft"><img src="/bespoke/craftsmanship.webp" alt=""/></div>
   <div className="scenePhoto reveal"><img src="/bespoke/reveal.webp" alt=""/><div className="boxLid"/></div>
   <div className="scenePhoto delivery"><img src="/bespoke/delivery.webp" alt=""/><div className="roadLines"/></div>
   <div className="finalMessage"><small>BESPOKE BY DIA</small><h2>Crafted around your story.<br/>Delivered to you.</h2><a href="https://wa.me/97142659268?text=Hello%20DIA,%20I%20would%20like%20to%20begin%20a%20bespoke%20piece">Begin your DIA journey</a></div>
  </div>
  <div className="journeyCopy"><small>0{scene+1} · {steps[scene].k}</small><h2>{steps[scene].t}</h2><p>{steps[scene].d}</p></div>
  <div className="journeyNav">{steps.map((s,i)=><span className={i<=scene?"on":""} key={s.k}>{s.k}</span>)}<i><b style={{width:`${p*100}%`}}/></i></div>
 </div></section>}
