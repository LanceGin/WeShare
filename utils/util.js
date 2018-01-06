// 获取当前时间秒
function getSeconds() {
  let now = new Date()
  return now.getSeconds()
}

// 解析url
function parseURL(url) {
  let url_a = url.split("?")
  if (1 == url_a.length) {
    return {
      params: null
    }
  } else {
    let search = url_a[1]
    return {
      params: (function () {
        var ret = {},
          seg = search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
        for (; i < len; i++) {
          if (!seg[i]) { continue; }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      })()
    }
  }
}   

module.exports = {
  getSeconds: getSeconds,
  parseURL: parseURL
}
