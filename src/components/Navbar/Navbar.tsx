import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';

const links = [
  { link: '/produkter', label: 'Produkter' },
  { link: '/baerekraft', label: 'Økosystem & Bærekraft' },
  { link: '/omMeg', label: 'Om Meg' },
  { link: '/kontakt', label: 'Kontakt' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(window.location.pathname);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <a href="/" className={classes.brand}>
          <img src={logo} alt="Havgnisten" className={classes.logo} />
         <span>HAVGNISTEN</span> 
        </a>
        <Group gap={5} className={classes.links} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
          aria-label="Toggle navigation"
        />
      </Container>

      {opened && (
        <div className={classes.mobileMenu}>
          <Container size="md" className={classes.mobileMenuInner}>
            {items}
          </Container>
        </div>
      )}
    </header>
  );
}