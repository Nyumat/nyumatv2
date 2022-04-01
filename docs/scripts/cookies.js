
class randomCookieGenerator {
      constructor(name, value, days) {
            this.name = name;
            this.value = value;
            this.days = days;
      }
      generateRandomName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 5; i++) {
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
      }
      generateRandomNumber() {
            var text = "";
            var possible_nums = "0123456789";
            var possible_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++) {
                  if (i % 2 == 0) {
                        text += possible_nums.charAt(Math.floor(Math.random() * possible_nums.length));
                  } else {
                        text += possible_chars.charAt(Math.floor(Math.random() * possible_chars.length));
                  }
            }
            return text;
      }
      generateExpirationDate(length_days) {
            let d = new Date();
            d.setTime(d.getTime() + (length_days * 24 * 60 * 60 * 1000));
            return d.toUTCString();
      }

}

class Cookie {
      constructor(name, value, days) {
            this.name = name;
            this.value = value;
            this.days = days;
      }
      set() {
            let d = new Date();
            d.setTime(d.getTime() + (this.days * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = this.name + "=" + this.value + ";" + expires + ";path=/";
      }
      get() {
            let name = this.name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                  let c = ca[i];
                  while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                  }
            }
            return "";
      }
      delete() {
            this.set();
      }

}

var cookie = new Cookie("test", "test", 1);
cookie.set();
alert(cookie.get());
cookie.delete();
alert(cookie.get());
