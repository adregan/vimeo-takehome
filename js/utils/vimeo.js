import { authToken, vimeoApi } from '../config';

export const VIDEOS = 'VIDEOS';
export const CHANNEL = 'CHANNEL';

const request = (channelId, type, page = 1) => {
  let url;

  if (type === CHANNEL) {
    url = `${vimeoApi}/channels/${channelId}`;
  }
  else if (type === VIDEOS) {
    url = `${vimeoApi}/channels/${channelId}/videos?per_page=10&page=${page}`;
  }
  else {
    throw Error(`Unsupported type: ${type}`);
  }

  const init = {
    method: 'GET',
    headers: {Authorization: authToken}
  };

  return new Promise((resolve, reject) => {
    fetch(url, init).then(resp => {
      if (resp.ok) { return resp.json(); }
      reject(Error('There was an error completing this request.'));
    })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export default request;
