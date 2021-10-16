import MainLayout from '@layouts/MainLayout'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
export default MyApp
