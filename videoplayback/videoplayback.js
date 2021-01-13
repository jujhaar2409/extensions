function main() {
  let videos = document.querySelectorAll('video');
  let tdelta = 5;

  function isChild(parentNodes, element) {
    for (el of parentNodes) {
      if (el.contains(element)) {
        return true;
      }
    }
    return false;
  }

  function getUniqueVidElem(videos) {
    let active;
    let count = 0;
    videlem = null;
    count = 0;
    active = document.activeElement;
    for (vid of videos) {
      if (isChild(active.childNodes, vid) || active === vid) {
        count += 1;
        videlem = vid;
      }
    }
    return count == 1 ? videlem : null;
  }

  let videlem = null;
  let newvidelem = null;
  document.onkeypress = (e) => {
    newvidelem = getUniqueVidElem(videos);
    if (newvidelem !== null) {
      videlem = newvidelem;
    }
    if (newvidelem !== null) {
      if (e.key === ' ' || e.key === 'k') {
        !videlem.paused ? videlem.pause() : videlem.play();
      } else if (e.key === 'j') {
        videlem.currentTime -= tdelta;
      } else if (e.key === 'l') {
        videlem.currentTime += tdelta;
      }
    }
  };

  let outerDiv = document.createElement('div', { id: 'playback-speed' });
  let viewButton = document.createElement('input');
  viewButton.type = 'button';
  viewButton.value = 'toggle';
  viewButton.style.display = 'inline-block';
  viewButton.style.zIndex = '10000002';
  outerDiv.style.position = 'fixed';
  outerDiv.style.top = '10px';
  outerDiv.style.right = '10px';
  outerDiv.style.width = '200px';
  outerDiv.style.height = '200px';
  outerDiv.style.zIndex = '10000001';

  let playbackSpeedDiv = document.createElement('div', {
    id: 'playback-speed',
  });
  playbackSpeedDiv = document.createElement('div', { id: 'playback-speed' });
  playbackSpeedDiv.style.width = '100px';
  playbackSpeedDiv.style.height = '50px';
  playbackSpeedDiv.style.display = 'flex';
  playbackSpeedDiv.style.justifyContent = 'space-between';
  playbackSpeedDiv.style.flexDirection = 'horizontal';
  playbackSpeedDiv.style.zIndex = '10000001';
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
  let playbackSpeedButton = document.createElement('input');

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
    if (videlem == null) videlem = getUniqueVidElem(videos);
    videlem.playbackRate = playbackSpeedField.value;
  });

  document.querySelector('body').appendChild(outerDiv);
}

main();
