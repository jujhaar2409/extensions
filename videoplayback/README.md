# Video Playback enhancing extension

## Usage

Paste the following in the console(open using ctrl+shift+I on windows and cmd+opt+I on mac) of you browser to use the extension

```js
  let scr = document.createElement('script');
  scr.setAttribute('type', 'text/javascript');
  scr.setAttribute(
    'src',
    'https://jujhaar2409.github.io/extensions/videoplayback/videoplayback.js',
  );
  document.body.appendChild(scr);
```

## Functionality

- Press `i` to see info

- Decrease or increase the speed by 0.25 using `<` or `>` respectively

- Press `f` for full screen

- Forward or rewind by `5s * (speed of video)` using `l` or `j` respectively

- Forward or rewind by `10s * (speed of video)` using `←` or `→` respectively

- Pause using `k`
