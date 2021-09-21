// MOVE ALL FUNCTIONS and array into separate files in folders `utils` and `data`
// You should have only one implementation of every function.
// Line 66+ should work same after your work 


const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidHttpUrl = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};

const isVaderInShip = (passengers) => {
  if (passengers.some((e) => e.name === "Vader")) {
    return true;
  }
  return false;
};

const hasCorrectSeatColor = (passengers, name, color) => {
  return passengers.some(
    (passenger) => passenger.name === name && passenger.colorOfSeat === color
  );
};

const addImperialSign = (message) => {
  return `[MESSAGE]⚠️ ⚠️ ⚠️  ==== To: All imperial soldiers! | Message:🚀 🔥 ${message} 🔥 🚀 ====  ⚠️ ⚠️ ⚠️`;
};

const passengersOnShip = [
    {
      name: "Vader",
      id: 1,
      seat: "3E",
      colorOfSeat: rgbToHex(0, 0, 0),
    },
    {
      name: "TK-202",
      id: 2,
      seat: "17C",
      colorOfSeat: rgbToHex(255, 255, 0),
    },
  ];

// ======================
// THIS SHOULD WORK AFTER YOU MOVE FUNCTIONS INTO SEPARATE FILES

console.log(hexToRgb("#CECE20"));
console.log(rgbToHex(0, 51, 255));

console.log("[INVALID EMAIL]", validateEmail("vader.skywalker"));
console.log("[VALID EMAIL]", validateEmail("vader@imperium.com"));

console.log("[VALID URL]", isValidHttpUrl("https://imperium.com"));
console.log("[VALID URL]", isValidHttpUrl("imperiumIsAwesome.com"));
console.log("[INVALID URL]", isValidHttpUrl("rebelsAreNotCoolAtAll"));

console.log("[VADER ON THE BOARD]", isVaderInShip(passengersOnShip));
console.log(
  "[VADER IS ON CORRECT SEAT]",
  hasCorrectSeatColor(passengersOnShip, "Vader", "#000000")
);
console.log(addImperialSign("IMPERIUM IS THE BEST"));
