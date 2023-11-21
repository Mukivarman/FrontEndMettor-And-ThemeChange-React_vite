import React from "react";


const H2=(props)=><h2>{props.text}</h2>
const H3=(props)=><h3>{props.text}</h3>
const P=(props)=><p>{props.text}</p>
const Button=(props)=><button className={props.className}>{props.text}</button>
const Img=(props)=><img src={props.src}className={props.className}></img>

export default function SummaryPage(){
return (<div className="contentbody" >
    <div className="summary">
      <Img src="/images/illustration-hero.svg" className="heroimg" />

   <div className="detail">
      <H2 text="Order Summary"/>
      <P text="You can now listen to  millions  of  songs,audiobooks,and podcasts on any device anywhere you  like" />
   </div>

   <div className="plan-change">

      <Img src="/images/icon-music.svg" className="icon-music"/>
      <div style={{padding:'2%',width:'60%',margin:'auto'}}><H3 text="Annual Plan"/>

    <P text="$59.99/year"/>
    </div>  
    <Button  text="change" className="change"/>
    </div>

   <Button text="Proceed to Payment" className="proceed"/>
   <Button text="Cancel Order" className="cancel"/>
   </div>
</div>)
}
 