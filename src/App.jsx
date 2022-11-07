import { Typography, Box } from '@mui/material';
import Feild from './Field';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" width="80%" my="30px">
        Цель игры: Расставить фишки в три вертикальных ряда соответственно
        цветам, стоящими над полем.
      </Typography>
      <Feild />
    </Box>
  );
}

export default App;
