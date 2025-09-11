"use client";

interface ResumeProps {
  template: string;
}

const Resume = ({ template }: ResumeProps) => {
  const getTemplateData = (templateType: string) => {
    switch (templateType) {
      case "software-engineer":
        return {
          personalInfo: {
            name: "Alex Johnson",
            title: "Senior Software Engineer",
            email: "alex.johnson@email.com",
            phone: "(555) 123-4567",
            location: "San Francisco, CA",
            linkedin: "linkedin.com/in/alexjohnson",
            github: "github.com/alexjohnson"
          },
          summary: "Experienced Software Engineer with 6+ years developing scalable web applications and microservices. Proven expertise in React, Node.js, Python, and cloud technologies. Led cross-functional teams to deliver high-impact products serving millions of users. Strong background in agile development, system architecture, and performance optimization.",
          skills: [
            "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
            "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis",
            "GraphQL", "REST APIs", "Microservices", "Agile Development",
            "Git", "CI/CD", "Test-Driven Development", "System Design"
          ],
          experience: [
            {
              title: "Senior Software Engineer",
              company: "TechCorp Inc.",
              location: "San Francisco, CA",
              dates: "01/2021 - Present",
              responsibilities: [
                "Lead development of customer-facing web applications serving 2M+ daily active users",
                "Architected and implemented microservices infrastructure reducing system latency by 40%",
                "Mentored 5 junior developers and conducted code reviews to maintain high code quality",
                "Collaborated with product managers and designers to deliver 15+ major features",
                "Implemented automated testing suite increasing code coverage from 60% to 95%",
                "Optimized database queries and caching strategies improving response times by 35%"
              ]
            },
            {
              title: "Software Engineer",
              company: "StartupXYZ",
              location: "San Francisco, CA",
              dates: "06/2019 - 12/2020",
              responsibilities: [
                "Developed full-stack web applications using React, Node.js, and PostgreSQL",
                "Built RESTful APIs and GraphQL endpoints for mobile and web clients",
                "Implemented OAuth 2.0 authentication system supporting 50K+ users",
                "Participated in agile development process with 2-week sprints",
                "Contributed to open-source projects and technical documentation"
              ]
            },
            {
              title: "Junior Software Developer",
              company: "Digital Solutions Ltd.",
              location: "Austin, TX",
              dates: "08/2018 - 05/2019",
              responsibilities: [
                "Developed responsive web applications using HTML, CSS, JavaScript, and React",
                "Assisted in database design and optimization for e-commerce platform",
                "Participated in daily standups and sprint planning meetings",
                "Fixed bugs and implemented feature requests based on user feedback"
              ]
            }
          ],
          education: [
            {
              degree: "Bachelor of Science in Computer Science",
              school: "University of California, Berkeley",
              location: "Berkeley, CA",
              dates: "08/2014 - 05/2018",
              details: "Magna Cum Laude, GPA: 3.8/4.0"
            }
          ],
          certifications: [
            "AWS Certified Solutions Architect - Associate (2023)",
            "Google Cloud Professional Developer (2022)",
            "Certified Kubernetes Administrator (2022)"
          ],
          projects: [
            {
              name: "E-commerce Platform",
              tech: "React, Node.js, PostgreSQL, AWS",
              description: "Built scalable e-commerce platform handling 1000+ concurrent users with real-time inventory management"
            },
            {
              name: "Task Management API",
              tech: "Python, FastAPI, Docker, Redis",
              description: "Developed RESTful API with authentication, real-time notifications, and comprehensive testing suite"
            }
          ]
        };
      
      case "project-manager":
        return {
          personalInfo: {
            name: "Sarah Chen",
            title: "Senior Project Manager",
            email: "sarah.chen@email.com",
            phone: "(555) 987-6543",
            location: "New York, NY",
            linkedin: "linkedin.com/in/sarahchen"
          },
          summary: "Results-driven Project Manager with 8+ years managing complex technology projects from conception to delivery. Proven track record of leading cross-functional teams, managing budgets up to $5M, and delivering projects on time and within scope. Expert in Agile methodologies, risk management, and stakeholder communication. PMP certified with experience in software development, infrastructure, and digital transformation initiatives.",
          skills: [
            "Project Management", "Agile Methodology", "Scrum Master", "Risk Management",
            "Stakeholder Management", "Budget Planning", "Resource Allocation", "Team Leadership",
            "JIRA", "Confluence", "Microsoft Project", "Gantt Charts", "KPI Development",
            "Process Improvement", "Change Management", "Quality Assurance", "Vendor Management"
          ],
          experience: [
            {
              title: "Senior Project Manager",
              company: "Global Tech Solutions",
              location: "New York, NY",
              dates: "03/2020 - Present",
              responsibilities: [
                "Manage portfolio of 8 concurrent projects with combined budget of $12M annually",
                "Led digital transformation initiative reducing operational costs by 25%",
                "Coordinate cross-functional teams of 15-20 members including developers, designers, and analysts",
                "Implement Agile methodologies resulting in 30% improvement in delivery timelines",
                "Facilitate daily standups, sprint planning, and retrospective meetings",
                "Develop project roadmaps, timelines, and resource allocation plans"
              ]
            },
            {
              title: "Project Manager",
              company: "Innovation Corp",
              location: "New York, NY", 
              dates: "01/2018 - 02/2020",
              responsibilities: [
                "Managed software development projects from requirements gathering to deployment",
                "Coordinated with stakeholders to define project scope, objectives, and deliverables",
                "Tracked project progress using KPIs and delivered regular status reports to executives",
                "Managed vendor relationships and contract negotiations for external services",
                "Implemented risk mitigation strategies reducing project delays by 40%"
              ]
            }
          ],
          education: [
            {
              degree: "Master of Business Administration (MBA)",
              school: "New York University Stern School of Business",
              location: "New York, NY",
              dates: "09/2015 - 05/2017",
              details: ""
            },
            {
              degree: "Bachelor of Science in Business Administration",
              school: "University of Pennsylvania",
              location: "Philadelphia, PA",
              dates: "09/2011 - 05/2015",
              details: ""
            }
          ],
          certifications: [
            "Project Management Professional (PMP) - PMI (2023)",
            "Certified ScrumMaster (CSM) - Scrum Alliance (2022)",
            "Agile Certified Practitioner (ACP) - PMI (2021)"
          ],
          projects: [
            {
              name: "Cloud Migration Initiative",
              tech: "AWS, Project Management",
              description: "Led migration of legacy systems to cloud infrastructure, reducing operational costs by $2M annually"
            }
          ]
        };

      case "marketing":
        return {
          personalInfo: {
            name: "Michael Rodriguez",
            title: "Digital Marketing Manager",
            email: "michael.rodriguez@email.com",
            phone: "(555) 456-7890",
            location: "Los Angeles, CA",
            linkedin: "linkedin.com/in/michaelrodriguez"
          },
          summary: "Creative Digital Marketing Manager with 7+ years driving growth through data-driven marketing strategies. Proven expertise in SEO, SEM, social media marketing, and content creation. Successfully managed marketing budgets up to $2M and generated 300% increase in qualified leads. Strong analytical skills with experience in marketing automation, A/B testing, and conversion optimization.",
          skills: [
            "Digital Marketing Strategy", "Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)",
            "Social Media Marketing", "Content Marketing", "Email Marketing", "Marketing Automation",
            "Google Ads", "Facebook Ads", "Google Analytics", "HubSpot", "Salesforce",
            "A/B Testing", "Conversion Optimization", "Brand Management", "Lead Generation",
            "Marketing Analytics", "Customer Segmentation", "Campaign Management", "Copywriting"
          ],
          experience: [
            {
              title: "Digital Marketing Manager",
              company: "GrowthTech Solutions",
              location: "Los Angeles, CA",
              dates: "02/2020 - Present",
              responsibilities: [
                "Develop and execute comprehensive digital marketing strategies for B2B and B2C segments",
                "Manage $1.5M annual marketing budget across multiple channels and campaigns",
                "Increased organic website traffic by 250% through SEO optimization and content marketing",
                "Generated 400+ qualified leads monthly through integrated marketing campaigns",
                "Implemented marketing automation workflows improving lead nurturing efficiency by 45%",
                "Analyze campaign performance using Google Analytics, creating data-driven optimization strategies"
              ]
            },
            {
              title: "Marketing Specialist",
              company: "Digital Agency Pro",
              location: "Los Angeles, CA",
              dates: "06/2018 - 01/2020",
              responsibilities: [
                "Created and managed social media campaigns across Facebook, Instagram, LinkedIn, and Twitter",
                "Developed content marketing strategy resulting in 150% increase in blog engagement",
                "Managed Google Ads and Facebook Ads campaigns with average ROAS of 4:1",
                "Conducted market research and competitive analysis to identify growth opportunities",
                "Collaborated with design team to create compelling marketing materials and landing pages"
              ]
            }
          ],
          education: [
            {
              degree: "Bachelor of Arts in Marketing",
              school: "University of California, Los Angeles (UCLA)",
              location: "Los Angeles, CA",
              dates: "09/2013 - 06/2017",
              details: ""
            }
          ],
          certifications: [
            "Google Ads Certified (2023)",
            "Google Analytics Certified (2023)",
            "HubSpot Content Marketing Certification (2022)",
            "Facebook Blueprint Certification (2022)"
          ],
          projects: [
            {
              name: "Product Launch Campaign",
              tech: "Multi-channel Marketing",
              description: "Led launch campaign for new SaaS product generating $500K revenue in first quarter"
            }
          ]
        };

      case "healthcare":
        return {
          personalInfo: {
            name: "Dr. Emily Watson",
            title: "Registered Nurse, BSN",
            email: "emily.watson@email.com",
            phone: "(555) 234-5678",
            location: "Chicago, IL",
            linkedin: "linkedin.com/in/emilywatson"
          },
          summary: "Compassionate Registered Nurse with 10+ years of experience in critical care and emergency medicine. Proven expertise in patient assessment, care planning, and interdisciplinary collaboration. Strong background in electronic health records (EHR), patient safety protocols, and quality improvement initiatives. Committed to evidence-based practice and continuous professional development.",
          skills: [
            "Patient Care", "Critical Care Nursing", "Emergency Medicine", "Patient Assessment",
            "Medication Administration", "IV Therapy", "Wound Care", "Patient Education",
            "Electronic Health Records (EHR)", "EPIC", "Cerner", "Patient Safety",
            "Quality Improvement", "HIPAA Compliance", "BLS Certification", "ACLS Certification",
            "Team Leadership", "Care Coordination", "Clinical Documentation", "Infection Control"
          ],
          experience: [
            {
              title: "Senior Registered Nurse - ICU",
              company: "Chicago General Hospital",
              location: "Chicago, IL",
              dates: "01/2019 - Present",
              responsibilities: [
                "Provide comprehensive nursing care to critically ill patients in 24-bed ICU",
                "Monitor vital signs, administer medications, and coordinate with physicians and specialists",
                "Mentor new graduate nurses and nursing students during clinical rotations",
                "Participate in quality improvement initiatives reducing hospital-acquired infections by 20%",
                "Lead code blue response team and serve on hospital ethics committee",
                "Document patient care using EPIC EHR system ensuring HIPAA compliance"
              ]
            },
            {
              title: "Registered Nurse - Emergency Department",
              company: "Metro Medical Center",
              location: "Chicago, IL",
              dates: "08/2015 - 12/2018",
              responsibilities: [
                "Triaged emergency patients and provided immediate care for trauma, cardiac, and medical emergencies",
                "Administered medications, started IVs, and assisted physicians with procedures",
                "Educated patients and families on discharge instructions and follow-up care",
                "Collaborated with multidisciplinary team including physicians, social workers, and case managers",
                "Maintained accurate clinical documentation and participated in peer review processes"
              ]
            }
          ],
          education: [
            {
              degree: "Bachelor of Science in Nursing (BSN)",
              school: "Northwestern University",
              location: "Chicago, IL",
              dates: "08/2011 - 05/2015",
              details: ""
            }
          ],
          certifications: [
            "Registered Nurse (RN) - Illinois State License (2023)",
            "Basic Life Support (BLS) - American Heart Association (2023)",
            "Advanced Cardiovascular Life Support (ACLS) - AHA (2023)",
            "Critical Care Registered Nurse (CCRN) - AACN (2022)"
          ],
          projects: [
            {
              name: "Fall Prevention Initiative",
              tech: "Quality Improvement",
              description: "Led hospital-wide fall prevention program reducing patient falls by 35% over 12 months"
            }
          ]
        };

      case "financial":
        return {
          personalInfo: {
            name: "David Thompson",
            title: "Senior Financial Analyst",
            email: "david.thompson@email.com",
            phone: "(555) 345-6789",
            location: "Boston, MA",
            linkedin: "linkedin.com/in/davidthompson"
          },
          summary: "Detail-oriented Financial Analyst with 8+ years of experience in financial modeling, budgeting, and investment analysis. Proven track record of providing strategic financial insights that drive business growth and profitability. Expert in financial reporting, variance analysis, and forecasting. Strong proficiency in Excel, SQL, and financial software systems. CFA Level II candidate with MBA in Finance.",
          skills: [
            "Financial Modeling", "Financial Analysis", "Budget Planning", "Forecasting",
            "Variance Analysis", "Investment Analysis", "Risk Assessment", "Financial Reporting",
            "Excel", "SQL", "Power BI", "Tableau", "SAP", "QuickBooks", "Bloomberg Terminal",
            "Valuation Models", "DCF Analysis", "Ratio Analysis", "Cash Flow Analysis",
            "Financial Planning", "Cost Analysis", "Performance Metrics", "Regulatory Compliance"
          ],
          experience: [
            {
              title: "Senior Financial Analyst",
              company: "Capital Investment Group",
              location: "Boston, MA",
              dates: "03/2020 - Present",
              responsibilities: [
                "Develop complex financial models for investment opportunities worth $100M+ annually",
                "Prepare monthly financial reports and variance analysis for executive leadership",
                "Lead annual budgeting process for $50M operating budget across 5 business units",
                "Conduct due diligence on potential acquisitions and strategic partnerships",
                "Create financial forecasts and scenario analysis for strategic planning initiatives",
                "Present investment recommendations to board of directors and investment committee"
              ]
            },
            {
              title: "Financial Analyst",
              company: "Tech Finance Corp",
              location: "Boston, MA",
              dates: "06/2017 - 02/2020",
              responsibilities: [
                "Analyzed financial performance of technology sector investments and portfolios",
                "Prepared quarterly earnings reports and investor presentations",
                "Monitored market trends and industry developments affecting portfolio companies",
                "Built automated reporting dashboards using Excel VBA and Power BI",
                "Supported M&A transactions with financial modeling and valuation analysis"
              ]
            }
          ],
          education: [
            {
              degree: "Master of Business Administration (MBA) - Finance",
              school: "Boston University Questrom School of Business",
              location: "Boston, MA",
              dates: "09/2015 - 05/2017",
              details: ""
            },
            {
              degree: "Bachelor of Science in Economics",
              school: "Harvard University",
              location: "Cambridge, MA",
              dates: "09/2011 - 05/2015",
              details: ""
            }
          ],
          certifications: [
            "CFA Level II Candidate - CFA Institute (2024)",
            "Financial Risk Manager (FRM) - GARP (2022)",
            "Certified Financial Planner (CFP) - CFP Board (2021)"
          ],
          projects: [
            {
              name: "Portfolio Optimization Model",
              tech: "Excel, VBA, Python",
              description: "Developed automated portfolio optimization model improving risk-adjusted returns by 15%"
            }
          ]
        };
      
      default:
        return getTemplateData("software-engineer");
    }
  };

  const data = getTemplateData(template);

  return (
    <div id="resume-content" className="resume-container max-w-4xl mx-auto bg-white p-8 print:p-4">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{data.personalInfo.title}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>📧</span>
            <a href={`mailto:${data.personalInfo.email}`} className="hover:text-blue-600">
              {data.personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>📱</span>
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{data.personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💼</span>
            <a href={`https://${data.personalInfo.linkedin}`} className="hover:text-blue-600">
              {data.personalInfo.linkedin}
            </a>
          </div>
          {data.personalInfo.github && (
            <div className="flex items-center gap-1">
              <span>🔗</span>
              <a href={`https://${data.personalInfo.github}`} className="hover:text-blue-600">
                {data.personalInfo.github}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {data.summary}
        </p>
      </section>

      {/* Core Competencies */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          CORE COMPETENCIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data.skills.map((skill, index) => (
            <div key={index} className="text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          PROFESSIONAL EXPERIENCE
        </h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <h4 className="text-gray-700">{job.company} • {job.location}</h4>
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {job.dates}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-sm leading-relaxed">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          EDUCATION
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <h4 className="text-gray-700">{edu.school} • {edu.location}</h4>
                {edu.details && <p className="text-sm text-gray-600">{edu.details}</p>}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {edu.dates}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          CERTIFICATIONS
        </h2>
        <ul className="space-y-1">
          {data.certifications.map((cert, index) => (
            <li key={index} className="text-gray-700 text-sm">
              • {cert}
            </li>
          ))}
        </ul>
      </section>

      {/* Notable Projects */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
          NOTABLE PROJECTS
        </h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-semibold text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-1">Technologies: {project.tech}</p>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body { 
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
          .no-print { 
            display: none !important; 
          }
          .resume-container {
            max-width: none !important;
            margin: 0 !important;
            padding: 0.5in !important;
          }
          h1 { 
            font-size: 20px !important; 
            margin-bottom: 8px !important;
          }
          h2 { 
            font-size: 14px !important; 
            margin-bottom: 6px !important;
            page-break-after: avoid;
          }
          h3 { 
            font-size: 13px !important; 
          }
          .page-break-inside {
            page-break-inside: avoid;
          }
          section {
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;