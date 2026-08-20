"use client";
import {useMemo,useState} from "react";
import SiteHeader from "../components/SiteHeader";
type Product={id:number;name:string;category:string;price:number;image:string};
const media=(id:string)=>`https://static.wixstatic.com/media/b4a9a1_${id}~mv2.png`;
const products:Product[]=[
[1,"The Majestic Sapphire & Diamond Bracelet","Bracelets",61463,"c34d0c9a9ede484c930c24b55b5120a7"],
[2,"The Chroma Sapphire Step-Cut Bracelet","Bracelets",43800,"c4d06624f67443619dd0faf0424915bc"],
[3,"The Riviera Turquoise & Diamond Pendant","Necklaces",12500,"e1ec92ff91264099be1f24c48750ea01"],
[4,"The Royal Blue Sapphire Heart Pendant","Necklaces",14200,"a1a9996e59cf4344a22ba1d417957cc1"],
[5,"The Kaleidoscope Sapphire Huggies Earrings","Earrings",8200,"9585d8217db24fc8983fc35a4e921f2d"],
[6,"The Sculpted Pavé Signet Diamond Ring","Rings",9800,"de1cb1a1418a4deea86c89b7e1161dfb"],
[7,"The Grand Oval Pavé Signet Diamond Ring","Rings",11600,"028503aa1d774bdfa6dab8cc078f5e22"],
[8,"The Imperial Pavé Dome Cluster Ring","Rings",13400,"5698004dffdf4c1386f3405e23d5e4af"],
[9,"Graduated Oval & Round Diamond Bracelet","Bracelets",38200,"a738f523ca6b4d0f8b796dd21f7d7ded"],
[10,"Diamond Floral Pear Marquise Link Bracelet","Bracelets",32600,"342b8a3ae5204cf3b058a86d480fd94e"],
[11,"The Eclipse Two-Tone Pear Tennis Bracelet","Bracelets",28750,"3045094fec0b42e0bf30d818193f2582"],
[12,"The Romantic Heart Halo Diamond Pendant","Necklaces",7450,"5f453cb3d43b4c718d2f5b892f198fbe"]
].map(([id,name,category,price,img])=>({id,name,category,price,image:media(img)})) as Product[];
const money=(n:number)=>new Intl.NumberFormat("en-AE",{style:"currency",currency:"AED",maximumFractionDigits:0}).format(n);
export default function Shop(){
 const [category,setCategory]=useState("All Products"),[cart,setCart]=useState<Product[]>([]);
 const filtered=useMemo(()=>products.filter(p=>category==="All Products"||p.category===category),[category]);
 return <main><SiteHeader/><section className="pageHero"><small>DIA COLLECTIONS</small><h1>Shop Fine Jewellery</h1><p>Certified diamonds, distinctive design and pieces made to be treasured.</p></section><section className="section shop"><div className="filters">{["All Products","Rings","Earrings","Bracelets","Necklaces"].map(c=><button className={category===c?"selected":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>{cart.length>0&&<div className="shopNotice">{cart.length} {cart.length===1?"piece":"pieces"} in your bag</div>}<div className="productGrid">{filtered.map(p=><article key={p.id}><div className="pic"><img src={p.image} alt={p.name}/></div><div className="productName">{p.name}</div><p>{money(p.price)}</p><button className="add" onClick={()=>setCart(c=>[...c,p])}>Add to cart</button></article>)}</div></section></main>
}