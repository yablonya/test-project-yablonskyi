import React from 'react';
import styles from './HeaderNav.module.scss';
import Dropdown from "@/components/ui/dropdown/Dropdown";
import {Search, FavoriteBorderOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import dropdowns from './dropdowns.json';

const HeaderNav = () => {
	return (
		<div className={styles.headerNav}>
			<h2><a href="src/components/layout/header-nav#">Funiro.</a></h2>

			<div className={styles.dropdowns}>
				<Dropdown dropdownContent={dropdowns.products}/>
				<Dropdown dropdownContent={dropdowns.rooms}/>
				<a href="#">Inspirations</a>
			</div>

			<div className={styles.searchBox}>
				<Search className={styles.searchIcon}/>
				<input type="search" placeholder='Search for minimalistic chair'/>
			</div>

			<div className={styles.account}>
				<FavoriteBorderOutlined/>
				<ShoppingCartOutlined/>
				<Avatar src={'/images/avatar.png'} alt={'avatar'}/>
			</div>

		</div>
	);
};

export default HeaderNav;