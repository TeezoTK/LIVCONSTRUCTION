import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Do you handle planning permission and building control?",
      answer: "Yes, we can manage the entire process. We work with trusted architects and handle all planning applications, building regulations submissions, and liaising with building control inspectors throughout your project."
    },
    {
      id: 2,
      question: "How far do you travel from High Wycombe?",
      answer: "We cover High Wycombe, Marlow, Beaconsfield, Chesham, Amersham, Great Missenden and surrounding Buckinghamshire areas. Generally within a 15-mile radius of High Wycombe for larger projects."
    },
    {
      id: 3,
      question: "What size projects do you usually take on?",
      answer: "We focus on substantial projects from £20,000 upwards - extensions, loft conversions, full refurbishments, and structural alterations. We don't typically take on small repairs or maintenance jobs."
    },
    {
      id: 4,
      question: "Do you work with architects, or can you recommend one?",
      answer: "We work closely with several excellent local architects and can recommend the right one for your project. We can also work from plans you already have from your chosen architect or designer."
    },
    {
      id: 5,
      question: "How long does a typical extension take?",
      answer: "A single-storey rear extension typically takes 6-10 weeks, while a two-storey extension takes 10-16 weeks. Loft conversions usually take 4-8 weeks. We'll give you a detailed timeline during your quote."
    },
    {
      id: 6,
      question: "Are you insured and do you provide guarantees?",
      answer: "Yes, we carry full public liability insurance and all structural work comes with a 10-year guarantee. We're also Checkatrade verified and maintain high standards throughout every project."
    },
    {
      id: 7,
      question: "Can you help with design ideas for our project?",
      answer: "Absolutely. We have decades of experience and can suggest practical solutions to maximize space and value. We'll discuss design options during your free site visit and recommend architects when needed."
    },
    {
      id: 8,
      question: "What makes LIV different from other builders?",
      answer: "We specialize in larger residential projects and maintain exceptionally tidy sites. Our team includes qualified structural engineers, and we project-manage everything so you deal with one company throughout."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Quick answers to common questions about our building services
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-800"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <i className={`ri-${openFAQ === faq.id ? 'subtract' : 'add'}-line text-slate-800 text-xl`}></i>
                    </div>
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
