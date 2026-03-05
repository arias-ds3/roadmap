//EJERCICIO
let cadena = 'soy una cadena'

// Constructor
// String() constructor
const construct:{} = new String()
const constructFunction:string = String()

String.fromCharCode(104, 111, 108, 97)

String.fromCodePoint(104, 111, 108, 97)

const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);

cadena.at(-1)

cadena.charAt(3)

cadena.charCodeAt(3)

cadena.codePointAt(3)

cadena.concat(' yo tambien') 

cadena.endsWith(cadena) 

cadena.includes('soy') 

cadena.indexOf('ca')

cadena.isWellFormed()
cadena.lastIndexOf('a')

cadena.localeCompare('SOY UNA CADENA')

cadena.match(/[a-z]/g)

cadena.matchAll(/[a-z]/g)

cadena.normalize()

cadena.padEnd(20,'-')

cadena.padStart(20,'+')

cadena.repeat(3)

cadena.replace('a','@')

cadena.replaceAll('a','@')

cadena.search('una')

cadena.slice(0,5)

cadena.split('')

cadena.startsWith('a')

cadena.substring(5,10)

const iterator = cadena[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "s"
  //                  "o"
  //                  "y"
}

cadena.toLocaleLowerCase()

cadena.toLocaleUpperCase()

cadena.toLowerCase()

cadena.toString()

cadena.toUpperCase()

cadena.toWellFormed()

"  SOY UNA CADENA  ".trim()

"  SOY UNA CADENA  ".trimEnd()

"  SOY UNA CADENA  ".trimStart()

cadena.valueOf()

const str = new String('soy una cadena');
console.log(str);
// Expected output: String { "soy una cadena" }
console.log(str.valueOf());
// Expected output: "soy una cadena"


//DIFICULTAD EXTRA
console.log('Hola, soy un programa para analizar tus textos!..dime:¿que quieres hacer hoy?')
console.log(`
  1.-Palindromos
  2.-Anagramas
  3.-Isogramas
  *-Salir de la aplicacion
  `)
  let option :string | null
  do{
option = prompt(`Que quieres hacer?
    1.-Palindromos
  2.-Anagramas
  3.-Isogramas
  *-Salir de la aplicacion escribe cualquier cosa diferente a los numero de las opciones...
    `);

let word;
let response;
switch (option) {
  case '1':
    do{
 word = prompt('Dime la palabra?...')
    }while(!word)
     response = palindromeChecker(word)? (`${word} es un palindromo!`) : (`Ohh...lo siento ${word} no es un palindromo`);
    alert(response)
    break;
  case '2':
    let firstWord
 let secondWord
    do{
  firstWord = prompt('Dime la primera palabra?...')
  secondWord = prompt('Dime la segunda palabra?...')
    }while(!firstWord && !secondWord)
     response = anagramChecker(firstWord!,secondWord!)? (`${firstWord} es un anagrama de ${secondWord}!`) : (`Ohh...lo siento ${firstWord} no es un anagrama de ${secondWord}`);
    alert(response)
    break;
  case '3':

    do{
        word = prompt('Dime la palabra?...')
    }while(!word)
    response = isogramChecker(word) ?  (`${word} es un isograma!`) : (`Ohh...lo siento ${word} no es un isograma`)
    alert(response)
    break;
  default:
    option ? alert('Saliendo del programa....'):'';
    break;
}
}while(['1','2','3'].some(select=> select===option) || !option)

  function palindromeChecker(word:string):boolean{
    const isPalindrome = word.split("").every((letter, position, word) => {
      return letter == word[word.length - position - 1]; //check if the character Position is the same that Inverse character Position in every letter if every letter is equal then is Palindrome
    });
    return isPalindrome
  }
  function isogramChecker(word:string):boolean{
    const letterCounts = word
    .split("")
    .reduce((letterMap: { [key: string]: number }, position) => {
      if (!letterMap[position]) {
        letterMap[position] = 1;
      } else {
        letterMap[position] += 1;
      }
      return letterMap;//this create a map that contain letter and many times appear in the word: {a:1 , b:2 ,c:3}
    }, {});

  const isIsogram = Object.values(letterCounts).every(
    (count) => count === letterCounts[word[0]] //if de first count value is the same that every count then is Isogram by definition
  );
  return isIsogram;
  }
  function anagramChecker(wordOne: string, wordTwo: string): boolean {
    return (
      wordOne.split("").toSorted().join("") == wordTwo.split("").toSorted().join("") // sort alpabhetical letters in every word and compare IF the word one order is the same that the word two order then is Anagram by definition
    );
  }