"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var a=Math.pow(10,r),m=(e*a|0)%a;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["дп","пп"],DAY:["неділя","понеділок","вівторок","середа","четвер","пʼятниця","субота"],MONTH:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],SHORTDAY:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],SHORTMONTH:["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."],fullDate:"EEEE, d MMMM y 'р'.",longDate:"d MMMM y 'р'.",medium:"d MMM y 'р'. HH:mm:ss",mediumDate:"d MMM y 'р'.",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₴",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"uk-ua",pluralCat:function(e,M){var a=0|e,m=n(e,M);return 0==m.v&&a%10==1&&a%100!=11?r.ONE:0==m.v&&a%10>=2&&4>=a%10&&(12>a%100||a%100>14)?r.FEW:0==m.v&&a%10==0||0==m.v&&a%10>=5&&9>=a%10||0==m.v&&a%100>=11&&14>=a%100?r.MANY:r.OTHER}})}]);