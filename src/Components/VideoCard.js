 import './VideoCard.css'
 import React, {useState, useRef} from 'react'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'


 const VideoCard = ({url, channel, likes, shares, avatarSrc, song}) => {
     const [playing, setPlaying] = useState(false)
     const videoRef = useRef(null)

     const handleVideoPress = () => {
         if(playing) {
             videoRef.current.pause()
             setPlaying(false)
         } else {
             videoRef.current.play()
             setPlaying(true)
         }
     }
    return (
        <div className="videoCard">
            <VideoHeader/>
                  <video className="videoCard__player"
                        src={url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        ref={videoRef}
                        onClick={handleVideoPress}
                />
            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard
