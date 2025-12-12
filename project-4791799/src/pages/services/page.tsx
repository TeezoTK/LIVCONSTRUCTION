import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import { useSEO } from '../../utils/seo';

export default function ServicesPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';

  useSEO({
    title: 'Construction Services | House Extensions, Loft Conversions | LIV Construction High Wycombe',
    description: 'Comprehensive construction services in High Wycombe: house extensions, loft conversions, garage conversions, basement conversions, full refurbishments, structural work and brickwork. Professional builders with 9.9/10 Checkatrade rating serving Buckinghamshire.',
    keywords: 'construction services High Wycombe, house extension builders, loft conversion specialists, garage conversion, basement conversion, refurbishment contractors, structural building work, brickwork services Buckinghamshire',
    canonical: '/services',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/services#webpage`,
          "url": `${siteUrl}/services`,
          "name": "Construction Services - LIV Construction LTD",
          "isPartOf": {
            "@id": `${siteUrl}/#website`
          },
          "about": {
            "@id": `${siteUrl}/#business`
          },
          "description": "Comprehensive construction services in High Wycombe and Buckinghamshire",
          "inLanguage": "en-GB",
          "breadcrumb": {
            "@id": `${siteUrl}/services#breadcrumb`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteUrl}/services#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": `${siteUrl}/services`
            }
          ]
        },
        {
          "@type": "ItemList",
          "name": "Construction Services",
          "description": "Professional construction services offered by LIV Construction in High Wycombe and Buckinghamshire",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Service",
                "name": "House Extensions",
                "description": "Single and double storey house extensions including kitchen extensions and side returns",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Service",
                "name": "Loft Conversions",
                "description": "Converting unused loft space into bedrooms, home offices or bathrooms",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Service",
                "name": "Full Refurbishments",
                "description": "Complete house renovations including kitchens, bathrooms and whole house modernization",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Service",
                "name": "Garage Conversions",
                "description": "Converting garages into living spaces, home offices or additional bedrooms",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Service",
                "name": "Structural Building Work",
                "description": "Load bearing wall removal, beam installations, foundation work and structural repairs",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "Service",
                "name": "Basement Conversions",
                "description": "Converting basements into additional living space, home cinemas or utility rooms",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 7,
              "item": {
                "@type": "Service",
                "name": "Brickwork and Repointing",
                "description": "Professional brickwork, repointing and masonry repairs",
                "provider": {
                  "@type": "Organization",
                  "name": "LIV Construction LTD"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Buckinghamshire"
                }
              }
            }
          ]
        }
      ]
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
      </main>
      <Footer />
    </div>
  );
}
