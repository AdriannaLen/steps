
import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]

  export default function App () {

    const [step, setStep] = useState(1);
    const [text, setText] = useState({name: "Fred"});
    const [isOpen, setIsOpen] = useState(true);

    /// to update for example step and change it so that it will be 2 you need to include callback
    /// (s) => s +2 . Its always a good idea to use callback if we want to change state in the future

    function handleNext() {
      if ( step < 3 )setStep((s) => s + 1); // before adding 2 it was setStep(step+1)
      setText({name: "Johnas"})
    }

    function handlePrevious() {
      if ( step > 1 ) 
      setStep((s) => s - 1); // before it was setStep(step-1)
      setText({name: "Fred"})
    }



  return <>
    <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button> 
    { isOpen && (<div className="steps">
   
    <div className="numbers">
      <div className={step >= 1 ? "active" : "" }>1</div>
      <div className={step >= 2 ? "active" : "" }>2</div>
      <div className={step >= 3 ? "active" : "" }>3</div>
  
    </div>

    <p className="message">Steps {step}: {messages[step -1]} ({text.name})</p>

    <div className="buttons">
      <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious} >Previous</button>
      <button style={{backgroundColor: "#7950f2", color: "#fff", }}onClick={handleNext}>Next</button>
    </div>

  </div>
  )} </>
}