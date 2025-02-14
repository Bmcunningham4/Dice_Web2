import { useState } from "react";

const DiceRoller = ({ diceImages }) => {
  const [currentDice, setCurrentDice] = useState(diceImages[0]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    
    let count = 0;
    const interval = setInterval(() => {
      setCurrentDice(diceImages[Math.floor(Math.random() * diceImages.length)]);
      count++;
      if (count === 50) {
        clearInterval(interval);
        setCurrentDice(diceImages[Math.floor(Math.random() * diceImages.length)]);
        setRolling(false);
      }
    }, 40);
  };

  return (
    <div className="dice-container">
      <img src={currentDice} alt="Dice" className="dice-image" />
      <button onClick={rollDice} disabled={rolling} className="roll-button">
        Roll Dice
      </button>
    </div>
  );
};

export default DiceRoller;

  
