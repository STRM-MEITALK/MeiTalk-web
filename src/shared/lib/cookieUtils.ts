export const getCookie = (name: string) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return '';
};

export const setCookie = (key: string, value: any, days?: number) => {
  let expires = null;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = date.toUTCString();
  }

  const DOMAIN_URL = process.env.REACT_APP_COOKIE_DOMAIN || '';

  document.cookie = `${key}=${value};domain=${DOMAIN_URL};path=/;${expires && `expires=${expires};`}`;
};

export const delCookie = (key: string) => {
  const DOMAIN_URL = process.env.REACT_APP_COOKIE_DOMAIN || '';

  document.cookie = key.concat(`=; Max-Age=0;path=/;domain=${DOMAIN_URL};`);
};
