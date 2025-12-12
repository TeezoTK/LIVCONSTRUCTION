export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LIV Construction LTD</h3>
            <p className="text-accent mb-4">
              Professional building services across High Wycombe and Buckinghamshire. Specialists in house extensions, loft conversions and structural work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-accent hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-accent hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-accent hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-accent hover:text-white transition-colors cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-accent hover:text-white transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-accent">
              <li>House Extensions</li>
              <li>Loft Conversions</li>
              <li>Full Refurbishments</li>
              <li>Structural Work</li>
              <li>Brickwork & External</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-phone-line mr-3 mt-1 text-accent"></i>
                <div>
                  <p className="text-accent">Phone</p>
                  <a href="tel:+441494123456" className="text-white hover:text-accent transition-colors cursor-pointer">
                    01494 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line mr-3 mt-1 text-accent"></i>
                <div>
                  <p className="text-accent">Email</p>
                  <a href="mailto:info@livconstructionbucks.co.uk" className="text-white hover:text-accent transition-colors cursor-pointer">
                    info@livconstructionbucks.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-3 mt-1 text-accent"></i>
                <div>
                  <p className="text-accent">Service Area</p>
                  <p className="text-white">High Wycombe, Buckinghamshire</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent text-sm">
              © 2025 LIV Construction LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm"></div>
              <span className="text-accent">|</span>
              <p className="text-accent">Company No: 12345678</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
