"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function i(a,i){var n=i;void 0===n&&(n=Math.min(e(a),3));var u=Math.pow(10,n),m=(a*u|0)%u;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["utuko","kyiukonyi"],DAY:["Jumapilyi","Jumatatuu","Jumanne","Jumatanu","Alhamisi","Ijumaa","Jumamosi"],MONTH:["Januari","Februari","Machi","Aprilyi","Mei","Junyi","Julyai","Agusti","Septemba","Oktoba","Novemba","Desemba"],SHORTDAY:["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"rwk-tz",pluralCat:function(a,e){var u=0|a,m=i(a,e);return 1==u&&0==m.v?n.ONE:n.OTHER}})}]);