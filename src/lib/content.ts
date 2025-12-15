
import { Activity, BarChart3, Briefcase, Users, Bot, Rocket, Target, Zap, Smile, BookOpen, UserCheck, BriefcaseBusiness, Settings, Award } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/implementation', label: 'Implementation' },
  { href: '/integration', label: 'Integration' },
  { href: '/government', label: 'Government' },
  { href: '/pricing', label: 'Pricing' },
];

export const RESOURCE_CENTER_LINKS = [
    { href: '/empathetic-erp', label: 'Empathetic ERP' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
];

export const SERVICES = [
  {
    icon: Activity,
    title: 'Business Strategy',
    id: 'strategy',
    description: 'We help you define your vision, mission, and long-term goals. Our data-driven approach ensures your strategy is robust and adaptable to market changes.',
    details: 'Our Business Strategy service includes market positioning, competitive analysis, and strategic planning to ensure sustainable growth. We work with you to create a clear roadmap for success.'
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    id: 'analysis',
    description: 'Understand your market landscape, identify opportunities, and gain a competitive edge with our comprehensive market analysis services.',
    details: 'We provide in-depth market research, customer segmentation, and trend analysis. Our insights help you make informed decisions and capture new market share.'
  },
  {
    icon: Briefcase,
    title: 'Operational Efficiency',
    id: 'efficiency',
    description: 'Streamline your processes, reduce costs, and improve productivity. We identify bottlenecks and implement efficient solutions tailored to your business.',
    details: 'Our experts analyze your current operations to identify areas for improvement. We implement lean methodologies and technology solutions to boost your bottom line.'
  },
  {
    icon: Users,
    title: 'Organizational Development',
    id: 'development',
    description: 'Build a high-performing team and a culture of success. We offer leadership training, team building, and change management support.',
    details: 'We help you align your organizational structure with your strategic goals. Our services include talent management, leadership development, and fostering a culture of innovation.'
  },
];

export const TEAM_MEMBERS = [
    { name: 'Sanjeev Munjal', role: 'Founder & Managing Partner', imageId: 'sanjeev' },
    { name: 'Munish Sethi', role: 'Founder & Managing Partner', imageId: 'munish' },
    { name: 'Puneet Nasa', role: 'Managing Partner', imageId: 'puneet' },
    { name: 'Anuj Rastogi', role: 'Senior Technical Architect', imageId: 'anuj-rastogi' },
    { name: 'Vijaya Bhaskar Sanyela', role: 'Dynamics 365 Technical Architect', imageId: 'vijaya-bhaskar-sanyela' },
    { name: 'Gajendiran Govindraj', role: 'Dynamics 365 Technical Architect', imageId: 'gajendiran-govindraj' },
    { name: 'Vikas Mehta', role: 'Dynamics 365 Technical Architect', imageId: 'vikas-mehta' },
    { name: 'Mohit Khanna', role: 'Functional Solution Architect', imageId: 'mohit-khanna' },
    { name: 'Ashish Srivastava', role: 'Technical Architect', imageId: 'ashish-srivastava' },
    { name: 'Tamil Magal Radhakrishnan', role: 'Technical Architect', imageId: 'tamilmagal-radhakrishnan' },
    { name: 'Raghu Ram', role: 'Functional Production Consultant', imageId: 'raghu-ram' },
    { name: 'Hung Phan', role: 'Dynamics 365 F&O Technical Consultant', imageId: 'hung-phan' },
];

export const CASE_STUDIES = [
    {
        title: 'OCR (Optical Character Recognition) for Vendor Invoice Automation',
        slug: 'ocr-vendor-invoice-automation',
        summary: 'Research shows that companies using OCR for automated data entry from invoices process 25-60% more invoices than companies using manual data entry.',
        details: 'For a leading retail client, we implemented an OCR solution to automate their vendor invoice processing. This eliminated manual data entry, reduced errors, and accelerated their procure-to-pay cycle significantly.',
        imageId: 'ocr-case-study'
    },
    {
        title: 'D365 F&O Implementation/Managed Support for a leading Fast Food Manufacturer and Retail Company',
        slug: 'd365-fo-fast-food',
        summary: 'D365 F&O offers a comprehensive suite of features for managing all aspects of a retail business, including finance, supply chain management, and more.',
        details: 'We partnered with a major fast-food chain to implement and support their D365 F&O system. Our solution streamlined their global franchise operations, improved financial reporting, and provided real-time visibility into their supply chain.',
        imageId: 'case-study-2'
    },
    {
        title: 'Post Go-Live Stabilization and Managed Services for a Leading Hydroponics Company',
        slug: 'stabilization-hydroponics',
        summary: 'Managed services can help businesses reduce IT costs by 20-40% by offloading the management of applications to a specialized provider.',
        details: 'After a challenging ERP launch, a major hydroponics company engaged us for post-go-live support and stabilization. Our team identified critical performance bottlenecks, resolved data integrity issues, and optimized their managed services contract, leading to a 30% reduction in IT operational costs and a more stable, reliable system.',
        imageId: 'case-study-3'
    },
    {
        title: 'D365 F&O Managed Support Service for a Leading Real Estate Company',
        slug: 'd365-fo-real-estate',
        summary: "By leveraging DAX's AMS, real estate companies can gain a competitive advantage by reducing IT costs and improving application performance.",
        details: 'We provide ongoing Application Managed Services (AMS) for a leading real estate firm. Our services ensure their D365 F&O platform runs smoothly, with proactive monitoring, performance tuning, and continuous enhancements. This partnership has allowed them to focus on their core business while we handle the complexities of their ERP system.',
        imageId: 'case-study-4'
    },
    {
        title: 'D365 Field Service integrated with F&O Implementation for a US Based Systems Integrator',
        slug: 'd365-field-service-integrator',
        summary: 'Dynamics 365 Field Service is a leading cloud-based field service management (FSM) solution, with over 200,000 organizations using it worldwide.',
        details: 'We implemented D365 Field Service integrated with F&O for a US-based systems integrator. This solution provides real-time scheduling, dispatch, and mobile capabilities for their field technicians. The integration ensures that work orders, inventory, and billing are seamlessly connected, improving efficiency and customer satisfaction.',
        imageId: 'case-study-5'
    },
    {
        title: 'Implementation of Dynamics 365 Business Central',
        slug: 'd365-business-central-implementation',
        summary: 'Business Central has experienced rapid growth since its launch in 2018, with over 70,000 customers worldwide and a growing partner ecosystem.',
        details: 'For a mid-sized retail company, we implemented Dynamics 365 Business Central to replace their aging accounting software. The new system provides a unified view of their finances, sales, and inventory. The project was completed on time and under budget, and the client is now able to make more informed business decisions.',
        imageId: 'case-study-6'
    },
    {
        title: 'D365 Field Service integrated with F&O Implementation for a Security System Service Provider',
        slug: 'd365-field-service-security',
        summary: 'Dynamics 365 Field Service empowers field technicians to be more efficient. Learn how a security system provider improved its field operations with this module.',
        details: 'A security system service provider needed to improve the efficiency of their field technicians. We implemented D365 Field Service, which provided them with optimized scheduling, mobile access to work orders, and real-time inventory management. As a result, they reduced travel time by 15% and improved first-time fix rates by 20%.',
        imageId: 'case-study-7'
    },
    {
        title: 'Power Apps Portal Solution for a US based Non-Profit Organization',
        slug: 'power-apps-portal-non-profit',
        summary: 'Power Apps is a low-code platform, enabling anyone with minimal coding experience to create custom business applications.',
        details: 'We developed a Power Apps Portal for a US-based non-profit organization to manage their volunteer and donation programs. The portal provides a user-friendly interface for volunteers to sign up for events and for donors to make contributions. This solution has streamlined their operations and improved engagement with their community.',
        imageId: 'case-study-8'
    },
    {
        title: 'Model Driven Power Apps based Solution for Education Business',
        slug: 'model-driven-power-apps-education',
        summary: "Create adaptive learning apps that cater to individual student needs and learning styles via Power Apps!",
        details: 'We built a model-driven Power App for an education business to manage student enrollment, course scheduling, and grading. The app provides a centralized platform for administrators, teachers, and students to access and manage information, improving communication and efficiency across the board.',
        imageId: 'case-study-9'
    },
    {
        title: 'D365 F&O Implementation for the largest Cannabis Company in Medical Usage',
        slug: 'd365-fo-cannabis',
        summary: 'D365 F&O helps cannabis businesses comply with complex track-and-trace regulations.',
        details: "We implemented D365 Finance & Operations for the largest medical cannabis company, navigating the industry's strict regulatory requirements. The solution includes seed-to-sale tracking, compliance reporting, and quality control, ensuring they meet all legal obligations while optimizing their supply chain.",
        imageId: 'case-study-10'
    },
    {
        title: 'CRM Upgrade for a diversified Financial Services Organization',
        slug: 'crm-upgrade-financial-services',
        summary: 'CRM provides a wealth of customer data, enabling financial institutions to gain insights into customer behavior, preferences, and financial needs.',
        details: 'We upgraded the CRM system for a diversified financial services organization, migrating them to a modern, cloud-based platform. The new system provides a 360-degree view of their clients, enabling personalized service and targeted marketing campaigns. This has led to a 15% increase in client retention.',
        imageId: 'case-study-11'
    },
    {
        title: 'CRM Implementation for a leading IT Services Company',
        slug: 'crm-implementation-it-services',
        summary: 'CRM is proven to drive business growth, with companies that implement CRM experiencing an average sales increase of 12% and a customer retention rate increase of 27%.',
        details: 'A leading IT services company partnered with us to implement a new CRM system. Our solution streamlined their sales process, from lead generation to deal closure. By automating repetitive tasks and providing better visibility into their sales pipeline, they were able to reduce their sales cycle by 10% and increase overall sales.',
        imageId: 'case-study-12'
    },
    {
        title: 'Dell Boomi Integration',
        slug: 'dell-boomi-integration',
        summary: "Looking for integrations? This case study unravels how Dell Boomi transforms integration projects.",
        details: 'We utilized Dell Boomi to integrate a client\'s disparate systems, including their ERP, CRM, and e-commerce platform. The Boomi platform provided a scalable and flexible solution for connecting their applications, automating data synchronization, and creating unified business processes. This resulted in a single source of truth for their data and significantly improved operational efficiency.',
        imageId: 'case-study-13'
    },
    {
        title: 'Salesforce Implementations and Integrations with Dynamics 365',
        slug: 'salesforce-d365-integration',
        summary: "Unify your CRM and ERP by integrating Salesforce and Dynamics 365.",
        details: 'We helped a client integrate their Salesforce CRM with Dynamics 365 Finance & Operations. This integration provides a seamless flow of data between their sales and finance teams, eliminating manual data entry and providing a complete view of the customer lifecycle. The result was improved collaboration and more accurate forecasting.',
        imageId: 'case-study-14'
    },
    {
        title: 'Implementation of PTO Functionality for one of the major security solutions providers',
        slug: 'pto-functionality-security',
        summary: 'Know how the implementation of PTO functionality streamlined processes, reduced administrative workload by 40%.',
        details: 'We developed and implemented a custom Paid Time Off (PTO) management module within D365 for a major security solutions provider. This automated the entire process, from requests and approvals to accrual calculations and payroll integration. The solution reduced administrative overhead by 40% and improved employee satisfaction.',
        imageId: 'case-study-15'
    },
    {
        title: 'CRM Implementation For A Leading Security System Management Company',
        slug: 'crm-implementation-security-management',
        summary: 'Specialized in crafting security solutions tailored to specific needs, serving government, education, and more.',
        details: 'For a company specializing in security system management, we implemented a CRM solution to manage their client relationships, service contracts, and support tickets. This provided them with a centralized system to track customer interactions and service history, leading to more proactive support and higher client retention.',
        imageId: 'case-study-16'
    },
    {
        title: 'Electronic Invoicing using D365 Finance and Operations',
        slug: 'electronic-invoicing-d365',
        summary: 'Optimize your billing process with Electronic Invoicing in D365 Finance and Operations, ensuring automation, compliance, and efficiency.',
        details: `We implemented an end-to-end electronic invoicing solution within D365 F&O for a large enterprise, ensuring compliance with government mandates. The solution automated the generation, submission, and monitoring of e-invoices, drastically reducing manual effort and eliminating penalties for non-compliance.`,
        imageId: 'case-study-1'
    }
];

export const METRICS = [
    { icon: BriefcaseBusiness, value: '12+', label: 'Successful B2B Industries in 2022-2023' },
    { icon: Smile, value: '25+', label: 'Happy CIOs, CTOs, and COOs' },
    { icon: Settings, value: '10+', label: 'Continuous Enhancements' },
    { icon: UserCheck, value: '55+', label: 'Professional Advisors Globally' },
    { icon: Award, value: '6+', label: 'Certifications on average per employee' },
    { icon: Briefcase, value: '20+', label: 'Years of Experience of our Senior Architects' }
];
