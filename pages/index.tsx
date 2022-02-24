import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
//import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
<p className="mb-4">GMONKS An NFT project from Indonesia, a collection of 333 MONKS on the <a href="https://www.bnbchain.world/en" rel="noopener noreferrer" target="_blank" className="font-bold">Binance Smart Chain</a>. GMONKS complies with the <a href="https://academy.binance.com/en/glossary/bep-721" rel="noopener noreferrer" target="_blank" className="font-bold">BEP721 standard</a>, so they are all as unique as we are.</p>
<p>You can buy MONKS with <a href="https://tofunft.com/user/0xBE364cc7182d90C1C0C16c8c34212C474be8B736/"><span className="text-pink-500 font-normal underline">tofuNFT</span> </a></p>
        </Prose>
            
      </div>
	  
	  
      <div className="bg-gray-800 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
