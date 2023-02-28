import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./userType.css";

function MyForm() {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
      <Grid item xs={12}>
        <select className="userType css-md26zr-MuiInputBase-root-MuiOutlinedInput-root" value={userType} onChange={handleUserTypeChange}>
        <option value="usertype">User Type *</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>
      </Grid>
  );
}

export default MyForm;
