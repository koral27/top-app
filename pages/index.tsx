import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios'
import { Htag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

const Home: NextPage<HomeProps> = ({ menu }): JSX.Element => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Header</Htag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu && menu.map(item => <li key={item._id.secondCategory} >{item._id.secondCategory}</li>)}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}