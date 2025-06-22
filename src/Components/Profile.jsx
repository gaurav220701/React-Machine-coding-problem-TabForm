function Profile({ data, setData, err, setErr }) {
  const { name, age, email } = data;
  const handleChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="current-tab">
      Profile Page
      <div className="Profile-page-inputs">
        <label> Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {err.name && <span>{err.name}</span>}
      </div>
      <div className="Profile-page-inputs">
        <label> Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {err.email && <span>{err.email}</span>}
      </div>
      <div className="Profile-page-inputs">
        <label> Age :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {err.age && <span>{err.age}</span>}
      </div>
    </div>
  );
}
export default Profile;
