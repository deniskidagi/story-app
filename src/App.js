import './App.css';
import VideoCard from './Components/VideoCard';
import { useEffect, useState} from 'react'
import db from './firebase'



function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos])

  return (
    <div className="app">
      <div className="app__top">
        <img src="logo19.png" alt="app__logo" className="app__logo"/>
        <h1>Shorts</h1>
      </div>
      <div className="app__videos">
        {videos.map(({url, channel, avatarSrc, songs, likes, shares}) => 
         ( <VideoCard
               url={url}
               channel={channel}
               avatarSrc={avatarSrc}
               song={songs}
               likes={likes}
               shares={shares}
          />)
        )}
      </div>
      <h1>Stories App React</h1>
    </div>
  );
}

export default App;
