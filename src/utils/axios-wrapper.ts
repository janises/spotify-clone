import axios from 'axios'

export const get = async (url: string, config: { timeout: number}) => {
  const response = await axios.get(url, config)

  return response.data
}

