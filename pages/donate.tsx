import React from "react";

import btcQR from "../assets/btc-qr.svg";
import cashappQR from "../assets/cashapp-qr.png";
import DonateComponent from "../components/Donate/DonateComponent";
import styles from "../components/Donate/DonateComponent.module.css";
import KofiComponent from "../components/Donate/KofiComponent";
interface donateProps {}

const donate: React.FC<donateProps> = ({}) => {
  return (
    <div>
      <div className="lg:text-4xl text-2xl text-center border-b-2 border-red-500 pb-4">
        Enjoy my projects and want to help? Donate below it helps a lot!
      </div>
      {/* Donation URLs and QR codes */}
      <div className={styles.donateContainer}>
        <DonateComponent
          qr={btcQR}
          type={"Bitcoin"}
          target={"bc1qekjh9azgkt3dvtnx2m7462s2s67c0xzm5jp6jf"}
          btnLabel={"Copy BTC Address"}
        />

        <DonateComponent
          qr={cashappQR}
          target={"$quilldev"}
          type="CashApp"
          btnLabel={"Copy $CashTag"}
        />

        <KofiComponent/>
        {/* <DonateComponent
          qr={kofiQR}
          type="KoFi"
          btnLabel={"Go to KoFi"}
          target={"https://ko-fi.com/quilldev"}
          url={true}
        /> */}
      </div>
    </div>
  );
};
export default donate;
