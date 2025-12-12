
export default function CTASection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const handlePhoneClick = () => {
    // Implement phone number reveal or click-to-call functionality
    console.log('Phone button clicked');
  };

  const handleEmailClick = () => {
    // Implement email functionality
    console.log('Email button clicked');
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto mb-8">
            Get a free, no-obligation quote for your extension, refurbishment, or structural building work. 
            We serve High Wycombe and throughout Buckinghamshire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Get Your Free Quote</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-light mb-2">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-light mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-light mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-light mb-2">Property Postcode</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g. HP11 2XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-light mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select project type</option>
                  <option>House Extension</option>
                  <option>Loft Conversion</option>
                  <option>Full Refurbishment</option>
                  <option>Bathroom Renovation</option>
                  <option>Kitchen Extension</option>
                  <option>Structural Work</option>
                  <option>Garage Conversion</option>
                  <option>Other Building Work</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-light mb-2">Project Description</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-accent-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Brief description of your project and timeline"
                  maxLength={500}
                ></textarea>
                <p className="text-sm text-neutral mt-1">Maximum 500 characters</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Get Free Quote
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-accent-dark">
              <p className="text-sm text-neutral">
                <i className="ri-information-line mr-2"></i>
                We typically respond within 24 hours. You may be asked for photos/plans to provide a more accurate estimate.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-accent">Click to call for immediate quote</p>
                    <button 
                      type="button"
                      onClick={handlePhoneClick}
                      className="text-accent hover:text-white font-semibold mt-1"
                    >
                      Show Phone Number
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-accent">Send us your project details</p>
                    <button 
                      type="button"
                      onClick={handleEmailClick}
                      className="text-accent hover:text-white font-semibold mt-1"
                    >
                      Send Email
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Service Area</h4>
                    <p className="text-accent">High Wycombe, Buckinghamshire and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-light rounded-lg p-6">
              <h4 className="font-semibold mb-4">Why Choose LIV Construction?</h4>
              <ul className="space-y-3 text-accent">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-neutral-light mr-3"></i>
                  9.9/10 rating on Checkatrade
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-neutral-light mr-3"></i>
                  Fully insured and guaranteed
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-neutral-light mr-3"></i>
                  Clean, tidy work sites
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-neutral-light mr-3"></i>
                  Fixed price quotes
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-neutral-light mr-3"></i>
                  Established local builder since 2025
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
