import Head from 'next/Head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link"

const username = 'jojo'
export const siteTitle = 'Next.js sample website'

function Layout({children, home, title}) {
  return (
    <div className={styles.container}>
      <Head>
        {title&& <title>{title}</title>}
        <link rel="icon" href="favicon.ico"/>
        <meta name="description"
              content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="images/me.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={username}
            />
            <h1 className={utilStyles.heading2Xl}>{username}</h1>
          </>
        ) : (
          <>
            <Link href={"/"}>
              <a>
                <img
                  src="/images/me.jpeg"
                  alt={username}
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href={"/"}>
                <a className={utilStyles.colorInherit}>{username}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href={"/"}>
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
