import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, url }) {
  const defaultTitle = 'Nirmalya Buildcon Pvt Ltd';
  const defaultDescription = 'Nirmalya Buildcon is a premier real estate developer in Bhubaneswar. We build high-end residential apartments and luxury villas.';
  const defaultUrl = 'https://www.nirmalyabuildcon.com';

  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title ? `${title}` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      
      { /* OpenGraph tags */ }
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {url && <meta property="og:url" content={`${defaultUrl}${url}`} />}
      
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name || 'Nirmalya Buildcon'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}
