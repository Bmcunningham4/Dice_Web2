import { useState } from "react";
import "./App.css";
import "./phone2.css?v=2.3";
import Header from "./header.jsx";
import DiceRoller from "./dice.jsx";

import dice_1 from "./assets/dice_1.svg.png";
import dice_2 from "./assets/dice_2.svg.png";
import dice_3 from "./assets/dice_3.svg.png";
import dice_4 from "./assets/dice_4.svg.png";
import dice_5 from "./assets/dice_5.svg.png";
import dice_6 from "./assets/dice_6.svg.png";
import goggins1 from "./assets/goggins.webp";
import goggins2 from "./assets/goggins.jpg";

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
  const [numDice, setNumDice] = useState(1);
  const [currentDice, setCurrentDice] = useState(Array(numDice).fill(dice_1));
  const [rolling, setRolling] = useState(false);
  const [total, setTotal] = useState(1); // Store the total sum of dice

  // Function to calculate dice size based on numDice
  const getDiceSize = (count) => {
    if (count < 2) return '13em';  // Large dice for small counts
    if (count <= 4) return '3.2rem';  // Medium dice
    if (count <= 6) return '2.5rem';  // Medium dice
    return '3rem';  // Small dice for large count
  };

  const increaseDice = () => {
    if (numDice < 5) {
      setNumDice(numDice + 1);
      setCurrentDice((prev) => [...prev, dice_1]);
      setTotal((prevTotal) => prevTotal + 1); // Add default dice value (1)
    }
  };

  const decreaseDice = () => {
    if (numDice > 1) {
      setNumDice(numDice - 1);
  
      setCurrentDice((prev) => {
        const newDice = prev.slice(0, -1);
        setTotal((prevTotal) => prevTotal - diceValues[prev[prev.length - 1]]); // Correctly subtract last dice value
        return newDice;
      });
    }
  };

  const rollAllDice = () => {
    if (rolling) return;
    setRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const newDice = currentDice.map(() => diceImages[Math.floor(Math.random() * diceImages.length)]);
      setCurrentDice(newDice);

      count++;
      if (count === 50) {
        clearInterval(interval);
        setRolling(false);

        // Calculate total sum after final roll
        const newTotal = newDice.reduce((sum, dice) => sum + diceValues[dice], 0);
        setTotal(newTotal);
      }
    }, 40);
  };

  return (
    <div>
      <Header />
      <div className="dice-gang">
        <button className="diff-buttons" onClick={decreaseDice}>-</button>
  
        <div className="dice-container">
          {currentDice.map((dice, index) => (
            <img
              key={index}
              src={dice}
              alt="Dice"
              className="dice-image"
              onClick={rollAllDice}
              style={{
                cursor: rolling ? "not-allowed" : "pointer",
                width: getDiceSize(numDice),  // Dynamically set the width
                height: getDiceSize(numDice),  // Dynamically set the height
              }}
            />
          ))}
        </div>
  
        <button className="diff-buttons" onClick={increaseDice}>+</button>
      </div>
  
      <div className="total-container">
        {/* Roll button */}
        <button onClick={rollAllDice} disabled={rolling} className="roll-button">
          Roll Dice
        </button>
        {/* Display the total value */}
        <h2>Total: {total}</h2>

        {/* Display Goggins image if total is 6, otherwise show ☀️🌈 */}
        {total === 6 ? (
          <img src={goggins1} alt="Goggins" className="goggins-image" />
        ) : (
          <span className="emoji-display">☀️🌈☀️🌈☀️</span>
        )}
      </div>
    </div>
  );
}

export default App;
