export function setCookie(name, value, expires, domain, path, secure) {
  let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (expires) {
    switch (expires.constructor) {
      case Number:
        var date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); //expires h后过期
        cookieText += "; expires=" + date.toGMTString();
        break;
      case Date:
        cookieText += "; expires=" + expires.toGMTString();
        break;
    }
  }
  if (path) {
    cookieText += "; path=" + path;
  }
  if (domain) {
    cookieText += "; domain=" + domain;
  }
  if (secure) {
    cookieText += "; secure=" + secure;
  }
  document.cookie = cookieText;
}

export function getCookie(name) {
  let cookieName = encodeURIComponent(name) + "=",
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(";", cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
  }
  return cookieValue;
}

export function clearCookie(name) {
    setCookie(name, "", 0);
}
