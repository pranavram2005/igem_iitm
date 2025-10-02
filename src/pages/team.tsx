import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@theme/Layout';
import './team.css';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    { name: "Meiyapan Laksh", img: "", position: "Faculty Advisor and Primary Investigator", vertical: "Faculty" },
    { name: "Arumugam Rajavelu", img: "", position: "Guide", vertical: "Faculty" },
    { name: "Karthik Rajesh", img: "/img/team/20241020_180349~4 (1) - KARTHIK RAJESH.jpg", position: "Core", vertical: "Leadership" },
    { name: "Aldis Daniel G", img: "/img/team/Aldis_pic - Aldis Daniel G.jpg", position: "Core", vertical: "Leadership" },
    { name: "Ashwin Phillip", img: "", position: "Head - Dry Lab", vertical: "Dry Lab" },
    { name: "Rohan Krishnan", img: "/img/team/Screenshot_20240326-192451_WhatsApp - Rohan Krishnan.jpg", position: "Head - Dry Lab", vertical: "Dry Lab" },
    { name: "Skanda", img: "/img/team/PHOTO-2023-05-06-17-47-59 2 - Skandaagraja Sundhar be23b015.jpg", position: "Head - Dry Lab", vertical: "Dry Lab" },
    { name: "Harshavardhan Madhan", img: "", position: "Head - Dry Lab", vertical: "Dry Lab" },
    { name: "Vaidehi Patil", img: "/img/team/20250301_143426 - Vaidehi Patil.jpg", position: "Head - Wet Lab", vertical: "Wet Lab" },
    { name: "Oviya", img: "/img/team/IMG_20241102_162826_854 - Oviya Suresh.webp", position: "Head - Wet Lab", vertical: "Wet Lab" },
    { name: "Minkuri Ridhima Reddy", img: "/img/team/me - Minkuri Ridhima Reddy md23b015.jpg", position: "Head - Wet Lab", vertical: "Wet Lab" },
    { name: "Shreyas Balakarthikeyan", img: "", position: "Head - Wet Lab", vertical: "Wet Lab" },
    { name: "Kaarthik", img: "", position: "Head - Media and Design", vertical: "Media and Design" },
    { name: "Pranav Ram", img: "/img/team/Screenshot 2024-06-07 163916 - Pranav Ram P S bs23b012.png", position: "Head - WebOps", vertical: "WebOps" },
    { name: "Ruhaib Muhammad", img: "/img/team/IMG_20250320_230733 - Muhammad Ruhaib be22b005.jpg", position: "Head - WebOps", vertical: "WebOps" },
    { name: "Tharunika", img: "/img/team/Tharunika_igem pic - K J Tharunika.png", position: "Member - Dry Lab", vertical: "Dry Lab" },
    { name: "Abhishek Raj", img: "/img/team/IMG20250312195901 - Abhishek Raj md23b001.jpg", position: "Member - Dry Lab", vertical: "Dry Lab" },
    { name: "Karthik", img: "/img/team/IMG_20250308_152536 - Karthik A P.jpg", position: "Member - Dry Lab", vertical: "Dry Lab" },
    { name: "Sanjana Ramkumar", img: "/img/team/IMG-20250101-WA0059(2) - Sanjana Ramkumar.jpg", position: "Member - Dry Lab", vertical: "Dry Lab" },
    { name: "Harsh", img: "/img/team/IMG-20240930-WA0013 - Harsh.jpg", position: "Member - Wet Lab", vertical: "Wet Lab" },
    { name: "Shravan", img: "/img/team/Shravana Prasanna Bhat.png", position: "Member - Wet Lab", vertical: "Wet Lab" },
    { name: "Tia Anand", img: "/img/team/IMG_6978 - Tia Anand be24b015.jpg", position: "Member - Wet Lab", vertical: "Wet Lab" },
    { name: "Tej Sameer Acharya", img: "/img/team/20250307_221303 - Tej Sameer Acharya bs24b036.jpg", position: "Member - Wet Lab", vertical: "Wet Lab" },
    { name: "Nistla Sri Amritha", img: "", position: "Member - Wet Lab", vertical: "Wet Lab" },
    { name: "Joshua Bage", img: "/img/team/IMG20250312181407 - Joshua Bage me24b027.jpg", position: "Member - Media", vertical: "Media" },
    { name: "Bhagyashree Bora", img: "/img/team/IMG-20250312-WA0017 - Bhagyashree Bora md23b007.jpg", position: "Member - Media", vertical: "Media" },
    { name: "Shyam Anand", img: "/img/team/20250129_221909 - Shyam Anand ch24b099.jpg", position: "Member - WebOps", vertical: "WebOps" },
    { name: "Bhavyasri Kothauppari", img: "/img/team/IMG-20240325-WA0014 - Kothauppari Bhavya Sri me23b110.jpg", position: "Member - WebOps", vertical: "WebOps" },
    { name: "Mogith", img: "/img/team/Profile - Mogith Guru A M ch23b096.jpg", position: "Member - WebOps", vertical: "WebOps" },
    { name: "Karthik A P", img: "/img/team/IMG_20250308_152536 - Karthik A P.jpg", position: "Member - Dry Lab", vertical: "Dry Lab" }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const openSidebar = (index) => {
    setSelectedMember(teamMembers[index]);
    setSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.team-card').forEach((card) => {
      gsap.to(card as Element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <Layout
      title="Team Members"
      description="Meet the talented individuals behind IIT Madras iGEM 2025"
      wrapperClassName="team-layout"
    >
      <div className="team-page-container">
        <a href="/" className="back-to-site">← Back to Main Site</a>
        
        <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
        
        <div className={`team-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="team-header">
            <h1>IIT Madras iGEM 2025</h1>
            <p>Meet the talented individuals who make our synthetic biology project extraordinary. Each member brings unique skills and passion to create innovative solutions for real-world challenges.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => {
              const imgSrc = member.img 
                ? member.img 
                : `https://placehold.co/400x300/029E4E/white?text=${getInitials(member.name)}`;
              
              return (
                <div 
                  key={index} 
                  className="team-card" 
                  onClick={() => openSidebar(index)}
                >
                  <img src={imgSrc} alt={member.name} className="avatar" />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <span className="department">{member.vertical || 'Team'}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`member-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={closeSidebar}>&times;</button>
          {selectedMember && (
            <div className="sidebar-content">
              <img 
                src={selectedMember.img 
                  ? selectedMember.img 
                  : `https://placehold.co/600x400/029E4E/white?text=${getInitials(selectedMember.name)}`
                } 
                alt={selectedMember.name} 
                className="avatar-large" 
              />
              <h2>{selectedMember.name}</h2>
              <p className="position">{selectedMember.position}</p>
              <div className="department-large">{selectedMember.vertical || 'Team'}</div>
              
              <div className="description">
                A dedicated team member contributing their expertise and passion to our iGEM project. Working collaboratively to advance synthetic biology and create innovative solutions for real-world challenges through the EPIC System.
              </div>
              
              <div className="contact-info">
                <h4>Contact Information</h4>
                <div className="contact-item">📧 {selectedMember.name.toLowerCase().replace(/ /g, '.')}@iitm.ac.in</div>
                <div className="contact-item">💼 iGEM IIT Madras Team</div>
                <div className="contact-item">🏛️ Indian Institute of Technology Madras</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;