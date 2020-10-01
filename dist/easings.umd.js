/*!
 * easings.js - version 0.2.0
 *
 * Made with ❤ by Steve Ottoz so@dev.so
 *
 * Copyright (c) 2020 Steve Ottoz
 */
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).easings={})}(this,(function(n){"use strict";n.easeInBack=function(n,t){return void 0===t&&(t=1.70158),1*n*n*((t+1)*n-t)},n.easeInBounce=function(n){return 1-this.outBounce(1-n)},n.easeInCirc=function(n){return-1*(Math.sqrt(1-n*n)-1)},n.easeInCubic=function(n){return n*n*n},n.easeInElastic=function(n){var t,e=0;return 0===n?0:1===n?1:(e||(e=.3),t=e/(2*Math.PI)*Math.asin(1),-1*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/e))},n.easeInExpo=function(n){return 0===n?0:Math.pow(2,10*(n-1))},n.easeInOutBack=function(n,t){return void 0===t&&(t=1.70158),(n/=.5)<1?n*n*((1+(t*=1.525))*n-t)*.5:.5*((n-=2)*n*((1+(t*=1.525))*n+t)+2)},n.easeInOutBounce=function(n){return n<.5?.5*this.inBounce(2*n):.5*this.outBounce(2*n-1)+.5},n.easeInOutCirc=function(n){return(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)},n.easeInOutCubic=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},n.easeInOutElastic=function(n){var t,e=0;return 0===n?0:2==(n/=.5)?1:(e||(e=.3*1.5),t=e/(2*Math.PI)*Math.asin(1),n<1?1*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/e)*-.5:1*Math.pow(2,-10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/e)*.5+1)},n.easeInOutExpo=function(n){return 0===n?0:1===n?1:(n/=.5)<1?.5*Math.pow(2,10*(n-1)):.5*(2-Math.pow(2,-10*--n))},n.easeInOutQuad=function(n){return n<.5?2*n*n:(4-2*n)*n-1},n.easeInOutQuart=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},n.easeInOutQuint=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n},n.easeInOutSine=function(n){return-.5*(Math.cos(Math.PI*n)-1)},n.easeInQuad=function(n){return n*n},n.easeInQuart=function(n){return n*n*n*n},n.easeInQuint=function(n){return n*n*n*n*n},n.easeInSine=function(n){return-1*Math.cos(n/1*(.5*Math.PI))+1},n.easeOutBack=function(n,t){return void 0===t&&(t=1.70158),1*((n=n/1-1)*n*((t+1)*n+t)+1)},n.easeOutBounce=function(n){return(n/=1)<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},n.easeOutCirc=function(n){return Math.sqrt(1-(n-=1)*n)},n.easeOutCubic=function(n){return--n*n*n+1},n.easeOutElastic=function(n){var t,e=0;return 0===n?0:1===n?1:(e||(e=.3),t=e/(2*Math.PI)*Math.asin(1),1*Math.pow(2,-10*n)*Math.sin((n-t)*(2*Math.PI)/e)+1)},n.easeOutExpo=function(n){return 1===n?1:1-Math.pow(2,-10*n)},n.easeOutQuad=function(n){return n*(2-n)},n.easeOutQuart=function(n){return 1- --n*n*n*n},n.easeOutQuint=function(n){return 1+--n*n*n*n*n},n.easeOutSine=function(n){return Math.sin(n/1*(.5*Math.PI))},n.linear=function(n){return n},Object.defineProperty(n,"__esModule",{value:!0})}));