import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [data,setData] = useState([]);
    useEffect(()=>{
      fetch("https://api.taggbox.com/api/v2/widget/posts/233?user_key=605b54dfbed1d7bdad7fce307e135a12&offset=0&limit=100&date_from=10/08/2021&include_only_video_posts=false&include_only_text_posts=false&include_only_image_posts=false&format=json")
      .then(response => response.json())
      .then(data => setData(data.responseData))
      
    },[])
  return (
    <div className="App" >
      {data && data.map((cardData)=>{
        return <Card   cardData={cardData}/>
      })}
      
    </div>
  );
}

export default App;
