'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './IntroBlock.module.scss';
import './IntroCarousel.scss'
import {useMediaQuery} from "@mui/material";
import {formatPrice} from "@/utils/formatPrice";
import {East} from '@mui/icons-material'

const intro = [
	{
		href: '/images/intro/intro-2.png',
		name: 'Bohauss',
		description: 'Luxury big sofa 2-seat',
		price: 17000000
	},
	{
		href: '/images/intro/intro-3.png',
		name: 'Bedauss',
		description: 'Comfort Large bed',
		price: 20000000
	},
	{
		href: '/images/intro/intro-2.png',
		name: 'Sohauss',
		description: 'Comfort minimalist sofa',
		price: 12000000
	},
	{
		href: '/images/intro/intro-1.png',
		name: 'Bedauss',
		description: 'Comfort Large bed',
		price: 20000000
	},
];

const IntroBlock = () => {
	const isMobile = useMediaQuery('(max-width:480px)');

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
				centerSlidePercentage={isMobile ? 100 : 70}
				swipeable={true}
			>
				{intro.map((item, index) => (
					<div className={styles.carouselImage} key={index}>
						<img
							alt="intro image"
							src={item.href}
						/>
						<div>
							<h4>{item.name}</h4>
							<p>{item.description}</p>
							<h5>
								{formatPrice(item.price)}
								<East sx={{cursor: 'pointer'}}/>
							</h5>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default IntroBlock;