# Module 85: Landing Page Project — Build a Complete Business Landing Page

## Objective
Build a complete, professional landing page for a fictional SaaS product called **"CloudSync Pro"** — a cloud storage and file synchronization service. This project will test your ability to create a conversion-focused landing page using semantic HTML5 and modern CSS.

## Requirements

Your landing page must include:

1. **Header/Navigation**
   - Company logo (text-based)
   - Navigation links: Features, Pricing, Testimonials, Contact
   - A "Get Started" CTA button in the nav
   - Sticky header on scroll

2. **Hero Section**
   - Main headline (value proposition)
   - Subheadline (supporting text)
   - Primary CTA button
   - Secondary CTA (Learn More link)
   - Background gradient or pattern

3. **Features Section**
   - 6 features displayed in a 3-column grid
   - Each: icon (emoji/SVG), title, description
   - Hover effects on cards

4. **Testimonials Section**
   - 3 customer testimonials
   - Each: quote, customer name, title, avatar placeholder

5. **Pricing Section**
   - 3 pricing tiers (Basic, Pro, Enterprise)
   - Each: plan name, price, feature list, CTA button
   - Highlight the "Pro" tier as recommended

6. **CTA Section**
   - Final call-to-action with large heading
   - Email signup form with input and button

7. **Contact/FAQ Section**
   - Accordion-style FAQ (3-4 questions)
   - Contact information

8. **Footer**
   - Company info, links, social media icons
   - Copyright notice

9. **Responsive Design**
   - Mobile-friendly (hamburger menu, stacked layouts)
   - Smooth scrolling
   - CSS transitions and hover effects

## Complete HTML Code

