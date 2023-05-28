const about = document.querySelector('[data-about]');
let updateInfo = document.createElement('i');

about.append(updateInfo);

const getCurrentTime = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes() < 10 ? 0 + currentTime.getMinutes() : currentTime.getMinutes();

  updateInfo.textContent = 'Updated: ' + hours + ':' + minutes;
};

export const showUpdate = () => {
  getCurrentTime();
  setInterval(getCurrentTime, 60000);
};
