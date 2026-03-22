import { Center, Overlay, Title } from '@mantine/core';
import classes from './Herobanner.module.scss';
import { Heading } from '../Heading/Heading';

interface HerobannerProps {
  image: string;
  variant: 'primary' | 'secondary';
  heroTitle: string;
  infoTitle?: string;
  infoTekst?: string
}

export function Herobanner({ image, variant, infoTekst, infoTitle, heroTitle }: HerobannerProps) {
  return (
    <>
      <div
        className={`${classes.wrapper} ${variant === 'secondary' ? classes.secondaryWrapper : ''}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Heading variant='h1'> {heroTitle}</Heading>
        </div>

      </div>
      {variant === 'secondary' && (infoTitle || infoTekst) &&
        <div className={classes.variant}>
            <div className={classes.titleAndText}>
              <Heading variant='h2'>
                {infoTitle}
              </Heading>
              <p>
                {infoTekst}
              </p>
            </div>
        </div>
      }
    </>
  );
}