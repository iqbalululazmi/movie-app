import MainLayout from '@layouts/MainLayout'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  )
}
export default MyApp
