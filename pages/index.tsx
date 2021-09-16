import type { NextPage } from 'next';
import { useState } from 'react';
import { Htag, Rating } from '../components';

const Home: NextPage = (): JSX.Element => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Header</Htag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default Home;
