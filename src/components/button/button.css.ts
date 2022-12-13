import { globalStyle, style } from '@vanilla-extract/css';

export const styles = style({
  backgroundColor: 'darkcyan',
  color: 'white',
  padding: '1rem 3rem',
  borderRadius: '0.5rem',
  border: 'none',
});

export const red = style({ backgroundColor: 'red' });
export const blue = style({ backgroundColor: 'blue' });
globalStyle(`button${styles}`, { backgroundColor: 'violet' });
export const green = style({ backgroundColor: 'green' });

