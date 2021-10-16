import { seo } from 'config'

const CONFIG_SEO = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seo.canonical,
    site_name: seo.title,
  },
}

export default CONFIG_SEO
