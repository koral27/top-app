import type { NextPage } from 'next';
import { Htag, P } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Header</Htag>
      <P size="S">Text</P>
      <P>Text</P>
      <P size="L">Text</P>
    </>
  );
};

export default Home;
