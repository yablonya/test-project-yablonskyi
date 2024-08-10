'use client';

import styles from './HeaderNav.module.scss';
import Dropdown from "@/components/ui/dropdown/Dropdown";
import {Search, FavoriteBorderOutlined, ShoppingCartOutlined, MenuOutlined} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import {useState} from "react";
import dropdowns from './utils';
import MobileHeaderDrawer from "@/components/layout/header-nav/components/mobile-header-drawer/MobileHeaderDrawer";

const HeaderNav = () => {
	const [drawerState, setDrawerState] = useState(false);
	const toggleDrawer = () => {
		setDrawerState(!drawerState);
	}

	return (
		<div className={styles.headerNav}>
			<h2><a href="#">Funiro.</a></h2>

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

			<MenuOutlined className={styles.drawerOpenButton} onClick={toggleDrawer}/>
			<MobileHeaderDrawer drawerState={drawerState} toggleDrawer={toggleDrawer}/>
		</div>
	);
};

export default HeaderNav;