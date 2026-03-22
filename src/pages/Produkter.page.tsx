import { ApplicationContainer } from '@/components/ApplicationContainer';
import { Divider } from '@/components/Divider/Divider';
import { GridGroup } from '@/components/GridGroup/GridGroup';
import { Herobanner } from '@/components/Herobanner/Herobanner';
import { Navbar } from '@/components/Navbar/Navbar';
import classes from './Produkter.module.scss';
import { Grid } from '@mantine/core';
import { Card } from '@/components/Card/Card';
import { routes } from './routes';


export function Produkter() {
  const heroImage = new URL('../assets/images/tareskog.jpg', import.meta.url).href;
  const kbLiten = new URL('../assets/images/kbLiten.jpg', import.meta.url).href;

  return (
    <div className={classes.pageContainer}>
      <Herobanner
        heroTitle='produkter'
        variant='secondary'
        infoTitle='Unikt og særegent'
        infoTekst='Kråkebollene går gjennom en lang og tidkrevende prosess fra høsting til ferdig produkt. '
        image={heroImage}>

      </Herobanner>

      <Grid className={classes.gridContainer}>
        <Grid.Col span={4}>
          <a href={`${routes.produkter}/liten`}>
            <Card title={'Havgnisten Liten'} text={'300kr'} image={kbLiten}></Card>
          </a>
        </Grid.Col>
        <Grid.Col span={4}>
          <a href={`${routes.produkter}/medium`}>
            <Card title={'Havgnisten Medium'} text={'400kr'} image={kbLiten}></Card>
          </a>
        </Grid.Col>
        <Grid.Col span={4}>
          <a href={`${routes.produkter}/stor`}>
            <Card title={'Havgnisten Stor'} text={'550kr'} image={kbLiten}></Card>
          </a>
        </Grid.Col>
      </Grid>

    </div>
  );
}