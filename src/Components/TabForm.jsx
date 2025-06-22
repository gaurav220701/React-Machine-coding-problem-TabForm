import "../styles.css";
import Interests from "./Interests";
import Settings from "./Settings";
import Profile from "./Profile";
import { useState } from "react";
function TabForm() {
  const [err, setErr] = useState({
    name: "Name is not valid",
  });
  const [data, setData] = useState({
    name: "Gaurav Dhiran",
    email: "gaurav.dhiran2207@gmail.com",
    age: 24,
    interests: ["coding", "gym", "trading"],
    theme: "dark",
  });
  const pagesInfo = [
    {
      pageName: Profile,
      buttonText: "Profile",
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        setErr(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      pageName: Interests,
      buttonText: "Interests",
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one Interests";
        }
        setErr(err);
        return err.interests ? false : true;
      },
    },
    {
      pageName: Settings,
      buttonText: "Settings",
      validate: () => {
        return true;
      },
    },
  ];
  const handleClickPage = (index) => {
    pagesInfo[page].validate() && setPage((prev) => index);
  };
  const [page, setPage] = useState(0);
  const CurrentPage = pagesInfo[page].pageName;
  const handlePrevClick = () => {
    pagesInfo[page].validate() && setPage((prev) => prev - 1);
  };
  const handleNextClick = () => {
    pagesInfo[page].validate() && setPage((prev) => prev + 1);
  };
  return (
    <div className="App">
      <div className="default-tab">
        {pagesInfo.map((element, index) => {
          return (
            <button
              key={index}
              className="default-tab-btns"
              onClick={() => handleClickPage(index)}
            >
              {element.buttonText}
            </button>
          );
        })}
      </div>
      <div className="default-page">
        <CurrentPage data={data} setData={setData} err={err} setErr={setErr} />
        {page > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {page === pagesInfo.length - 1 && <button>Submit</button>}
        {page < pagesInfo.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
    </div>
  );
}
export default TabForm;
