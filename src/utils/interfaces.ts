export interface Song {
  title: string
  album: string
  artist: string
  song_length: string
}

export interface Config {
  failureThreshold: number
  logContext: { requestUrl: string }
  name: string
  randomThreshold: number
  fallback: object
  action: () => Array<object>
}
