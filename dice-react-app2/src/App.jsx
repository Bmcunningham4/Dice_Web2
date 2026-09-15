import { useState } from "react";
import "./App.css";
import "./phone2.css?v=2.3";
import Header from "./header.jsx";

import dice_1 from "./assets/dice_1.svg.png";
import dice_2 from "./assets/dice_2.svg.png";
import dice_3 from "./assets/dice_3.svg.png";
import dice_4 from "./assets/dice_4.svg.png";
import dice_5 from "./assets/dice_5.svg.png";
import dice_6 from "./assets/dice_6.svg.png";
import goggins1 from "./assets/goggins.webp";

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

// Create a mapping of images to numbers
const diceValues = {
  [dice_1]: 1,
  [dice_2]: 2,
  [dice_3]: 3,
  [dice_4]: 4,
  [dice_5]: 5,
  [dice_6]: 6,
};

function App() {
  const [currentDice, setCurrentDice] = useState(dice_1);
  const [rolling, setRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const newDice = diceImages[Math.floor(Math.random() * diceImages.length)];
      setCurrentDice(newDice);

      count++;
      if (count === 50) {
        clearInterval(interval);
        setRolling(false);
        setDiceValue(diceValues[newDice]);
      }
    }, 40);
  };

  return (
    <div>
      <Header />
      <div className="dice-container">
        <img
          src={currentDice}
          alt="Dice"
          className="dice-image"
          onClick={rollDice}
          style={{ cursor: rolling ? "not-allowed" : "pointer" }}
        />
      </div>

      <div className="total-container">
        {/* Roll button */}
        <button onClick={rollDice} disabled={rolling} className="roll-button">
          Roll Dice
        </button>
        {/* Display Goggins image if the die shows 6, otherwise show ☀️🌈 */}
        {diceValue === 6 ? (
          <img src={goggins1} alt="Goggins" className="goggins-image" />
        ) : (
          <span className="emoji-display">{"☀️🌈".repeat(25)}</span>
        )}
      </div>
    </div>
  );
}

export default App;
