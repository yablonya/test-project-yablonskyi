'use client';

import styles from './RoomsBlock.module.scss'
import './RoomsCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const roomImages = [
	'/images/rooms/bed-room.png',
	'/images/rooms/kitchen.png',
	'/images/rooms/workroom.png',
	'/images/rooms/kitchen.png'
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
				centerSlidePercentage={45}
				swipeable={true}
			>
				{roomImages.map((src, index) => (
					<img
						alt="intro image"
						src={src}
						key={index}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default RoomsBlock;