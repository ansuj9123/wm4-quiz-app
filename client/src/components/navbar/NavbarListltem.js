import PeopleIcon from "@mui/icons-material/People";
import Person2Icon from "@mui/icons-material/Person2";
import Person3Icon from "@mui/icons-material/Person3";
import SchoolIcon from "@mui/icons-material/School";
import Student from "../../pages/Student";

export const mainNavbarItem = [
	{
		id: 0,
		icon: <PeopleIcon className="icon" />,
		label: "USERS",
		route: "route",
	},
	{
		id: 1,
		icon: <Person3Icon className="icon" />,
		label: "Teacher",
		route: "route",
	},
	{
		id: 2,
		icon: <Person2Icon className="icon" />,
		label: "Mentor",
		route: "route",
	},
	{
		id: 3,
		icon: <SchoolIcon className="icon" />,
		label: "Students",
		route: "route",
		Link: <Student />,

	},
];
