'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Modal from '@/components/shared/Modal';
import { testimonials, projects } from '@/lib/constants';

export default function Home() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarActive, setSidebarActive] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [isFilterActive, setIsFilterActive] = useState(false);

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully to Telegram!');
        form.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
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
          onPageChange={setActivePage}
        />

        <About
          active={activePage === 'about'}
          testimonials={testimonials}
          onTestimonialClick={setSelectedTestimonial}
        />

        <Resume active={activePage === 'resume'} />

        <Portfolio
          active={activePage === 'portfolio'}
          portfolioFilter={portfolioFilter}
          setPortfolioFilter={setPortfolioFilter}
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
          filteredProjects={filteredProjects}
        />

        <Blog active={activePage === 'blog'} />

        <Contact
          active={activePage === 'contact'}
          onSubmit={handleContactSubmit}
        />
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
    </main>
  );
}
