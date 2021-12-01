import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://asia-northeast3-joint-seminar15-e35f5.cloudfunctions.net/api',
});
