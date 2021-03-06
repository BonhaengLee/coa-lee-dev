import React from 'react'
import Head from 'next/head'
import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta
          name='google-site-verification'
          content='8WzA0piVXHSmKH-wSl-1FFx70aQXrmG2YH803CqtBug'
        />

        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          <img src='/error.png' alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </>
  )
}
