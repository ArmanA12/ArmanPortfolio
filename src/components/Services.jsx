// src/components/Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Simple pricing based on your needs</h1>
        <p className="header-text">
          Discover a variety of our advanced development and design services. Tailored for your projects.
        </p>
      </div>

      <div className="pricing-cards">
        {/* Website Development Card */}

        {/* Mobile Development Card */}
        <div className="pricing-card teams">
          <h2>Mobile Development</h2>
          <p className="price">Starts at <span>$2,000</span> per app</p>
          <p className="description">
            Ideal for startups or businesses wanting native or cross-platform mobile apps.
          </p>
          <button className="get-started-btn">Get started</button>
          <div className="features">
            <h3>Advanced Features, plus:</h3>
            <ul>
              <li>iOS & Android support</li>
              <li>Push notifications</li>
              <li>In-app purchases</li>
              <li>API integrations</li>
              <li>User authentication</li>
              <li>Real-time data syncing</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card individual" 
        
    
        >
        <div className="trial-badge">Most Popular</div>
        

          <h2>Website Development</h2>
          <p className="price">Starts at <span>$500</span> per project</p>
          <p className="description">Perfect for businesses or individuals looking to build a stunning online presence.</p>
          <button className="get-started-btn">Get started</button>
          <div className="features">
            <h3>Core Features</h3>
            <ul>
              <li>Responsive design</li>
              <li>Custom CMS integration</li>
              <li>SEO optimization</li>
              <li>E-commerce functionality</li>
              <li>Fast loading performance</li>
              <li>Basic analytics integration</li>
            </ul>
          </div>
        </div>


        {/* UI/UX Design Card */}
        <div className="pricing-card enterprise">
          <h2>UI/UX Design</h2>
          <p className="price">Starts at <span>$3,000</span> per project</p>
          <p className="description">
            Comprehensive design solutions for creating intuitive and visually appealing interfaces.
          </p>
          <button className="get-started-btn contact">Contact us</button>
          <div className="features">
            <h3>Premium Features, plus:</h3>
            <ul>
              <li>User research & testing</li>
              <li>Wireframing & prototyping</li>
              <li>Interactive design systems</li>
              <li>Accessibility compliance</li>
              <li>Brand consistency</li>
              <li>Dedicated design consultations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;