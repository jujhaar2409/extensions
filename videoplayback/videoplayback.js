function showInfo() {
  let info = document.createElement('div');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  info.id = 'infobox';
  p1.textContent = 'j: +10s, k: ⏯︎, l: +10s';
  p2.textContent = '←: -5s, →: +5s';
  p3.textContent = '<: ⏪︎, >: ⏩, f: fullscreen';
  p4.textContent = 'i: show info';
  info.appendChild(p4);
  info.appendChild(p1);
  info.appendChild(p2);
  info.appendChild(p3);
  info.style = `
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    border: none;
    transition: 1s ease-in-out all;
    position: absolute;
    right: 15px;
    top: 50px;
    opacity: 1;
    font-family: Verdana, sans-serif;
    padding: 5px 10px;
    border-radius: 10px;
  `;
  document.body.appendChild(info);
  setTimeout(() => {
    infobox.style.opacity = 0.0;
  }, 4000);
}

function main() {
  let videos = document.querySelectorAll('video');
  let playbackSpeedField = document.createElement('input');

  playbackSpeedField.type = 'number';
  playbackSpeedField.style.width = '45px';
  playbackSpeedField.style.height = '20px';
  playbackSpeedField.style.position = 'absolute';
  playbackSpeedField.style.top = '15px';
  playbackSpeedField.style.right = '15px';
  playbackSpeedField.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  playbackSpeedField.style.color = 'white';
  playbackSpeedField.style.border = 'none';
  playbackSpeedField.style.borderRadius = '5px';
  playbackSpeedField.step = 0.25;
  playbackSpeedField.value = 1;

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
    let newelem;
    count = 0;
    active = document.activeElement;
    for (vid of videos) {
      if (isChild(active.childNodes, vid) || active === vid) {
        count += 1;
        newelem = vid;
      }
    }
    return count == 1 ? newelem : videlem;
  }

  let defaultvidelem = document.querySelector('video');
  let videlem = defaultvidelem;

  document.addEventListener('click', (ev) => {
    videlem = getUniqueVidElem(videos);
  });

  let tdelta = 5;
  showInfo();
  document.onkeydown = (e) => {
    if (videlem == null) videlem = defaultvidelem;
    if (e.key === 'k') {
      !videlem.paused ? videlem.pause() : videlem.play();
    } else if (e.key === 'j') {
      videlem.currentTime -= 2 * tdelta * playbackSpeedField.value;
    } else if (e.key === 'l') {
      videlem.currentTime += 2 * tdelta * playbackSpeedField.value;
    } else if (e.key === 'f') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    } else if (e.key === 'i') {
      let infobox = document.getElementById('infobox');
      infobox.style.opacity = 1.0;
      setTimeout(() => {
        infobox.style.opacity = 0.0;
      }, 4000);
    } else if (e.key === '>') {
      playbackSpeedField.stepUp();
      if (videlem == null) videlem = defaultvidelem;
      videlem.playbackRate = playbackSpeedField.value;
    } else if (e.key === '<') {
      playbackSpeedField.stepDown();
      if (videlem == null) videlem = defaultvidelem;
      videlem.playbackRate = playbackSpeedField.value;
    } else if (e.key === 'ArrowRight') {
      videlem.currentTime += tdelta * playbackSpeedField.value;
    } else if (e.key === 'ArrowLeft') {
      videlem.currentTime -= tdelta * playbackSpeedField.value;
    }
  };

  document.querySelector('body').appendChild(playbackSpeedField);
}

main();
