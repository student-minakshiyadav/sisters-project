import UserCard from "./components/UserCard.jsx"
import { useState } from "react"
import './App.css'
import minupic from "../src/assets/minu.jpg"
import hemupic from "../src/assets/hemu.jpg"
import punampic from "../src/assets/punam.jpg"
import payalpic from "../src/assets/payal.jpg"
import pallavipic from "../src/assets/pallavi.jpeg"


function App() {
  const [showIntro, setShowIntro]=useState(true);

  if(showIntro){
    return(
      <div className="intro">
        <p className="filling">
          "No matter how my day goes,
          talking to you in the evening<br/>
           gives my heart peace❤️" 
        </p>
        <h1>This is for you💖</h1>
        <button onClick={() => setShowIntro(false)}>Click here</button>
      </div>
    );
  }
  

  return (
    <div className="container">
      <h1>To MY Sisters</h1>
      <p className="quote">
        "💖 No distance can ever weaken our bond 
         because our hearts will always remain
         connected❤️. You're always with me, no
         matter how apart we are🌍🫂" </p>
         <div className="card-wrapper">
      <UserCard name="Minakshi" desc="The Lucky One✨🌟 " image={minupic}/>
      <UserCard name="Hemlata"    desc="The Caring Soul🫂💖" image={hemupic}/>
      <UserCard name="Punam"  desc="Drama Queen😘👑" image={punampic}/>
      <UserCard name="Payal"  desc="Secret Keeper🤫💕" image={payalpic}/>
      <UserCard name="Pallavi"  desc="The Wise One🥰❤️" image={pallavipic}/>
      </div>
    </div>
  )
}

export default App

