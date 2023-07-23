import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#000', background: '#3399FF', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#FF0000', background: '#FFFF66', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography pt="15px" ml="20px" color="#003366" fontWeight="bold" sx={{ fontSize: { lg: '23px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" textAlign="center" display="flex-row" flexWrap="wrap" justifyContent="center" alignItems="center">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;