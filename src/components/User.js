import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const User = () =>  {

	const initialState = {
		userName: 'imranhsayed',
		age: 28,
		data: {}
	};

	const [userData, setUserData] = useState(initialState);

	const fetchData = (username) => {

		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(resData => setUserData( { ...userData, data: resData } ) );
	};

	useEffect(() => {
		fetchData( userData.userName );
	}, [userData.userName]);

	const { data } = userData;
	console.warn( data );

	return (
		<>
			<Nav/>
			<h1>Github data</h1>

			{ Object.keys( data ).length ? (
				<>
					<h3>UserName => { data.name }</h3>
					<p>Bio => { data.bio }</p>
					<img src={ data.avatar_url } alt="Image"/>
				</>
			) : (
				""
			)}
		</>
	);
};

export default User;
