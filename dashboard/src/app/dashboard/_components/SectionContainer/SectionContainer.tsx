import { forwardRef } from 'react';

import { cn } from '@/utils';

export const SectionContainer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
	<section ref={ref} className={cn('flex flex-col', className)} {...props} />
));
SectionContainer.displayName = 'SectionContainer';