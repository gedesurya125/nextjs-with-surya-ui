import Head from 'next/head';

import { Box, GridTemplate, Paragraph } from '@gedesurya125/surya-ui';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridTemplate
        as="main"
        sx={{
          height: '10rem',
        }}
      >
        <Paragraph>Hello World</Paragraph>
      </GridTemplate>
    </>
  );
}
