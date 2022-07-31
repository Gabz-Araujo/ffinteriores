import React, { Component } from "react";

export default class CtaButton extends Component {
  render() {
    return (
      <button className="border border-yellow-300 bg-yellow-400 rounded-xl px-4 py-1 text-white font-bold hover:bg-yellow-200 uppercase transform transition duration-400">
        Peça seu orçamento!
      </button>
    );
  }
}
