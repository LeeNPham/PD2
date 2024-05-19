
import React from 'react';

const EyeIcon = ({ className = 'h-10 w-10 stroke-blue-600' }) => (
    <svg
	viewBox="0 0 24 24"
	focusable="false"
	role="img"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	stroke-linecap="round"
	stroke-linejoin="round"
	className={{className}}
	><title>Eye icon</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle
		cx="12"
		cy="12"
		r="3"
		/>
	</svg>

);

export default EyeIcon;
