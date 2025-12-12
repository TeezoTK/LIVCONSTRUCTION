import { Link } from 'react-router-dom';

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "Kitchen Extension & Refurbishment",
      location: "High Wycombe",
      service: "Extension",
      description: "Complete rear extension with modern kitchen fitout and internal layout changes. Project included structural alterations, new bi-fold doors to garden, and contemporary kitchen installation with island unit.",
      details: [
        "Single storey rear extension - 6m x 4m",
        "Structural steel beam installation",
        "Modern kitchen with quartz worktops",
        "Bi-fold doors to garden patio"
      ],
      image: "https://lh3.googleusercontent.com/ev4Hiooeg_NkULqOksk42fLLgiRn_b1RP5_F7n0RV-xmfJI350GhwcJnarrpmm6vsu9CKuaQ_nJOyHDdlt6snYH0sVZ0RTRznWxOzB3flwU_WNJfAWg7dL5lzuk2JQ=w1024-nu-rw-e365",
      duration: "8 weeks"
    },
    {
      title: "Bathroom Renovation", 
      location: "Buckinghamshire",
      service: "Refurbishment",
      description: "Complete bathroom strip and refit with modern fixtures and professional tiling. Family bathroom transformed with walk-in shower, contemporary tiles, and underfloor heating throughout.",
      details: [
        "Complete strip out and replumb",
        "Walk-in shower with rainfall head",
        "Underfloor heating installation",
        "Large format porcelain tiles"
      ],
      image: "https://lh3.googleusercontent.com/fqiWzjfiQI0Qy0G_bM4Ec4hV_Pz2w1DhfQJ2IJwzxxj0VI7yIxywc92P5dgop6RjF9gXUj9NeZe3c4dTnYsS1ZA6h8I1drbaJlEngkkm7J4kLGNijZZqDR8EZk5rZg=w1024-nu-rw-e365",
      duration: "3 weeks"
    },
    {
      title: "Structural & Internal Works",
      location: "High Wycombe", 
      service: "Structural Work",
      description: "Partition walls and structural alterations with professional finish. Load-bearing wall removal to create open plan living, with steel beam support and building control approval.",
      details: [
        "Load bearing wall removal",
        "Steel RSJ beam installation",
        "New stud partition walls",
        "Plastering and decoration"
      ],
      image: "https://lh3.googleusercontent.com/eL4ZwBcTO7DwcqF1TJS8iqpn8C5IqTBMcRsjfJ9E5hY4lvsdcHgfnJcHwPZR83nzxv4PTl1gJgiv1j9EoJt8dSvBliYd4CxS1eNCfyaJhrlVWOshAXBodFYEUultKow=w1024-nu-rw-e365",
      duration: "4 weeks"
    },
    {
      title: "Built-in Storage Solutions",
      location: "Buckinghamshire",
      service: "Internal Work", 
      description: "Custom built-in wardrobes and storage with quality craftsmanship. Bespoke fitted wardrobes in master bedroom with internal lighting, drawers, and hanging space optimization.",
      details: [
        "Bespoke fitted wardrobes",
        "Internal LED lighting",
        "Soft close drawers and doors",
        "Optimal storage configuration"
      ],
      image: "https://lh3.googleusercontent.com/aHK1pXzx-_X7jML14ion68oQSw4bXRxEZqf4RRbBAClzFMnB-Ke64nrX14CJtYChfsln8MgbQ0s51M1xlUYf42CxN8GTH1ZyiV96MXg-09IhHu0JNKVP9znEQbth=w1024-nu-rw-e365",
      duration: "2 weeks"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent examples of our quality construction work across High Wycombe and Buckinghamshire. 
            Each project showcases our expertise in different building specialties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} completed by LIV Construction in ${project.location} - ${project.service} specialist work`}
                  title={`${project.title} - Professional ${project.service} by LIV Construction`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.service}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-map-pin-line mr-1"></i>
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Project Details:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-slate-800 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/projects"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
