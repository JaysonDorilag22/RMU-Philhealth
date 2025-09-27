import React, { useState } from 'react'
import { Phone, MapPin, Mail, MessageCircle, Facebook, Twitter, Clock, Globe, Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

export default function ContactsSection() {
  const [copiedText, setCopiedText] = useState('')
  const [showOfficeDirectory, setShowOfficeDirectory] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('')

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(label)
      setTimeout(() => setCopiedText(''), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const contactData = {
    "contact_us": {
      "hotline": {
        "landline": {
          "number": "(02) 866-225-88",
          "availability": "24/7 including weekends and holidays",
          "website": "www.philhealth.gov.ph"
        },
        "mobile": {
          "availability": "Call and text (24/7)",
          "smart": ["0998-857-2957", "0968-865-4670"],
          "globe": ["0917-127-5987", "0917-110-9812"],
          "callback": {
            "instruction": "Text: 'PHICallback [space] Mobile Number to be called [space] details of your concern'",
            "schedule": "8 AM - 8 PM, 12 hours by 7 days, including weekends and holidays",
            "note": "Ask agent for details to make sure the callback is from PhilHealth."
          }
        }
      },
      "office_address": "Citystate Centre, 709 Shaw Boulevard, Pasig City",
      "email": "actioncenter@philhealth.gov.ph",
      "social_media": {
        "facebook": "PhilHealthofficial",
        "x": "teamphilhealth"
      }
    }
  }

  // Dummy office directory data
  const officeDirectory = {
    "NCR": [
      {
        "name": "PhilHealth Regional Office - NCR",
        "address": "Citystate Centre, 709 Shaw Boulevard, Pasig City",
        "phone": "(02) 866-225-88",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Regional Office"
      },
      {
        "name": "PhilHealth Makati Business Center",
        "address": "G/F Makati Stock Exchange Bldg., Ayala Avenue, Makati City",
        "phone": "(02) 8752-1234",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Business Center"
      },
      {
        "name": "PhilHealth Quezon City Express",
        "address": "SM City North EDSA, Quezon City",
        "phone": "(02) 8441-7890",
        "hours": "10:00 AM - 7:00 PM",
        "type": "Express Office"
      }
    ],
    "Region I": [
      {
        "name": "PhilHealth Regional Office I",
        "address": "Government Center, San Fernando City, La Union",
        "phone": "(072) 888-2345",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Regional Office"
      },
      {
        "name": "PhilHealth Baguio LHIO",
        "address": "Baguio City Hall Complex, Baguio City",
        "phone": "(074) 444-5678",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Local Office"
      }
    ],
    "Region III": [
      {
        "name": "PhilHealth Regional Office III",
        "address": "Maimpis, City of San Fernando, Pampanga",
        "phone": "(045) 961-2345",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Regional Office"
      },
      {
        "name": "PhilHealth Angeles LHIO",
        "address": "Anunas, Angeles City, Pampanga",
        "phone": "(045) 322-1234",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Local Office"
      }
    ],
    "Region IV-A": [
      {
        "name": "PhilHealth Regional Office IV-A",
        "address": "Regional Government Center, Calamba City, Laguna",
        "phone": "(049) 545-6789",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Regional Office"
      },
      {
        "name": "PhilHealth Batangas LHIO",
        "address": "Capitol Site, Batangas City",
        "phone": "(043) 723-4567",
        "hours": "8:00 AM - 5:00 PM",
        "type": "Local Office"
      }
    ]
  }

  const CopyButton = ({ text, label, className = "" }) => (
    <button
      onClick={() => copyToClipboard(text, label)}
      className={`inline-flex items-center gap-1 text-white/80 hover:text-white text-xs transition-all duration-200 ${className}`}
      title={`Copy ${label}`}
    >
      {copiedText === label ? (
        <>
          <Check className="w-3 h-3" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  )

  return (
    <div className="py-16 px-4 bg-[#fafff8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Contact Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            We're Here to Help
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Get in touch with us through any of our communication channels. Our support team is ready to assist you.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#027b40] via-[#038a4a] to-[#04a455] rounded-xl shadow-xl p-8 md:p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">PhilHealth Hotline</h3>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Landline
                </h4>
                <div className="bg-white/10 rounded-lg p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <a 
                      href={`tel:${contactData.contact_us.hotline.landline.number}`}
                      className="text-xl font-bold hover:underline"
                    >
                      {contactData.contact_us.hotline.landline.number}
                    </a>
                    <CopyButton 
                      text={contactData.contact_us.hotline.landline.number} 
                      label="landline"
                    />
                  </div>
                  <p className="text-sm opacity-90">{contactData.contact_us.hotline.landline.availability}</p>
                </div>
                <a 
                  href={`https://${contactData.contact_us.hotline.landline.website.split(' ')[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 inline-flex items-center gap-2 transition-opacity duration-200"
                >
                  <Globe className="w-4 h-4" />
                  {contactData.contact_us.hotline.landline.website}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Mobile Numbers
                </h4>
                <p className="text-sm opacity-90 mb-4">{contactData.contact_us.hotline.mobile.availability}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-2">Smart</p>
                    {contactData.contact_us.hotline.mobile.smart.map((number, index) => (
                      <div key={index} className="flex items-center justify-between mb-1">
                        <a 
                          href={`tel:${number}`}
                          className="text-sm hover:underline"
                        >
                          {number}
                        </a>
                        <CopyButton 
                          text={number} 
                          label={`smart-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-2">Globe</p>
                    {contactData.contact_us.hotline.mobile.globe.map((number, index) => (
                      <div key={index} className="flex items-center justify-between mb-1">
                        <a 
                          href={`tel:${number}`}
                          className="text-sm hover:underline"
                        >
                          {number}
                        </a>
                        <CopyButton 
                          text={number} 
                          label={`globe-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Contact Information</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Head Office</h4>
                    <div className="flex items-start justify-between">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(contactData.contact_us.office_address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200"
                      >
                        {contactData.contact_us.office_address}
                      </a>
                      <CopyButton 
                        text={contactData.contact_us.office_address} 
                        label="address"
                        className="ml-2 flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5" />
                  <h4 className="font-semibold">Email</h4>
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href={`mailto:${contactData.contact_us.email}`}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200"
                  >
                    {contactData.contact_us.email}
                  </a>
                  <CopyButton 
                    text={contactData.contact_us.email} 
                    label="email"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a 
                    href={`https://facebook.com/${contactData.contact_us.social_media.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">{contactData.contact_us.social_media.facebook}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href={`https://x.com/${contactData.contact_us.social_media.x}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm">@{contactData.contact_us.social_media.x}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Service */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#027b40]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#027b40]" />
            </div>
            <h3 className="text-2xl font-bold text-[#027b40] mb-2">Callback Service</h3>
            <p className="text-gray-600">Request a callback from our support team</p>
          </div>

          <div className="bg-[#027b40]/5 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-[#027b40]">How to Request:</h4>
              <button
                onClick={() => copyToClipboard(contactData.contact_us.hotline.mobile.callback.instruction, 'callback-instruction')}
                className="inline-flex items-center gap-1 text-[#027b40] hover:text-[#025f33] text-xs transition-colors duration-200"
                title="Copy callback instruction"
              >
                {copiedText === 'callback-instruction' ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              {contactData.contact_us.hotline.mobile.callback.instruction}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span>{contactData.contact_us.hotline.mobile.callback.schedule}</span>
            </div>
            
            <p className="text-xs text-gray-500 italic">
              {contactData.contact_us.hotline.mobile.callback.note}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#027b40]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#027b40]" />
            </div>
            <h3 className="text-2xl font-bold text-[#027b40] mb-4">Find an Office Near You</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Directory of Offices - Regional Offices, Local Health Insurance Offices, Business Centers, and PhilHealth Express Branches
            </p>
            <button 
              onClick={() => setShowOfficeDirectory(!showOfficeDirectory)}
              className="bg-[#027b40] text-white hover:bg-[#025f33] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {showOfficeDirectory ? 'Hide Directory' : 'View Office Directory'}
              {showOfficeDirectory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showOfficeDirectory && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              {/* Region Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Region:
                </label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027b40] focus:border-transparent"
                >
                  <option value="">Please Select Region</option>
                  {Object.keys(officeDirectory).map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#027b40] mb-4">Location Map</h4>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2547866620007!2d121.0622!3d14.5735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0f5c5%3A0x2b2e8b3f8b8b8b8b!2sCitystate%20Centre%2C%20Shaw%20Blvd%2C%20Pasig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1635000000000!5m2!1sen!2sph"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PhilHealth Office Location"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#027b40] mb-4">Office Information</h4>
                  <div className="bg-[#027b40]/5 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#027b40] mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Head Office</h5>
                        <p className="text-sm text-gray-600 mt-1">{contactData.contact_us.office_address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-5 h-5 text-[#027b40]" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Phone</h5>
                        <p className="text-sm text-gray-600">{contactData.contact_us.hotline.landline.number}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#027b40]" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Office Hours</h5>
                        <p className="text-sm text-gray-600">8:00 AM - 5:00 PM (Monday to Friday)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedRegion && (
                <div>
                  <h4 className="text-lg font-semibold text-[#027b40] mb-4">
                    Offices in {selectedRegion}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {officeDirectory[selectedRegion].map((office, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-gray-900">{office.name}</h5>
                          <span className="text-xs bg-[#027b40] text-white px-2 py-1 rounded-full">
                            {office.type}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(office.address)}`, '_blank')}
                          className="mt-3 text-[#027b40] hover:text-[#025f33] text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200"
                        >
                          View on Map
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}