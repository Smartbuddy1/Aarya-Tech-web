import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

function CareerPage({ onNavigateHome }) {
  const handleApplyClick = (dept, pos) => {
    const subject = dept && pos
      ? encodeURIComponent(`Job Application: ${dept} - ${pos}`)
      : encodeURIComponent("Job Application / Resume Submission - Aarya Technologies");
    const body = encodeURIComponent(
      `Hello Aarya Technologies HR Team,\n\nI would like to apply for the position: ${pos ? `${pos} (${dept})` : "General Application"}.\n\nPlease find my resume attached.\n\nName:\nPhone:\nEmail:\nCurrent City:\nTotal Experience:\n\nMessage / Notes:\n`
    );
    window.location.href = `mailto:aryaprotech@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="career-page">
      <section className="career-page-hero">
        <div className="container career-page-hero-inner">
          <div className="career-page-copy">
            <button className="contact-page-back" type="button" onClick={() => onNavigateHome("home")}>
              <ArrowLeft size={15} />
              Home
            </button>
            <span className="eyebrow light"><BriefcaseBusiness size={15} /> Careers</span>
            <h1>Careers</h1>
            <p>Explore opportunities and build your career with Aarya Technologies.</p>
          </div>
        </div>
      </section>

      <section className="career-page-body section">
        <div className="container">
          <div className="career-page-layout">
            {/* Top Section: Why Join Us */}
            <div className="career-why-join-us">
              <h2>Why join Aarya Technologies?</h2>
              <p>
                At Aarya Technologies Pvt. Ltd., we believe in empowering our people to create innovative, sustainable solutions that make a real difference. We offer a collaborative environment where engineering excellence and creativity thrive.
              </p>
              <p>
                Whether you are designing special purpose machines, working on eco-friendly hygiene products, or driving our growth, you will be part of a mission-driven team dedicated to building a cleaner and smarter world. We provide opportunities for continuous learning, professional growth, and the chance to work on impactful projects.
              </p>

              <div className="career-perks-list" style={{ marginTop: "24px", display: "grid", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                  <CheckCircle2 size={18} color="#fcbe12" />
                  <span>Innovative engineering & OEM product development</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                  <CheckCircle2 size={18} color="#fcbe12" />
                  <span>Work on national smart city & eco-sanitation projects</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                  <CheckCircle2 size={18} color="#fcbe12" />
                  <span>Collaborative, learning-oriented culture & career growth</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                  <CheckCircle2 size={18} color="#fcbe12" />
                  <span>Direct exposure to end-to-end manufacturing & IoT systems</span>
                </div>
              </div>

              <div style={{ marginTop: "28px", padding: "18px", background: "#f8fafc", border: "1px solid rgba(252, 190, 18, 0.3)", borderRadius: "8px", display: "grid", gap: "6px" }}>
                <strong style={{ color: "#111827", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Building2 size={16} /> Location: Ambad MIDC, Nashik
                </strong>
                <small style={{ color: "#64748b", fontSize: "12.5px" }}>
                  Plant: S-27, Near Emerson, Ambad MIDC, Nashik, Maharashtra - 422010
                </small>
              </div>
            </div>

            {/* Current Vacancies: Accounts & Electrical Engineer */}
            <div className="career-vacancies-section">
              <div className="career-vacancies-header">
                <div>
                  <span className="eyebrow" style={{ color: "#b71e86", marginBottom: "4px" }}>
                    <BriefcaseBusiness size={14} /> Current Openings
                  </span>
                  <h3 style={{ margin: "4px 0 0", color: "#111827", fontSize: "22px", fontWeight: "700" }}>
                    Current Job Vacancies
                  </h3>
                </div>
                <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
                  Click Apply Now to email your resume directly to aryaprotech@gmail.com.
                </p>
              </div>

              <div className="career-vacancies-grid">
                {/* Card 1: Production Engineer */}
                <div className="career-vacancy-box">
                  <div className="career-vacancy-top">
                    <div className="career-vacancy-title-wrap">
                      <span className="career-vacancy-dept-badge">Production</span>
                      <h4>Production Engineer</h4>
                    </div>
                    <div className="career-vacancy-tags">
                      <span><MapPin size={13} /> Ambad MIDC, Nashik</span>
                      <span><Clock size={13} /> Full-Time</span>
                      <span><BriefcaseBusiness size={13} /> 3-5+ Years</span>
                    </div>
                  </div>
                  <p className="career-vacancy-desc">
                    Oversee manufacturing operations, production planning, quality control, and shop floor management for specialized machinery and kiosks.
                  </p>
                  <ul className="career-vacancy-points">
                    <li>Resource allocation and capacity planning.</li>
                    <li>Ensure adherence to production schedules and quality standards.</li>
                    <li>Optimize manufacturing processes for efficiency.</li>
                  </ul>
                  <button
                    type="button"
                    className="button primary small career-vacancy-apply-btn"
                    onClick={() => handleApplyClick("Production", "Production Engineer")}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                {/* Card 2: CNC Bending Operator */}
                <div className="career-vacancy-box">
                  <div className="career-vacancy-top">
                    <div className="career-vacancy-title-wrap">
                      <span className="career-vacancy-dept-badge">Production</span>
                      <h4>CNC Bending Operator</h4>
                    </div>
                    <div className="career-vacancy-tags">
                      <span><MapPin size={13} /> Ambad MIDC, Nashik</span>
                      <span><Clock size={13} /> Full-Time</span>
                      <span><BriefcaseBusiness size={13} /> Fresher up to 1 Year</span>
                    </div>
                  </div>
                  <p className="career-vacancy-desc">
                    Operate CNC Bending machines, ensure precise bends based on technical drawings, and maintain high-quality sheet metal components.
                  </p>
                  <ul className="career-vacancy-points">
                    <li>Education: ITI, 10th Pass.</li>
                    <li>Basic CNC knowledge and machine operation.</li>
                    <li>Mechanical knowledge and sheet metal knowledge required.</li>
                  </ul>
                  <button
                    type="button"
                    className="button primary small career-vacancy-apply-btn"
                    onClick={() => handleApplyClick("Production", "CNC Bending Operator")}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                {/* Card 3: Lazer Cutting Operator */}
                <div className="career-vacancy-box">
                  <div className="career-vacancy-top">
                    <div className="career-vacancy-title-wrap">
                      <span className="career-vacancy-dept-badge">Production</span>
                      <h4>Lazer Cutting Operator</h4>
                    </div>
                    <div className="career-vacancy-tags">
                      <span><MapPin size={13} /> Ambad MIDC, Nashik</span>
                      <span><Clock size={13} /> Full-Time</span>
                      <span><BriefcaseBusiness size={13} /> Fresher</span>
                    </div>
                  </div>
                  <p className="career-vacancy-desc">
                    Operate and maintain laser cutting equipment for precise sheet metal fabrication and part manufacturing.
                  </p>
                  <ul className="career-vacancy-points">
                    <li>Education: ITI, 10th Pass.</li>
                    <li>Basic knowledge of laser cutting operations.</li>
                    <li>Ability to handle and process sheet metal efficiently.</li>
                  </ul>
                  <button
                    type="button"
                    className="button primary small career-vacancy-apply-btn"
                    onClick={() => handleApplyClick("Production", "Lazer Cutting Operator")}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                {/* Card 4: Design Engineer */}
                <div className="career-vacancy-box">
                  <div className="career-vacancy-top">
                    <div className="career-vacancy-title-wrap">
                      <span className="career-vacancy-dept-badge">Design</span>
                      <h4>Design Engineer</h4>
                    </div>
                    <div className="career-vacancy-tags">
                      <span><MapPin size={13} /> Ambad MIDC, Nashik</span>
                      <span><Clock size={13} /> Full-Time</span>
                      <span><BriefcaseBusiness size={13} /> 1-3+ Years / Fresher</span>
                    </div>
                  </div>
                  <p className="career-vacancy-desc">
                    Create robust 3D models, detailed 2D manufacturing drawings, and innovative product designs for our smart civic infrastructure.
                  </p>
                  <ul className="career-vacancy-points">
                    <li>Proficiency in SolidWorks, AutoCAD, or similar CAD software.</li>
                    <li>Understanding of sheet metal design and manufacturing tolerances.</li>
                    <li>Collaborate with production teams to optimize manufacturability.</li>
                  </ul>
                  <button
                    type="button"
                    className="button primary small career-vacancy-apply-btn"
                    onClick={() => handleApplyClick("Design", "Design Engineer")}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                {/* Card 5: Sales & Marketing Executive */}
                <div className="career-vacancy-box">
                  <div className="career-vacancy-top">
                    <div className="career-vacancy-title-wrap">
                      <span className="career-vacancy-dept-badge">Sales &amp; Marketing</span>
                      <h4>Sales &amp; Marketing Executive</h4>
                    </div>
                    <div className="career-vacancy-tags">
                      <span><MapPin size={13} /> Ambad MIDC, Nashik</span>
                      <span><Clock size={13} /> Full-Time</span>
                      <span><BriefcaseBusiness size={13} /> Fresher</span>
                    </div>
                  </div>
                  <p className="career-vacancy-desc">
                    Drive client outreach, customer communication, lead generation, and business development for our smart civic technology and hygiene product lines.
                  </p>
                  <ul className="career-vacancy-points">
                    <li><strong>Experience:</strong> Fresher</li>
                    <li><strong>Qualification:</strong> Graduate / MBA (Marketing Preferred)</li>
                    <li><strong>Gender:</strong> Male</li>
                    <li><strong>Skills:</strong> Communication, Customer Handling, Lead Generation, Business Development</li>
                  </ul>
                  <button
                    type="button"
                    className="button primary small career-vacancy-apply-btn"
                    onClick={() => handleApplyClick("Sales & Marketing", "Sales & Marketing Executive")}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                {/* Talent Network / Open Application */}
                <div className="career-talent-pool-card" style={{
                  gridColumn: "1 / -1",
                  marginTop: "8px",
                  padding: "24px 22px",
                  background: "linear-gradient(135deg, #090d16 0%, #0f172a 52%, #161f33 100%)",
                  border: "1px solid rgba(252, 190, 18, 0.35)",
                  borderRadius: "10px",
                  color: "#ffffff",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "18px",
                  boxShadow: "0 10px 26px rgba(0, 0, 0, 0.25)"
                }}>
                  <div style={{ maxWidth: "580px" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#fcbe12", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                      <Sparkles size={14} /> Talent Network
                    </div>
                    <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700", color: "#ffffff" }}>
                      Didn't find a role that matches your skills?
                    </h3>
                    <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.82)", fontSize: "13.5px", lineHeight: "1.55" }}>
                      We'd like to stay connected. Join our talent pool, and our HR team will reach out when a job matches your skills.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="button primary small"
                    onClick={() => handleApplyClick("", "")}
                    style={{
                      background: "linear-gradient(135deg, #b71e86 0%, #fcbe12 100%)",
                      color: "#ffffff",
                      borderColor: "#fcbe12",
                      fontWeight: "600",
                      padding: "10px 22px",
                      borderRadius: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(183, 30, 134, 0.35)"
                    }}
                  >
                    <Mail size={15} /> Send Resume via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;
