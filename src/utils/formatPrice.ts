export const formatPrice = (price: number) => {
	const strPrice = price.toString();
	return strPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}