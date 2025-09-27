import React from 'react'
import { Plus, Shield, Heart, Baby, Users, Stethoscope } from 'lucide-react'

export default function BenefitsSection() {
  const benefitsData = {
    "PhilHealthBenefits": [
      {
        "category": "Inpatient Benefits",
        "description": "These benefits are paid to the accredited Health Facilities. The case rate amount is deducted by the health facility from the member's total bill (including professional fees), prior to discharge."
      },
      {
        "category": "Outpatient Benefits",
        "subBenefits": [
          {
            "name": "Day Surgeries",
            "description": "Elective surgeries (minor to major) done on an outpatient / ambulatory basis, with patients sent home the same day."
          },
          {
            "name": "Radiotherapy",
            "description": "Radiation treatment (cobalt or linear accelerator). The case rate is inclusive of services, and sessions count against the annual allowance of 45 days."
          },
          {
            "name": "Hemodialysis",
            "description": "Covers both inpatient and outpatient dialysis procedures. The case rate per session applies, and there is a 90-day benefit limit per year."
          },
          {
            "name": "Outpatient Blood Transfusion",
            "description": "Covers transfusion of blood or blood products on outpatient basis, including related costs (lab, drugs, professional fees). One session is equivalent to one 'day' in the benefit days."
          }
        ]
      },
      {
        "category": "Z-Benefits / High Cost and Special Benefits",
        "description": "High-cost benefit packages for specific serious diseases / procedures, subject to eligibility and conditions (e.g. cancer, organ transplant, cardiac surgery, etc.)."
      },
      {
        "category": "PD First (Peritoneal Dialysis First) for End-Stage Renal Disease",
        "description": "Annual benefit package for peritoneal dialysis, with eligibility criteria and requirements. The beneficiary must meet the clinical criteria and pre-authorization."
      },
      {
        "category": "Pregnancy / Perinatal / Neonatal Benefits",
        "subBenefits": [
          {
            "name": "Prevention of Preterm Delivery (24–36 6/7 weeks)",
            "description": "Benefit amounts allocated for management of risk of preterm delivery, with different packages (e.g. coordinated referral and transfer)."
          },
          {
            "name": "Preterm & Small Newborns",
            "description": "Benefit packages by gestational age (e.g. 24 to <32 weeks, 32 to <37 weeks) including essential interventions, mechanical ventilation, kangaroo care, etc."
          }
        ]
      },
      {
        "category": "Children with Special Needs / Disabilities",
        "subBenefits": [
          {
            "name": "Children with Developmental Disabilities",
            "description": "Benefit for assessment, therapy sessions, discharge assessment; capped number of sets of therapies."
          },
          {
            "name": "Children with Mobility Impairment",
            "description": "Provision for assistive devices (wheelchairs, seating devices, etc.), periodic replacement, and related services."
          },
          {
            "name": "Children with Visual Disabilities",
            "description": "Benefits for initial assessment, interventions, optical aids, prosthesis, yearly follow-ups, and device replacement."
          },
          {
            "name": "Children with Hearing Impairment",
            "description": "Assessment, habilitation, hearing aid provision (with batteries, mold, fitting), replacement as allowed, and speech therapy sessions."
          }
        ]
      },
      {
        "category": "Selective Outpatient Benefit Packages",
        "subBenefits": [
          {
            "name": "Outpatient Malaria Package",
            "description": "Diagnostic, drugs, consultation, and lab services for confirmed malaria cases. Rate: ₱780.00"
          },
          {
            "name": "Outpatient HIV-AIDS Package",
            "description": "Annual package for HIV/AIDS management (lab, medicines, consultations). Rate: ₱39,000 per year (₱9,750 per quarter)."
          },
          {
            "name": "Outpatient Anti-Tuberculosis (DOTS)",
            "description": "Covers diagnosis, consultation, drugs, health education/counseling for TB treatment through DOTS. Rate: ₱5,200 total (with phases)."
          },
          {
            "name": "Voluntary Surgical Contraception",
            "description": "Covers procedures such as non-scalpel vasectomy, tubal ligation, and associated facility/physician fees and post-operative follow-up."
          },
          {
            "name": "Animal Bite Treatment Package",
            "description": "Post-exposure prophylaxis (PEP) for rabies: vaccine, rabies immunoglobulin, wound care, tetanus, antibiotics. Rate: ₱3,900.00"
          }
        ]
      }
    ]
  }

  const getCategoryIcon = (category) => {
    if (category.includes('Inpatient')) return <Shield className="w-6 h-6" />
    if (category.includes('Outpatient')) return <Stethoscope className="w-6 h-6" />
    if (category.includes('Z-Benefits')) return <Plus className="w-6 h-6" />
    if (category.includes('Pregnancy') || category.includes('Neonatal')) return <Baby className="w-6 h-6" />
    if (category.includes('Children')) return <Users className="w-6 h-6" />
    return <Heart className="w-6 h-6" />
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-base md:text-lg font-bold text-[#027b40] mb-2">
            Benefits
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#027b40] mb-6">
            Your Benefits, Your Care
          </h1>
          <p className="text-[#027b40]/70 text-sm md:text-base max-w-2xl mx-auto">
           From primary care to critical illness packages, PhilHealth ensures you and your family are covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefitsData.PhilHealthBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#027b40]/10 rounded-md flex items-center justify-center text-[#027b40] flex-shrink-0">
                  {getCategoryIcon(benefit.category)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#027b40] mb-2">
                    {benefit.category}
                  </h3>
                  {benefit.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  )}
                </div>
              </div>

              {benefit.subBenefits && (
                <div className="space-y-4 mt-6">
                  {benefit.subBenefits.map((subBenefit, subIndex) => (
                    <div key={subIndex} className="border-l-2 border-[#027b40]/20 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {subBenefit.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {subBenefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </div>
  )
}