import { useState } from "react";
import { Tweet } from "./Componentes/Tweet"

import './App.css';
import { AppRoutes } from "./Routs";


function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function creatTweet(){
    setTweets([...tweets, 'Tweet 5']
    ) 
  }

  return (
    <AppRoutes /> 

   /*<div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}
      

      <button onClick={creatTweet} style={{
        backgroundColor: '#00b6ce',
        border: 0,
        padding: '6px 12px',
        color: '#FFFFFF',
      }}>
        Adcionar tweet</button>
    </div> */
  )
  

}

export default App
