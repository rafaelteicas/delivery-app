import React from 'react';

interface Props {
  children: React.ReactNode
  size?: 'xl' | '2xl' | '3xl' | '4xl'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'a'
  className?: string
}

export function Heading({
	children,
	size = 'xl',
	className = '',
	as: Element = 'h2',
}: Props) {
	const textSize = `text-${size}`;

	return (
		<Element className={`font-medium ${textSize} ${className}`}>
			{children}
		</Element>
	);
}
