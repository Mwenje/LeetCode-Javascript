function vigenere(message, key, direction = 1) {
  let keyIndex = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let finalMessage = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();

    // Append any non-letter character to the message
    if (!char.match(/[a-z]/i)) {
      finalMessage += message[i]; // preserve original case and non-alphabetic characters
    } else {
      // Find the right key character to encode/decode
      let keyChar = key[keyIndex % key.length];
      keyIndex++;

      // Define the offset and the encrypted/decrypted letter
      let offset = alphabet.indexOf(keyChar);
      let index = alphabet.indexOf(char);
      let newIndex = (index + offset * direction) % alphabet.length;
      if (newIndex < 0) newIndex += alphabet.length; // Ensure positive index for decryption
      finalMessage += alphabet[newIndex];
    }
  }

  return finalMessage;
}

function encrypt(message, key) {
  return vigenere(message, key);
}

function decrypt(message, key) {
  return vigenere(message, key, -1);
}

// const text = "mrttaqrhknsw ih puggrur";
// const customKey = "happycoding";

// console.log(`Encrypted text: ${text}`);
// console.log(`Key: ${customKey}\n`);
// let decryptedText = decrypt(text, customKey);
// console.log(`Decrypted text: ${decryptedText}`);

// Take input from user for text and key
const text = prompt("Enter the text to encrypt or decrypt:");
const customKey = prompt("Enter the key for encryption/decryption:");
let result;

let action = prompt(
  "Do you want to Encrypt or Decrypt? (Type 'Encrypt' or 'Decrypt')"
).toLowerCase();

if (action === "encrypt") {
  result = encrypt(text, customKey);
  alert(`Encrypted text: ${result}`);
} else if (action === "decrypt") {
  result = decrypt(text, customKey);
  alert(`Decrypted text: ${result}`);
} else {
  alert("Invalid action. Please enter either 'Encrypt' or 'Decrypt'.");
}
