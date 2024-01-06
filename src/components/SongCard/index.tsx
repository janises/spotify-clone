import {Song} from '../../utils/interfaces'
import './index.css'

type SongCardProps = {
  songData: Song
}

const SongCard = ({songData}: SongCardProps): JSX.Element => {
  return (
    <div className='songContainer'>
      <img className='img' src="https://placehold.co/100x100"alt='album art'/>
      <div className='section'>{songData.title}</div>
      <div className='section'>{songData.artist}</div>

      <div className='section'>{songData.album}</div>

      <div className='section'>{songData.song_length}</div>

    </div>
  )
}

export default SongCard