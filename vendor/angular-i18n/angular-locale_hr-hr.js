"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(a(e),3));var o=Math.pow(10,r),t=(e*o|0)%o;return{v:r,f:t}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],MONTH:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenoga","prosinca"],SHORTDAY:["ned","pon","uto","sri","čet","pet","sub"],SHORTMONTH:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],fullDate:"EEEE, d. MMMM y.",longDate:"d. MMMM y.",medium:"d. MMM y. HH:mm:ss",mediumDate:"d. MMM y.",mediumTime:"HH:mm:ss","short":"dd.MM.y. HH:mm",shortDate:"dd.MM.y.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"hr-hr",pluralCat:function(e,a){var o=0|e,t=n(e,a);return 0==t.v&&o%10==1&&o%100!=11||t.f%10==1&&t.f%100!=11?r.ONE:0==t.v&&o%10>=2&&4>=o%10&&(12>o%100||o%100>14)||t.f%10>=2&&t.f%10<=4&&(t.f%100<12||t.f%100>14)?r.FEW:r.OTHER}})}]);