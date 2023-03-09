import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const timeKey = "videoplayer-current-time";



const onPlay = function(data) {
  //TODO data is an object containing properties specific to that event
};

player.on('play', onPlay);





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