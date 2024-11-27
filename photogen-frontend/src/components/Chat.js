import React, { useState } from 'react'

export default function Chat() {
  
  const [prompt,setPrompt] = useState("");
  const [chatResponse,setChatResponse] = useState("");
  
  const askAI = async ()=>{
    try{
        const response = await fetch(`http://localhost:8080/ask-options?prompt=${prompt}`)
        const data = await response.text()
        setChatResponse(data);
    }
    catch(error){
        console.log("Error generating response: ",error);
    }
  }

  return (
    <div>
        <h2>Talk to AI</h2>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Ask something'
        />
        <button onClick={askAI}>Ask AI</button>
        <div className='output'>
            <p>{chatResponse}</p>
        </div>
    </div>
  )
}
