import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const timeKey = "videoplayer-current-time";

const onPlay = function(data) {
  localStorage.setItem(timeKey, JSON.stringify(data));
};

player.on('timeupdate',throttle(onPlay, 1000));

const savedTime = localStorage.getItem(timeKey)

player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;

      default:
          break;
  }
});