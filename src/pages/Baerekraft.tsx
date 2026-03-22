import { ApplicationContainer } from '@/components/ApplicationContainer';
import { Divider } from '@/components/Divider/Divider';
import { GridGroup } from '@/components/GridGroup/GridGroup';
import { Heading } from '@/components/Heading/Heading';
import { Herobanner } from '@/components/Herobanner/Herobanner';
import { InfoText } from '@/components/InfoText/InfoText';
import { Navbar } from '@/components/Navbar/Navbar';

const heroImage = new URL('../assets/images/kraake2.JPG', import.meta.url).href;
const gridImages = [
    new URL('../assets/images/Kråkeboller.jpg', import.meta.url).href,
];

export function Baerekraft() {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 48em)').matches;

    return (
        <>
            <Herobanner
                heroTitle='Økosystem & Bærekraft'
                variant='secondary'
                infoTitle='Unikt og særegent'
                infoTekst='Kråkebollene går gjennom en lang og tidkrevende prosess fra høsting til ferdig produkt. '
                image={heroImage}>

            </Herobanner>
            <GridGroup childrenFirst={isMobile ? true : false} images={gridImages}>
                <InfoText
                title=''
                texts={['Langs store deler av norskekysten har økosystemet under vann forandret seg dramatisk de siste tiårene. Der det tidligere vokste tette skoger av tare og sjøgress, finner man i dag mange steder store områder med nesten bar havbunn. En viktig årsak til dette er en kraftig økning i kråkeboller. Når kråkebollene blir for mange, spiser de nesten all vegetasjon på havbunnen. Resultatet er det som ofte kalles en undervannsørken – et område der lite annet liv klarer å etablere seg.']}
                />

            </GridGroup>
            <GridGroup images={gridImages}>
                <Heading variant='h3'
                >
                    Havgnisten Liten
                </Heading>
                <div >
                    <Heading variant='h4'
                    >
                        300.00 NOK
                    </Heading>
                </div>
                <ul>
                    <li >Diameter ca 10cm</li>
                    <li >Vekt ca 300gram</li>
                </ul>
            </GridGroup>
            <GridGroup childrenFirst images={gridImages}>
                <Heading variant='h3'
                >
                    Havgnisten Liten
                </Heading>
                <div >
                    <Heading variant='h4'
                    >
                        300.00 NOK
                    </Heading>
                </div>
                <ul>
                    <li >Diameter ca 10cm</li>
                    <li >Vekt ca 300gram</li>
                </ul>
            </GridGroup>

        </>
    );
}