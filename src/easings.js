export function linear(t) {
  return t;
}
export function easeInQuad(t) {
  return t * t;
}
export function easeOutQuad(t) {
  return t * (2 - t);
}
export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
export function easeInCubic(t) {
  return t * t * t;
}
export function easeOutCubic(t) {
  return (--t) * t * t + 1;
}
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
export function easeInQuart(t) {
  return t * t * t * t;
}
export function easeOutQuart(t) {
  return 1 - (--t) * t * t * t;
}
export function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
}
export function easeInQuint(t) {
  return t * t * t * t * t;
}
export function easeOutQuint(t) {
  return 1 + (--t) * t * t * t * t;
}
export function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
}
export function easeInSine(t) {
  return -1 * Math.cos(t / 1 * (Math.PI * 0.5)) + 1;
}
export function easeOutSine(t) {
  return Math.sin(t / 1 * (Math.PI * 0.5));
}
export function easeInOutSine(t) {
  return -1 / 2 * (Math.cos(Math.PI * t) - 1);
}
export function easeInExpo(t) {
  return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
}
export function easeOutExpo(t) {
  return (t === 1) ? 1 : (-Math.pow(2, -10 * t) + 1);
}
export function easeInOutExpo(t) {
  if (t === 0) {
    return 0;
  }
  if (t === 1) {
    return 1;
  }
  if ((t /= 1 / 2) < 1) {
    return 1 / 2 * Math.pow(2, 10 * (t - 1));
  }
  return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
}
export function easeInCirc(t) {
  return -1 * (Math.sqrt(1 - t * t) - 1);
}
export function easeOutCirc(t) {
  return Math.sqrt(1 - (t = t - 1) * t);
}
export function easeInOutCirc(t) {
  if ((t /= 1 / 2) < 1) {
    return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
  }
  return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
export function easeInElastic(t) {
  let s = 1.70158;
  let p = 0;
  let a = 1;
  if (t === 0) {
    return 0;
  }
  if (t === 1) {
    return 1;
  }
  if (!p) {
    p = 0.3;
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
}
export function easeOutElastic(t) {
  let s = 1.70158;
  let p = 0;
  let a = 1;
  if (t === 0) {
    return 0;
  }
  if (t === 1) {
    return 1;
  }
  if (!p) {
    p = 0.3;
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
}
export function easeInOutElastic(t) {
  let s = 1.70158;
  let p = 0;
  let a = 1;
  if (t === 0) {
    return 0;
  }
  if ((t /= 1 / 2) === 2) {
    return 1;
  }
  if (!p) {
    p = (0.3 * 1.5);
  }
  if (a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }
  if (t < 1) {
    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
  }
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
}
export function easeInBack(t, s) {
  if (s === undefined) {
    s = 1.70158;
  }
  return 1 * t * t * ((s + 1) * t - s);
}
export function easeOutBack(t, s) {
  if (s === undefined) {
    s = 1.70158;
  }
  return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
}
export function easeInOutBack(t, s) {
  if (s === undefined) {
    s = 1.70158;
  }
  if ((t /= 1 / 2) < 1) {
    return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
  }
  return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
}
export function easeInBounce(t) {
  return 1 - this.outBounce(1 - t);
}
export function easeOutBounce(t) {
  if ((t /= 1) < (1 / 2.75)) {
    return (7.5625 * t * t);
  }
  else if (t < (2 / 2.75)) {
    return (7.5625 * (t -= (1.5 / 2.75)) * t + .75);
  }
  else if (t < (2.5 / 2.75)) {
    return (7.5625 * (t -= (2.25 / 2.75)) * t + .9375);
  }
  else {
    return (7.5625 * (t -= (2.625 / 2.75)) * t + .984375);
  }
}
export function easeInOutBounce(t) {
  if (t < 1 / 2) {
    return this.inBounce(t * 2) * 0.5;
  }
  return this.outBounce(t * 2 - 1) * 0.5 + 0.5;
}
