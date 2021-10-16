import { seo } from 'config'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const title = `Iqbal | ${seo.title}`
  const description = seo.description

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}tmdb.svg`,
              alt: 'the movie db',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
