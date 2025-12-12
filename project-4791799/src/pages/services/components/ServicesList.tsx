export default function ServicesList() {
  const services = [
    {
      id: 1,
      title: "Extensions & Conversions",
      icon: "ri-building-line",
      description: "From single-storey rear extensions to complex multi-storey builds, garage conversions, and basement conversions. We create additional living space that seamlessly integrates with your existing property.",
      features: [
        "Single and double-storey extensions",
        "Garage conversions to living space", 
        "Basement and cellar conversions",
        "Garden studios and outbuildings",
        "Foundation work and structural calculations"
      ],
      timeline: "6-14 weeks",
      whenItMakesSense: "Perfect for growing families needing more space, or homeowners looking to create open-plan living areas. Extensions and conversions typically add 15-25% to property value when done well.",
      whyChooseLIV: "Our structural expertise means we can handle complex builds others won't touch. We manage all aspects from planning applications to building control, keeping your project on track.",
      image: "https://readdy.ai/api/search-image?query=Modern%20house%20extension%20with%20large%20glass%20sliding%20doors%20opening%20to%20garden%2C%20contemporary%20architectural%20design%20with%20natural%20materials%20and%20steel%20beam%20installation%2C%20professional%20construction%20photography&width=800&height=500&seq=serv101&orientation=landscape"
    },
    {
      id: 2,
      title: "Loft Conversions", 
      icon: "ri-home-line",
      description: "Transform unused loft space into valuable living areas. We handle everything from planning permission to final decoration, creating bedrooms, offices, or studios with proper insulation and heating.",
      features: [
        "Bedroom and en-suite conversions",
        "Home office and studio spaces",
        "Dormer windows and rooflight installation", 
        "New staircases and structural modifications",
        "Full electrical and plumbing installation"
      ],
      timeline: "4-8 weeks", 
      whenItMakesSense: "Ideal when you need extra bedrooms but can't extend outward due to space constraints or planning restrictions. Often the most cost-effective way to add significant living space.",
      whyChooseLIV: "We specialize in maximizing head height and usable space through careful dormer design. Our team includes qualified roofers and structural engineers to ensure quality throughout.",
      image: "https://readdy.ai/api/search-image?query=Bright%20loft%20conversion%20bedroom%20with%20dormer%20windows%20and%20velux%20skylights%2C%20contemporary%20interior%20design%20with%20built-in%20storage%20and%20en-suite%20bathroom%2C%20professional%20interior%20photography&width=800&height=500&seq=serv201&orientation=landscape"
    },
    {
      id: 3,
      title: "Full Refurbishments & General Building",
      icon: "ri-tools-line", 
      description: "Complete property renovations and general building work. We coordinate all trades for full house makeovers, fire and flood renovation, and comprehensive building projects including sustainable construction methods.",
      features: [
        "Complete house renovations and modernization",
        "Fire and flood damage restoration",
        "Sustainable construction techniques",
        "Workshop design and construction",
        "Emergency builder services available"
      ],
      timeline: "8-20 weeks",
      whenItMakesSense: "Best for properties needing comprehensive updating, fire/flood damage repair, or when you want to completely modernize. Often more cost-effective than moving house.",
      whyChooseLIV: "We project-manage the entire renovation, coordinating all specialists and trades. You deal with one company throughout, with emergency services available when needed.",
      image: "https://readdy.ai/api/search-image?query=Complete%20house%20refurbishment%20showing%20modern%20interior%20after%20full%20renovation%2C%20contemporary%20design%20with%20natural%20light%2C%20professional%20interior%20photography%20showing%20transformation%20and%20quality%20craftsmanship&width=800&height=500&seq=serv301&orientation=landscape"
    },
    {
      id: 4,
      title: "Brickwork, Cladding & Structural Work", 
      icon: "ri-hammer-line",
      description: "Specialist brickwork, structural repairs, and external improvements. From repointing and cladding to concrete repairs, wall tie replacements, and emergency structural work.",
      features: [
        "Brick repointing and structural brickwork",
        "External wall cladding and mastic sealant", 
        "Concrete structural repairs and core drilling",
        "Wall tie replacements and brick repairs",
        "Emergency bricklayer services"
      ],
      timeline: "1-6 weeks",
      whenItMakesSense: "Essential for maintaining property value and structural integrity. Repointing protects the building structure, while structural repairs ensure long-term safety and stability.",
      whyChooseLIV: "Our bricklayers have decades of experience with emergency callouts available. We use traditional techniques and quality materials to ensure structural work stands the test of time.",
      image: "https://readdy.ai/api/search-image?query=Professional%20brick%20repointing%20and%20structural%20repair%20work%20on%20house%20exterior%2C%20skilled%20craftsman%20working%20on%20traditional%20brickwork%20with%20modern%20tools%2C%20construction%20photography%20showing%20quality%20workmanship&width=800&height=500&seq=serv401&orientation=landscape"
    },
    {
      id: 5,
      title: "Specialist Construction Services",
      icon: "ri-building-2-line",
      description: "Agricultural buildings, equestrian stables, car ports, concrete garages, and commercial workshop construction. Specialized building services for unique requirements.",
      features: [
        "Agricultural building construction",
        "Equestrian stables and facilities",
        "Car ports and concrete garages",
        "Warehouse racking installation",
        "Concreting and foundation work"
      ],
      timeline: "2-12 weeks",
      whenItMakesSense: "Perfect for rural properties, equestrian facilities, or commercial spaces requiring specialized construction. Ideal for businesses needing purpose-built structures.",
      whyChooseLIV: "We understand the unique requirements of agricultural and commercial construction, with experience in specialized building techniques and materials for demanding environments.",
      image: "https://readdy.ai/api/search-image?query=Modern%20agricultural%20building%20and%20equestrian%20stable%20construction%2C%20professional%20commercial%20building%20work%20with%20steel%20frame%20and%20concrete%20foundations%2C%20construction%20site%20photography&width=800&height=500&seq=serv501&orientation=landscape"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                  <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-8 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <i className={`${service.icon} text-slate-800 text-2xl`}></i>
                      </div>
                      <div className="text-sm text-slate-800 font-medium uppercase tracking-wider">
                        Service {service.id}
                      </div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <i className="ri-check-line text-slate-800 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Typical Timeline</h4>
                    <p className="text-xl font-bold text-gray-900">{service.timeline}</p>
                  </div>

                  {/* When it makes sense */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">When This Makes Sense:</h4>
                    <p className="text-gray-700 leading-relaxed">{service.whenItMakesSense}</p>
                  </div>

                  {/* Why choose LIV */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Choose LIV:</h4>
                    <p className="text-gray-700 leading-relaxed">{service.whyChooseLIV}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-slate-50 rounded-3xl p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project is different. Book a free site visit and we'll discuss 
              your options, provide honest advice, and give you a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="inline-flex items-center justify-center space-x-3 bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-900 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Request Free Quote</span>
                <i className="ri-arrow-right-line"></i>
              </a>
              <a
                href="tel:+441494123456"
                className="inline-flex items-center justify-center space-x-3 border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line"></i>
                <span>Call: 01494 123 456</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
