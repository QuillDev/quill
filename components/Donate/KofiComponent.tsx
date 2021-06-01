import React, { Component } from "react";
import kofiQR from "../../assets/kofi-qr-code.svg";


export default class KofiComponent extends Component {
  render() {
    return (
      <>
        <div className="w-96">
          <div className="text-center text-3xl pb-2">Donate Using KoFi</div>
          <img src={kofiQR} className="w-full"></img>
          <button className="bg-red-700 w-full rounded-sm p-2">Donate</button>
        </div>
      </>
    );
  }
}
