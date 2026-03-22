import { Center, Overlay, Title } from '@mantine/core';
import classes from './Herobanner.module.scss';
import { Heading } from '../Heading/Heading';

interface InfoTextProps {
  title: string;
  texts: string[];
}

export function InfoText({ title, texts}: InfoTextProps) {
  return (
    <>
     <Heading variant='h2'>{title}</Heading>
     {texts.map(text => <p>{text}</p>)}
    </>
  );
}