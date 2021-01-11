function main() {
  let video = document.querySelector('video');
  video = document.querySelector('video');
  let tdelta = 5;

  let isPlaying = false;
  isPlaying = false;
  document.onkeypress = (e) => {
    if (e.key === ' ' || e.key === 'k') {
      isPlaying ? video.pause() : video.play();
      isPlaying = !isPlaying;
    } else if (e.key === 'j') {
      video.currentTime -= tdelta;
    } else if (e.key === 'l') {
      video.currentTime += tdelta;
    }
  };

  let outerDiv = document.createElement('div', { id: 'playback-speed' });
  let viewButton = document.createElement('input');
  viewButton.type = 'button';
  viewButton.value = 'toggle';
  viewButton.style.display = 'inline-block';
  viewButton.style.zIndex = '10000002';
  outerDiv.style.position = 'absolute';
  outerDiv.style.top = '10px';
  outerDiv.style.right = '10px';
  outerDiv.style.width = '200px';
  outerDiv.style.height = '200px';

  let playbackSpeedDiv = document.createElement('div', {
    id: 'playback-speed',
  });
  playbackSpeedDiv = document.createElement('div', { id: 'playback-speed' });
  playbackSpeedDiv.style.width = '100px';
  playbackSpeedDiv.style.height = '50px';
  playbackSpeedDiv.style.display = 'flex';
  playbackSpeedDiv.style.justifyContent = 'space-between';
  playbackSpeedDiv.style.flexDirection = 'horizontal';
  playbackSpeedDiv.style.zIndex = '10000000';
  playbackSpeedDiv.style.border = 'black 2px dotted';
  playbackSpeedDiv.style.backgroundColor = 'white';

  viewButton.addEventListener('click', (e) => {
    if (playbackSpeedDiv.style.opacity == '1') {
      playbackSpeedDiv.style.opacity = '0';
    } else {
      playbackSpeedDiv.style.opacity = '1';
    }
  });

  let playbackSpeedField = document.createElement('input', { type: 'number' });
  playbackSpeedField = document.createElement('input', { type: 'number' });
  let playbackSpeedButton = document.createElement('input');
  playbackSpeedButton = document.createElement('input');

  playbackSpeedDiv.appendChild(playbackSpeedField);
  playbackSpeedDiv.appendChild(playbackSpeedButton);
  outerDiv.appendChild(viewButton);
  outerDiv.appendChild(playbackSpeedDiv);
  playbackSpeedField.type = 'number';
  playbackSpeedField.style.width = '50px';
  playbackSpeedField.style.height = '50px';
  playbackSpeedButton.type = 'button';
  playbackSpeedButton.style.width = '50px';
  playbackSpeedButton.style.height = '50px';
  playbackSpeedButton.style.zIndex = '10000001';
  playbackSpeedButton.value = 'Set';

  playbackSpeedButton.addEventListener('click', (e) => {
    e.preventDefault();
    video.playbackRate = playbackSpeedField.value;
  });

  document.querySelector('body').appendChild(outerDiv);
}

main();
