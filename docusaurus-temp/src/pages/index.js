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
          <div className={styles.armaniDivider}></div>
          <div className={styles.whyabText}>
            <h1>Why Armani Bot?</h1>
            <p>
              Armani Bot is named after our beloved feline supervisor, Armani. We chose this name to reflect our commitment to quality, 
              reliability, and a touch of feline charm. Just like Armani keeps a watchful eye on our development process, Armani Bot is 
              designed to be a vigilant and dependable companion for your Discord server. We wanted an app that could do everything the 
              other bots could do and more, with some added features to help us moderate and manage our server more effectively. Plus, 
              who doesn't love a good cat pun?
            </p>
          </div>
        </section>
        {/*__________*/}
        <div className={styles.kfDivider}></div>
        {/*_____Key Features Title_____*/}
        <section className={styles.keyfeaturesContainer}>
          <div className={styles.kftitleContainer}>
            <img className={styles.kftitle}
              src="/img/brand/key_features_txt.png"
              alt="Features List"
            />
          </div>
        </section>
        {/*__________*/}
        {/*_____First Feature_____*/}
        <section>
          <div className={styles.featureCard}>
            <img className={styles.notifImage}
              src="/img/brand/tandynoti_feature.png"
              alt="Twitch and Youtube Notify w/ LR"
            />
            <div className={styles.featureText}>
              <p>
                Get real-time notifications when you or your favorite favorite streamers go live or post a new upload on Twitch or YouTube. 
                Automatically assign a Live Role when your community goes live and separate them for visibility, and remove the role when
                they go offline.
              </p>
            </div>
          </div>
        </section>
        {/*__________*/}
        {/*_____Second Feature_____*/}
        <section>
          <div className={styles.featureCard2}>
            <div className={styles.reactText}>
              <p>
                Let your member self-assign roles by reacting to messages. Perfect for verification, interests, and more! Its simple to set up, and fun to use! 
              </p>
            </div>
            <img className={styles.reactImage}
              src="/img/brand/react_feature.png"
              alt=" Reaction Roles Feature"
            />
          </div>
        </section>
        {/*__________*/}
        {/*_____Third Feature_____*/}
        <section>
          <div className={styles.featureCard3}>
            <img className={styles.ticketImage}
              src="/img/brand/ticket_feature.png"
              alt="Ticketing Feature"
            />
            <div className={styles.ticketText}>
              <p>
                Streamline your support with an easy to use ticketing system. Members can create tickets, and staff can resolve them
                efficiently all in Discord. Fully customizable with custom titles and text boxes with questions tailored to your community!
              </p>
            </div>
          </div>
        </section>
        {/*__________*/}
        {/*_____Fourth Feature_____*/}
        <section>
          <div className={styles.featureCard4}>
            <div className={styles.assistText}>
              <p>
                Powerful tools to help you and your staff moderate, protect, and manage your server with ease. From advanced commands to smart automation.
                Get notified when auto actions are taken, or when a new member forgets to do onboarding!
              </p>
            </div>
            <img className={styles.assistImage}
              src="/img/brand/assist_feature.png"
              alt="Admin & Mod Assist Feature"
            />
          </div>
        </section>
        {/*__________*/}
        <div className={styles.kfDivider}></div>
        {/*_____Free and Premium Title_____*/}
        <div className={styles.plansDivider}></div>
        <section className={styles.plansContainer}>
          <img className={styles.plansImage}
            src="/img/brand/free_premium.png"
            alt="Free VS Premium"
          />
        </section>
      </main>
    </Layout>
  );
}

/*__________*/

