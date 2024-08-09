import styles from './ShareBlock.module.scss';

const ShareBlock = () => {
	return (
		<div className={styles.container}>
			<p>Share your setup with</p>
			<h2>#FuniroFurniture</h2>

			<div className={styles.mosaic}>
				<div className={styles.leftPart}>
					<div className={styles.leftUpper}>
						<img src="/images/share/share-1.png" alt="share 1"/>
						<img src="/images/share/share-2.png" alt="share 2"/>
					</div>
					<div className={styles.leftLower}>
						<img src="/images/share/share-3.png" alt="share 3"/>
						<img src="/images/share/share-4.png" alt="share 4"/>
					</div>
				</div>
				<img src="/images/share/share-5.png" alt="share 5"/>
				<div className={styles.rightPart}>
					<div className={styles.rightUpper}>
						<img src="/images/share/share-6.png" alt="share 6"/>
						<img src="/images/share/share-7.png" alt="share 7"/>
					</div>
					<div className={styles.rightLower}>
						<img src="/images/share/share-8.png" alt="share 8"/>
						<img src="/images/share/share-9.png" alt="share 9"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShareBlock;