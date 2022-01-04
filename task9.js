const lessons = [
    {
      id: 1,
      name: 'Dziękujemy za zakup kursu',
      length1: '0:54'
    },
    {
      id: 2,
      name: '[1x1] Wprowadzenie',
      length1: '03:39'
    },
    {
      id: 3,
      name: '[1x2] Podstawy pisania skryptów',
      length1: '03:49'
    },
    {
      id: 4,
      name: '[1x3] Zmienne',
      length1: '09:01'
    },
    {
        id: 5,
        name: '[1x4] Typy danych',
        length1: '06:34'
      },
      {
        id: 6,
        name: '[1x5] Instrukcje warunkowe',
        length1: '06:39'
      },
      {
        id: 7,
        name: '[1x6] Operatory',
        length1: '11:49'
      },
      {
        id: 8,
        name: '[1x7] Pętle',
        length1: '07:24'
      },
      {
        id: 9,
        name: '[1x8] Funkcje',
        length1: '06:19'
      },
      {
        id: 10,
        name: '[1x9] Tablice',
        length1: '11:41'
      },
      {
        id: 11,
        name: '[1x10] Metody tablic',
        length1: '12:55'
      },
      {
        id: 12,
        name: '[1x11] Obiekty',
        length1: '11:24'
      },
      {
        id: 13,
        name: '[1x12] Prototypy',
        length1: '09:16'
      },
      {
        id: 14,
        name: '[1x13] Klasy',
        length1: '03:38'
      },
      {
        id: 15,
        name: '[1x14] Zakres',
        length1: '10:05'
      },
      {
        id: 16,
        name: '[1x15] Hoisting',
        length1: '08:50'
      },
      {
        id: 17,
        name: '[1x16] Closures',
        length1: '06:46'
      },
      {
        id: 18,
        name: '[1x17] Obsługa błędów',
        length1: '08:47'
      },
      {
        id: 19,
        name: '[1x18] Nowe metody stringów',
        length1: '05:28'
      },
      {
        id: 20,
        name: '[1x19] Destrukturyzacja',
        length1: '06:25'
      },
      {
        id: 21,
        name: '[1x20] Rest i Spread',
        length1: '06:34'
      },
      {
        id: 22,
        name: '[1x21] Object literals',
        length1: '02:23'
      },
      {
        id: 23,
        name: '[1x22] ES6 Modules',
        length1: '09:23'
      },
      {
        id: 24,
        name: '[2x1] Środowiska uruchomieniowe',
        length1: '10:06'
      },
      {
        id: 25,
        name: '[2x2] Jak działa przeglądarka internetowa',
        length1: '13:51'
      },
      {
        id: 26,
        name: '[2x3] DevTools - narzędzia programistyczne',
        length1: '16:17'
      },
      {
        id: 27,
        name: '[2x4] Dołączanie kodu JavaScript',
        length1: '16:08'
      },
      {
        id: 28,
        name: '[2x5] Document, Window, Navigator',
        length1: '12:27'
      },
      {
        id: 29,
        name: '[2x6] Poznaj DOM',
        length1: '9:03'
      },
      {
        id: 30,
        name: '[2x7] QuerySelector i nawigacja w DOM',
        length1: '15:05'
      },
      {
        id: 31,
        name: '[2x8] Praca z elementami DOM',
        length1: '13:49'
      },
      {
        id: 32,
        name: '[2x9] Zdarzenia',
        length1: '19:37'
      },
      {
        id: 33,
        name: '[2x10] Formularze',
        length1: '12:27'
      },
      {
        id: 34,
        name: '[2x11] Ajax i Fetch API',
        length1: '15:02'
      },
      {
        id: 35,
        name: '[2x12] Ciasteczka',
        length1: '08:37'
      },
      {
        id: 36,
        name: '[2x13] Przechowywanie stanu z Web Storage API',
        length1: '16:11'
      },
      {
        id: 37,
        name: '[2x14] Custom Elements',
        length1: '15:41'
      },
      {
        id: 38,
        name: '[2x15] Shadow DOM',
        length1: '08:38'
      },
      {
        id: 39,
        name: '[2x16] Template i Slot',
        length1: '08:39'
      },
      {
        id: 40,
        name: '[2x17] Polyfills - wsparcie dla brakujących funkcji',
        length1: '10:36'
      },
      {
        id: 41,
        name: '[2x18] Canvas - grafika po stronie klienta',
        length1: '21:49'
      },
      {
        id: 42,
        name: '[2x19] Niestandardowe API przeglądarek',
        length1: '16:17'
      },
      {
        id: 43,
        name: '[2x20] Web Workers',
        length1: '09:56'
      },
      {
        id: 44,
        name: '[2x21] Service Worker i tryb offline',
        length1: '17:43'
      },
      {
        id: 45,
        name: '[2x22] WebAssembly',
        length1: '17:37'
      },
      {
        id: 46,
        name: '[2x22] WebAssembly',
        length1: '17:37'
      },
      {
        id: 47,
        name: '[3x1] Czym są SPA?',
        length1: '07:36'
      },
      {
        id: 48,
        name: '[3x2] Problem przy budowaniu SPA',
        length1: '06:23'
      },
      {
        id: 49,
        name: '[3x3] Architektura oparta o komponenty',
        length1: '06:59'
      },
      {
        id: 50,
        name: '[3x4] Czym są frameworki?',
        length1: '05:57'
      },
      {
        id: 51,
        name: '[3x5] Zalety i wady frameworków',
        length1: '06:58'
      },
      {
        id: 52,
        name: '[3x6] Kiedy framework, kiedy vanilla?',
        length1: '03:18'
      },
      {
        id: 53,
        name: '[3x7] Czym jest Angular?',
        length1: '19:46'
      },
      {
        id: 54,
        name: '[3x8] Czym jest Vue?',
        length1: '17:36'
      },
      {
        id: 55,
        name: '[3x9] Czym jest React? - cz. 1',
        length1: '07:24'
      },
      {
        id: 56,
        name: '[3x9] Czym jest React? - cz. 2',
        length1: '12:54'
      },
      {
        id: 57,
        name: '[3x9] Czym jest React? - cz. 3',
        length1: '10:54'
      },
      {
        id: 58,
        name: '[3x10] Jaki framework wybrać?',
        length1: '05:34'
      },
      {
        id: 59,
        name: '[3x11] Template Syntax i JSX',
        length1: '06:28'
      },
      {
        id: 60,
        name: '[3x12] JSX w praktyce',
        length1: '05:47'
      },
      {
        id: 61,
        name: '[3x13] Komponenty, props i state',
        length1: '11:47'
      },
      {
        id: 62,
        name: '[3x14] Komponenty kontenerowe i prezentacyjne',
        length1: '08:41'
      },
      {
        id: 63,
        name: '[3x15] Przepływ danych',
        length1: '10:56'
      },
      {
        id: 64,
        name: '[3x16] Cykl życia komponentu - cz. 1',
        length1: '05:35'
      },
      {
        id: 65,
        name: '[3x16] Cykl życia komponentu - cz. 2',
        length1: '14:20'
      },
      {
        id: 66,
        name: '[3x17] Routing',
        length1: '07:36'
      },
      {
        id: 67,
        name: '[3x18] Linia komend',
        length1: '10:56'
      },
      {
        id: 68,
        name: '[3x19] Menadżer pakietów - npm',
        length1: '11:22'
      },
      {
        id: 69,
        name: '[3x20] npm scripts',
        length1: '10:43'
      },
      {
        id: 70,
        name: '[3x21] CLI - Create React App',
        length1: '11:51'
      },
      {
        id: 71,
        name: '[3x22] Deployment aplikacji',
        length1: '6:01'
      }
  ];

  function totalDuration() {
var arr = [];
var arr1 = [];
var arr2 = [];
var ss;
var str;
var final = [];
for( i = 1; i < 72; i++){
ss = lessons.find(x => x.id === i).length1;
str = lessons.find(x => x.id === i).name;
final[i-1] = ss;
if (str.includes('1x')) {
    arr[i-1] = ss;
}  else if (str.includes('2x')) {
    arr1[i-1] = ss;
} else if (str.includes('3x')) {
    arr2[i-1] = ss;
}
}
//console.log(arr);
//console.log(arr1);
//console.log(arr2);
toSeconds = (str) => {
   str = str.split(':');
   return (+str[0]) * 60 + (+str[1]);  
}

toHHss = (seconds) => {
   let minutes = parseInt(seconds/60);
   let hours = parseInt(minutes/60);
   seconds = seconds - minutes*60;
   minutes = minutes - hours*60;
   var timeArr = [hours, minutes, seconds];
   //return hours + ':' + minutes + ':' + seconds;
   return timeArr;
}
let result = arr.reduce((r,elem) => r + toSeconds(elem), 0);
//console.log(toHHss(result));

let result1 = arr1.reduce((r,elem) => r + toSeconds(elem), 0);
//console.log(toHHss(result1));

let result2 = arr2.reduce((r,elem) => r + toSeconds(elem), 0);
//console.log(toHHss(result2));

let result3 = final.reduce((r,elem) => r + toSeconds(elem), 0);
//console.log(toHHss(result3));
var timeF = toHHss(result3);
var timeA = toHHss(result);
var timeP = toHHss(result1);
var timeM = toHHss(result2);

var intF = timeF[2] + timeF[1] * 60 + timeF[0] * 3600;
var intA = timeA[2] + timeA[1] * 60 + timeA[0] * 3600;
var intP = timeP[2] + timeP[1] * 60 + timeP[0] * 3600;
var intM = timeM[2] + timeM[1] * 60 + timeM[0] * 3600;

var finA = parseInt(intA/intF * 100);
var finP = parseInt(intP/intF * 100);
var finM = parseInt(intM/intF * 100);

console.log('Kurs Opanuj JavaScript trwa: ' + timeF[0] + ' godzin ' + timeF[1] + ' minut i ' + timeF[2] + ' sekund');
console.log('Moduł Adama: ' + timeA[0] + ' godzin ' + timeA[1] + ' minut i ' + timeA[2] + ' sekund');
console.log('Moduł Przemka: ' + timeP[0] + ' godzin ' + timeP[1] + ' minut i ' + timeP[2] + ' sekund');
console.log('Moduł Marcina: ' + timeM[0] + ' godzin ' + timeM[1] + ' minut i ' + timeM[2] + ' sekund');
console.log('Moduł Adama: ' + finA + '%');
console.log('Moduł Przemka: ' + finP + '%');
console.log('Moduł Marcina: ' + finM + '%');
  }

  totalDuration();