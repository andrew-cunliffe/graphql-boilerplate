import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/logo.png';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home description" />
            </Head>

            <main>
                <h1 className="text-3xl">Boilerplate</h1>
                <p>Hello World</p>
                <Image src={logo} height={70} width={200} />
            </main>
        </div>
    );
};

export default Home;
