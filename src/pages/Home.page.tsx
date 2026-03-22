import { ApplicationContainer } from '@/components/ApplicationContainer';
import { Divider } from '@/components/Divider/Divider';
import { GridGroup } from '@/components/GridGroup/GridGroup';
import { Herobanner } from '@/components/Herobanner/Herobanner';
import { Navbar } from '@/components/Navbar/Navbar';

const heroImage = new URL('../assets/images/kraake2.JPG', import.meta.url).href;
const gridImages = [
  new URL('../assets/images/Kråkeboller.jpg', import.meta.url).href,
  new URL('../assets/images/kraake2.JPG', import.meta.url).href,
  new URL('../assets/images/bilde.avif', import.meta.url).href,
];

export function HomePage() {
  return (
    <>
    <Herobanner heroTitle='HAVGNISTEN' variant='primary' image={heroImage}></Herobanner>

      <Divider text='LAGET FOR HÅND PÅ HELGELAND.'></Divider>
      <GridGroup images={gridImages}>
        Handle her
      </GridGroup>

    </>
  );
}