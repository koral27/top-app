import type { NextPage } from 'next';
import { Htag, Button } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Header</Htag>
      <Button theme="primary" arrow="right">
        Button
      </Button>
      <Button theme="ghost" arrow="down">
        Button
      </Button>
    </>
  );
};

export default Home;
