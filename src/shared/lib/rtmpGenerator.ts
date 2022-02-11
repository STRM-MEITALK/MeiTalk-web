const rtmpGenerator = (mediaServer: string, streamKey: string) => {
  let genMediaServer = mediaServer;
  let genStreamKey = streamKey;
  if (genMediaServer.slice(-1) !== '/') {
    genMediaServer = `${genMediaServer}/`;
  }
  if (genStreamKey.slice(0, 1) === '/') {
    genStreamKey = genStreamKey.slice(1);
  }
  return `${genMediaServer}${genStreamKey}`;
};

export default rtmpGenerator;
