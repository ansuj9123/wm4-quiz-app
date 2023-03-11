import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import "./layout.css";

function Layout() {
  return (
		<div>
			<Grid container spacing={3} className="gridMain-container">
				<Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Studying
								</Typography>
								<Typography variant="body2" color="text.secondary">
								Engaging group and distance learning for teachers and students.
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
							Explore
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								view Quiz
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								Start Quiz
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/5212326/pexels-photo-5212326.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								Create
							</Button>
						</CardActions>
					</Card>
				</Grid>

				{/* <Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								Explore Quiz app
							</Button>
						</CardActions>
					</Card>
				</Grid> */}

				{/* <Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/1339356/pexels-photo-1339356.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								Explore Quiz app
							</Button>
						</CardActions>
					</Card>
				</Grid> */}

				{/* <Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								20% off now
							</Button>
						</CardActions>
					</Card>
				</Grid> */}

				{/* <Grid item={3} md={2.4} lg={3}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								image="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button variant="contained" size="large" color="primary">
								20% off now
							</Button>
						</CardActions>
					</Card>
				</Grid> */}
			</Grid>
		</div>
	);
}

export default Layout;
