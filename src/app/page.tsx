'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Modal from '@/components/shared/Modal';
import Toast from '@/components/shared/Toast';
import { testimonials, projects } from '@/lib/constants';
import { trackTabChange, trackProjectView, trackFormSubmit, trackExternalLink } from '@/lib/analytics';

export default function Home() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarActive, setSidebarActive] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'resume', 'portfolio', 'blog', 'contact'].includes(hash)) {
      setActivePage(hash);
      trackTabChange(hash);
    }
  }, []);

  // Track tab changes
  const handlePageChange = (page: string) => {
    setActivePage(page);
    trackTabChange(page);
  };

  const filteredProjects = portfolioFilter === 'all'
    ? projects
    : projects.filter(p => p.category === portfolioFilter);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setToast({
          message: '🎉 Message sent successfully! I\'ll get back to you soon.',
          type: 'success'
        });
        trackFormSubmit('contact_form', true);
        form.reset();
      } else {
        setToast({
          message: '⚠️ Failed to send message. Please try again or email me directly.',
          type: 'error'
        });
        trackFormSubmit('contact_form', false);
      }
    } catch (error) {
      console.error('Error:', error);
      setToast({
        message: '❌ Network error. Please check your connection and try again.',
        type: 'error'
      });
      trackFormSubmit('contact_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    if (project) {
      trackProjectView(project.title, project.category);
    }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };

  return (
    <main>
      <Sidebar
        active={sidebarActive}
        onToggle={() => setSidebarActive(!sidebarActive)}
      />

      <div className="main-content">
        <Navbar
          activePage={activePage}
          onPageChange={handlePageChange}
        />

        <AnimatePresence mode="wait">
          {activePage === 'about' && (
            <motion.div key="about" {...sectionVariants}>
              <About
                active={true}
                testimonials={testimonials}
                onTestimonialClick={setSelectedTestimonial}
              />
            </motion.div>
          )}

          {activePage === 'resume' && (
            <motion.div key="resume" {...sectionVariants}>
              <Resume active={true} />
            </motion.div>
          )}

          {activePage === 'portfolio' && (
            <motion.div key="portfolio" {...sectionVariants}>
              <Portfolio
                active={true}
                portfolioFilter={portfolioFilter}
                setPortfolioFilter={setPortfolioFilter}
                isFilterActive={isFilterActive}
                setIsFilterActive={setIsFilterActive}
                filteredProjects={filteredProjects}
                handleProjectClick={handleProjectSelect}
              />
            </motion.div>
          )}

          {activePage === 'blog' && (
            <motion.div key="blog" {...sectionVariants}>
              <Blog active={true} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div key="contact" {...sectionVariants}>
              <Contact
                active={true}
                onSubmit={handleContactSubmit}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Modal
        isOpen={selectedTestimonial !== null}
        onClose={() => setSelectedTestimonial(null)}
      >
        {selectedTestimonial !== null && (
          <>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image src={testimonials[selectedTestimonial].avatar} alt={testimonials[selectedTestimonial].name} width={80} height={80} data-modal-img />
              </figure>
              <Image src="/images/icon-quote.svg" alt="quote icon" width={30} height={30} />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{testimonials[selectedTestimonial].name}</h4>
              <time dateTime="2024-06-14">14 June, 2024</time>
              <div data-modal-text>
                <p>{testimonials[selectedTestimonial].text}</p>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* Project Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="project-modal-content" style={{ textAlign: 'left' }}>
            <figure style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '1px solid var(--jet)',
              lineHeight: 0
            }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </figure>

            <div className="modal-content">
              <h4 className="h3 modal-title" style={{ marginBottom: '5px' }}>{selectedProject.title}</h4>
              <p style={{
                fontSize: 'var(--fs-6)',
                color: 'var(--orange-yellow-crayola)',
                marginBottom: '15px',
                textTransform: 'capitalize'
              }}>
                {selectedProject.category}
              </p>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: 'var(--light-gray)', lineHeight: '1.8' }}>
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.tech && (
                <div style={{ marginBottom: '25px' }}>
                  <h5 className="h5" style={{ marginBottom: '10px' }}>Technologies Used:</h5>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedProject.tech.map((t: string) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 'var(--fs-7)',
                          background: 'var(--onyx)',
                          border: '1px solid var(--jet)',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          color: 'var(--light-gray-70)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled"
                  onClick={() => trackExternalLink(selectedProject.link, 'project_live_demo')}
                  style={{
                    padding: '12px 25px',
                    borderRadius: '8px',
                    fontSize: 'var(--fs-7)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flex: 1,
                    justifyContent: 'center'
                  }}
                >
                  {/* @ts-ignore */}
                  <ion-icon name="eye-outline"></ion-icon>
                  Live Demo
                </a>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="form-btn"
                    onClick={() => trackExternalLink(selectedProject.github, 'project_source_code')}
                    style={{
                      padding: '12px 25px',
                      borderRadius: '8px',
                      fontSize: 'var(--fs-7)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flex: 1,
                      justifyContent: 'center',
                      background: 'var(--border-gradient-onyx)',
                      color: 'var(--white-2)',
                      boxShadow: 'var(--shadow-2)'
                    }}
                  >
                    {/* @ts-ignore */}
                    <ion-icon name="logo-github"></ion-icon>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Toast Notification */}
      <Toast
        message={toast?.message || ''}
        type={toast?.type || 'success'}
        isVisible={toast !== null}
        onClose={() => setToast(null)}
      />
    </main>
  );
}
