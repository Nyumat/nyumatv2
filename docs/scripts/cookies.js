
class Cookie {
      constructor(length, expiration_days) {
            this.value = length;
            this.expiration_days = expiration_days;
      }

      generateCode() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < this.value; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
      }

      generateExpirationDate(length_days) {
            let d = new Date();
            d.setTime(d.getTime() + (length_days * 24 * 60 * 60 * 1000));
            return d.toUTCString();
      }

      setCookie(name, value, length_days) {
            document.cookie = name + "=" + value + "; expires=" + this.generateExpirationDate(length_days) + "; path=/";
      }

      getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
      }

      deleteCookie(name) {
            this.setCookie(name, "", -1);
      }
}



