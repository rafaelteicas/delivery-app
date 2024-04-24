import React, { forwardRef } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
	({ label, ...rest }, ref) => {
		return (
			<div className="">
				<p>{label}</p>
				<div className="flex border rounded py-2 w-full">
					<input
						ref={ref}
						className="bg-transparent flex-1 outline-none pl-2"
						{...rest}
					/>
				</div>
			</div>
		);
	},
);

Input.displayName = 'Input';
