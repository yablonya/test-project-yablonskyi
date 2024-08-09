import React from 'react';
import products from './index';
import styles from './ProductsBlock.module.scss';
import ProductCard from "@/components/ui/product-card/ProductCard";

const ProductsBlock = () => {
	return (
		<div className={styles.container}>
			<h2>Our Products</h2>
			<div className={styles.products}>
				{products.map((product, index) => (
					<ProductCard product={product} key={index}/>
				))}
			</div>
			<button className={styles.showMore}>Show More</button>
		</div>
	);
};

export default ProductsBlock;