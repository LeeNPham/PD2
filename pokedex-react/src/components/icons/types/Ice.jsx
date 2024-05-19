import React from 'react';

const Ice = ({ className = 'h-3 w-auto fill-white' }) => (
    <div className="bg-type-ice h-5 w-5 rounded-full flex items-center justify-center">
        <svg className={{className}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M384.304 39.0418L385.879 177.392L265.209 235.319L263.721 104.69L384.304 39.0418Z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M505.269 257.047L385.814 325.374L266.288 256.939L385.752 194.187L505.269 257.047Z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M245.04 257.047L125.585 325.374L6.05861 256.939L125.523 194.187L245.04 257.047Z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M124.243 38.4753L248.229 99.881L245.059 233.697L127.993 175.719L124.243 38.4753Z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M387.678 473.525L263.692 412.119L266.862 278.302L383.928 336.281L387.678 473.525Z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M128.525 474.77L126.949 336.42L247.62 278.493L249.108 409.121L128.525 474.77Z"
		/>
	</svg>
    </div>
);

export default Ice;
