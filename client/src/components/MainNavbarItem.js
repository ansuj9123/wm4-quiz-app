import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import Person2Icon from "@mui/icons-material/Person2";
import Person3Icon from "@mui/icons-material/Person3";
export const mainNavbarItem = [
	{
		id: 0,
		icon: <PeopleIcon />,
		label: "Users",
		Route: "route",
	},
	{
		id: 1,
		icon: <Person2Icon />,
		label: "Teachers",
		Route: "route",
	},
	{
		id: 2,
		icon: <SchoolIcon />,
		label: "Students",
		Route: "route",
	},
	{
		id: 3,
		icon: <Person3Icon />,
		label: "Mentors",
		Route: "route",
	},
];
