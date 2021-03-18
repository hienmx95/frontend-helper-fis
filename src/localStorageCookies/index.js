import Cookies from 'js-cookie';
const JWT_TOKEN = process.env.JWT_TOKEN || 'fwork-token';

export function setToken(token) {
  Cookies.set(JWT_TOKEN, token);
}

export function setTokenExpire(token, day) {
  Cookies.set(JWT_TOKEN, token, { expires: day });
}

export function getToken() {
  return Cookies.get(JWT_TOKEN);
}

export function removeToken() {
  Cookies.remove(JWT_TOKEN);
}
