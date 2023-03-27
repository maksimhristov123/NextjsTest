import { Hero, Selection } from '../sections'
import Head from 'next/head'

const heroProps = {
  image: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
}

const selectionProps = {
  image: { src: '/img/background.png', alt: '' },
  title: 'Managed agency selection',
  description: 'Strengthen your onboarding process',
  videoImage: { src: '/img/video.png', alt: '', width: 1000, height: 1680 },
  cards: [
    {
      id: 1,
      url: '#',
      logo: { src: '/img/logo-brief.png', alt: '', w: 53, h: 48 },
      title: 'Brief',
      description: `Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.`,
    },
    {
      id: 2,
      url: '#',
      logo: { src: '/img/logo-search.png', alt: '', w: 53, h: 48 },
      title: 'Search',
      description: `In-depth agency <strong>search covering; criteria matching</strong>, door knocking and due-dilligence vetting.`,
    },
    {
      id: 3,
      url: '#',
      logo: { src: '/img/logo-pitch.png', alt: '', w: 53, h: 48 },
      title: 'Pitch',
      description: `Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.`,
    },
  ],
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        <Selection {...selectionProps} />
        {/** Other sections */}
      </div>
    </>
  )
}
