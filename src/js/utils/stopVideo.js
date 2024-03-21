function pauseYouTubeVideo(iframe) {
  if (iframe) {
    const iframeSrc = iframe.src;
    const newIframe = iframe.cloneNode();
    newIframe.src = '';
    setTimeout(() => {
      newIframe.src = iframeSrc;
    }, 100);
  }
}

export default pauseYouTubeVideo;
