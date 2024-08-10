import React, {FC} from 'react';
import {MenuItem, Select} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

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
				color: '#3A3A3A',
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
				<MenuItem key={index} sx={{color: '#3A3A3A'}}>
					<a href={item.href}>{item.name}</a>
				</MenuItem>
			))}
		</Select>
	);
};

export default Dropdown;