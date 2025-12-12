import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGrid from './components/ProjectsGrid';
import { useSEO } from '../../utils/seo';

export default function ProjectsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';

  useSEO({
    title: 'Our Projects | House Extensions & Building Work Portfolio | LIV Construction High Wycombe',
    description: 'View our portfolio of completed house extensions, loft conversions, refurbishments and structural building projects in High Wycombe and Buckinghamshire. Real customer projects with 9.9/10 Checkatrade rating and verified reviews.',
    keywords: 'house extension projects High Wycombe, loft conversion portfolio, building work examples, construction projects Buckinghamshire, before and after extensions, completed building work',
    canonical: '/projects',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/projects#webpage`,
          "url": `${siteUrl}/projects`,
          "name": "Our Projects - LIV Construction LTD",
          "isPartOf": {
            "@id": `${siteUrl}/#website`
          },
          "about": {
            "@id": `${siteUrl}/#business`
          },
          "description": "Portfolio of completed house extensions, loft conversions and building projects",
          "inLanguage": "en-GB",
          "breadcrumb": {
            "@id": `${siteUrl}/projects#breadcrumb`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteUrl}/projects#breadcrumb`,
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
              "name": "Projects",
              "item": `${siteUrl}/projects`
            }
          ]
        },
        {
          "@type": "CollectionPage",
          "name": "LIV Construction Projects Portfolio",
          "description": "Portfolio of house extensions, loft conversions and building projects completed by LIV Construction in High Wycombe and Buckinghamshire",
          "creator": {
            "@type": "Organization",
            "name": "LIV Construction LTD",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "High Wycombe",
              "addressRegion": "Buckinghamshire",
              "addressCountry": "GB"
            }
          },
          "hasPart": [
            {
              "@type": "CreativeWork",
              "name": "Modern Kitchen Extension - High Wycombe HP6",
              "description": "Contemporary single-storey rear extension creating open-plan kitchen dining space with bi-fold doors and skylights",
              "keywords": "kitchen extension, single storey extension, open plan, High Wycombe",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "High Wycombe",
                  "postalCode": "HP6",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            },
            {
              "@type": "CreativeWork",
              "name": "Victorian House Refurbishment - High Wycombe HP4",
              "description": "Complete renovation of Victorian terrace including kitchen, bathroom and structural work with period features retained",
              "keywords": "house refurbishment, Victorian renovation, complete refurb, High Wycombe",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "High Wycombe",
                  "postalCode": "HP4",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            },
            {
              "@type": "CreativeWork",
              "name": "Loft Conversion - Amersham HP7",
              "description": "Dormer loft conversion creating master bedroom with ensuite bathroom and fitted wardrobes",
              "keywords": "loft conversion, dormer conversion, bedroom conversion, Amersham",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Amersham",
                  "postalCode": "HP7",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            },
            {
              "@type": "CreativeWork",
              "name": "Structural Extension Work - Beaconsfield HP9",
              "description": "Complex structural work including steel beam installation and load bearing wall removal for open plan living",
              "keywords": "structural work, steel beams, load bearing walls, Beaconsfield",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Beaconsfield",
                  "postalCode": "HP9",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            },
            {
              "@type": "CreativeWork",
              "name": "Two Storey Extension - Marlow HP8",
              "description": "Double storey side extension adding ground floor kitchen and first floor bedroom with ensuite",
              "keywords": "two storey extension, double storey, side extension, Marlow",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Marlow",
                  "postalCode": "HP8",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            },
            {
              "@type": "CreativeWork",
              "name": "Garage Conversion - Chesham HP5",
              "description": "Garage converted into home office with insulation, electrics and heating installation",
              "keywords": "garage conversion, home office, Chesham",
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chesham",
                  "postalCode": "HP5",
                  "addressRegion": "Buckinghamshire",
                  "addressCountry": "GB"
                }
              }
            }
          ],
          "audience": {
            "@type": "Audience",
            "geographicArea": {
              "@type": "State",
              "name": "Buckinghamshire"
            }
          }
        }
      ]
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
