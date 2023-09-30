import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { setData } from "./redux/actions";
import Card from "./components/Card";


function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.taggbox.com/api/v2/widget/posts/233?user_key=605b54dfbed1d7bdad7fce307e135a12&offset=0&limit=100&date_from=10/08/2021&include_only_video_posts=false&include_only_text_posts=false&include_only_image_posts=false&format=json")
      .then(response => response.json())
      .then(data => dispatch(setData(data.responseData)))
  }, [dispatch]);
  return (
    <div className="App">
      {data&&data.map((item)=><Card data={item}/>)}
    </div>
  );
}

export default App;