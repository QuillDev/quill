import React, { useState } from "react";
import { setTimeout } from "timers";
import styles from "./DonateComponent.module.css";
interface DonateComponentProps {
  qr: string;
  target: string;
  btnLabel: string;
  type: string;
  url?: boolean;
}

const DonateComponent: React.FC<DonateComponentProps> = ({
  qr,
  target,
  btnLabel,
  type,
  url,
}) => {
  // Create state vars for managing the button
  const [buttonStyle, setButtonStyle] = useState(styles.donateButtonInactive);
  const [buttonText, setButtonText] = useState(btnLabel);

  const activateButton = () => {
    // Set the button to the active state
    setButtonStyle(styles.donateButtonActive);
    setButtonText(!url ? "Copied!" : "Redirecting!");

    // Change it back after Xms
    setTimeout(() => {
      setButtonStyle(styles.donateButtonInactive);
      setButtonText(btnLabel);
    }, 400);
  };

  return (
    <>
      {/* Donate using bitcoin */}
      <div className="grid-flow-col w-96">
        <div className="text-center text-3xl">Donate Using {type}</div>
        <div className="py-2">
          <img src={qr} className="w-full"/>
          <div>
            <button
              className={`${styles.donateButton} ${buttonStyle}`}
              onClick={() => {
                !url
                  ? navigator.clipboard.writeText(target)
                  : (window.location.href = target);
                activateButton();
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DonateComponent;
