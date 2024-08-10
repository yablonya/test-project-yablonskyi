import React, {FC} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Drawer, Typography} from "@mui/material";
import styles from './MobileHeaderDrawer.module.scss';
import {CloseOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined, ExpandMore} from "@mui/icons-material";
import dropdowns from "@/components/layout/header-nav/utils";

interface MobileHeaderDrawerProps {
	drawerState: boolean;
	toggleDrawer: () => void;
}

const MobileHeaderDrawer: FC<MobileHeaderDrawerProps> = ({drawerState, toggleDrawer}) => {
	return (
		<Drawer
			anchor={'top'}
			open={drawerState}
			onClose={toggleDrawer}
		>
			<div className={styles.drawerContent}>
				<div>
					<h2><a href="#">Funiro.</a></h2>
					<CloseOutlined className={styles.drawerCloseButton} onClick={toggleDrawer}/>
				</div>

				<div>
					<div className={styles.accountAndSearch}>
						<div className={styles.account}>
							<Avatar src={'/images/avatar.png'} alt={'avatar'}/>
							<ShoppingCartOutlined/>
							<FavoriteBorderOutlined/>
						</div>
						<div className={styles.searchBox}>
							<Search className={styles.searchIcon}/>
							<input type="search" placeholder='Search for minimalistic chair'/>
						</div>
					</div>

					<Accordion disableGutters square className={styles.accordion}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
						>
							<Typography>{dropdowns.products.title}</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionTabs}>
							{dropdowns.products.items.map((item, index) => (
								<a href={item.href} key={index} onClick={toggleDrawer}>{item.name}</a>
							))}
						</AccordionDetails>
					</Accordion>

					<Accordion disableGutters square className={styles.accordion}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
						>
							<Typography>{dropdowns.rooms.title}</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionTabs}>
							{dropdowns.rooms.items.map((item, index) => (
								<a href={item.href} key={index} onClick={toggleDrawer}>{item.name}</a>
							))}
						</AccordionDetails>
					</Accordion>
					<a href="#" onClick={toggleDrawer}>Inspirations</a>
				</div>
			</div>
		</Drawer>
	);
};

export default MobileHeaderDrawer;