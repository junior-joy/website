export function getScreenWidth() {
  if (typeof window !== `undefined`) {
    return window.innerWidth;
  }
}

export function isWideScreen() {
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth;
    const mediaQueryL = 1024;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}

export function tryParseJSON(querystring) {
  let o;
  try {
    o = JSON.parse(decodeURIComponent(querystring.split("?data=")[1]));
    if (o && typeof o === "object" && o !== null) {
      return o;
    }
  } catch (e) {
    return false;
  }
  return false;
}
