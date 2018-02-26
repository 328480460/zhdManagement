export const deepCopy = function(source) {
  var result = Array.isArray(source) ? [] : {};

  for (var key in source) {
    result[key] =  source[key] === null ? '' : typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
  }
  return result;
}

export const setCookie = function(c_name, value, expiredays) {　　　　
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());　　
}

export const getCookie = function(cName) {
  var cookieString = decodeURI(document.cookie);
  var cookieArray = cookieString.split("; ");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookieNum = cookieArray[i].split("=");
    var cookieName = cookieNum[0];
    var cookieValue = cookieNum[1];

    if (cookieName == cName) {
      return cookieValue;
    }
  }
  return false;
}

export const removeCookie = function(key) {
  setCookie(key, '', -1); //这里只需要把Cookie保质期退回一天便可以删除
}

