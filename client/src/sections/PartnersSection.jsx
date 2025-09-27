import React from 'react'

export default function PartnersSection() {
  const partnersData = [
    {
      title: "Healthcare Providers",
      description: "We forge partnerships with only the best in the industry to fulfil our mandate of providing all Filipinos with accessible, available, acceptable and affordable health care services that will lead to better health outcomes and improved quality of life.",
      image: "/partners/45.png"
    },
    {
      title: "Employers",
      description: "We partner with employers in the government and private sectors to ensure that all their employees are provided with social health insurance coverage as mandated by law.",
      image: "/partners/48.png"
    },
    {
      title: "Service Providers",
      description: "We are moving towards electronic transactions and to help us achieve our goal, we have entered into partnerships with Health IT Providers for our e-claims and related processes.",
      image: "/partners/46.png"
    },
    {
      title: "Collecting Partners",
      description: "We have tapped the services and networks of bank and non-bank institutions to make premium remittance more convenient for our members and employers. This section provides a complete list of these partners and their branch locations, and also includes basic information for collecting agencies that might be interested to partner with us in premium remittance.",
      image: "/partners/47.png"
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Partners
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Our Trusted Partners
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Building strong partnerships to deliver comprehensive healthcare coverage and services to all Filipinos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnersData.map((partner, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">

              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={partner.image}
                  alt={partner.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#027b40] mb-4">
                  {partner.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </div>
  )
}