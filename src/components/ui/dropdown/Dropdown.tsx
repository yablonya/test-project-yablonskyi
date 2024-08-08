import React, {FC} from 'react';
import {MenuItem, Select} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import styles from './Dropdown.module.scss';

interface DropdownProps {
	dropdownContent: {
		title: string,
		items: { name: string, href: string }[]
	}
}

const Dropdown: FC<DropdownProps> = ({dropdownContent}) => {
	return (
		<Select
			value={0}
			sx={{
				'.MuiOutlinedInput-input': {
					padding: '10px 0',
				},
				'.MuiOutlinedInput-notchedOutline': {
					border: 'none'
				},
				'.MuiSelect-icon': {
					margin: '0 -5px',
					color: '#3A3A3A'
				}
			}}
			IconComponent={ExpandMore}
		>
			<MenuItem sx={{ display: 'none' }} value={0}>
				{dropdownContent.title}
			</MenuItem>
			{dropdownContent.items.map((item, index) => (
				<MenuItem key={index}>
					{item.name}
				</MenuItem>
			))}
		</Select>
	);
};

export default Dropdown;