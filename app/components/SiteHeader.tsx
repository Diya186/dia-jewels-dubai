const logo="https://static.wixstatic.com/media/e6636e_6ccb162994df4e7f814ffbb4f51f5be5~mv2.png";
export default function SiteHeader(){
 return <><div className="announcement">Complimentary delivery across the UAE</div><header className="innerHeader"><a className="brand" href="/"><img src={logo} alt="DIA Jewels"/></a><nav><a href="/">Home</a><a href="/shop">Shop</a><a href="/about">About Us</a><a href="/customization">Customization</a><a href="/contact">Contact</a></nav><a className="headerBag" href="/shop">Shop now</a></header></>
}