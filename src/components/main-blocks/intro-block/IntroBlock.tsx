'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './IntroBlock.module.scss';
import './IntroCarousel.scss'

const introImages = [
	'/images/intro/intro-1.png',
	'/images/intro/intro-2.png',
	'/images/intro/intro-3.png',
	'/images/intro/intro-2.png'
];

const IntroBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introText}>
				<h1>High-Quality Furniture Just For You</h1>
				<p>
					Our furniture is made from selected and best quality materials that are suitable for your dream home
				</p>
				<button>Shop Now</button>
			</div>

			<Carousel
				className='intro-carousel'
				useKeyboardArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				centerMode={true}
				showStatus={false}
				centerSlidePercentage={70}
				swipeable={true}
			>
				{introImages.map((src, index) => (
					<div className={styles.carouselImage} key={index}>
						<img
							alt="intro image"
							src={src}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default IntroBlock;