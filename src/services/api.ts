import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasksFromApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
