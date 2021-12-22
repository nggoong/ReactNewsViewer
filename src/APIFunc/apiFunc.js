import key from '../newsapi';
import axios from 'axios';


const getAllNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${key}`;

    return axios.get(url);
}


const getChosedNews = (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${key}`;

}


export { getAllNews, getChosedNews };