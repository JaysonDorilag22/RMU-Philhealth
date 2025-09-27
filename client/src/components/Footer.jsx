import React from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Globe, 
  ExternalLink,
  FileText,
  Shield,
  Users,
  Download,
  Clock,
  Building
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = {
    about: [
      { name: 'About PhilHealth', href: '#about' },
      { name: 'Vision & Mission', href: '#vision' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Organizational Chart', href: '#org-chart' },
      { name: 'History', href: '#history' }
    ],
    services: [
      { name: 'Membership', href: '#membership' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Online Services', href: '#online-services' },
      { name: 'Claims Processing', href: '#claims' },
      { name: 'Provider Portal', href: '#provider' }
    ],
    information: [
      { name: 'Downloads', href: '#downloads' },
      { name: 'Circulars', href: '#circulars' },
      { name: 'News & Updates', href: '#news' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Office Directory', href: '#offices' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Use', href: '#terms' },
      { name: 'Disclaimer', href: '#disclaimer' },
      { name: 'Accessibility Statement', href: '#accessibility' },
      { name: 'Freedom of Information', href: '#foi' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-[#027b40] via-[#025f33] to-[#024d2a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo/philhealth.svg" 
                alt="PhilHealth Logo" 
                className="h-52 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Philippine Health Insurance Corporation</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your partner in health, providing every Filipino with affordable, accessible, and reliable health care coverage.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white/90">Connect With Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/PhilHealthofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://x.com/teamphilhealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.philhealth.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - About */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Building className="w-5 h-5" />
              About PhilHealth
            </h4>
            <ul className="space-y-3">
              {navigationLinks.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Services
            </h4>
            <ul className="space-y-3">
              {navigationLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Information
            </h4>
            <div className="space-y-4">
              {/* Hotline */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-sm font-semibold">PhilHealth Hotline</p>
                  <a 
                    href="tel:(02)866-225-88"
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                  >
                    (02) 866-225-88
                  </a>
                  <p className="text-white/60 text-xs mt-1">24/7 including weekends</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a 
                    href="mailto:actioncenter@philhealth.gov.ph"
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                  >
                    actioncenter@philhealth.gov.ph
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-sm font-semibold">Head Office</p>
                  <p className="text-white/80 text-sm">
                    Citystate Centre, 709 Shaw Boulevard, Pasig City
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-white/60" />
                <div>
                  <p className="text-sm font-semibold">Office Hours</p>
                  <p className="text-white/80 text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Information & Resources */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Information & Resources
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navigationLinks.information.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Legal & Policies
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navigationLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Government Transparency Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Government Transparency & Accountability</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="#foi"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Freedom of Information
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="#transparency"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all duration-300"
              >
                <Shield className="w-4 h-4" />
                Transparency Seal
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="#performance"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Performance Reports
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#024d2a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Philippine Health Insurance Corporation (PhilHealth)
              </p>
              <p className="text-white/60 text-xs mt-1">
                All rights reserved. Republic Act No. 7875 as amended by Republic Act No. 9241 and Republic Act No. 10606
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="#sitemap"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Sitemap
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="#feedback"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Feedback
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="#accessibility"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}