import { useEffect, useState } from "react";

export default function Profile() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLasttName] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:3001/profile");
			const data = await response.json();
			setFirstName(data.firstName);
			setLasttName(data.lastName);
		};
		fetchData();
	}, []);
	return (
		<div>
			<div>
				<strong>First Name: </strong> {firstName}
			</div>
			<div>
				<strong>Last Name:</strong> {lastName}
			</div>
		</div>
	);
}
