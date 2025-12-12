import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { useSEO } from '../../utils/seo';

export default function HomePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || '';

  useSEO({
    title: 'LIV Construction LTD | House Extensions, Loft Conversions & Structural Building Work | High Wycombe Buckinghamshire',
    description: 'Professional builders in High Wycombe specializing in house extensions, loft conversions, refurbishments and structural building work. 9.9/10 Checkatrade rating with 69+ verified reviews. Fully insured with 10-year guarantee. Expert construction services across Buckinghamshire including basement conversions, garage conversions, brickwork and emergency building repairs.',
    keywords: 'house extensions High Wycombe, loft conversions Buckinghamshire, structural building work, refurbishments, builders High Wycombe, construction company Buckinghamshire, garage conversions, basement conversions, brickwork specialists, building contractors',
    canonical: '/',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          "url": `${siteUrl}/`,
          "name": "LIV Construction LTD | Professional Builders High Wycombe",
          "isPartOf": {
            "@id": `${siteUrl}/#website`
          },
          "about": {
            "@id": `${siteUrl}/#business`
          },
          "description": "Professional construction company in High Wycombe specializing in house extensions, loft conversions and structural building work",
          "inLanguage": "en-GB"
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": `${siteUrl}/`,
          "name": "LIV Construction LTD",
          "description": "Professional Builders in High Wycombe Buckinghamshire",
          "publisher": {
            "@id": `${siteUrl}/#business`
          },
          "inLanguage": "en-GB"
        }
      ]
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsShowcase />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