Below is the complete landing page. Save this as `index.html` and open it in your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CloudSync Pro — Secure Cloud Storage & File Sync</title>
    <meta name="description" content="CloudSync Pro offers secure, fast cloud storage with automatic file synchronization across all your devices.">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* Header */
        header { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.95); box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 1000; }
        header .container { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; }
        .logo { font-size: 24px; font-weight: 700; color: #4a6cf7; text-decoration: none; }
        .logo span { color: #333; }
        nav { display: flex; gap: 30px; align-items: center; }
        nav a { text-decoration: none; color: #555; font-weight: 500; transition: color 0.3s; }
        nav a:hover { color: #4a6cf7; }
        .nav-cta { background: #4a6cf7; color: white !important; padding: 10px 24px; border-radius: 25px; transition: background 0.3s; }
        .nav-cta:hover { background: #3a5bd7 !important; }
        .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; }

        /* Hero */
        .hero { background: linear-gradient(135deg, #4a6cf7 0%, #6a3de8 100%); color: white; padding: 160px 0 100px; text-align: center; }
        .hero h1 { font-size: 48px; margin-bottom: 20px; max-width: 800px; margin-left: auto; margin-right: auto; }
        .hero p { font-size: 20px; opacity: 0.9; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .hero-buttons { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
        .btn-primary { background: white; color: #4a6cf7; padding: 16px 40px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 18px; transition: transform 0.3s, box-shadow 0.3s; display: inline-block; }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .btn-secondary { background: transparent; color: white; padding: 16px 40px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 18px; border: 2px solid rgba(255,255,255,0.5); transition: border-color 0.3s; display: inline-block; }
        .btn-secondary:hover { border-color: white; }

        /* Sections */
        section { padding: 80px 0; }
        .section-title { text-align: center; margin-bottom: 60px; }
        .section-title h2 { font-size: 36px; color: #222; margin-bottom: 15px; }
        .section-title p { font-size: 18px; color: #666; max-width: 600px; margin: 0 auto; }

        /* Features */
        .features { background: #f8f9fe; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .feature-card { background: white; padding: 35px 25px; border-radius: 12px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .feature-card .icon { font-size: 48px; margin-bottom: 20px; }
        .feature-card h3 { font-size: 20px; margin-bottom: 10px; color: #222; }
        .feature-card p { color: #666; font-size: 15px; }

        /* Testimonials */
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .testimonial-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 1px solid #eee; }
        .testimonial-card .quote { font-style: italic; color: #555; margin-bottom: 20px; font-size: 16px; }
        .testimonial-card .author { display: flex; align-items: center; gap: 15px; }
        .testimonial-card .avatar { width: 50px; height: 50px; border-radius: 50%; background: #4a6cf7; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 20px; }
        .testimonial-card .name { font-weight: 600; color: #222; }
        .testimonial-card .role { font-size: 14px; color: #888; }

        /* Pricing */
        .pricing { background: #f8f9fe; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; align-items: start; }
        .pricing-card { background: white; border-radius: 16px; padding: 40px 30px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: relative; transition: transform 0.3s; }
        .pricing-card:hover { transform: translateY(-5px); }
        .pricing-card.featured { border: 2px solid #4a6cf7; transform: scale(1.05); }
        .pricing-card.featured:hover { transform: scale(1.05) translateY(-5px); }
        .pricing-card .badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #4a6cf7; color: white; padding: 5px 20px; border-radius: 20px; font-size: 14px; font-weight: 600; }
        .pricing-card .plan-name { font-size: 18px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
        .pricing-card .price { font-size: 48px; font-weight: 700; color: #222; margin-bottom: 5px; }
        .pricing-card .price span { font-size: 18px; font-weight: 400; color: #888; }
        .pricing-card .plan-desc { color: #666; margin-bottom: 25px; }
        .pricing-card ul { list-style: none; text-align: left; margin-bottom: 30px; }
        .pricing-card ul li { padding: 8px 0; color: #555; }
        .pricing-card ul li::before { content: "✓ "; color: #4a6cf7; font-weight: 700; }
        .pricing-card .btn-pricing { display: block; padding: 14px; border-radius: 30px; text-decoration: none; font-weight: 600; border: 2px solid #4a6cf7; color: #4a6cf7; transition: all 0.3s; }
        .pricing-card .btn-pricing:hover { background: #4a6cf7; color: white; }
        .pricing-card.featured .btn-pricing { background: #4a6cf7; color: white; }
        .pricing-card.featured .btn-pricing:hover { background: #3a5bd7; }

        /* CTA Section */
        .cta-section { background: linear-gradient(135deg, #4a6cf7, #6a3de8); color: white; text-align: center; padding: 100px 0; }
        .cta-section h2 { font-size: 36px; margin-bottom: 15px; }
        .cta-section p { font-size: 18px; opacity: 0.9; margin-bottom: 35px; }
        .cta-form { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 500px; margin: 0 auto; }
        .cta-form input { flex: 1; min-width: 200px; padding: 16px 20px; border: none; border-radius: 30px; font-size: 16px; }
        .cta-form button { background: #222; color: white; padding: 16px 36px; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.3s; }
        .cta-form button:hover { background: #444; }

        /* FAQ */
        .faq-list { max-width: 700px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #eee; padding: 20px 0; }
        .faq-question { display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 600; font-size: 18px; }
        .faq-question .toggle { font-size: 24px; transition: transform 0.3s; }
        .faq-item.active .faq-question .toggle { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; color: #666; padding-top: 0; }
        .faq-item.active .faq-answer { max-height: 200px; padding-top: 15px; }

        /* Footer */
        footer { background: #1a1a2e; color: #aaa; padding: 60px 0 30px; }
        footer .container { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        footer h3, footer h4 { color: white; margin-bottom: 20px; }
        footer p { font-size: 14px; line-height: 1.8; }
        footer ul { list-style: none; }
        footer ul li { margin-bottom: 10px; }
        footer ul li a { color: #aaa; text-decoration: none; transition: color 0.3s; }
        footer ul li a:hover { color: white; }
        .footer-bottom { grid-column: 1 / -1; text-align: center; padding-top: 30px; border-top: 1px solid #333; margin-top: 30px; font-size: 14px; }
        .social-links { display: flex; gap: 15px; margin-top: 15px; }
        .social-links a { color: #aaa; text-decoration: none; font-size: 20px; transition: color 0.3s; }
        .social-links a:hover { color: white; }

        /* Mobile */
        @media (max-width: 768px) {
            nav { display: none; flex-direction: column; position: absolute; top: 70px; left: 0; right: 0; background: white; padding: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
            nav.open { display: flex; }
            .hamburger { display: block; }
            .hero { padding: 120px 0 60px; }
            .hero h1 { font-size: 32px; }
            .hero p { font-size: 18px; }
            .features-grid { grid-template-columns: 1fr; }
            .testimonials-grid { grid-template-columns: 1fr; }
            .pricing-grid { grid-template-columns: 1fr; }
            .pricing-card.featured { transform: none; }
            .pricing-card.featured:hover { transform: translateY(-5px); }
            footer .container { grid-template-columns: 1fr; gap: 30px; }
            .section-title h2 { font-size: 28px; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            .features-grid { grid-template-columns: repeat(2, 1fr); }
            .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
            .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>

<!-- Header -->
<header>
    <div class="container">
        <a href="#" class="logo">Cloud<span>Sync</span></a>
        <button class="hamburger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
        <nav>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="#cta" class="nav-cta">Get Started</a>
        </nav>
    </div>
</header>

<!-- Hero -->
<section class="hero" id="home">
    <div class="container">
        <h1>Your Files, Anywhere. Fast, Secure, Effortless.</h1>
        <p>CloudSync Pro automatically syncs your files across all devices with enterprise-grade encryption. Access your data anytime, anywhere.</p>
        <div class="hero-buttons">
            <a href="#cta" class="btn-primary">Start Free Trial</a>
            <a href="#features" class="btn-secondary">Learn More</a>
        </div>
    </div>
</section>

<!-- Features -->
<section class="features" id="features">
    <div class="container">
        <div class="section-title">
            <h2>Everything You Need to Stay Synced</h2>
            <p>Powerful features designed for individuals and teams who demand reliability and speed.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="icon">☁️</div>
                <h3>Auto Sync</h3>
                <p>Files sync automatically across all your devices in real time. No manual uploads needed.</p>
            </div>
            <div class="feature-card">
                <div class="icon">🔒</div>
                <h3>End-to-End Encryption</h3>
                <p>Your data is encrypted in transit and at rest with AES-256 and TLS 1.3 protocols.</p>
            </div>
            <div class="feature-card">
                <div class="icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Upload and download at maximum speed with our global CDN network of servers.</p>
            </div>
            <div class="feature-card">
                <div class="icon">📁</div>
                <h3>Version History</h3>
                <p>Access up to 90 days of file version history. Recover deleted or overwritten files instantly.</p>
            </div>
            <div class="feature-card">
                <div class="icon">👥</div>
                <h3>Team Collaboration</h3>
                <p>Share folders, set permissions, and collaborate in real time with your team members.</p>
            </div>
            <div class="feature-card">
                <div class="icon">📱</div>
                <h3>Cross-Platform</h3>
                <p>Available on Windows, Mac, Linux, iOS, Android, and web browser. Always accessible.</p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="section-title">
            <h2>Trusted by Thousands of Teams</h2>
            <p>See what our customers say about CloudSync Pro.</p>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="quote">"CloudSync transformed how our remote team works. File sharing that used to take minutes now happens instantly."</p>
                <div class="author">
                    <div class="avatar">SK</div>
                    <div>
                        <div class="name">Sarah Kim</div>
                        <div class="role">CTO, DevBridge Inc.</div>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <p class="quote">"The encryption and security features gave us the confidence to move our entire document workflow to the cloud."</p>
                <div class="author">
                    <div class="avatar">MR</div>
                    <div>
                        <div class="name">Marcus Rivera</div>
                        <div class="role">IT Director, FinCorp</div>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <p class="quote">"Version history has saved us countless times. Being able to roll back changes is a lifesaver for our design team."</p>
                <div class="author">
                    <div class="avatar">AL</div>
                    <div>
                        <div class="name">Amy Liu</div>
                        <div class="role">Lead Designer, CreativeStudio</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Pricing -->
<section class="pricing" id="pricing">
    <div class="container">
        <div class="section-title">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs. No hidden fees or surprise charges.</p>
        </div>
        <div class="pricing-grid">
            <div class="pricing-card">
                <div class="plan-name">Basic</div>
                <div class="price">$9<span>/mo</span></div>
                <p class="plan-desc">Perfect for individuals getting started.</p>
                <ul>
                    <li>50 GB storage</li>
                    <li>Share up to 5 folders</li>
                    <li>30-day version history</li>
                    <li>Single device sync</li>
                    <li>Email support</li>
                </ul>
                <a href="#cta" class="btn-pricing">Choose Basic</a>
            </div>
            <div class="pricing-card featured">
                <div class="badge">Most Popular</div>
                <div class="plan-name">Pro</div>
                <div class="price">$29<span>/mo</span></div>
                <p class="plan-desc">Best for professionals and small teams.</p>
                <ul>
                    <li>500 GB storage</li>
                    <li>Unlimited folder sharing</li>
                    <li>90-day version history</li>
                    <li>Unlimited device sync</li>
                    <li>Priority email & chat support</li>
                    <li>Team collaboration tools</li>
                </ul>
                <a href="#cta" class="btn-pricing">Choose Pro</a>
            </div>
            <div class="pricing-card">
                <div class="plan-name">Enterprise</div>
                <div class="price">$99<span>/mo</span></div>
                <p class="plan-desc">For organizations with advanced needs.</p>
                <ul>
                    <li>Unlimited storage</li>
                    <li>Advanced admin controls</li>
                    <li>365-day version history</li>
                    <li>SSO & SAML integration</li>
                    <li>Dedicated account manager</li>
                    <li>99.99% uptime SLA</li>
                    <li>Custom integrations</li>
                </ul>
                <a href="#cta" class="btn-pricing">Contact Sales</a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section" id="cta">
    <div class="container">
        <h2>Ready to Streamline Your Workflow?</h2>
        <p>Join over 50,000 teams who trust CloudSync Pro. Start your free 14-day trial today.</p>
        <form class="cta-form">
            <input type="email" placeholder="Enter your email address" required>
            <button type="submit">Start Free Trial</button>
        </form>
    </div>
</section>

<!-- FAQ -->
<section class="faq" id="contact">
    <div class="container">
        <div class="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Have questions? We have answers.</p>
        </div>
        <div class="faq-list">
            <div class="faq-item active">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    Is there a free trial available?
                    <span class="toggle">+</span>
                </div>
                <div class="faq-answer">Yes! We offer a 14-day free trial with full access to the Pro plan. No credit card required. You can cancel at any time.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    Can I upgrade or downgrade my plan?
                    <span class="toggle">+</span>
                </div>
                <div class="faq-answer">Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and we prorate billing.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    How is my data protected?
                    <span class="toggle">+</span>
                </div>
                <div class="faq-answer">All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We are SOC 2 Type II certified and GDPR compliant.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    What platforms are supported?
                    <span class="toggle">+</span>
                </div>
                <div class="faq-answer">CloudSync Pro works on Windows, macOS, Linux, iOS, Android, and all major web browsers. Your files sync seamlessly across all platforms.</div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <div class="container">
        <div>
            <h3>Cloud<span style="color:white">Sync</span></h3>
            <p>CloudSync Pro provides secure, fast, and reliable cloud storage and file synchronization for individuals and teams worldwide.</p>
            <div class="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="GitHub">🐙</a>
            </div>
        </div>
        <div>
            <h4>Product</h4>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">API</a></li>
            </ul>
        </div>
        <div>
            <h4>Company</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
            </ul>
        </div>
        <div>
            <h4>Support</h4>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CloudSync Pro. All rights reserved. | <a href="#" style="color:#aaa;">Privacy Policy</a> | <a href="#" style="color:#aaa;">Terms of Service</a></p>
        </div>
    </div>
</footer>

</body>
</html>
```

## Expected Output
When you open `index.html` in a browser, you should see a full-featured landing page with:
- A sticky header with navigation
- A gradient hero section with headline, subheadline, and two CTA buttons
- A 3-column features grid with cards that animate on hover
- Three testimonial cards with quote, name, and role
- Three pricing tiers with Pro highlighted as featured
- A call-to-action section with email signup form
- An accordion FAQ section
- A multi-column footer with links and social icons
- Full responsive design on mobile devices

## Bonus Challenges
- Add a scroll-triggered fade-in animation for sections using Intersection Observer
- Create a mobile hamburger menu that opens/closes with animation
- Add a back-to-top button that appears after scrolling down
- Implement a live word counter for the testimonial quotes
- Add a dark mode toggle

## Submission
Save the file and open it in a browser. Test all interactive elements (FAQ accordion, mobile menu, CTA form). Resize the browser to verify responsive behavior. Validate your HTML at https://validator.w3.org/.
