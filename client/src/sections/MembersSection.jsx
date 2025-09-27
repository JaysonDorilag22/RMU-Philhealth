import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function MembersSection() {
  const membershipData = {
    "DirectContributors": [
      {
        "name": "Employees with formal employment",
        "description": "Those who are employed under an employer-employee relationship and regularly earn salary; the employer shares in paying the premium."
      },
      {
        "name": "Kasambahays",
        "description": "Household workers (kasambahays) who earn income and therefore have the capacity to pay premiums."
      },
      {
        "name": "Self-earning individuals; Professional practitioners",
        "description": "Freelancers, entrepreneurs, professionals (doctors, lawyers, etc.) who declare their income and pay their own PhilHealth contributions."
      },
      {
        "name": "Overseas Filipino Workers",
        "description": "Filipinos working abroad who maintain coverage under PhilHealth by paying contributions from abroad."
      },
      {
        "name": "Filipinos living abroad and those with dual citizenship",
        "description": "Filipinos or dual citizens residing abroad who still have capacity to pay and choose to maintain PhilHealth membership."
      },
      {
        "name": "Lifetime members",
        "description": "Members who have completed the required number of contributions (e.g. 120 monthly contributions) and therefore are no longer required to pay but still enjoy coverage."
      },
      {
        "name": "All Filipinos aged 21 years and above with capacity to pay",
        "description": "Every Filipino citizen aged 21 or older who has the means to pay premiums (i.e. not indigent) is considered a direct contributor."
      }
    ],
    "IndirectContributors": [
      {
        "name": "Indigents identified by the DSWD",
        "description": "Persons with no visible means of income or whose income is insufficient for subsistence, as identified by the DSWD through the National Household Targeting System. These are subsidized by the government."
      },
      {
        "name": "Beneficiaries of Pantawid Pamilyang Pilipino Program",
        "description": "Households under the 4Ps program whose PhilHealth premiums are subsidized under government support."
      },
      {
        "name": "Senior citizens",
        "description": "Filipinos aged 60 and above who may be subsidized if they are not already direct contributors."
      },
      {
        "name": "Persons with disability",
        "description": "Filipinos with disabilities whose premiums are subsidized as indirect contributors."
      },
      {
        "name": "Sangguniang Kabataan officials",
        "description": "Youth officials (SK) whose PhilHealth premiums are subsidized under the indirect contributor classification."
      },
      {
        "name": "Previously identified at point-of-service / sponsored by LGUs",
        "description": "Individuals who were identified when accessing health services (point-of-service) or those whose premiums are sponsored by their local government units."
      },
      {
        "name": "Filipinos aged 21 years and above without capacity to pay premiums",
        "description": "Filipinos aged 21+ who do not have the financial capacity to pay premiums — their contributions are subsidized."
      },
      {
        "name": "Solo Parent",
        "description": "Solo parents whose premiums are subsidized under the indirect contributor classification."
      }
    ]
  }

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Members
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Membership Made Easy
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Choose the membership type that fits you best and learn how to register, update your details, and pay contributions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#027b40] mb-6 text-center">
            Direct Contributors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipData.DirectContributors.map((member, index) => (
              <div key={index} className="group bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200 hover:border-[#027b40]/30 hover:-translate-y-1">
                <div className="w-1 h-8 bg-[#027b40] rounded-full mb-4"></div>
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-[#027b40] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <button className="inline-flex items-center gap-2 text-[#027b40] font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#027b40] mb-6 text-center">
            Indirect Contributors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipData.IndirectContributors.map((member, index) => (
              <div key={index} className="group bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200 hover:border-[#027b40]/30 hover:-translate-y-1">
                <div className="w-1 h-8 bg-[#027b40] rounded-full mb-4"></div>
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-[#027b40] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <button className="inline-flex items-center gap-2 text-[#027b40] font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}