# Notes
- Spent way too long on creating the circuit breaker and error handling but I like to make sure the api isn't overloaded with bad requests
- Set up linter. Drives me crazy when code looks all over the place and inconsistent
- Also took a while to decide the layout and design of the page
- Didn't get to much of the actual MVP, as you can tell. The set up took a bit longer than I was hoping. It was my first time using Typescript extensively. I work on it only a little at my current job so I had to debug quite a bit.
- In retrospect, I probably should have forgone the circuit breaker and error handling in order to get more functionality done. But I think security is important so idk. 



# Given more time, beside the MVP, I would have liked to
- write tests for the api calls
- create the playlist table header so that clicking on each property would sort (i think i would have used react-table)
- set up separate pages with a router for the home page, search page, album view, artist view, and playlist view
- home page would be where the album artwork and details would display in a grid
   - users would be able to click on the album to see all of the songs in that album
- search page would display search results and previous search history
- set up redux to manage state
- possibly cache playlist data in redis in case user has a lot of songs in their playlist
- set up db with postgres so users can access, edit, and delete their playlists 
- the SongCard view would have an option to add the song to a playlist or to create a new playlist (in addition to creating a playlist in the aside section)
- the SongCard would also be draggable so users can rearrange their playlist
- regarding the shuffle, i would not change the order of the songs on the display since sometimes users like to reorder their songs in a particular way, but have a temporary queue that saves the shuffled songs. I would place a link to the current queue on the playlist page. 
- work on a11y on the ui
