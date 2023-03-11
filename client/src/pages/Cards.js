import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import "./card.css";
// import { CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";



export default function MediaCard() {
	return (
		<Grid container spacing={3} className="cardContainer">
			<Grid item={3} md={2.4} lg={3}>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="160"
							image="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Student
							</Typography>
							<Typography variant="body2" color="black">
								Students will be able to study here by going through different
								quiz and view practice their skill by using the quiz. Happy
								coding!
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="contained"
							size="large"
							color="primary"
							style={{ color: "black" }}
						>
							<Link className="btn-click" to="/Student">Log In</Link>
						</Button>
					</CardActions>
				</Card>
			</Grid>

			<Grid item={3} md={2.4} lg={3}>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="160"
							image="https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=1600"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Teacher
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Teacher are here to be able to create qui, set quiz and assigned
								if you need help login to the teacher section to see more!
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="contained"
							size="large"
							color="primary"
							style={{ color: "black" }}
						>
							Log In
						</Button>
					</CardActions>
				</Card>
			</Grid>

			<Grid item={3} md={2.4} lg={3}>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="160"
							image="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1600"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Mentors
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Mentor will be able give advise to students and can also will be
								able to create quiz and edit quiz. mentors can also help
								student.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							variant="contained"
							size="large"
							color="primary"
							style={{ color: "black" }}
						>
							Log In
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
}
