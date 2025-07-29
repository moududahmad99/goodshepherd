import React from 'react';
import { 
  FaPills, 
  FaHeartbeat, 
  FaShieldAlt, 
  FaTruck, 
  FaUserMd, 
  FaAward,
  FaRegClock,
  FaRegSmile,
  FaClinicMedical,
  FaFlask
} from 'react-icons/fa';
// import { RiMentalHealthLine } from 'react-icons/ri';
// import { GiHealthPotion } from 'react-icons/gi';

// Import your images (replace with actual image paths)
import feature1 from '../assets/1.jpg';
import feature2 from '../assets/2.jpg';
import feature3 from '../assets/3.jpg';
import feature4 from '../assets/4.jpg';

const About = () => {
  const stats = [
    { icon: <FaRegClock className="w-full h-full" />, value: "5+", label: "Years Serving Community" },
    { icon: <FaPills className="w-full h-full" />, value: "1240+", label: "Prescriptions Filled" },
    { icon: <FaUserMd className="w-full h-full" />, value: "2", label: "Specialist Pharmacists" },
    // { icon: <FaAward className="w-full h-full" />, value: "24", label: "Industry Awards" },
    { icon: <FaRegSmile className="w-full h-full" />, value: "99.7%", label: "Satisfaction Rate" }
  ];

  const featuresText = [
    {
      title: "Medication Management",
      description: "Our automated dispensing systems ensure 99.9% accuracy with triple-check verification for every prescription."
    },
    {
      title: "Vaccination Services",
      description: "Comprehensive health screenings, immunization services, and personalized wellness consultations."
    },
    {
      title: "Safety Protocols",
      description: "ISO 9001 certified facility with biometric-controlled storage for controlled substances."
    },
    {
      title: "Concierge Delivery",
      description: "Temperature-controlled logistics with real-time GPS tracking and same-day delivery."
    }
  ];

  const featureImages = [
    { image: feature1, alt: "Medical Equipments" },
    { image: feature2, alt: "Vaccination Department" },
    { image: feature3, alt: "Our Pharmacy" },
    { image: feature4, alt: "Skin Care" }
  ];

  const team = [
    { initials: "M", name: "Dr. Mervat Mellak", role: "Founder-CEO", bio: "Creates custom medication formulations for unique needs." }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#404460] mb-6 relative inline-block">
            Pharmaceutical Excellence
            <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#5C90A5] to-[#404460] rounded-full"></span>
          </h2>
          <p className="text-xl text-[#364153] max-w-3xl mx-auto opacity-90 leading-relaxed">
            For over 15 years, we've blended cutting-edge medicine with compassionate care to serve our community with excellence.
          </p>
        </div>

        {/* Features Section - Replaced cards with text + images */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#404460] mb-8">Our Distinguished Services</h3>
            <div className="space-y-8">
              {featuresText.map((feature, index) => (
                <div key={index} className="group">
                  <h4 className="text-xl font-semibold text-[#5C90A5] mb-2 flex items-center">
                    <span className="w-3 h-3 bg-[#5C90A5] rounded-full mr-3 group-hover:bg-[#404460] transition-colors"></span>
                    {feature.title}
                  </h4>
                  <p className="text-[#364153] pl-6 opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Image grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {featureImages.map((img, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={img.image} 
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#5C90A5]/10 to-[#404460]/10 rounded-2xl p-12 mb-20 border border-[#5C90A5]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-[#5C90A5]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#404460] mb-2">{stat.value}</div>
                <div className="text-[#364153] opacity-80 uppercase text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404460] mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-[#364153] max-w-3xl mx-auto opacity-90 mb-12">
            Our pharmacists aren't just medication experts—they're compassionate healthcare partners.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5C90A5] to-[#404460] flex items-center justify-center text-white text-3xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-[#404460] mb-1">{member.name}</h3>
                <p className="text-[#5C90A5] font-medium mb-4">{member.role}</p>
                <p className="text-[#364153] opacity-80 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Promise */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#5C90A5] via-[#404460] to-[#28353A]"></div>
          <div className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 text-[#5C90A5]">
              <FaClinicMedical className="w-full h-full" />
            </div>
            <h2 className="text-3xl font-bold text-[#404460] mb-6">Our Quality Promise</h2>
            <p className="text-xl text-[#364153] max-w-4xl mx-auto opacity-90 leading-relaxed">
              Every prescription undergoes 7-point verification from our team of pharmacists. We source only from FDA-approved 
              manufacturers and conduct regular independent quality testing to ensure the highest pharmaceutical standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;