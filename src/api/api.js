import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  }
})

export const cardsApi = {
  getCards() {
    return instance.get('/api/');
  }
}