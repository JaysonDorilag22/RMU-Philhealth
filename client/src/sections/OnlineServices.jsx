import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function OnlineServices() {
  const servicesData = {
  "PhilHealthOnlineServices": {
    "Membership": [
      {
        "service": "Member Portal",
        "access": "Register/Login",
        "description": "Enables members to check on the accuracy of their membership details.",
        "icon": "https://placehold.co/80x80/4CAF50/ffffff?text=Portal" 
      },
      {
        "service": "Electronic Group Enrollment System",
        "access": "Login",
        "description": "Facilitates registration and billing of Organized Groups.",
        "icon": "https://placehold.co/80x80/4CAF50/ffffff?text=Group" 
      }
    ],
    "Benefits": [
      {
        "service": "Case Rates Search",
        "access": "Begin Search",
        "description": "Provides members with information on PhilHealth's benefit packages.",
        "icon": "https://placehold.co/80x80/2196F3/ffffff?text=Search" 
      },
      {
        "service": "Claims Eligibility Checking",
        "access": "Login",
        "description": "Enables providers to ascertain the benefit availment eligibility of members.",
        "icon": "https://placehold.co/80x80/2196F3/ffffff?text=Claims" 
      }
    ],
    "Contribution": [
      {
        "service": "Electronic Premium Remittance System",
        "access": "Login | ePOAF",
        "description": "Enables employers to remit their premium contributions online.",
        "icon": "https://placehold.co/80x80/FF9800/ffffff?text=Payment" 
      }
    ],
    "Collection": [
      {
        "service": "Electronic Collection Reporting System",
        "access": "Login",
        "description": "Enables PhilHealth Accredited Collecting Agents to submit daily RF2 reports online.",
        "icon": "https://placehold.co/80x80/9C27B0/ffffff?text=Report" 
      }
    ],
    "Accreditation": [
      {
        "service": "Health Facilities",
        "access": "Login | How to Register",
        "description": "Shows the complete list of HCIs including accreditation status.",
        "icon": "https://placehold.co/80x80/F44336/ffffff?text=Hospital" 
      },
      {
        "service": "Health Care Professionals",
        "access": "Register/Login",
        "description": "Enables the health care professional to check their accreditation and claims status, and generate electronic accreditation ID.",
        "icon": "https://placehold.co/80x80/F44336/ffffff?text=Doctor"
      }
    ]
  }
}

const getCategoryIcon = (category) => {
  const categoryIcons = {
    "Membership": "https://placehold.co/80x80/4CAF50/ffffff?text=Member",   
    "Benefits": "https://placehold.co/80x80/2196F3/ffffff?text=Benefits",    
    "Contribution": "https://placehold.co/80x80/FF9800/ffffff?text=Contrib",  
    "Collection": "https://placehold.co/80x80/9C27B0/ffffff?text=Collect",   
    "Accreditation": "https://placehold.co/80x80/F44336/ffffff?text=Accred"   
  }
  return categoryIcons[category] || "https://placehold.co/80x80/607D8B/ffffff?text=Service" 
}


  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Online Services
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Digital Services at Your Fingertips
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Access PhilHealth services online anytime, anywhere. Manage your membership, check benefits, and more through our digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(servicesData.PhilHealthOnlineServices).map(([category, services]) => (
            <div key={category} className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#027b40]">
                  {category}
                </h2>
              </div>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <img 
                        src={service.icon}
                        alt="Service Icon"
                        className="w-12 h-12 rounded-md flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#027b40] transition-colors duration-300">
                          {service.service}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <button className="inline-flex items-center gap-2 text-[#027b40] font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                          {service.access}
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>    
      </div>
    </div>
  )
}