import { Swipe } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import './DoggerCards.css';
import axios from './axios.js';

function DoggerCards() {
	// useState hook adds a state to a functional component. The line const [dogs, setDogs] = useState([]); declares a state variable named dogs and initializes it with an empty array. It also declares a function setDogs that can be used to update the dogs state variable.
	const [dogs, setDogs] = useState([]);
	// useEffect hook only runs once* It fetches the card data sets the cards
	useEffect(() => {
		// fetch the card data using axios package for easy html
		async function fetchData(){
			const request = await axios.get('/dogger/cards');
			setDogs(request.data);
		}
		fetchData();
	}, []);

	console.log(dogs);

	const swiped = (direction, nameToDelete) => {
		console.log('Removing: ' + direction + ' ' + nameToDelete);
		// setLastDirection(direction);
	};
	  
	const outOfFrame = (name) => {
		console.log(name + ' left the screen');
	};

  return (
	<div className='doggerCards'>
		<div className='doggerCards__cardContainer'>
			{dogs.map((dog) => (
				<TinderCard
					className='swipe'
					key={dog.name}
					preventSwipe={['up','down']}
					onSwipe={(dir) => swiped(dir, dog.name)}
					onCardLeftScreen={() => outOfFrame(dog.name)}
				>
					<div
						style={{backgroundImage:`url(${dog.imgUrl})`}}
						className='card'
					>
						<h3>{dog.name}</h3>
					</div>
				</TinderCard>
			))}
		</div>
	</div>
  )
}

export default DoggerCards