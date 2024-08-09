import styles from './FeaturesBlock.module.scss'
import {EmojiEventsOutlined, VerifiedOutlined, LocalShippingOutlined, SupportAgentOutlined} from '@mui/icons-material'

const FeaturesBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.feature}>
				<EmojiEventsOutlined className={styles.icon}/>
				<div>
					<h3>High Quality</h3>
					<p>Crafted from top material</p>
				</div>
			</div>
			<div className={styles.feature}>
				<VerifiedOutlined className={styles.icon}/>
				<div>
					<h3>Warranty Protection</h3>
					<p>Over 2 years</p>
				</div>
			</div>
			<div className={styles.feature}>
				<LocalShippingOutlined className={styles.icon}/>
				<div>
					<h3>Free Shipping</h3>
					<p>Order over 150$</p>
				</div>
			</div>
			<div className={styles.feature}>
				<SupportAgentOutlined className={styles.icon}/>
				<div>
					<h3>24 / 7 Support</h3>
					<p>Dedicated support</p>
				</div>
			</div>

		</div>
	);
};

export default FeaturesBlock;