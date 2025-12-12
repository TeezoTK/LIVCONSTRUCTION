import { useState } from 'react';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Extensions', 'Loft Conversions', 'Refurbishments', 'Structural Work'];

  const projects = [
    {
      id: 1,
      title: "Victorian House Extension",
      location: "High Wycombe",
      category: "Extensions",
      budget: "£45,000",
      timeline: "8 weeks",
      description: "A stunning two-storey rear extension creating an open-plan kitchen-dining area with bi-fold doors to the garden.",
      challenge: "Working with Victorian-era foundations required specialist underpinning techniques to ensure structural integrity.",
      features: ["Structural alterations", "New foundations", "Bi-fold doors", "Open-plan design"],
      images: [
        "https://readdy.ai/api/search-image?query=Victorian%20house%20with%20modern%20two%20storey%20rear%20extension%20featuring%20large%20glass%20doors%20and%20contemporary%20design%2C%20architectural%20photography%20showing%20before%20and%20after%20contrast&width=600&height=400&seq=proj101&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Interior%20view%20of%20modern%20kitchen%20extension%20with%20island%20and%20bi-fold%20doors%20to%20garden%2C%20bright%20contemporary%20design%20with%20natural%20materials&width=600&height=400&seq=proj102&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Construction%20progress%20showing%20steel%20beam%20installation%20and%20structural%20work%20in%20house%20extension%2C%20professional%20building%20site%20photography&width=600&height=400&seq=proj103&orientation=landscape"
      ]
    },
    {
      id: 2,
      title: "Master Bedroom Loft Conversion", 
      location: "Marlow",
      category: "Loft Conversions",
      budget: "£28,000",
      timeline: "6 weeks",
      description: "Transformed an unused loft space into a master bedroom with en-suite bathroom and fitted wardrobes.",
      challenge: "Limited headroom required careful planning of dormer placement to maximize usable space while maintaining character.",
      features: ["Dormer windows", "En-suite bathroom", "Fitted storage", "Velux skylights"],
      images: [
        "https://readdy.ai/api/search-image?query=Modern%20loft%20conversion%20bedroom%20with%20dormer%20windows%20and%20en-suite%20bathroom%2C%20bright%20natural%20lighting%2C%20contemporary%20interior%20design&width=600&height=400&seq=proj201&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Loft%20conversion%20bathroom%20with%20skylight%20windows%2C%20modern%20white%20fixtures%20and%20tiling%2C%20compact%20efficient%20design&width=600&height=400&seq=proj202&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Loft%20conversion%20construction%20showing%20roof%20timbers%20and%20dormer%20window%20installation%2C%20building%20work%20in%20progress&width=600&height=400&seq=proj203&orientation=landscape"
      ]
    },
    {
      id: 3,
      title: "Complete House Refurbishment",
      location: "Beaconsfield", 
      category: "Refurbishments",
      budget: "£65,000",
      timeline: "12 weeks",
      description: "Full renovation of a 1980s property including new kitchen, bathrooms, flooring, and complete redecoration.",
      challenge: "Coordinating multiple trades while family remained in occupation required careful phasing of work.",
      features: ["New kitchen & bathrooms", "Electrical rewiring", "Central heating", "Flooring throughout"],
      images: [
        "https://readdy.ai/api/search-image?query=Complete%20house%20refurbishment%20interior%20showing%20modern%20kitchen%20and%20open%20plan%20living%20area%2C%20contemporary%20design%20with%20natural%20light&width=600&height=400&seq=proj301&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Modern%20bathroom%20renovation%20with%20contemporary%20tiles%20and%20fixtures%2C%20bright%20clean%20design%2C%20professional%20interior%20photography&width=600&height=400&seq=proj302&orientation=landscape",
        "https://readdy.ai/api/search-image?query=House%20refurbishment%20work%20in%20progress%20showing%20renovation%20and%20construction%20activities%2C%20building%20site%20organization&width=600&height=400&seq=proj303&orientation=landscape"
      ]
    },
    {
      id: 4,
      title: "Load-Bearing Wall Removal",
      location: "Chesham",
      category: "Structural Work", 
      budget: "£12,000",
      timeline: "3 weeks",
      description: "Removed internal load-bearing wall and installed steel beam to create open-plan kitchen-living area.",
      challenge: "Precise calculations required for steel beam specification to support the floor above safely.",
      features: ["Structural calculations", "Steel beam installation", "Building control approval", "Minimal disruption"],
      images: [
        "https://readdy.ai/api/search-image?query=Open%20plan%20kitchen%20living%20area%20created%20by%20removing%20load%20bearing%20wall%2C%20steel%20beam%20visible%20in%20ceiling%2C%20modern%20interior%20design&width=600&height=400&seq=proj401&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Steel%20beam%20installation%20during%20construction%20showing%20structural%20engineering%20work%2C%20professional%20building%20techniques&width=600&height=400&seq=proj402&orientation=landscape", 
        "https://readdy.ai/api/search-image?query=Before%20photo%20showing%20wall%20removal%20preparation%20with%20temporary%20supports%2C%20structural%20alteration%20process&width=600&height=400&seq=proj403&orientation=landscape"
      ]
    },
    {
      id: 5,
      title: "Wrap-Around Extension",
      location: "Amersham",
      category: "Extensions",
      budget: "£58,000", 
      timeline: "10 weeks",
      description: "Side return and rear extension creating large kitchen-diner with separate utility room and downstairs WC.",
      challenge: "Complex roof design required to blend new extension seamlessly with existing property architecture.",
      features: ["Side return extension", "Rear extension", "New utility room", "Roof modifications"],
      images: [
        "https://readdy.ai/api/search-image?query=House%20wrap%20around%20extension%20showing%20side%20return%20and%20rear%20extension%2C%20modern%20architectural%20design%20blending%20with%20existing%20property&width=600&height=400&seq=proj501&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Large%20modern%20kitchen%20diner%20created%20by%20wrap%20around%20extension%2C%20spacious%20open%20plan%20design%20with%20natural%20light&width=600&height=400&seq=proj502&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Extension%20construction%20showing%20complex%20roof%20work%20and%20structural%20elements%2C%20professional%20building%20site&width=600&height=400&seq=proj503&orientation=landscape"
      ]
    },
    {
      id: 6,
      title: "Loft Conversion with Ensuite",
      location: "Great Missenden", 
      category: "Loft Conversions",
      budget: "£32,000",
      timeline: "7 weeks",
      description: "Created additional bedroom and bathroom in loft space with rear dormer and two front rooflights.",
      challenge: "Tight access required innovative material handling and careful coordination with neighboring properties.",
      features: ["Rear dormer", "Two Velux windows", "Full en-suite", "Built-in storage"],
      images: [
        "https://readdy.ai/api/search-image?query=Loft%20conversion%20with%20rear%20dormer%20window%20and%20velux%20skylights%2C%20modern%20bedroom%20with%20en-suite%20bathroom%2C%20professional%20interior%20photography&width=600&height=400&seq=proj601&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Loft%20conversion%20en-suite%20bathroom%20with%20sloped%20ceiling%20and%20skylight%2C%20contemporary%20white%20bathroom%20suite&width=600&height=400&seq=proj602&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Dormer%20window%20construction%20on%20house%20roof%20showing%20building%20work%20and%20structural%20carpentry%2C%20professional%20construction%20site&width=600&height=400&seq=proj603&orientation=landscape"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-gray-50">
      <div className="px-6 lg:px-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              {/* Image Carousel */}
              <div className="relative h-80">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="font-semibold text-gray-900">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Timeline</p>
                    <p className="font-semibold text-gray-900">{project.timeline}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">Project Challenge:</p>
                  <p className="text-sm text-gray-700 italic">{project.challenge}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <i className="ri-check-line text-slate-800 text-sm"></i>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View More Images */}
                <button className="text-slate-800 font-medium hover:text-slate-900 transition-colors cursor-pointer">
                  View more photos →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Get a free quote for your extension, conversion, or refurbishment
            </p>
            <a
              href="/#quote"
              className="inline-flex items-center space-x-3 bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-900 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>Request Free Quote</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}