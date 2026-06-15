# Project: Accessibility Audit & Redesign

## Objective
Conduct a comprehensive accessibility audit of an existing website and redesign it to meet WCAG 2.2 AA standards. Demonstrate mastery of accessibility principles, testing methodologies, and remediation techniques.

## Requirements

### Phase 1: Audit (Week 1)
1. Choose a public website (or use the provided sample)
2. Run automated tests with axe DevTools and Lighthouse
3. Conduct manual keyboard-only navigation test
4. Test with NVDA or VoiceOver screen reader
5. Document all violations with:
   - WCAG criterion reference
   - Severity (A, AA, AAA)
   - Impact on users
   - Current vs. required behavior
6. Create an accessibility scorecard using a 1-5 scale for: navigation, forms, images, color, structure, keyboard, screen reader, and dynamic content

### Phase 2: Implementation (Week 2)
Implement fixes for all Level A and AA violations:
1. Fix HTML structure with semantic elements
2. Add proper heading hierarchy
3. Implement skip links
4. Fix color contrast throughout
5. Add alt text to all images
6. Make all forms accessible with labels and error handling
7. Ensure full keyboard operability
8. Add ARIA landmarks and attributes where needed
9. Implement focus management
10. Add responsive zoom support

### Phase 3: Testing & Report (Week 3)
1. Re-run all automated and manual tests
2. Write screen reader test scripts for key user flows
3. Create a before/after comparison document
4. Write a final report including:
   - Executive summary
   - Methodology
   - Findings (before/after)
   - WCAG compliance matrix
   - User impact analysis
   - Recommendations for ongoing accessibility maintenance

### Deliverables
- Redesigned accessible HTML/CSS/JS files
- Accessibility audit report (PDF or markdown)
- WCAG compliance matrix (spreadsheet or table)
- Screen reader test scripts
- Before/after comparison screenshots

### Evaluation Criteria
- All Level A and AA violations resolved (40%)
- Proper use of semantic HTML and ARIA (20%)
- Documentation quality (20%)
- Screen reader usability (10%)
- Keyboard operability (10%)

## Submission
Submit a GitHub repository with the audit report, redesigned code, and test scripts.

## Stretch Goals
- Achieve AAA compliance for at least 3 success criteria
- Implement dark mode with accessibility considerations
- Add internationalization accessibility support
- Create automated accessibility tests (cypress-axe or jest-axe)
- Add cognitive accessibility enhancements
