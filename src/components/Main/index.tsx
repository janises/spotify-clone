import React, {useEffect, useState} from 'react'
import { Song } from '../../utils/interfaces'
import { fetchSongsWithoutBreaker } from '../../utils/fetch-songs'
import SongCard from '../SongCard'
import './index.css'

const Main = () => {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetchSongsWithoutBreaker()?.then(result => {
      console.log('songs result: ', result.songs)
      
      setSongs(result?.songs.map((song: Song) => <SongCard songData={song}/>))
    })
  }, [])
  return (
    <div className='mainContainer'>
      <div className='mainHead'>
        <div className='playlistInfo'>
          <img className='playlistImg' src="https://placehold.co/200x200"alt='album art'/>
          <div className='playlistDetails'>
            <div className='playlistTitle'>
              Playlist Title
            </div>
          </div>

        </div>
      </div>
      <div className='songlist'>
      {
        songs.map((songComponent) => songComponent)
      }
      </div>
    </div>
  )
}

export default Main