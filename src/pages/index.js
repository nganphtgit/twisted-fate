import Head from 'next/head';
import {
  Container,
} from '@mui/material';


export default function Home() {
  return (
  <>
      <Head>
        <title>Authentication</title>
      </Head>
      <Container maxWidth='sm'>
        <h3>Hello</h3>
      </Container>
    </>
  );
};
