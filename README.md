I keep semi-useful pieces of js code here, hehe

## Quick access

Paste the following lines of code to use the particular extension(same as what is given in the folder of the extension)

This is temporary and might not work ):

I will definitely find a better way... Till then, you can directly paste the code inside the function main of the js file you would like to use ;).

- [video playback(click for details)](https://jujhaar2409.github.io/extensions/videoplayback/):

  ```js
  let scr = document.createElement('script');
  scr.setAttribute('type', 'text/javascript');
  scr.setAttribute(
    'src',
    'https://jujhaar2409.github.io/extensions/videoplayback/videoplayback.js',
  );
  document.body.appendChild(scr);
  ```
