import { useParams } from 'react-router-dom';
import { NotFoundPage } from './NotFound.page';
import { Herobanner } from '@/components/Herobanner/Herobanner';
import { GridGroup } from '@/components/GridGroup/GridGroup';
import { Heading } from '@/components/Heading/Heading';
import classes from './ProdukterStorrelse.module.scss';
import { Button } from '@mantine/core';

type Storrelse = 'liten' | 'medium' | 'stor';

const gridImages = [
    new URL('../assets/images/Kråkeboller.jpg', import.meta.url).href,
    new URL('../assets/images/kraake2.JPG', import.meta.url).href,
    new URL('../assets/images/bilde.avif', import.meta.url).href,
];


export function ProduktStorrelsePage() {

    function isStorrelse(value: string): value is Storrelse {
        return value === 'liten' || value === 'medium' || value === 'stor';
    }

    const heroImage = new URL('../assets/images/tareskog.jpg', import.meta.url).href;
    const { storrelse } = useParams<{ storrelse: string }>();

    if (!storrelse || !isStorrelse(storrelse)) {
        return <NotFoundPage></NotFoundPage>;
    }


    return (
        <div>
            <Herobanner image={heroImage}
                heroTitle='HAVGNISTEN LITEN' variant='secondary'
                infoTekst='Hver kråkeboller er unik i farge og fasong. Bildene er representative for det enedlige produktet, men kan likevel variere noe. Dersom du har spesifikke preferanser eller øsnker en større bestilling, så send gjerne en medling direkte.'
            >

            </Herobanner>
            <GridGroup childrenFirst images={gridImages}>
                <Heading variant='h3'
                >
                    Havgnisten Liten
                </Heading>
                <div className={classes.pris}>
                    <Heading variant='h4'
                    >
                        300.00 NOK
                    </Heading>
                </div>
                <ul>
                    <li className={classes.listItem}>Diameter ca 10cm</li>
                    <li className={classes.listItem}>Vekt ca 300gram</li>
                </ul>
                <Button>Kjøp nå</Button>
            </GridGroup>
        </div>
    );
}
