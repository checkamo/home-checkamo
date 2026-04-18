export function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Checkamo',
    url: 'https://www.checkamo.com',
    logo: 'https://www.checkamo.com/images/logo.png',
    description:
      'Verification services platform in Nigeria. Connect with local verifiers for properties, products, documents, and more.',
    sameAs: [
      'https://twitter.com/checkamo',
      'https://instagram.com/checkamo',
      'https://linkedin.com/company/checkamo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@checkamo.com',
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: 'English',
    },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Verification Services',
    name: 'Checkamo Verification',
    provider: {
      '@type': 'Organization',
      name: 'Checkamo',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    description:
      'On-demand verification of properties, products, documents, and identities across Nigeria.',
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.checkamo.com',
    name: 'Checkamo',
    description: 'Nigeria\'s trusted verification platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://app.checkamo.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}