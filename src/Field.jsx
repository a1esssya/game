import { Box, Grid, Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

export default function Feild() {
  const [whatIsActive, setWhatIsActive] = useState('');
  const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    width: '100px',
    height: '100px',
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    width: '100px',
    height: '100px',
    color: theme.palette.text.secondary,
  }));
  const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.success.main,
    textAlign: 'center',
    width: '100px',
    height: '100px',
    color: theme.palette.text.secondary,
  }));
  const BlockedItem = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    textAlign: 'center',
    width: '100px',
    height: '100px',
    color: 'white',
  }));
  const EmptyItem = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    textAlign: 'center',
    width: '100px',
    height: '100px',
    color: theme.palette.text.secondary,
  }));

  const matrix = [];

  for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = `${i + 1}${j + 1}`;
    }
  }

  const random = {
    nul: 0,
    one: 0,
    two: 0,

    getRandomInt() {
      const randNum = Math.floor(Math.random() * 3);
      if (randNum === 0) {
        random.nul++;
        return random.nul > 5 ? random.getRandomInt() : randNum;
      }
      if (randNum === 1) {
        random.one++;
        return random.one > 5 ? random.getRandomInt() : randNum;
      }
      if (randNum === 2) {
        random.two++;
        return random.two > 5 ? random.getRandomInt() : randNum;
      }
    },
  };

  return (
    <Box elevation={3} sx={{ padding: '20px', backgroundColor: 'white' }}>
      <Grid container spacing={1} columns={5} width="600px">
        {matrix.map((row, y) =>
          row.map((item, x) => {
            if (!(y % 2) && x % 2) {
              return (
                <Grid item xs={1} key={`${item}b`}>
                  <BlockedItem
                    id={`${item}b`}
                    onClick={(e) => {
                      setWhatIsActive(e.target.attributes.id.value);
                    }}
                  >
                    {item}
                  </BlockedItem>
                </Grid>
              );
            }
            if (y % 2 && x % 2) {
              return (
                <Grid item xs={1} key={`${item}e`} id={`${item}e`}>
                  <EmptyItem>{item}</EmptyItem>
                </Grid>
              );
            }
            const variant = random.getRandomInt();

            if (variant === 0) {
              return (
                <Grid item xs={1} key={`${item}1`} id={`${item}1`}>
                  <Item1>{item}</Item1>
                </Grid>
              );
            }
            if (variant === 1) {
              return (
                <Grid item xs={1} key={`${item}2`} id={`${item}2`}>
                  <Item2>{item}</Item2>
                </Grid>
              );
            }
            if (variant === 2) {
              return (
                <Grid item xs={1} key={`${item}3`} id={`${item}3`}>
                  <Item3>{item}</Item3>
                </Grid>
              );
            }
          })
        )}
      </Grid>
    </Box>
  );
}
