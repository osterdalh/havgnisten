import { Center } from '@mantine/core';
import classes from './Divider.module.scss';

interface DividerProps {
    text: string
}

export function Divider({ text }: DividerProps) {
  return (
    <div className={classes.container}>
      <Center h="100%">
        {text}
      </Center>
    </div>
  );
}