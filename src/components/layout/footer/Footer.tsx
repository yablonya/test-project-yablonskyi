import React from 'react';
import styles from './Footer.module.scss';
import links from './utils';
import {Telegram} from "@mui/icons-material";

const Footer = () => {
	return (
		<div className={styles.container}>
			{links.map((list, index) => (
				<div key={index} className={styles.listContainer}>
					<h2>{list.title}</h2>
					<ul>
						{list.items.map((item, itemIndex) => (
							<li key={itemIndex}>
								{item.icon && item.icon}
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
			))}
			<div>
				<h2>Stay updated</h2>
				<form action="#">
					<input type="email" placeholder='Enter your email'/>
					<button type='submit' className={styles.sendButton}>
						<Telegram/>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Footer;