import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7acf3fd8b68f4f16956e6309340a9815'
  }
})