const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
  };


function useEmoji(text) {
var stopE;
var gwiazdaE;
var samochódE;
var budujęE;
var budzikE;

stopE = text.split(/stop/gi).join(emojiMappings.stop);
gwiazdaE = stopE.split(/gwiazda/gi).join(emojiMappings.gwiazda);
samochódE = gwiazdaE.split(/samochód/gi).join(emojiMappings.samochód);
budujęE = samochódE.split(/buduję/gi).join(emojiMappings.buduję);
budzikE = budujęE.split(/budzik/gi).join(emojiMappings.budzik);

return budzikE;
}

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

  verify(useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"), "Takiemu zachowaniu mówię 🚫 i to mocny estop!");
  verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D");
  verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D");
  verify(useEmoji("Właśnie buduję swoje skille w JS"), "Właśnie 🧱 swoje skille w JS");
  verify(useEmoji("Właśnie nadbuduję swoje skille w JS"), "Właśnie nadbuduję swoje skille w JS");
  verify(useEmoji("Buduję samochód"), "🧱 🏎");
  verify(useEmoji("BuDuję SaMocHód ."), "🧱 🏎 .");