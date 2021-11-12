import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const loadingPley = localStorage.getItem('videoplayer-current-time');
const parsedLoadingPley = JSON.parse(loadingPley);

const currentTime = function (data) {
  // data is an object containing properties specific to that event
  const savedPlay = localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};
player.setCurrentTime(parsedLoadingPley);
player.on('timeupdate', throttle(currentTime, 1000));