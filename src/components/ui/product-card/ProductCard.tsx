import React, {FC} from 'react';
import {Share, FavoriteBorderOutlined} from '@mui/icons-material'
import styles from './ProductCard.module.scss';
import {formatPrice} from "@/utils/formatPrice";

interface ProductCardProps {
	product: {
		imgUrl: string;
		name: string;
		description: string;
		price: number;
		discount: number;
		discountPrice: number;
		isNew: boolean;
	}
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
	return (
		<div className={styles.container}>
			<img src={product.imgUrl} alt={product.name}/>
			<h5>{product.name}</h5>
			<p>{product.description}</p>
			{
				product.discount ?
					<div className={styles.priceBlock}>
						<p>Rp{formatPrice(product.discountPrice)}</p>
						<s>Rp{formatPrice(product.price)}</s>
					</div>
					:
					<p className={styles.price}>Rp{formatPrice(product.price)}</p>
			}
			{ product.discount !== 0 && <div className={styles.discountMarker}>-{product.discount}%</div> }
			{ product.isNew && <div className={styles.newProductMarker}>New</div> }

			<div className={styles.hoverOptions}>
				<button>Add to cart</button>
				<div>
					<button>
						<Share/>
						Share
					</button>
					<button>
						<FavoriteBorderOutlined/>
						Like
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;