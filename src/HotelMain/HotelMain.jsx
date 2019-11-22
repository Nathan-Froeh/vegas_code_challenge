import React, { Component } from "react";
import "./HotelMain.scss";

class HotelMain extends Component {
  constructor() {
    super();
    this.state = {
      view: "DESCRIPTION"
    };
  }

  handleView = e => {
    e.preventDefault();
    this.setState({ view: e.target.innerText });
  };

  render() {
    const {
      name,
      starRating,
      price,
      phoneNumber,
      location,
      description,
      details,
      media
    } = this.props.hotel;

    const detailsTab = details.map((detail, key) => (
      <li key={key}>
        <strong>{detail.label}:</strong>
        <p>{detail.value}</p>
      </li>
    ));

    return (
      <main className="hotel-main">
        <section className="header">
          <section className="sub-head">
            <div className="name">
              <h1>{name}</h1>
              <span>{starRating}</span>
            </div>
            <div className="area">
              <p>{location.areaName}</p>
              <p>{phoneNumber}</p>
              <p>Best Price Guarantee</p>
            </div>
          </section>
          <div className="price">
            <strong>{`$${price}`}</strong>
            <p>HOTEL ROOMS FROM</p>
          </div>
        </section>
        <section className="view-select">
          <button
            className={`${this.state.view === "DESCRIPTION" ? "active" : ""}`}
            onClick={this.handleView}
          >
            DESCRIPTION
          </button>
          <button
            className={`${this.state.view === "DETAILS" ? "active" : ""}`}
            onClick={this.handleView}
          >
            DETAILS
          </button>
          <button
            className={`${this.state.view === "LOCATION" ? "active" : ""}`}
            onClick={this.handleView}
          >
            LOCATION
          </button>
        </section>
        {this.state.view === "DESCRIPTION" && (
          <p className="description">{description}</p>
        )}
        {this.state.view === "DETAILS" && <ul>{detailsTab}</ul>}
        {this.state.view === "LOCATION" && (
          <img src={require("../utils" + media[1].href)} alt="Hotel map view" />
        )}
      </main>
    );
  }
}

export default HotelMain;
