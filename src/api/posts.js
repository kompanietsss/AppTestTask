import api from './index';
import unify from './unify';
import axios from 'axios';

export const getLinks = () => api.get('/link_json.json');
export const getVideos = () => api.get('/video_json.json');

export const getData = () => unify(axios.all([getLinks(), getVideos()]));
