import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';


player.setCurrentTime(JSON.parse(localStorage.getItem(timeKey)) || 0);

function onPlay(data) {
  localStorage.setItem(timeKey, JSON.stringify(data.seconds));
};

player.on('timeupdate',throttle(onPlay, 1000));