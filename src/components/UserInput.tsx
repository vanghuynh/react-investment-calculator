import React, { useState } from "react";

const UserInput = ({ userInput, onInputChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", parseInt(event.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", parseInt(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", parseInt(event.target.value))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onInputChange("duration", parseInt(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
