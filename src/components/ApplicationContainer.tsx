import { AppShell, Container } from '@mantine/core';
import { ReactNode } from 'react';
import { Footer } from './Footer/Footer';

type ApplicationContainerProps = {
  children: ReactNode;
};

export function ApplicationContainer({ children }: ApplicationContainerProps) {
  return (
    <AppShell>
      <AppShell.Main>
        <Container size="lg" py="md">
          {children}

        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
