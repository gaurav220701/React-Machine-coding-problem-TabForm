function Settings({ data, setData }) {
  const { theme } = data;
  const handleClick = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };
  return (
    <div className="current-tab">
      <div>
        <label>
          Dark
          <input
            type="radio"
            name="dark"
            checked={theme == "dark"}
            onChange={(e) => handleClick(e, "dark")}
          />
        </label>
      </div>
      <div>
        <label>
          Light
          <input
            type="radio"
            name="light"
            checked={theme == "light"}
            onChange={(e) => handleClick(e, "dark")}
          />
        </label>
      </div>
      <div className="submit-button">
        <button>Submit</button>
      </div>
    </div>
  );
}
export default Settings;
