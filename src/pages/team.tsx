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
    { name: "Meiyapan Laksh", img: "https://static.igem.wiki/teams/5657/team/adv1.webp", position: "Faculty Advisor and Primary Investigator", vertical: "Faculty", bio: "Prof. Meiyappan Lakshmanan guided the team in defining the project’s focus on CHO cells and biomanufacturing, providing continuous mentorship and technical feedback. He offered lab space, facilitated cell culture training, and provided technical guidance on integrating gene expression data into the metabolic model using algorithms like GIMME and iMAT for context-specific model refinement." },
    { name: "Arumugam Rajavelu", img: "https://static.igem.wiki/teams/5657/team/adv2.webp", position: "Guide", vertical: "Faculty", bio: "Dr. Arumugam provides guidance and oversight for our project and experimental design." },
    { name: "Karthik Rajesh", img: "https://static.igem.wiki/teams/5657/team/c1.webp", position: "Core", vertical: "Leadership", bio: "As a student leader, R Karthik led the various activities of the team during this year's project, including lab implementation, dry-lab planning, stakeholder outreach, and overseeing media and WebOps work while supporting administrative and logistics tasks." },
    { name: "Aldis Daniel G", img: "https://static.igem.wiki/teams/5657/team/c2.webp", position: "Core", vertical: "Leadership", bio: "As a team lead, Aldis led the various activities of the team as part of this year's project. This included lab implementation, dry lab ideation, planning and coding, reaching out to stakeholders and sponsors, overseeing the team's media and WebOps work, and performing general administrative and logistics-related tasks." },
    { name: "Ashwin Phillip", img: "", position: "Head - Dry Lab", vertical: "Dry Lab", bio: "As Head of the Dry Lab and Sponsorship Verticals, Ashwin led and trained the team in AI model development, overseeing research and creating the DeepPGD model (a BiLSTM-Attention architecture) to predict methylation values from gene sequences. He also directed sponsorship initiatives, managing outreach, pitch decks, and collaborations with biotech and tech firms." },
    { name: "Rohan Krishnan", img: "https://static.igem.wiki/teams/5657/team/rohan.webp", position: "Head - Dry Lab", vertical: "Dry Lab", bio: "As Head of the Dry Lab, Rohan played a central role in formulating the problem statement and developing the computational pipeline. He contributed model improvements (DeepMethyGene, geneEXPLORE) that increased performance and biological relevance." },
    { name: "Skanda", img: "https://static.igem.wiki/teams/5657/team/skanda.webp", position: "Head - Dry Lab", vertical: "Dry Lab", bio: "As Head of the Dry Lab, Skanda explored and implemented mathematical algorithms that incorporate gene expression values into genome-scale metabolic models, trained members on Python libraries for AI and metabolic modelling, and identified biological target genes for study." },
    { name: "Harshavardhan Madhan", img: "https://static.igem.wiki/teams/5657/team/harsha-2.webp", position: "Head - Dry Lab", vertical: "Dry Lab", bio: "Harsh was involved in literature review, designing primers and gRNA, gRNA cloning and creating fusion proteins. He participated in iHP initiatives and stakeholder interviews, conducted outreach activities, and supported sponsorship coordination and pitch materials." },
    { name: "Vaidehi Patil", img: "/img/team/20250301_143426 - Vaidehi Patil.jpg", position: "Head - Wet Lab", vertical: "Wet Lab", bio: "Vaidehi led both the Wet Lab and Integrated Human Practices verticals. She designed experimental frameworks, carried out CHO cell culture and wet lab experiments, performed extensive literature review, guided experimental design decisions, and led iHP activities including expert interviews and stakeholder analysis to guide project direction and implementation." },
    { name: "Oviya", img: "https://static.igem.wiki/teams/5657/team/oviya.webp", position: "Head - Wet Lab", vertical: "Wet Lab", bio: "As Head of the Wet Lab, Oviya oversaw experimental framework and design, was closely involved in execution, guided members in troubleshooting and protocols, and contributed to Integrated Human Practices initiatives." },
    { name: "Minkuri Ridhima Reddy", img: "/img/team/me - Minkuri Ridhima Reddy md23b015.jpg", position: "Head - Wet Lab", vertical: "Wet Lab", bio: "Ridhima led the wet lab efforts, taking a hands-on role in experimental design and execution. As Head of the Wet Lab, she guided members throughout experiments, supported troubleshooting, and contributed to iHP and outreach activities." },
    { name: "Shreyas Balakarthikeyan", img: "", position: "Head - Wet Lab", vertical: "Wet Lab", bio: "Shreyas contributed to ideating the problem statement and outlining a theoretical framework. He led wet lab efforts in E. coli epigenetics, guided the wet lab team, conducted experiments, and supported Integrated Human Practices initiatives." },
    { name: "Kaarthik A P", img: "", position: "Head - Media and Design", vertical: "Media and Design", bio: "Kaarthik led the design and media sub-team, overseeing creative direction, recording and editing promotional videos, and designing social media posters and visual assets for outreach." },
    { name: "Pranav Ram", img: "https://static.igem.wiki/teams/5657/team/pranav.webp", position: "Head - WebOps", vertical: "WebOps", bio: "Pranav co-led the WebOps subteam and led development of the sponsorship site. He implemented and maintained the Docusaurus-based wiki and supported site infrastructure and deployment tasks." },
    { name: "Ruhaib Muhammad", img: "https://static.igem.wiki/teams/5657/team/ruhaib.webp", position: "Head - WebOps", vertical: "WebOps", bio: "Ruhaib co-led the WebOps subteam, leading the development of competition and project websites (including TurBiohacks) and contributing to the design and implementation of the wiki." },
    { name: "Tharunika", img: "https://static.igem.wiki/teams/5657/team/tarunika.webp", position: "Member - Dry Lab", vertical: "Dry Lab", bio: "Tharunika processed and prepared datasets for training AI models, implemented the ElasticNet architecture, conducted research and model refinement, and contributed to iHP initiatives and stakeholder engagement." },
    { name: "Abhishek Raj", img: "https://static.igem.wiki/teams/5657/team/abhishek-raj.webp", position: "Member - Dry Lab", vertical: "Dry Lab", bio: "As a dry lab member, Abhishek organised, tweaked and stored data used for training AI models. He ran steady-state analysis algorithms for genes with different methylation patterns, participated in iHP initiatives and stakeholder interviews, and supported outreach and sponsorship coordination." },
    { name: "Karthik", img: "https://static.igem.wiki/teams/5657/team/karthik.webp", position: "Member - Dry Lab", vertical: "Dry Lab", bio: "As a dry lab member, Karthik investigated which methylation sites on various genes contribute most to regulation and helped identify pathways and reactions implicated in disease and biology." },
    { name: "Sanjana Ramkumar", img: "https://static.igem.wiki/teams/5657/team/sanjana.webp", position: "Member - Dry Lab", vertical: "Dry Lab", bio: "Sanjana documented overall processes, assisted in developing search algorithms, implemented the AdaptiveRegressiveCNN architecture, conducted research on related solutions, and contributed to final model refinement and iHP initiatives." },
    { name: "Harsh", img: "https://static.igem.wiki/teams/5657/team/harsh.webp", position: "Member - Wet Lab", vertical: "Wet Lab", bio: "Harsh was involved in literature review and designing primers and gRNA. He worked on gRNA cloning and fusion protein creation, participated in iHP initiatives and stakeholder interviews, and supported outreach and sponsorship coordination." },
    { name: "Shravana Prasanna Bhat", img: "https://static.igem.wiki/teams/5657/team/shravana.webp", position: "Member - Wet Lab", vertical: "Wet Lab", bio: "Shravan was involved in literature review, designing primers and gRNA, gRNA cloning and fusion protein work, iHP activities, outreach, and helped prepare pitch decks and coordinate sponsorship efforts." },
    { name: "Tia Anand", img: "https://static.igem.wiki/teams/5657/team/tia.webp", position: "Member - Wet Lab", vertical: "Wet Lab", bio: "Tia was involved in literature review, designing primers and gRNA, gRNA cloning and fusion protein work, participated in iHP initiatives, and supported experimental assays and data collection." },
    { name: "Tej Sameer Acharya", img: "https://static.igem.wiki/teams/5657/team/sameer.webp", position: "Member - Wet Lab", vertical: "Wet Lab", bio: "Tej was involved in literature review, designing primers and gRNA, gRNA cloning and fusion protein creation, supported iHP initiatives, and helped with outreach and sponsorship coordination." },
    { name: "Nistla Sri Amritha", img: "", position: "Member - Wet Lab", vertical: "Wet Lab", bio: "Nistla supported lab workflows, documentation, and day-to-day experimental operations." },
    { name: "Joshua Bage", img: "https://static.igem.wiki/teams/5657/team/joshua.webp", position: "Member - Media", vertical: "Media", bio: "As a design and media team member, Joshua created animations for promotional and presentation videos and contributed to visual media assets." },
    { name: "Bhagyashree Bora", img: "https://static.igem.wiki/teams/5657/team/bhagyashree.webp", position: "Member - Media", vertical: "Media", bio: "Bhagyashree contributed by creating sponsorship pitch deck designs and social media posts and designing key visual elements for the wiki." },
    { name: "Shyam Anand", img: "https://static.igem.wiki/teams/5657/team/shyam.webp", position: "Member - WebOps", vertical: "WebOps", bio: "Shyam designed and built the team pages for the sponsorship site as well as for the wiki." },
    { name: "Bhavyasri Kothauppari", img: "https://static.igem.wiki/teams/5657/team/bhavyashree.webp", position: "Member - WebOps", vertical: "WebOps", bio: "Bhavyasri designed and built the call for sponsors page for the sponsorship site and helped implement the wiki home page and supporting web features." },
    { name: "Mogith", img: "https://static.igem.wiki/teams/5657/team/mogith.webp", position: "Member - WebOps", vertical: "WebOps", bio: "Mogith designed and built the past projects page for the sponsorship site and worked on the wiki's home page and web features." },
  ];

  // Keep original indices so sidebar can reference the correct member when sections are rendered
  const membersWithIndex = teamMembers.map((m, i) => ({ ...m, idx: i }));

  const advisors = membersWithIndex.slice(0, 2);
  const cores = membersWithIndex.slice(2, 4);
  // Heads are those with position starting with 'Head' (case-insensitive)
  const heads = membersWithIndex.filter(m => m.position && m.position.toLowerCase().startsWith('head'));
  // Members are those with position starting with 'Member'
  const members = membersWithIndex.filter(m => m.position && m.position.toLowerCase().startsWith('member'));

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

          <div className="team-section">
            <h2 className="section-title">Advisors</h2>
            <div className="team-grid">
              {advisors.map((member) => {
                const imgSrc = member.img 
                  ? member.img 
                  : `https://placehold.co/400x300/029E4E/white?text=${getInitials(member.name)}`;

                return (
                  <div 
                    key={member.idx} 
                    className="team-card" 
                    onClick={() => openSidebar(member.idx)}
                  >
                    <img src={imgSrc} alt={member.name} className="avatar" />
                    <h3>{member.name}</h3>
                    <p className="position-text">{member.position}</p>
                    <span className="department">{member.vertical || 'Team'}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Cores</h2>
            <div className="team-grid">
              {cores.map((member) => {
                const imgSrc = member.img 
                  ? member.img 
                  : `https://placehold.co/400x300/029E4E/white?text=${getInitials(member.name)}`;

                return (
                  <div 
                    key={member.idx} 
                    className="team-card" 
                    onClick={() => openSidebar(member.idx)}
                  >
                    <img src={imgSrc} alt={member.name} className="avatar" />
                    <h3>{member.name}</h3>
                    <p className="position-text">{member.position}</p>
                    <span className="department">{member.vertical || 'Team'}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Heads</h2>
            <div className="team-grid">
              {heads.map((member) => {
                const imgSrc = member.img 
                  ? member.img 
                  : `https://placehold.co/400x300/029E4E/white?text=${getInitials(member.name)}`;

                return (
                  <div 
                    key={member.idx} 
                    className="team-card" 
                    onClick={() => openSidebar(member.idx)}
                  >
                    <img src={imgSrc} alt={member.name} className="avatar" />
                    <h3>{member.name}</h3>
                    <p className="position-text">{member.position}</p>
                    <span className="department">{member.vertical || 'Team'}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Members</h2>
            <div className="team-grid">
              {members.map((member) => {
                const imgSrc = member.img 
                  ? member.img 
                  : `https://placehold.co/400x300/029E4E/white?text=${getInitials(member.name)}`;

                return (
                  <div 
                    key={member.idx} 
                    className="team-card" 
                    onClick={() => openSidebar(member.idx)}
                  >
                    <img src={imgSrc} alt={member.name} className="avatar" />
                    <h3>{member.name}</h3>
                    <p className="position-text">{member.position}</p>
                    <span className="department">{member.vertical || 'Team'}</span>
                  </div>
                );
              })}
            </div>
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
              <div className="department-large">{selectedMember.vertical || 'Team'}</div>
              
              <div className="description">
                {selectedMember.bio}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;