# Video Playback enhancing extension

## Usage

Paste the following in the console(open using ctrl+shift+I on windows and cmd+opt+I on mac) of you browser to use the extension

```js
let scr = document.createElement('script');
scr.setAttribute('type', 'text/javascript');
scr.setAttribute(
  'href',
  'https://cdn.statically.io/gh/jujhaar2409/extensions/master/videoplayback/videoplayback.js',
);
document.head.appendChild(scr);
main();
```

## Functionality

- Set speed of video: enter in the text box and click button to set(toggle
  visibility using button as well)

- Forward or rewind by 5s using `l` or `j` respectively

- Pause using the `spacebar` or `k`
