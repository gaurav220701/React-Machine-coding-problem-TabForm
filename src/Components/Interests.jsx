import React from "react";
function Interests({ data, setData, err }) {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((el) => el !== e.target.name),
    }));
  };
  // console.log(interests);
  return (
    <div className="current-tab">
      <div>
        <label>
          Coding
          <input
            type="checkbox"
            name="coding"
            onChange={(e) => handleChange(e)}
            checked={interests.includes("coding")}
          />
        </label>
      </div>
      <div>
        <label>
          gym
          <input
            type="checkbox"
            name="gym"
            onChange={(e) => handleChange(e)}
            checked={interests.includes("gym")}
          />
        </label>
      </div>
      <div>
        <label>
          trading
          <input
            type="checkbox"
            name="trading"
            onChange={(e) => handleChange(e)}
            checked={interests.includes("trading")}
          />
        </label>
      </div>
      {err.interests && <span>{err.interests}</span>}
    </div>
  );
}
export default Interests;
