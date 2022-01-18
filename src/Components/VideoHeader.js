import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import  CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined"
import './VideoHeader.css'
const VideoHeader = () => {
    return (
        <div className='VideoHeader'>
            <ArrowBackIosIcon/>
            <h3>Shorts</h3>
            <CameraAltOutlinedIcon/>
        </div>
    )
}
export default VideoHeader
