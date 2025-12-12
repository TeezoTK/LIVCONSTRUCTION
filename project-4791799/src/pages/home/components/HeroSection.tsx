export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20architectural%20photography%20of%20a%20beautifully%20designed%20contemporary%20house%20extension%20with%20clean%20lines%20and%20large%20glass%20windows%2C%20minimalist%20aesthetic%2C%20professional%20architectural%20photography%2C%20soft%20natural%20lighting%2C%20sophisticated%20residential%20design%20with%20premium%20materials%20and%20craftsmanship%2C%20serene%20atmosphere&width=1920&height=1080&seq=hero-bg-elegant-002&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full pt-24 sm:pt-32">
        {/* Trust Badge - Properly Spaced */}
        <div className="flex items-center justify-center gap-4 mb-12 mt-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-lg font-medium">
              <strong>Trusted by 200+ Families</strong> across Buckinghamshire
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-slate-300 text-sm"></i>
                ))}
              </div>
              <span className="text-sm ml-1 text-slate-200">
                <strong>9.9/10</strong> Checkatrade Rating
              </span>
            </div>
          </div>
        </div>

        {/* Main Headline with SEO-optimized H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Professional</span>
          <span className="block text-slate-200">House Extensions</span>
          <span className="block">in High Wycombe</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-slate-200 font-light max-w-4xl mx-auto leading-relaxed">
          Specialists in <strong>house extensions</strong>, <strong>loft conversions</strong> and <strong>structural building work</strong> across <strong>Buckinghamshire</strong>. 
          Fully insured with 10-year guarantee.
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
          <a
            href="tel:+441494123456"
            className="w-full sm:w-auto px-8 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer min-h-[56px] flex items-center justify-center"
          >
            <i className="ri-phone-line mr-3"></i>
            Get Free Quote Today
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-5 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer min-h-[56px] flex items-center justify-center"
          >
            <i className="ri-eye-line mr-3"></i>
            View Our Projects  
          </a>
        </div>

        {/* Key Features - Better Spacing from Next Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
            <p className="text-base text-slate-200">
              Complete insurance coverage with <strong>10-year guarantee</strong> on all structural work
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
              <i className="ri-star-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">9.9/10 Rating</h3>
            <p className="text-base text-slate-200">
              <strong>69+ verified reviews</strong> on Checkatrade with excellent customer feedback
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-line text-2xl text-white"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Local Experts</h3>
            <p className="text-base text-slate-200">
              Serving <strong>High Wycombe</strong> and surrounding <strong>Buckinghamshire</strong> areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
