const getImageByTheme = (darkImage: string, lightImage: string): string => {
  const theme = localStorage.getItem('theme');

  if (theme === 'light') {
    return lightImage;
  } else {
    return darkImage;
  }
};

export default getImageByTheme;
