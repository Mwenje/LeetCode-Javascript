const TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const now = Date.now();
  const existedAndValid =
    this.cache.has(key) && this.cache.get(key).expiresAt > now;

  if (this.cache.has(key)) {
    clearTimeout(this.cache.get(key).timeout);
  }

  const expiresAt = now + duration;

  const timeout = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, expiresAt, timeout });

  return existedAndValid;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */

TimeLimitedCache.prototype.get = function (key) {
  const now = Date.now();
  const isPresent = this.cache.get(key);

  if (!isPresent || now >= isPresent?.duration) return -1;
  return isPresent?.value;

  // if (this.cache.has(key)) {
  //   const item = this.cache.get(key);

  //   if (item.expiresAt > now) {
  //     return item.value;
  //   } else {
  //     this.cache.delete(key);
  //   }
  // }

  // return -1;
};

TimeLimitedCache.prototype.count = function () {
  const now = Date.now();

  let count = 0;

  for (const [key, item] of this.cache.entries()) {
    if (item.expiresAt > now) {
      count++;
    } else {
      this.cache.delete(key);
    }
  }

  return count;
};

function generateOTP(length = 6) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}

const otpCache = new TimeLimitedCache();
const userId = "user123";

const otpCode = generateOTP(4);
otpCache.set(userId, otpCode, 5000);
console.log("OTP sent to user:", otpCode);

function verifyOtp(userId, inputOtp) {
  const storedOtp = otpCache.get(userId);

  if (storedOtp === -1) {
    console.log("OTP expired or not found.");
  } else if (storedOtp === inputOtp) {
    console.log("OTP verified successfully.");

    otpCache.set(userId, null, 0);
  } else {
    console.log("Invalid OTP.");
  }
}

setTimeout(() => {
  verifyOtp(userId, otpCode);
}, 2000);

setTimeout(() => {
  verifyOtp(userId, otpCode);
}, 4000);
