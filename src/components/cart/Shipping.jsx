import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [formIncomplete, setFormIncomplete] = useState(false);

  const countries = Country.getAllCountries();

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);

    if (countryCode) {
      const selectedStates = State.getStatesOfCountry(countryCode);
      setStates(selectedStates);
    } else {
      setStates([]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll("input, select");

    let isFormIncomplete = false;
    inputs.forEach((input) => {
      if (!input.value) {
        isFormIncomplete = true;
      }
    });

    setFormIncomplete(isFormIncomplete);
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>Country</label>
            <select onChange={handleCountryChange} value={selectedCountry}>
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter Phone Number" />
          </div>
          <Popup trigger={<button type="submit">Confirm Order</button>} position="right center">
          {formIncomplete ? <div style={{ color: 'red' }}>Please fill out all shipping details</div> :
            <div style={{ color: "red", position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Order Placed</div>
          }
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
