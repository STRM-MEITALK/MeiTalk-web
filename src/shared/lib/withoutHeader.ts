const withoutHeader = (pathname: string) => {
  return !['studio'].includes(pathname.split('/')[1]);
};

export default withoutHeader;
