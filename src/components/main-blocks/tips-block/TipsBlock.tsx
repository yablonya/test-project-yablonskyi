'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './TipsBlock.module.scss';
import './TipsCarousel.scss';
import {useMediaQuery} from "@mui/material";
import '../../../styles/breakpoints.scss'

const tips = [
	{
		href: '/images/tips/tip-2.png',
		title: 'How to create a living room to love',
		date: '20 jan 2020'
	},
	{
		href: '/images/tips/tip-3.png',
		title: 'Solution for clean look working space',
		date: '10 jan 2020'
	},
	{
		href: '/images/tips/tip-2.png',
		title: 'Solution for clean look working space',
		date: '20 jan 2020'
	},
	{
		href: '/images/tips/tip-1.png',
		title: 'Solution for clean look working space',
		date: '10 jan 2020'
	}
];

const TipsBlock = () => {
	const isTablet = useMediaQuery('(max-width:768px)');
	const isMobile = useMediaQuery('(max-width:480px)');

	return (
		<div className={styles.container}>
			<h2>Tips & Tricks</h2>
			<Carousel
				className='tips-carousel'
				useKeyboardArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				centerMode={true}
				showStatus={false}
				centerSlidePercentage={isMobile ? 100 : isTablet ? 70 : 33}
				swipeable={true}
			>
				{tips.map((tip, index) => (
					<div key={index}>
						<div className={'tipContainer'}>
							<img
								alt="tip image"
								src={tip.href}
							/>
							<div className={styles.tipText}>
								<h5>{tip.title}</h5>
								<p>{tip.date}</p>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default TipsBlock;