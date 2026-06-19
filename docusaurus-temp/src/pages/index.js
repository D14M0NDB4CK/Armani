import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

/*_____Homepage Hero Banner w/ Two Buttons_____*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg coming-soon-button"
            to="#">
            Invite Armani
          </Link>

          <Link
            className="button button--secondary button--lg"
            href="https://discord.gg/rbhfHZjGNz">
            Join Us!
          </Link>
        </div>
      </div>
    </header>
  );
}

/*__________*/

/*_____Website Tab & Homepage Customization_____*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} ~ mrrrrrow!  (=^･ω･^=)`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/*_____Welcome Section_____*/}
        <section style={{ padding: '4rem' , textAlign: 'center' }}>
          <Heading as="h1">Welcome to Armani Bot!</Heading>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            Your purr-fect companion for all things Discord! 🐾
          </p>
        </section>
        {/*_____Meet Armani Section_____*/}
        <section className={styles.meetArmani}>
          <img
           src="/img/armani/meet_armani.jpg"
            alt="Armani"
            className={styles.armaniImage}
          />
            <div className={styles.meetArmaniText}>
              <h1>Meet Armani</h1>
                <p>
                  Armani is the official mascot of Armani Bot. Known for supervising
                  development from the keyboard, demanding treats during coding sessions,
                  and maintaining strict quality control standards, Armani keeps the team
                  focused while providing endless entertainment.
                </p>
            </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

/*__________*/

