export default function ServicesSection() {
  const services = [
    {
      icon: "ri-building-line",
      title: "House Extensions",
      description: "Single and double storey house extensions including kitchen extensions, side returns and rear extensions. Professional design and construction across High Wycombe and Buckinghamshire.",
      features: ["Single & Double Storey", "Kitchen Extensions", "Side Returns", "Rear Extensions"],
      image: "https://readdy.ai/api/search-image?query=Modern%20single%20storey%20house%20extension%20with%20large%20glass%20doors%20opening%20to%20garden%2C%20contemporary%20kitchen%20extension%20with%20bi-fold%20doors%2C%20clean%20architectural%20lines%2C%20High%20Wycombe%20Buckinghamshire%20style%20property%2C%20natural%20lighting%20and%20open%20plan%20design&width=400&height=300&seq=service-extensions&orientation=landscape"
    },
    {
      icon: "ri-home-8-line", 
      title: "Loft Conversions",
      description: "Convert unused loft space into functional rooms including bedrooms, home offices and bathrooms. Dormer and velux conversions with full structural work and insulation.",
      features: ["Dormer Conversions", "Velux Conversions", "Bedroom Conversions", "Home Office Spaces"],
      image: "https://readdy.ai/api/search-image?query=Bright%20modern%20loft%20conversion%20bedroom%20with%20velux%20windows%2C%20wooden%20floors%2C%20white%20walls%2C%20dormer%20window%2C%20converted%20attic%20space%2C%20cozy%20bedroom%20design%2C%20natural%20light%2C%20High%20Wycombe%20house%20conversion&width=400&height=300&seq=service-loft&orientation=landscape"
    },
    {
      icon: "ri-hammer-line",
      title: "Full Refurbishments", 
      description: "Complete house renovations including kitchens, bathrooms, electrical and plumbing. Whole house modernization projects with project management from start to finish.",
      features: ["Kitchen Refurbishment", "Bathroom Renovation", "Whole House Refurbs", "Electrical & Plumbing"],
      image: "https://readdy.ai/api/search-image?query=Before%20and%20after%20house%20renovation%20showing%20modern%20kitchen%20refurbishment%2C%20updated%20bathroom%2C%20contemporary%20interior%20design%2C%20complete%20house%20modernization%2C%20High%20Wycombe%20property%20renovation%2C%20quality%20craftsmanship&width=400&height=300&seq=service-refurb&orientation=landscape"
    },
    {
      icon: "ri-building-2-line",
      title: "Brickwork & External",
      description: "Specialist brickwork including repointing, structural repairs, garden walls and external building work. Emergency building services and weatherproofing solutions.",
      features: ["Brickwork & Repointing", "Structural Repairs", "Garden Walls", "Emergency Services"],
      image: "https://readdy.ai/api/search-image?query=Professional%20brickwork%20and%20repointing%20on%20traditional%20English%20house%2C%20skilled%20bricklayer%20working%20on%20exterior%20wall%20repair%2C%20High%20Wycombe%20Buckinghamshire%20building%20maintenance%2C%20quality%20masonry%20work%20and%20structural%20repairs&width=400&height=300&seq=service-brickwork&orientation=landscape"
    },
    {
      icon: "ri-tools-line",
      title: "Structural Work",
      description: "Load bearing wall removal, steel beam installation, foundation work and structural alterations. Building control approval and structural engineer consultation included.",
      features: ["Load Bearing Walls", "Steel Beam Installation", "Foundation Work", "Building Control"],
      image: "https://readdy.ai/api/search-image?query=Steel%20beam%20installation%20and%20structural%20building%20work%2C%20load%20bearing%20wall%20removal%2C%20construction%20site%20with%20structural%20engineering%2C%20professional%20building%20work%2C%20High%20Wycombe%20construction%20project%2C%20quality%20structural%20alterations&width=400&height=300&seq=service-structural&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Specialist Services
          </h2>
          <p className="text-lg sm:text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Professional <strong>construction services</strong> across <strong>High Wycombe</strong> and <strong>Buckinghamshire</strong>. 
            From <strong>house extensions</strong> to complete refurbishments, we deliver quality building work with full insurance and guarantees.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-accent-dark">
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={service.image}
                  alt={`${service.title} - Professional building services by LIV Construction in High Wycombe Buckinghamshire`}
                  title={`${service.title} - Expert construction work in Buckinghamshire`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">{service.title}</h3>
                </div>

                <p className="text-neutral mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-primary-light text-sm uppercase tracking-wide">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral">
                        <i className="ri-check-line text-primary mr-3 text-base"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <a
                  href="tel:+441494123456"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Get Free Quote
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Ready to Start Your Building Project?
          </h3>
          <p className="text-lg text-neutral mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your <strong>house extension</strong>, 
            <strong>loft conversion</strong> or <strong>refurbishment project</strong> in <strong>High Wycombe</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+441494123456"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Call: 01494 123 456
            </a>
            <a
              href="mailto:info@livconstructionbucks.co.uk"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Email for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
