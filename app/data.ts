export type Product={slug:string;name:string;category:string;price:number;image:string;description:string;badge?:string};
const wix=(id:string)=>`https://static.wixstatic.com/media/b4a9a1_${id}~mv2.png`;
export const products:Product[]=[
 ["majestic-sapphire-bracelet","The Majestic Sapphire & Diamond Bracelet","Bracelets",61463,"c34d0c9a9ede484c930c24b55b5120a7","Royal blue sapphires framed by brilliant diamonds.","Signature"],
 ["chroma-sapphire-bracelet","The Chroma Sapphire Step-Cut Bracelet","Bracelets",43800,"c4d06624f67443619dd0faf0424915bc","Architectural step-cut sapphires with a diamond finish."],
 ["riviera-turquoise-pendant","The Riviera Turquoise & Diamond Pendant","Necklaces",12500,"e1ec92ff91264099be1f24c48750ea01","Luminous turquoise encircled by white diamonds.","New"],
 ["royal-sapphire-heart","The Royal Blue Sapphire Heart Pendant","Necklaces",14200,"a1a9996e59cf4344a22ba1d417957cc1","A romantic sapphire heart made for meaningful gifting."],
 ["kaleidoscope-huggies","The Kaleidoscope Sapphire Huggies","Earrings",8200,"9585d8217db24fc8983fc35a4e921f2d","Colourful sapphire huggies with everyday polish."],
 ["sculpted-pave-signet","The Sculpted Pavé Signet Diamond Ring","Rings",9800,"de1cb1a1418a4deea86c89b7e1161dfb","A contemporary signet covered in pavé brilliance.","Bestseller"],
 ["grand-oval-signet","The Grand Oval Pavé Signet Diamond Ring","Rings",11600,"028503aa1d774bdfa6dab8cc078f5e22","A bold oval signet balanced with delicate pavé work."],
 ["imperial-dome-ring","The Imperial Pavé Dome Cluster Ring","Rings",13400,"5698004dffdf4c1386f3405e23d5e4af","A sculptural dome set with a field of bright diamonds."],
 ["graduated-diamond-bracelet","Graduated Oval & Round Diamond Bracelet","Bracelets",38200,"a738f523ca6b4d0f8b796dd21f7d7ded","Graduated diamond cuts create fluid movement and light."],
 ["floral-link-bracelet","Diamond Floral Pear Marquise Link Bracelet","Bracelets",32600,"342b8a3ae5204cf3b058a86d480fd94e","Pear and marquise diamonds arranged as delicate flowers."],
 ["eclipse-tennis-bracelet","The Eclipse Two-Tone Pear Tennis Bracelet","Bracelets",28750,"3045094fec0b42e0bf30d818193f2582","A two-tone tennis bracelet with pear-cut accents."],
 ["romantic-heart-pendant","The Romantic Heart Halo Diamond Pendant","Necklaces",7450,"5f453cb3d43b4c718d2f5b892f198fbe","A classic heart surrounded by a fine diamond halo."]
].map(([slug,name,category,price,id,description,badge])=>({slug,name,category,price,image:wix(id as string),description,badge})) as Product[];
export const money=(n:number)=>new Intl.NumberFormat("en-AE",{style:"currency",currency:"AED",maximumFractionDigits:0}).format(n);
