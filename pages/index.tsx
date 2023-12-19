import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';
import Navbar from '@/components/Navbar/navbar.component';
import HomeHeader from '@/sections/HomeHeader/HomeHeader.section';
import Footer from '@/sections/Footer/footer.section';
import Testimonial from '@/sections/Testimonial/Testimonial.section';
import Services from '@/sections/Services/services.section';
import Features from '@/sections/Features/Features.section';
import Seo from '@/components/seo/Seo';
import Shared from '@/sections/Shared/Shared.section';
import Mission from '@/sections/Mission/mission.section';
import Pathology from '@/sections/Pathologies/pathologies.section';
import { UseScrollPosition } from '@/utils/UseScrollPosition';

const Index: NextPageWithLayout = (): JSX.Element => {
  const position = UseScrollPosition();
  return (
    <div>
      <Seo title={'Mengu Medicals'} description={'Mengu Medicals Home page'} siteName={'Mengu Medicals'} />

      <main className='relative'>
        <Navbar position={position} />
        <HomeHeader />
        <Shared />
        <Mission />
        <Services />
        <Features />
        <Pathology />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}

export default Index
