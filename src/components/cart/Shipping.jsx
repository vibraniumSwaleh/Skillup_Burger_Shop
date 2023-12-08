import React, { useState } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

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

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
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
          <Popup trigger={<button type="button">Confirm Order</button>} position="right center">
            <div style={{ color: "red", position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Order Placed</div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
