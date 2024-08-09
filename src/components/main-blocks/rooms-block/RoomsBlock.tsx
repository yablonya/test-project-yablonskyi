import styles from './RoomsBlock.module.scss'

const RoomsBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContent}>
				<h2>50+ Beautiful rooms inspiration</h2>
				<p>
					Our designer already made a lot of beautiful room prototypes that inspire you
				</p>
				<button>Explore More</button>
			</div>
		</div>
	);
};

export default RoomsBlock;