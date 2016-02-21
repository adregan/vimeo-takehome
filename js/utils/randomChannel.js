import { channels } from '../config';

const randomChannel = () => {
  return channels[Math.floor(Math.random() * channels.length)];
};

export default randomChannel;