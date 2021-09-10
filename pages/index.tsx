import type { NextPage } from 'next';
import { Htag, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Header</Htag>
      <Tag>Ghost</Tag>
      <Tag color="primary">Ghost</Tag>
    </>
  );
};

export default Home;
