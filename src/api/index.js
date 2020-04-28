import axios from 'axios';

const BASE_URL =
  'http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
