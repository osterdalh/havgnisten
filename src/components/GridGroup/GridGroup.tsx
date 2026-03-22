import { ReactNode, useEffect, useRef } from 'react';
import { Button, Center, SimpleGrid } from '@mantine/core';
import classes from './GridGroup.module.scss';

interface GridGroupProps {
    images: string[];
    children?: ReactNode;
    childrenFirst?: boolean
}

export function GridGroup({ images, children, childrenFirst = false }: GridGroupProps) {
    const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

    useEffect(() => {
        let frameId = 0;

        const updateParallax = () => {
            const viewportCenter = window.innerHeight / 2;

            imageRefs.current.forEach((imageElement) => {
                if (!imageElement) {
                    return;
                }

                const { top, height } = imageElement.getBoundingClientRect();
                const imageCenter = top + height / 2;
                const distanceFromCenter = imageCenter - viewportCenter;
                const offset = Math.max(-32, Math.min(32, distanceFromCenter * -0.075));

                imageElement.style.setProperty('--parallax-offset', `${offset}px`);
            });
        };

        const onScrollOrResize = () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            frameId = requestAnimationFrame(updateParallax);
        };

        onScrollOrResize();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);

        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
    }, []);

    return (
        <SimpleGrid spacing="none" className={classes.container} cols={{ base: 1, sm: 2 }}>
            {childrenFirst && (
                <div className={classes.content}>
                    <Center h="100%">
                        <div className={classes.infoContent}>
                            {children}
                        </div>
                    </Center>
                </div>
            )}

            {images.map((image, index) => (
                <div key={image} className={`${classes.content}`}>
                    <img
                        ref={(element) => {
                            imageRefs.current[index] = element;
                        }}
                        src={image}
                        alt="Kråkeboller"
                        className={classes.parallaxImage}
                    />
                </div>
            ))}

            {!childrenFirst && (
                <div className={classes.content}>
                    <Center h="100%">
                        <div className={classes.infoContent}>
                            {children}
                        </div>
                    </Center>
                </div>
            )}
        </SimpleGrid>
    );
}