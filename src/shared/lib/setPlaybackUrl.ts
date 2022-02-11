export const setPlaybackUrl = (playbackUrl: string, playToken: string | null) => {
  if (playToken) {
    return `${playbackUrl}?token=${playToken}`;
  } else {
    return playbackUrl;
  }
};
