import React, { useState } from 'react'
import { Bell, FileText, Briefcase, Megaphone, Users, Calendar, ChevronRight, ExternalLink, Filter } from 'lucide-react'

export default function PublicAnnouncements() {
  const [activeFilter, setActiveFilter] = useState('all')

  const updatesData = {
    "updates": [
      {
        "title": "Circulars",
        "description": "Official PhilHealth circulars containing policies, guidelines, and program updates.",
        "icon": FileText,
        "count": 45,
        "recent": [
          { date: "2024-01-15", title: "Updated Guidelines for Z-Benefits Package Implementation", type: "Policy Update" },
          { date: "2024-01-10", title: "Revised Premium Contribution Rates for 2024", type: "Rate Adjustment" },
          { date: "2024-01-05", title: "New Accreditation Standards for Healthcare Facilities", type: "Accreditation" }
        ]
      },
      {
        "title": "Advisories",
        "description": "Announcements and reminders for members, employers, and health care providers.",
        "icon": Bell,
        "count": 32,
        "recent": [
          { date: "2024-01-20", title: "System Maintenance Schedule - January 25, 2024", type: "System Update" },
          { date: "2024-01-18", title: "Holiday Schedule for PhilHealth Offices", type: "Office Hours" },
          { date: "2024-01-12", title: "Important Reminder: Deadline for Annual Employer Reports", type: "Deadline" }
        ]
      },
      {
        "title": "News",
        "description": "Latest news and updates on PhilHealth programs, events, and activities.",
        "icon": Megaphone,
        "count": 28,
        "recent": [
          { date: "2024-01-22", title: "PhilHealth Launches Digital Membership Card Initiative", type: "Program Launch" },
          { date: "2024-01-19", title: "Record High Benefit Payments Reported in 2023", type: "Annual Report" },
          { date: "2024-01-16", title: "New Partnership Agreement Signed with Leading Hospitals", type: "Partnership" }
        ]
      },
      {
        "title": "Invitation to Bid",
        "abbreviation": "IB",
        "description": "Procurement-related notices and invitations for suppliers and contractors to bid.",
        "icon": Briefcase,
        "count": 12,
        "recent": [
          { date: "2024-01-21", title: "Supply and Delivery of IT Equipment - Bid Opening Feb 5", type: "Procurement" },
          { date: "2024-01-17", title: "Construction of Regional Office Building - Pre-bid Conference", type: "Construction" },
          { date: "2024-01-14", title: "Consultancy Services for System Development", type: "Consultancy" }
        ]
      },
      {
        "title": "Job Vacancies",
        "description": "Open positions and career opportunities within PhilHealth.",
        "icon": Users,
        "count": 18,
        "recent": [
          { date: "2024-01-23", title: "Medical Officer IV Positions - Regional Offices", type: "Medical" },
          { date: "2024-01-20", title: "IT Specialist - Central Office", type: "Information Technology" },
          { date: "2024-01-15", title: "Administrative Officer Positions - Multiple Locations", type: "Administrative" }
        ]
      },
      {
        "title": "Official Statements",
        "description": "Public statements and clarifications released by PhilHealth.",
        "icon": FileText,
        "count": 8,
        "recent": [
          { date: "2024-01-24", title: "PhilHealth Clarifies Benefit Coverage for New Medical Procedures", type: "Clarification" },
          { date: "2024-01-18", title: "Statement on Enhanced Anti-Fraud Measures", type: "Policy Statement" },
          { date: "2024-01-11", title: "Response to Recent Healthcare Coverage Inquiries", type: "Public Response" }
        ]
      },
      {
        "title": "Joint Issuances",
        "description": "Collaborative issuances and agreements between PhilHealth and other government agencies or partners.",
        "icon": Users,
        "count": 15,
        "recent": [
          { date: "2024-01-22", title: "Joint Circular with DOH on Maternal Health Programs", type: "DOH Partnership" },
          { date: "2024-01-16", title: "Memorandum with DOLE on OFW Healthcare Coverage", type: "DOLE Partnership" },
          { date: "2024-01-09", title: "Agreement with LGUs for Enhanced Healthcare Services", type: "LGU Partnership" }
        ]
      }
    ]
  }

  const getFilteredUpdates = () => {
    if (activeFilter === 'all') return updatesData.updates
    return updatesData.updates.filter(update => 
      update.title.toLowerCase().replace(/\s+/g, '') === activeFilter
    )
  }

  const filterOptions = [
    { key: 'all', label: 'All Updates' },
    { key: 'circulars', label: 'Circulars' },
    { key: 'advisories', label: 'Advisories' },
    { key: 'news', label: 'News' },
    { key: 'invitationtobid', label: 'Invitations to Bid' },
    { key: 'jobvacancies', label: 'Job Vacancies' },
    { key: 'officialstatements', label: 'Official Statements' },
    { key: 'jointissuances', label: 'Joint Issuances' }
  ]

  return (
    <div className="py-16 px-4 bg-[#fafff8]">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Public Announcements
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Stay Informed
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Get the latest updates, circulars, advisories, and announcements from PhilHealth.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#027b40]" />
            <h3 className="text-lg font-semibold text-[#027b40]">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === option.key
                    ? 'bg-[#027b40] text-white shadow-md'
                    : 'bg-white text-[#027b40] border border-[#027b40]/20 hover:bg-[#027b40]/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredUpdates().map((update, index) => {
            const IconComponent = update.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">

                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#027b40]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#027b40]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#027b40]">
                        {update.title}
                        {update.abbreviation && (
                          <span className="ml-2 text-sm bg-[#027b40] text-white px-2 py-1 rounded-full">
                            {update.abbreviation}
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500">{update.count} items</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-sm text-green-600 font-medium">Updated</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {update.description}
                  </p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Recent Updates
                  </h4>
                  <div className="space-y-3">
                    {update.recent.map((item, itemIndex) => (
                      <div key={itemIndex} className="group cursor-pointer">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs bg-[#027b40]/10 text-[#027b40] px-2 py-1 rounded-full font-medium">
                                {item.type}
                              </span>
                              <span className="text-xs text-gray-500">{item.date}</span>
                            </div>
                            <p className="text-sm text-gray-900 group-hover:text-[#027b40] transition-colors duration-200 line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#027b40] group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#027b40] text-white hover:bg-[#025f33] px-4 py-3 rounded-lg font-semibold transition-all duration-300 group">
                    View All {update.title}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#027b40] via-[#038a4a] to-[#04a455] rounded-xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our notifications and get the latest PhilHealth announcements delivered directly to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 bg-[#adf0d0] focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900"
            />
            <button className="bg-white text-[#027b40] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            By subscribing, you agree to receive updates from PhilHealth. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}