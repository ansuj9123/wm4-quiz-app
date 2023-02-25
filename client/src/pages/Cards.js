import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./card.css";

export default function MediaCard() {
	return (
		<Grid container className="card-container">
			<Grid item xs={12} sm={4} md={4} className="gird-item">
				<paper>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							sx={{ height: 140 }}
							image="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1600"
							title="green iguana"
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
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Login in</Button>
						</CardActions>
					</Card>
				</paper>
			</Grid>

			<Grid item xs={12} sm={4} md={4}>
				<paper>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							sx={{ height: 140 }}
							image="https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=1600"
							title="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Teachers
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Teacher are here to be able to create qui, set quiz and assigned
								if you need help login to the teacher section to see more!
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Login in</Button>
						</CardActions>
					</Card>
				</paper>
			</Grid>

			<Grid item xs={12} sm={4} md={4}>
				<paper>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							sx={{ height: 140 }}
							image="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600"
							title="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Students
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Students will be able to study here by going through different
								quiz and view practice their skill by using the quiz.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Login in</Button>
						</CardActions>
					</Card>
				</paper>
			</Grid>
		</Grid>
	);
}
