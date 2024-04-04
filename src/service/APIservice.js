import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://zenbitcomentsapi.onrender.com/api/',
});

export const reqestSendMessage = async message => {
  const { data } = await contactsInstance.post('messages', message);
  return data;
};
