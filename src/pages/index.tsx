import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import { Button } from '@mui/material';
import { GetStaticProps } from 'next';
import Presentation from '@partials/index/_presentation';
import Advantages from '@partials/index/_advantages';
import FrequentQuestions from '@partials/index/_frequent-questions';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '',
    },
  };
};

export default function Index() {
  return <div>
    <Presentation />
    <Advantages />
    <FrequentQuestions />
  </div>;
}
