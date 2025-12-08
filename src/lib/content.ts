
import { Activity, BarChart3, Briefcase, Users, Bot, Rocket, Target, Zap, Smile, BookOpen, UserCheck, BriefcaseBusiness, Settings, Award } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/implementation', label: 'Implementation' },
  { href: '/integration', label: 'Integration' },
  { href: '/government', label: 'Government' },
  { href: '/pricing', label: 'Pricing' },
];

export const RESOURCE_CENTER_LINKS = [
    { href: '/resource-center', label: 'Resource Center' },
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
    { name: 'Sanjeev Munjal', role: 'Founder & Managing Partner', imageId: 'leadership-1' },
    { name: 'Munish Sethi', role: 'Founder & Managing Partner', imageId: 'leadership-2' },
    { name: 'Puneet Nasa', role: 'Managing Partner', imageId: 'leadership-3' },
    { name: 'Anuj Rastogi', role: 'Senior Technical Architect', imageId: 'team-member-5' },
    { name: 'Vijaya Bhaskar Sanyela', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-6' },
    { name: 'Gajendiran Govindraj', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-7' },
    { name: 'Vikas Mehta', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-8' },
    { name: 'Mohit Khanna', role: 'Functional Solution Architect', imageId: 'team-member-9' },
    { name: 'Ashish Srivastava', role: 'Technical Architect', imageId: 'team-member-10' },
    { name: 'Tamil Magal Radhakrishnan', role: 'Technical Architect', imageId: 'team-member-11' },
    { name: 'Raghu Ram', role: 'Functional Production Consultant', imageId: 'team-member-12' },
    { name: 'Hung Phan', role: 'Dynamics 365 F&O Technical Consultant', imageId: 'team-member-13' },
];

export const CASE_STUDIES = [
    {
        title: 'OCR (Optical Character Recognition) for Vendor Invoice Automation',
        slug: 'ocr-vendor-invoice-automation',
        summary: 'Research shows that companies using OCR for automated data entry from invoices process 25-60% more invoices than companies using manual data entry.',
        details: `### Overview
Recognizing the value of innovative technologies, Dax made a strategic decision to integrate Microsoft’s OCR (Optical Character Recognition) functionality into its existing suite of business applications. This move aimed to simplify document processing, automate data extraction, and drive digital transformation for its clients.
[OCR-OVERVIEW-IMAGE]
### Business Pain Points
Prior to implementing OCR, business faced several key challenges:
- Manual Data Entry Overload: Excessive manual data entry consumed valuable time and resources, hindering productivity, and creating room for errors.
- Inefficient Paper-Based Processes: Traditional paper interactions and document handling slowed down operations, leading to delays and decreased efficiency.
- Data Inaccuracy and Integrity Concerns: Transcription errors and inconsistencies compromised data integrity, impacting decision-making and jeopardizing business outcomes.
- There are too many resources in the AP department, and it is hard to manage them.
[CTA-BLOCK]
### Solution
Dax meticulously worked to integrate Microsoft’s OCR functionality into its software solutions, ensuring seamless integration with various business applications. Leveraging the power of AI (Artificial Intelligence) and machine learning, the OCR system was trained to recognize and extract relevant data points from a wide range of documents, regardless of format, template, or layout.
[OCR-SOLUTION-IMAGE]
### Benefits
- Substantial time and effort savings: By automating data extraction from paper-based documents you can cut down your invoice processing time by 50%.
- Seamless Integration: OCR technology can be seamlessly integrated with various ERP (Enterprise Resource Planning) software, including SAP, Oracle, and D365 F&O (Dynamics 365 Finance and Operations). If there is no inbuilt connector, a custom connector can be added on demand.
- Enhanced Accuracy and Data Integrity: OCR enhanced the performance of multiple processes like AP, AR, Manufacturing via consistent data extraction, eliminating transcription errors, and enhancing data integrity.
- Amplified Productivity and Scalability: Automating manual work, employees became efficient, leading to increased productivity. Additionally, the OCR functionality allowed for easy scalability, enabling organizations to handle growing document volumes.
- Cost Reduction: By automating paper-based processes, companies experienced a reduction in operational costs, making up their ROI (Return on Investment) to 80% on this project.`,
        imageId: 'case-study-1'
    },
    {
        title: 'D365 F&O Implementation/Manages Support for a leading Fast Food Manufacturer and Retail Company',
        slug: 'd365-fo-fast-food',
        summary: 'D365 F&O offers a comprehensive suite of features for managing all aspects of a retail business, including finance, supply chain management, manufacturing, project management, and customer relationship management (CRM).',
        details: 'For a leading fast-food manufacturer, we deployed a full-scale D365 Finance & Operations solution. This project covered everything from supply chain management and manufacturing to retail operations and financial reporting. The integrated system provides real-time visibility into their entire business, enabling better decision-making and operational agility.',
        imageId: 'case-study-2'
    },
    {
        title: 'Post Go-Live Stabilization and Managed Services for a Leading Hydroponics Company',
        slug: 'stabilization-hydroponics',
        summary: 'Managed services can help businesses reduce IT costs by 20-40% by offloading the management of applications to a specialized provider. Learn how one of the kleading Hydroponics company optimised it AMS costs with DAX.',
        details: 'After a challenging ERP launch, a major hydroponics company engaged us for post-go-live support and stabilization. Our team identified critical performance bottlenecks, resolved data integrity issues, and optimized their managed services contract, leading to a 30% reduction in IT operational costs and a more stable, reliable system.',
        imageId: 'case-study-3'
    },
    {
        title: 'D365 F&O Managed Support Service for a Leading Real Estate Company',
        slug: 'd365-fo-real-estate',
        summary: "By leveraging DAX's AMS, real estate companies can gain a competitive advantage by reducing IT costs, improving application performance, and enhancing customer experience.",
        details: 'We provide ongoing Application Managed Services (AMS) for a leading real estate firm. Our services ensure their D365 F&O platform runs smoothly, with proactive monitoring, performance tuning, and continuous enhancements. This partnership has allowed them to focus on their core business while we handle the complexities of their ERP system.',
        imageId: 'case-study-4'
    },
    {
        title: 'D365 Field Service integrated with F&O Implementation for a US Based Systems Integrator',
        slug: 'd365-field-service-integrator',
        summary: 'Dynamics 365 Field Service is a leading cloud-based field service management (FSM) solution, with over 200,000 organizations using it worldwid. Learn how it turn out to be a great solution for of the organizations.',
        details: 'We implemented D365 Field Service integrated with F&O for a US-based systems integrator. This solution provides real-time scheduling, dispatch, and mobile capabilities for their field technicians. The integration ensures that work orders, inventory, and billing are seamlessly connected, improving efficiency and customer satisfaction.',
        imageId: 'case-study-5'
    },
    {
        title: 'Implementation of Dynamics 365 Business Central',
        slug: 'd365-business-central-implementation',
        summary: 'Business Central has experienced rapid growth since its launch in 2018, with over 70,000 customers worldwide and a growing partner ecosystem. Discover how DAX implemented Business Central for one of our critical client.',
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
        summary: 'Power Apps is a low-code platform, enabling anyone with minimal coding experience to create custom business applications. Learn how it helped NGO workers to save cost ans time.',
        details: 'We developed a Power Apps Portal for a US-based non-profit organization to manage their volunteer and donation programs. The portal provides a user-friendly interface for volunteers to sign up for events and for donors to make contributions. This solution has streamlined their operations and improved engagement with their community.',
        imageId: 'case-study-8'
    },
    {
        title: 'Model Driven Power Apps based Solution for Education Business',
        slug: 'model-driven-power-apps-education',
        summary: "Create adaptive learning apps that cater to individual student needs and learning styles via power Apps! Develop more such interesting apps via power apps with DAX's help.",
        details: 'We built a model-driven Power App for an education business to manage student enrollment, course scheduling, and grading. The app provides a centralized platform for administrators, teachers, and students to access and manage information, improving communication and efficiency across the board.',
        imageId: 'case-study-9'
    },
    {
        title: 'D365 F&O Implementation for the largest Cannabis Company in Medical Usage',
        slug: 'd365-fo-cannabis',
        summary: 'The cannabis industry is subject to a complex and ever-evolving regulatory landscape. D365 F&O helps cannabis businesses to comply with these regulations by providing features for track-and-trace, labeling, and reporting.',
        details: "We implemented D365 Finance & Operations for the largest medical cannabis company, navigating the industry's strict regulatory requirements. The solution includes seed-to-sale tracking, compliance reporting, and quality control, ensuring they meet all legal obligations while optimizing their supply chain.",
        imageId: 'case-study-10'
    },
    {
        title: 'CRM Upgrade for a diversified Financial Services Organization',
        slug: 'crm-upgrade-financial-services',
        summary: 'CRM provide a wealth of customer data, enabling financial institutions to gain insights into customer behavior, preferences, and financial needs. Learn how CRM Upgrade landed this organization ahead of its competitors.',
        details: 'We upgraded the CRM system for a diversified financial services organization, migrating them to a modern, cloud-based platform. The new system provides a 360-degree view of their clients, enabling personalized service and targeted marketing campaigns. This has led to a 15% increase in client retention.',
        imageId: 'case-study-11'
    },
    {
        title: 'CRM Implementation for a leading IT Services Company',
        slug: 'crm-implementation-it-services',
        summary: 'CRM is proven to drive business growth, with companies that implement CRM experiencing an average sales increase of 12% and a customer retention rate increase of 27%. Learn more about how this IT Services organization improved reduced its operation costs via right CRM Implementation partner.',
        details: 'A leading IT services company partnered with us to implement a new CRM system. Our solution streamlined their sales process, from lead generation to deal closure. By automating repetitive tasks and providing better visibility into their sales pipeline, they were able to reduce their sales cycle by 10% and increase overall sales.',
        imageId: 'case-study-12'
    },
    {
        title: 'Dell Boomi Integration',
        slug: 'dell-boomi-integration',
        summary: "Looking for integrations? Can I engage Dell Boomi for my integration projects? How exactly Dell Boomi helps with integrations? This case study unravels how Dell Boomi transforms integration projects, answering all your questions.",
        details: 'We utilized Dell Boomi to integrate a client\'s disparate systems, including their ERP, CRM, and e-commerce platform. The Boomi platform provided a scalable and flexible solution for connecting their applications, automating data synchronization, and creating unified business processes. This resulted in a single source of truth for their data and significantly improved operational efficiency.',
        imageId: 'case-study-13'
    },
    {
        title: 'Salesforce Implementations and Integrations with Dynamics 365',
        slug: 'salesforce-d365-integration',
        summary: "Salesforce and Dynamics 365 represent two leading cloud-based enterprise software platforms, and their integration has become increasingly popular among businesses seeking to unify their customer relationship management (CRM) and enterprise resource planning (ERP). Want to learn how it's done?",
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
        details: `## Overview
- IRB has mandated the electronic transmission of sales data
- Memorandum consisting of rules governing issue of E-Invoice released in Sept 2023.
- Customer had changed 2 partners without successful resolution.
- Imposition of penalties for non-compliance.
[E-INVOICE-PROCESS-FLOW-IMAGE]
## Business Pain Points
Based on the IRB, the requirements, seller to send sales data via E-invoice and buyer to secure copy through IRB’s portal
- Identifying transactions which for which E-Invoice or Self-Billing is to be processed
- B2B sales to sales and foreign customers through lead ERP
- Self-Billing to foreign and domestic purchases through lead ERP
- B2C- E-Commerce sales though E-Commerce portal.
- POS sales from Company owned stores though POS application.
#### For submission of data
- Method to issue E-invoice and collect buyer details
- For Self -billing - If buyers provide E-invoice, then “Self-Billing” is not required.
#### Data submission timelines
- Real time or within 72 hours
- Validation of invoice on Government portal in real time
## Out of Scope
- Transactions at Franchise stores
- Sale of Fixed assets
- Debit notes and Refund notes
- Customer stakeholders have decided to not share mode of payment and other payment details as these are “optional information”
## Solution
### Validation from ERP to Middleware
- Along with working on day-to-day issues implemented enhancements which were on hold since long with in short period which helped to increase work efficiency.
- Customer and Vendor - contact details
- Tax registration details - validity as on date of transactions
- Buyer Identification details - BRN, SST and MSIC numbers
- Transaction details - Currency, Item, quantity, sales prices, tax, transaction date and document number, tax types, classification codes
### Validation from Middleware to Government Portal
- Customer/Vendor - TIN number validation
- E-invoice and Consolidation status check
- E- Invoice status submission and response
### Design
- Implementation of Middleware for receipt of data from multiple data sources
- From Lead ERP to Middleware
- Identification of Business Processes
#### For E-Invoice Transactions
- Sales Order - Invoice and Credit notes
- For non-Sales order transaction - Free Text Invoices and Credit notes
#### For Self-Billing Transactions
- For non-Purchase Order - Invoice Journals
#### Data transfer to Middle ware
- Medium of data transfer was using the API of Middleware
- Handshake between middleware and lead ERP - based on connection tokens provided by the middleware, both system were connected and connection was tested by transferring limited set of data.
- Trigger of data transfer was posting of Transaction in D365 Finance and Operation
- For e.g. - On posting of sales order invoice or free text invoice or Accounts Payable invoice Journal
#### Format of data which in which it is transferred to Middleware
- Every API has specific template or list of fields
- Before developing the data set for API, data mapping activity between API fields and fields on transaction and master data in the lead ERP was carried out
- Data Header - eg contains Customer/Vendor information, document ID, contact information
- Lines - contains Item, quantity, price, tax etc
- Payload Request - On posting of transaction, payload request is generated which transfers data to D365FO
- Response
#### Monitoring of data
- Creation of Repository - Log form was created in Accounts Receivable and Accounts Payable module
- Every Transaction sent to Middleware was updated in log form
- This helped in the monitoring the transactions which were either successfully transferred or failed transactions
- For successful transfer of transactions, Middleware is acknowledging receipt of data.
- For transaction failing - Middleware is sharing the reasons for failure.
- For resending failed transaction - users could edit few fields like tax registration ID before attempting to resend the data.
### Developments with lead ERP
- Fields to setups classification for Vendors/Customers masters-eg Self Billing, E-Invoice, Exempt
- Government portal mandated fields - Tax Type, Classification codes,
- Fields on Transaction Screens for points mentioned above, logic default the values from the Vendors/Customer masters
- Validation messages to prevent posting of transactions with insufficient or incomplete information i.e. checking for information as required by Middleware and/or Government Portal.
- Transaction level logic - preventing transactions from rolling over to middleware if for e.g the IRB transaction ID is available for self-billed transactions
#### Credit Notes/Reversals - program logic to cover following scenarios
- Reversals need to be referenced to original transactions so the information required by Government portal can be copied/derived from original transactions.
- Logic to handle reversals for transactions prior to 01 August’2025 are to be reversed.
## Challenges
- Frequent changes in government guidelines/regulation
- Potential penalties for non-compliance
- Open Items which were not closed before securing sign off by stakeholders
- Potential Delays in receiving in API from Government Portal which in turn was impacting receiving API from
`,
        imageId: 'ocr-case-study'
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
