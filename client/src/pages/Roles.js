import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../pages/roles.css";

function MyForm() {
  const [roles, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
      <Grid item xs={12}>
        <select className="roles css-md26zr-MuiInputBase-root-MuiOutlinedInput-root" value={roles} onChange={handleUserTypeChange}>
        <option value="roles">Roles *</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>
      </Grid>
  );
}

export default MyForm;