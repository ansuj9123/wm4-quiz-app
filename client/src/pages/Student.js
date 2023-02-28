import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./student.css";
// import UserType from "../pages/UserType";

export default function BasicButtons() {
  return (
    <Stack className="stuBtn" spacing={2} direction="row">
      <Button href="/UserType" className="contained-btn" variant="contained">
        <span className="theText">
        <p className="jsBtn">Java Script</p>
        <p><strong>Difficulty:</strong>Medium</p>
        <p><strong>Description:</strong>This will test your knowledge of Javascript!</p>
        </span>
			</Button>

    </Stack>
  );
}
