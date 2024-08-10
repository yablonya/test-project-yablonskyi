'use client';

import styles from './RoomsBlock.module.scss'
import './RoomsCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {East} from "@mui/icons-material";

const rooms = [
	{
		href: '/images/rooms/bed-room.png',
		name: 'Bed Room',
		description: 'Inner Peace'
	},
	{
		href: '/images/rooms/kitchen.png',
		name: 'Kitchen',
		description: 'Cozy Cooking'
	},
	{
		href: '/images/rooms/bed-room.png',
		name: 'Bed Room',
		description: 'Inner Peace'
	},
	{
		href: '/images/rooms/workroom.png',
		name: 'Workroom',
		description: 'Focused Work'
	},
];

const RoomsBlock = () => {
	return (
		<div id={'rooms'} className={styles.container}>
			<div className={styles.textContent}>
				<h2>50+ Beautiful rooms inspiration</h2>
				<p>
					Our designer already made a lot of beautiful room prototypes that inspire you
				</p>
				<button>Explore More</button>
			</div>

			<Carousel
				className='rooms-carousel'
				useKeyboardArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				centerMode={true}
				showStatus={false}
				centerSlidePercentage={48}
				swipeable={true}
			>
				{rooms.map((room, index) => (
					<div>
						<img
							alt="room image"
							src={room.href}
							key={index}
						/>
						<div>
							<p>{index + 1}<hr/>{room.name}</p>
							<h4>{room.description}</h4>
							<div><East/></div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default RoomsBlock;