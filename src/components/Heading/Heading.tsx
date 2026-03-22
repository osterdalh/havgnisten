import { Overlay, Title } from '@mantine/core';
import classes from './Heading.module.scss';
import { ReactNode } from 'react';

interface HeadingProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
    children: ReactNode
}

export function Heading({ variant, children }: HeadingProps) {
    if (variant === 'h1') {
        return (

            <h1 className={classes.title}>{children}</h1>
        );
    }
    if (variant === 'h2') {
        return (

            <h2 className={classes.title}>{children}</h2>
        );
    }
    if (variant === 'h3') {
        return (

            <h3 className={classes.title}>{children}</h3>
        );
    }
    if (variant === 'h4') {
        return (

            <h4 className={classes.title}>{children}</h4>
        );
    }

}