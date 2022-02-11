export const excludeFooter = (pathname: string) => {
  const exclude = ['/stream/onboarding'];
  for (let i = 0; i < exclude.length; i += 1) {
    if (pathname.includes(exclude[i])) {
      return false;
    }
  }
  return true;
};
