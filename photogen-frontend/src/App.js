
import './App.css';
import { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';
import Chat from './components/Chat';
import RecipeGenerator from './components/RecipeGenerator';

function App() {

  const [activeTab,setActiveTab] = useState("image-generator");

  const handleClick = (tab)=>{
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <button className={activeTab === 'image-generator'?"active":""}
      onClick={()=>handleClick('image-generator')}>
        Image Generator
      </button>
      <button className={activeTab === 'chat'?"active":""}
      onClick={()=>handleClick('chat')}>
        Ask AI
      </button>
      <button className={activeTab === 'recipe-generator'?"active":""}
      onClick={()=>handleClick('recipe-generator')}>
        Recipe Generator
      </button>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'chat' && <Chat/>}
        {activeTab === 'recipe-generator' && <RecipeGenerator/>}
      </div>
    </div>
  );
}

export default App;
