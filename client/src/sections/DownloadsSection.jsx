import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Download, FileText, ExternalLink } from 'lucide-react'

export default function DownloadsSection() {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [expandedSubcategories, setExpandedSubcategories] = useState({})

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const toggleSubcategory = (subcategory) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcategory]: !prev[subcategory]
    }))
  }

  const downloadsData = {
    "PhilHealthDownloads": {
      "Membership": [
        "PMRF: PhilHealth Member Registration Form",
        "PMRF-FN: PhilHealth Member Registration Form for Foreign Nationals"
      ],
      "Claims": {
        "Forms": [
          "Claim Signature Form (Revised September 2018)",
          "Claim Form 1: Member and Patient Information (Revised September 2018)",
          "Claim Form 2: Provider Information (Revised September 2018)",
          "Claim Form 3: Patient's Clinical Record",
          "Claim Form 4: Clinical Summary"
        ],
        "Guidelines": [
          "PhilHealth Claim Form 1 Guidelines",
          "PhilHealth Claim Form 2 Guidelines",
          "PhilHealth Claim Form Reminders",
          "PhilHealth Claim Form 4 Guidelines"
        ]
      },
      "E-Claims": [
        "Software Certification Application Form (SCAF)",
        "Non-Disclosure Agreement (NDA)",
        "Software Certification Agreement (SCA)",
        "eClaims Cloud Storage Technical Specifications",
        "PCSS Application Form",
        "Account & Cipher Key Request Form",
        "HCI Engagement Registration Form"
      ],
      "DialysisDatabase": [
        "Registration Form",
        "Certification on Diagnosis and Management of CKD Stage 5",
        "Hemodialysis Benefits Package Agreement Form"
      ],
      "Payment": [
        "PPPS: PhilHealth Premium Payment Slip (for ACAs)",
        "PPPS: PhilHealth Premium Payment Slip (for PhilHealth Use Only)"
      ],
      "Employers": [
        "ER1: Employer Data Record",
        "ER2: Report of Employee-Members",
        "ER3: Employer Data Amendment Form",
        "RF1: Employer's Remittance Report",
        "PhilHealth Employers' Engagement Representative (PEER) Information Sheet",
        "Non Disclosure Agreement"
      ],
      "AccreditedCollectingAgents": [
        "Non-Disclosure Agreement (NDA)",
        "PhilHealth Online Access Form (POAF)"
      ],
      "Kasambahay": [
        "PPS-HEUR1: Household Employer Unified Registration Form",
        "PPS-HEUR2: Household Employment Unified Report Form",
        "PPS-KUR FORM: Kasambahay Unified Registration Form",
        "PPS: Household PhilHealth Payment Slip"
      ],
      "COVID19": {
        "HomeIsolationBenefitPackage": [
          "Assessment Checklist for COVID-19 Home Isolation Benefit Package"
        ],
        "TestingPackage": [
          "Cartridge Based PCR",
          "Annex C - SARS-CoV-2 claims summary form and instructions for electronic submission",
          "Annex D - Waiver for Directly Filed Claims for SARS-CoV-2 Testing Package",
          "Annex E - Certificate of classification of at-risk individuals and actual charges for SARS-CoV-2 test",
          "RT PCR Test"
        ]
      },
      "Accreditation": {
        "HealthITPartners": [
          "e-Claims Implementation Guide"
        ],
        "HealthCareProfessionals": [
          "Annex A: Documentary Requirements for Accreditation of Health Care Professionals",
          "Annex B: Provider Data Record for Health Care Professionals",
          "Annex C: Supporting Documents for Updating of Records of Health Care Professionals",
          "Annex D: Performance Commitment for Health Care Professionals"
        ],
        "HealthCareFacilities": [
          "Annex A: Documentary Requirement for Accreditation of Health Facilities",
          "Annex B: Provider Data Record for Health Care Facilities (FILLABLE)",
          "Annex C: Performance Commitment for Health Facilities (Revised June 2023) (FILLABLE)",
          "Annex D: Classification of Administrative Offenses of Health Care Providers as Provided in RA No. 10606",
          "Annex E: Classification of Offenses of Health Care Providers as Provided in the PROAC of RA No. 11223"
        ],
        "ACPSForms": [
          "Notice of ACPS compliance for private facilities",
          "Notice of ACPS compliance for public facilities",
          "Notice of ACPS compliance for LGU-owned facilities",
          "Bank Certification",
          "Notice of Change of Bank account for private facilities",
          "Notice of Change of Bank account for public facilities",
          "Notice of Change of Bank account for LGU-owned facilities (p1)",
          "Notice of Change of Bank account for LGU-owned facilities (p2)"
        ]
      },
      "ZBenefits": {
        "SelfAssessmentTools": [
          "Acute Lymphocytic Leukemia",
          "Breast Cancer",
          "Cervical Cancer",
          "Colon Cancer",
          "Rectal Cancer",
          "Kidney Transplantation",
          "Peritoneal Dialysis (PD) First",
          "Selected Orthopedic Implants",
          "Prostate Cancer",
          "ZMORPH",
          "Expanded ZMORPH",
          "Premature or Small Newborns"
        ]
      },
      "YAKAP": [
        "Annex A: Standards for Accreditation of PhilHealth Konsulta Facilities",
        "Annex B. Self-Assessment Accreditation Survey Tool for PhilHealth Konsulta Facility",
        "Annex C. Procedures and Documentary Requirements for Accreditation of PhilHealth Konsulta Providers",
        "Annex E. Non-disclosure Agreement"
      ]
    }
  }

  const formatCategoryName = (name) => {
    return name.replace(/([A-Z])/g, ' $1').trim()
  }

  const renderDownloadItem = (item, index) => (
    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <FileText className="w-4 h-4 text-[#027b40]" />
        <span className="text-sm text-gray-700">
          {item}
        </span>
      </div>
      <span className="text-gray-400 text-xs">PDF</span>
    </div>
  )

  const renderSubcategory = (subcategoryName, items, parentKey) => {
    const subcategoryKey = `${parentKey}-${subcategoryName}`
    const isExpanded = expandedSubcategories[subcategoryKey]
    
    return (
      <div key={subcategoryName} className="border-l-2 border-[#027b40]/20 ml-4">
        <button
          onClick={() => toggleSubcategory(subcategoryKey)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#027b40]/5 rounded-md flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#027b40]" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#027b40]">
                {formatCategoryName(subcategoryName)}
              </h4>
              <p className="text-xs text-gray-500">
                {items.length} document{items.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#027b40]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#027b40]" />
          )}
        </button>

        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="pl-4 pr-4 pb-4 space-y-2">
            {items.map((item, index) => renderDownloadItem(item, index))}
          </div>
        </div>
      </div>
    )
  }

  const renderCategoryContent = (categoryName, content) => {
    if (Array.isArray(content)) {
      return (
        <div className="px-6 pb-6 space-y-2 border-t border-gray-100">
          {content.map((item, index) => renderDownloadItem(item, index))}
        </div>
      )
    } else {
      return (
        <div className="border-t border-gray-100 space-y-2">
          {Object.entries(content).map(([subcategoryName, items]) =>
            renderSubcategory(subcategoryName, items, categoryName)
          )}
        </div>
      )
    }
  }

  const getDocumentCount = (content) => {
    if (Array.isArray(content)) {
      return content.length
    } else {
      return Object.values(content).reduce((total, items) => total + items.length, 0)
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Downloads
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Stay Updated
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
            Access the latest forms, circulars, and advisories in one place.
          </p>
        </div>

        {/* Downloads Categories */}
        <div className="space-y-4">
          {Object.entries(downloadsData.PhilHealthDownloads).map(([category, content]) => (
            <div key={category} className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#027b40]/10 rounded-md flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#027b40]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#027b40]">
                      {formatCategoryName(category)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {getDocumentCount(content)} document{getDocumentCount(content) !== 1 ? 's' : ''} available
                    </p>
                  </div>
                </div>
                {expandedCategories[category] ? (
                  <ChevronUp className="w-5 h-5 text-[#027b40]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#027b40]" />
                )}
              </button>

              {/* Category Content */}
              <div className={`transition-all duration-300 ease-in-out ${
                expandedCategories[category] 
                  ? 'max-h-[2000px] opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {renderCategoryContent(category, content)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}