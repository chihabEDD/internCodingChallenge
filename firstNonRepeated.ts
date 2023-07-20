/*
   Condidate : Chihab Rouibi
   Date      : July 20, 2023
   Goal      : Find the first non-repeated character in the given string using Typescript.
*/

function firstNonRepeated(s: string): string {

    const frequencyCount : { [key: string]: number } = {};
    // Count the frequency of each character in the string.
    for (const char of s) {
      // Increment the frequency count of the current character.
      frequencyCount [char] = (frequencyCount [char] || 0) + 1;
    }
    // Find the first character non-repeated 
    for (const char of s) {
      if (frequencyCount [char] === 1) {
        return char;
      }
    }
    // return an empty string if no non-repeated char found.
    return '';
  }

  