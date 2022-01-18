import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import {Avatar, Button} from '@material-ui/core'
import './VideoFooter.css'
import { ModeComment, Favorite, MoreHoriz, Send } from '@material-ui/icons'


const VideoFooter = ({avatarSrc, channel, song, likes, shares}) => {
    return (
        <div className="VideoFooter">
             <div className="VideoFooter__text">
                 <Avatar src={avatarSrc}/>
                 <h3>
                     {channel} . <Button>Follow</Button>
                 </h3>
             </div>
             <div className="videoFooter__ticker">
                 <MusicNoteIcon className="videoFooter__icon"/>
                     <Ticker mode="smooth">
                     {({ index }) => (
                         <>
                         <h1>{ song }</h1>
                         </>
                     )}
                    </Ticker>
             </div>
             <div className="videoFooter__actions">
                 <div className="videoFooter__actionsLeft">
                     <Favorite  fonstSize="large"/>
                     <ModeComment fonstSize="large"/>
                     <Send fontSize="large"/>
                     <MoreHoriz fontSize='large'/>
                 </div>
                 <div className="videoFooter__actionsRight">
                     <div className="videoFooter__stat">
                         <Favorite/>
                         <p>{likes}</p>
                     </div>
                     <div className="videoFooter__stat">
                         <ModeComment/>
                         <p>{shares}</p>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default VideoFooter
