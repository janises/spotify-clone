import React, {useEffect, useState} from 'react'
import { Song } from '../../utils/interfaces'
import { fetchSongsWithoutBreaker } from '../../utils/fetch-songs'
import SongCard from '../SongCard'
import './index.css'

const Main = () => {
  const [isShuffled, setIsShuffled] = useState(false)
  const [originalSongs, setOriginalSongs] = useState([])
  const [songsToDisplay, setSongsToDisplay] = useState([])
  useEffect(() => {
    fetchSongsWithoutBreaker()?.then(result => {
      setOriginalSongs(result.songs)
      setSongsToDisplay(result.songs)
    })
  }, [])

  const createSongCards = (song: Song) => {
    return <SongCard songData={song}/>
  }
  // check if unshuffled
      // run function to shuffle data and save to a new shuffled playlist
      // return that shuffled playlist
  // check if shuffled 
    // return original playlist
  // toggle state of shuffled/unshuffled 
// default return original playlist 
  const handleShuffle = (isCurrentlyShuffled: boolean) => {
    if (isCurrentlyShuffled) {
    setSongsToDisplay(originalSongs)
    } else {
      const originalSongList = originalSongs.slice()
      const shuffledSongs: any = []
      while (originalSongList.length) {
        const indexToSplice = Math.floor(Math.random() * originalSongList.length)
        shuffledSongs.push(originalSongList.splice(indexToSplice, 1)[0])
      }
      setSongsToDisplay(shuffledSongs)
    }
    setIsShuffled(!isCurrentlyShuffled)
  }

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
      <button onClick={() => handleShuffle(isShuffled)}>{isShuffled ? 'Unshuffle' : 'Shuffle'}</button>
      <div className='songlist'>
      {
        songsToDisplay.map((songComponent) => createSongCards(songComponent))
      }
      </div>
    </div>
  )
}

export default Main