import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";



const Footer = () =>{
	return (
		<Box
			sx={{
				width: "100%",
				height: "auto",
				backgroundColor: "contained",
				paddingTop: "1rem",
				paddingBottom: "1rem",
			}}
		>
			<Container maxWidth="lg">
				<Grid container direction="column" alignItems="center">
					<Grid item xs={12}>
						<Typography color="black" variant="h5">
						<h3 ><span className="code">&lt; Code &gt;</span> Your Future</h3>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography color="textSecondary" variant="subtitle1">
							{`${new Date().getFullYear()} | TEAM | LEGEND | QUIZ APP`}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
