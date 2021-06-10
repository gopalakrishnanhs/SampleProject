export class Util {
  static isEmailValid(text) {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const pattern = new RegExp(re);
    return pattern.test(text);
  }

  static isPasswordValid(text) {
    const re =/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,18}$/;
    const pattern = new RegExp(re);
    return pattern.test(text);
  }
}