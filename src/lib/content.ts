
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
        title: 'Dynamics 365 Finance & Operations Implementation/Managed Support for a leading Fast Food Manufacturer and Retail Company',
        slug: 'd365-fo-fast-food',
        summary: 'Dynamics 365 Finance & Operations offers a comprehensive suite of features for managing all aspects of a retail business, including finance, supply chain management, and more.',
        details: 'We partnered with a major fast-food chain to implement and support their Dynamics 365 Finance & Operations system. Our solution streamlined their global franchise operations, improved financial reporting, and provided real-time visibility into their supply chain.',
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
        title: 'Dynamics 365 Finance & Operations Managed Support Service for a Leading Real Estate Company',
        slug: 'd365-fo-real-estate',
        summary: "By leveraging DAX's AMS, real estate companies can gain a competitive advantage by reducing IT costs and improving application performance.",
        details: 'We provide ongoing Application Managed Services (AMS) for a leading real estate firm. Our services ensure their Dynamics 365 Finance & Operations platform runs smoothly, with proactive monitoring, performance tuning, and continuous enhancements. This partnership has allowed them to focus on their core business while we handle the complexities of their ERP system.',
        imageId: 'case-study-4'
    },
    {
        title: 'Dynamics 365 Field Service integrated with Finance & Operations Implementation for a US Based Systems Integrator',
        slug: 'd365-field-service-integrator',
        summary: 'Dynamics 365 Field Service is a leading cloud-based field service management (FSM) solution, with over 200,000 organizations using it worldwide.',
        details: 'We implemented Dynamics 365 Field Service integrated with Finance & Operations for a US-based systems integrator. This solution provides real-time scheduling, dispatch, and mobile capabilities for their field technicians. The integration ensures that work orders, inventory, and billing are seamlessly connected, improving efficiency and customer satisfaction.',
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
        title: 'Dynamics 365 Field Service integrated with Finance & Operations Implementation for a Security System Service Provider',
        slug: 'd365-field-service-security',
        summary: 'Dynamics 365 Field Service empowers field technicians to be more efficient. Learn how a security system provider improved its field operations with this module.',
        details: 'A security system service provider needed to improve the efficiency of their field technicians. We implemented Dynamics 365 Field Service, which provided them with optimized scheduling, mobile access to work orders, and real-time inventory management. As a result, they reduced travel time by 15% and improved first-time fix rates by 20%.',
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
        title: 'Dynamics 365 Finance & Operations Implementation for the largest Cannabis Company in Medical Usage',
        slug: 'd365-fo-cannabis',
        summary: 'Dynamics 365 Finance & Operations helps cannabis businesses comply with complex track-and-trace regulations.',
        details: "We implemented Dynamics 365 Finance & Operations for the largest medical cannabis company, navigating the industry's strict regulatory requirements. The solution includes seed-to-sale tracking, compliance reporting, and quality control, ensuring they meet all legal obligations while optimizing their supply chain.",
        imageId: 'case-study-10'
    },
    {
        title: 'CRM Upgrade for a diversified Financial Services Organization',
        slug: 'crm-upgrade-financial-services',
        summary: 'CRM provides a wealth of customer data, enabling financial institutions to gain insights into customer behavior, preferences, and financial needs. Learn how CRM Upgrade landed this organization ahead of its competitors.',
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
        summary: "Looking for integrations? Can I engage Dell Boomi for my integration projects? This case study unravels how Dell Boomi transforms integration projects, answering all your questions.",
        details: "For a large multinational technology company, we replaced a legacy middleware tool with Dell Boomi. This streamlined their Salesforce integration, reduced maintenance costs, and improved performance. The drag-and-drop interface and direct Salesforce connector made development and troubleshooting significantly faster.",
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
        details: 'We developed and implemented a custom Paid Time Off (PTO) management module within Dynamics 365 for a major security solutions provider. This automated the entire process, from requests and approvals to accrual calculations and payroll integration. The solution reduced administrative overhead by 40% and improved employee satisfaction.',
        imageId: 'case-study-15'
    },
    {
        title: 'CRM Implementation For A Leading Security System Management Company',
        slug: 'crm-implementation-security-management',
        summary: 'Specialized in crafting security solutions tailored to specific needs, serving government, education, and more.',
        details: 'The company delivers integrated security systems tailored to the needs of each client. They integrates custom security solutions for a wide range of industries including government, education, commercial facilities, healthcare, airports, seaports, oil, gas, and energy.',
        imageId: 'case-study-16'
    },
    {
        title: 'Electronic Invoicing using Dynamics 365 Finance and Operations',
        slug: 'electronic-invoicing-d365',
        summary: 'Optimize your billing process with Electronic Invoicing in Dynamics 365 Finance and Operations, ensuring automation, compliance, and efficiency.',
        details: `We implemented an end-to-end electronic invoicing solution within Dynamics 365 Finance & Operations for a large enterprise, ensuring compliance with government mandates. The solution automated the generation, submission, and monitoring of e-invoices, drastically reducing manual effort and eliminating penalties for non-compliance.`,
        imageId: 'case-study-1'
    },
    {
        title: 'Autodesk Vault Implementation for a Leading Energy Sector Company',
        slug: 'autodesk-vault-implementation-energy-sector',
        summary: 'DAX implemented Autodesk Vault Professional for a leading energy sector company, delivering a scalable document management solution with improved collaboration, security, and data integrity.',
        details: `DAX Software Solutions implemented Autodesk Vault Professional for a leading energy sector company in the United States, replacing the limitations of Autodesk Vault Basic with a scalable, enterprise-ready document management solution. The project scope included installation of Vault Professional in a secure environment (on-premises and Azure VM), deployment of a remote SQL Server database, and complete migration of the client’s existing file store and database.`,
        imageId: 'case-study-autodesk-vault'
    },
    {
        title: 'Automated Vendor Payment Communication in Dynamics 365 FO',
        slug: 'auto-vendor-payment-communication-d365fo',
        summary: 'DAX developed a custom auto-email functionality in D365FO to automate vendor communication after payment processing, reducing manual effort and improving transparency.',
        details: 'DAX Software Solutions developed a custom auto-email functionality in Microsoft Dynamics 365 Finance & Operations (D365FO) for a global coffee and tea retailer to automate vendor communication after payment processing.',
        imageId: 'case-study-auto-vendor-payment'
    },
    {
        title: 'Custom Bank Payment Templates in Dynamics 365 FO',
        slug: 'custom-bank-payment-templates-d365fo',
        summary: 'DAX developed custom bank payment templates in D365FO to streamline vendor payment processing for multiple banks.',
        details: 'Implemented custom bank payment templates in Microsoft Dynamics 365 Finance & Operations (D365FO) for a Global Coffee and Tea Retailer to streamline vendor payment processing. Since each bank follows its own file format specifications, the Client required a solution that would generate compliant payment files directly from D365FO for upload to their respective bank portals.',
        imageId: 'case-study-custom-bank-payment'
    },
    {
        title: 'Custom Financial Reports in Dynamics 365 FO',
        slug: 'custom-financial-reports-d365fo',
        summary: 'DAX developed a suite of custom financial reports in D365FO, enhancing visibility and supporting informed decision-making across entities.',
        details: 'Developed and delivered a suite of custom financial reports in Microsoft Dynamics 365 Finance & Operations (D365FO) for a Global Coffee and Tea Retailer. The standard out-of-the-box reports in D365FO did not fully meet the client’s business and statutory reporting needs, particularly for consolidated and region-specific financial analysis across multiple entities.',
        imageId: 'case-study-custom-financial-reports'
    },
    {
        title: 'Custom Fixed Assets Solution in Dynamics 365 FO',
        slug: 'custom-fixed-assets-d365fo',
        summary: 'DAX developed a custom Fixed Assets solution to manage assets by quantity, enhancing control and accuracy for a global retailer with numerous stores.',
        details: 'Developed a custom Fixed Assets solution in Microsoft Dynamics 365 Finance & Operations (D365FO) for a Global Coffee and Tea Retailer to manage assets on a quantity basis rather than relying solely on value-based tracking. Given the client’s franchise and company-owned store model with a large number of retail locations, the standard fixed asset functionality was insufficient. The client required depreciation, transfers, and disposals to be managed per quantity and per location to accurately reflect asset usage across stores.',
        imageId: 'case-study-custom-fixed-assets'
    },
    {
        title: 'Multiple Legal Entities Implementation in Dynamics 365 FO',
        slug: 'multiple-legal-entities-d365fo',
        summary: 'DAX implemented multiple legal entities in D365FO to support a global retailer’s expansion, ensuring local compliance and streamlined intercompany transactions.',
        details: 'Implemented multiple legal entities in Microsoft Dynamics 365 Finance & Operations (D365FO) for a Global Coffee and Tea Retailer to support expanding international operations. As the client entered new markets, additional legal entities were required to manage statutory compliance, financial reporting, and intercompany transactions across regions.',
        imageId: 'case-study-multiple-legal-entities'
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

export const OPENINGS = [
    {
        title: 'Warehouse Management Consultant',
        slug: 'warehouse-management-consultant',
        description: "We're looking for a mid-level Warehouse Management Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Duties:</strong></p>
<ul>
    <li>Experienced Dynamics 365 Advanced Warehouse Consultant with Supply chain to join our team for an overseas project. The ideal candidate will have a deep understanding of the Dynamics 365 Supply Chain Management suite, including Advanced Warehouse Management and Inventory Management.</li>
    <li>Provide ongoing solutions to DAX customers to support their Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
    <li>Identify and analyze client requirements and recommend solutions that align with their business objectives.</li>
    <li>Configure and customize Dynamics 365 Supply Chain and Warehouse Management modules to meet client requirements.</li>
    <li>Develop and implement warehouse processes and workflows to optimize efficiency and accuracy.</li>
    <li>Train clients on the use of Dynamics 365 Supply Chain and Warehouse Management applications.</li>
    <li>Provide ongoing support and maintenance services to ensure the stability and performance of client implementations.</li>
    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
    <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
    <li>Lead and be part of project implementation team on need basis and provide support for different projects.</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
    <li>Educational Requirement: Bachelor’s degree in computer science, Computer Engineering, Business Management, or a related field.</li>
    <li>Experience in Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
    <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
    <li>Dynamics 365 certification in Supply Chain Management or related areas.</li>
    <li>Excellent problem-solving skills and ability to analyze complex business requirements.</li>
    <li>Excellent communication and interpersonal skills.</li>
    <li>Ability to travel as required to support client implementations.</li>
    <li>Certifications in Dynamics 365 Warehouse</li>
</ul>
<p><strong>Salary:</strong> $130,000.00 per year</p>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Functional Consultant (Manufacturing and Warehouse Management)',
        slug: 'functional-consultant-manufacturing-warehouse',
        description: "We're looking for a mid-level Functional Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Duties:</strong></p>
<ul>
    <li>Facilitate workshops to develop business requirements; create demonstrations to provide proof of concept; plan and assist the team in drafting statements of work to include estimation of effort/cost.</li>
    <li>Be part of projects through the requirements definition and solution design phase. Ensure the overall solution design meets business requirements, fulfils user stories, and leading a team of resources through the build, test, and deployment phases.</li>
    <li>Facilitate customers decision-making process and document business processes and prepare functional design document that will drive the development process.</li>
    <li>Perform fit-gap analysis and Prototype and configure processes in Microsoft Dynamics 365 Finance and Operations (Production and Warehouse management Modules) to make sure the system works based on customer requirements.</li>
    <li>Support testing of the proposed system/solution and train users.</li>
    <li>Participates in providing structured support to DAX Software customers, including support for managed service customers and implementation customers.</li>
    <li>Troubleshoot support requests, proactively managing and governing assigned support cases according to SLA.</li>
    <li>Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
    <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
    <li>Master’s degree in Computer Science, Computer Engineering, or a related field and four years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and six years of experience in the job offered or a related IT position designing and implementing Microsoft Dynamics AX solutions.</li>
    <li>Minimum of 5 plus years Dynamics AX/Dynamics 365 Finance implementation experience.</li>
    <li>Proven and verifiable implementations of 2 full lifecycle Dynamics AX (from analysis to deployment)</li>
    <li>Minimum 10 years of industry and/or consulting experience.</li>
    <li>Extensive experience working in core Manufacturing Procurement, Warehouse and Inventory Management.</li>
    <li>Knowledge and/or experience servicing or designing solutions for Manufacturing vertical industries.</li>
    <li>Experience working with and/or implementing complimentary third party solutions to Dynamics 365/AX.</li>
    <li>Dynamics 365 Finance & Operations certification in manufacturing and Warehouse and/or related areas.</li>
    <li>Extensive Experience with the Microsoft Dynamics 365 Manufacturing module.</li>
    <li>Lean Manufacturing Module experience is good to have.</li>
    <li>Understands the key activities and deliverables for the client engagement and internal projects, reuses all standard templates and project artifacts and improves quality of DAX Software documentation assets.</li>
    <li>Know-how on tools like Jira, Confluence & methodologies like ITIL based processes, Agile Methodology.</li>
</ul>
<p><strong>Salary:</strong> $122,000.00 per year</p>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Technical Architect',
        slug: 'technical-architect',
        description: "We're looking for a Technical Architect to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Duties:</strong></p>
<ul>
    <li>Analyze clients’ business requirements and design, develop, and implement Microsoft Dynamics 365/AX and Enterprise Resource Planning (ERP) software solutions to meet customer needs. Meet with clients to understand their business processes and organizational structure and determine the issues affecting their current IT architecture, specifically pertaining to their supply chain processes.</li>
    <li>Develop project requirements based on operational needs and infrastructure capabilities and design ERP solutions that meet business requirements.</li>
    <li>Review all technical information with clients to ensure that the newly developed architecture aligns with specific business processes and plan the software development process in coordination with Lead Solutions Architects.</li>
    <li>Work with the project team on all aspects of the application development process including coding, source control management, continuous integration, building processes, testing, and operations.</li>
    <li>Write comprehensive code to achieve user requirements, streamline the back-end operations, and increase overall company efficiency.</li>
    <li>Migrate the company’s Trade and Logistics, HR, and Financial Management data to the ERP system upon conclusion of development.</li>
    <li>Test the functionality and responsiveness of the ERP system and create reports regarding application performance, processing speeds, application memory and database, and network updates.</li>
    <li>Provide technical support to all application users and develop new solutions and functionalities as needed to improve productivity.</li>
    <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
    <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
    <li>It requires skills and knowledge in Microsoft Dynamics 365/AX, SQL, C#, and PowerBI.</li>
</ul>
<p><strong>Working hours:</strong> 40 hours/week</p>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:apply@daxsws.com">apply@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Technical Consultant',
        slug: 'technical-consultant',
        description: "We're looking for a Technical Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Duties:</strong></p>
<ul>
    <li>Work with Lead Solutions Architect and Financial Consultants to provide Microsoft Dynamics AX/ Finance and Operations Enterprise Resource Planning (ERP) consulting services.</li>
    <li>Lead the requirement gathering process by meeting with business process leaders to determine business requirements.</li>
    <li>Work with Customers on Implementation and Managed service side of business.</li>
    <li>Help junior resources during solution process with understanding the problem and towards right resources to research, solutions based on customer needs.</li>
    <li>Write the code in Dynamics 365 Finance & Operations/Dynamics AX to achieve the user requirements.</li>
    <li>Worked in writing interfaces to integrate Dynamics 365 Finance & Operations/Dynamics AX with different third-party systems.</li>
    <li>Utilizing Manufacturing, Supply Chain, Warehouse, Finance modules process knowledge to understand the new system’s impact on Trade and Logistics, HR and Finance management.</li>
    <li>Perform Gap analysis between AX functionality and end user requirement.</li>
    <li>Train/Write design documentation and corresponding technical specifications.</li>
    <li>Train/Write test scenarios and cases and perform unit testing.</li>
    <li>Perform production migration using data sets.</li>
    <li>Train end users on their customized AX solutions.</li>
    <li>Work with different partners/solution providers and deliver timely solutions to clients.</li>
    <li>Troubleshooting different performance issues for optimizations and suggesting performance tuning solutions.</li>
    <li>Help setup go-live checklist and ensure support to customers as well as help with issue debugging and resolution.</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
    <li>Specify job requirements (experience, technologies, certificates, etc).</li>
    <li>Bachelor’s degree in Computer Science, Computer Engineering, or a related field and minimum two years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions. The position requires the ability to use Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profiler, API developer, and Interface development.</li>
    <li>Hands-on experience on Microsoft’s Dynamics AX/Dynamics 365 Finance & Operations ERP suite.</li>
    <li>Extensive programming experience in different MS programming languages.</li>
    <li>Certifications in Dynamics AX/Dynamics 365 Finance and Operations.</li>
    <li>In-depth experience integrating with 3rd party applications.</li>
</ul>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Applications Consultant',
        slug: 'applications-consultant',
        description: "We're looking for a Applications Consultant to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p>DAX Software Solutions, Inc. is seeking a Software Developers with BFSI, Supply Chain domain experience, Legacy Data Migration and ETL tools knowledge. Dynamics 365 Finance & Operations, Integration, Technical Architect, Code migration, go live management, AX2012 R3, Dynamics 365 Finance & Operations, SSRS, and the upgrade, data management.</p>
<p>The position will primarily be responsible interface with key stakeholders and apply your technical proficiency across different stages of the Software Development Life Cycle including Data Migration & Requirements Elicitation, Application Architecture definition and Design. You will play an important role in creating the high-level design artifacts. You will also deliver high quality code deliverables for a module, lead validation for all types of testing and support activities related to implementation, transition, and warranty. You will be part of a learning culture, where teamwork and collaboration are encouraged, excellence is rewarded, and diversity is respected and valued.</p>
<p><strong>Key Responsibilities (Essential Duties and Functions)</strong></p>
<ul>
    <li>Collaborate with clients to gather and analyze business requirements for their migration to Dynamics 365.</li>
    <li>Participate and contribute to the requirements elicitation process and create requirements documentation.</li>
    <li>Participate in creating application architecture document to provide deliverables in line with architectural requirements.</li>
    <li>Assist in the Design and implement system configurations, customizations, and extensions using C# and X++ / JavaScript programming languages.</li>
    <li>Create design artifacts and support prototyping through creation of POCs.</li>
    <li>Access the legacy ERP systems to: 1. Understand the data structure 2. Define the migration scope 3. Select appropriate ETL (extract – transform – load) tools 4. Develop a strategy to import relevant and updated data from historical records. Then, drive the data migration process from legacy ERP systems to Microsoft Dynamics 365 Finance & Operations</li>
    <li>Develops Informatica Cloud IDMC/IICS mappings and mapping tasks using ODBC and API based data integration and design task flows.</li>
    <li>Deliver high quality code deliverables and support peers in quality checks such that design requirements are met. Create user documentation for the assigned modules, Lead validation activities for the assigned modules for all types of testing e.g., Functional, Integration, System, User Experience etc.</li>
    <li>Support the creation of “Go Live” plan (change management request) and manage assigned activities in the plan.</li>
    <li>Perform root-cause analysis of any issues that arise post-implementation and work on appropriate solutions.</li>
    <li>Participate in Knowledge Transfer sessions, prepare system appreciation documents and support the transition process.</li>
    <li>Conduct impact analysis of issues logged, prioritize, and ensure that production support is provided as per committed SLAs.</li>
</ul>
<p><strong>Qualifications/Education/Experience</strong></p>
<ul>
    <li>Bachelor’s degree in engineering/computer-related discipline, or equivalent experience required.</li>
    <li>At least 2 years of experience in end-to-end implementation of projects in data migrations, Integration using etl tools -Informatica.</li>
    <li>Dynamics 365 Finance & Operations ERP knowledge.</li>
    <li>2+ years of Cloud (AWS / Azure) experience.</li>
    <li>Leadership/Management skill.</li>
    <li>Excellent communication skills – will be working with Sr Leadership and entire implementation team.</li>
</ul>
<p><strong>Knowledge/Skill Requirement</strong></p>
<ul>
    <li>Good understanding of data architecture, data integration, data quality and data architecture.</li>
    <li>Experience in Relational Modeling, Dimensional Modeling and Modeling of Unstructured Data.</li>
    <li>Proven experience as a Dynamics AX or Dynamics 365 Consultant, with a focus on migration and upgrade projects.</li>
    <li>Strong expertise in Informatica PowerCenter and Informatica Cloud IDMC/IICS, specifically pertaining on API data integration and Cloud-Based ODBC data integration.</li>
    <li>Strong expertise in designing and developing data integration / migration solutions.</li>
    <li>Experience working with data in multiple ERP and data movement technologies.</li>
    <li>Advanced knowledge of SQL databases and queries.</li>
    <li>Advanced knowledge of CDC (Change Data Capture) & CT (Change Tracking) inner workings.</li>
    <li>Experience with normalizing and de-normalizing data.</li>
    <li>Work experience in Cloud technologies and DevOps is preferred.</li>
    <li>Excellent analytical and problem-solving skills with the ability to translate business requirements into technical solutions.</li>
    <li>Ability to work in teams in a diverse, multi-stakeholder environment comprising of Business and Technology teams.</li>
    <li>Microsoft certifications in Dynamics 365 or related technologies are a plus.</li>
</ul>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Business Software Analyst',
        slug: 'business-software-analyst',
        description: "We're looking for a Business Software Analyst to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Summary:</strong></p>
<p>The Business Software Analyst is responsible for evaluating, designing, and implementing software solutions that align with business objectives. This role involves working closely with stakeholders, gathering requirements, analyzing business processes, and translating them into functional software specifications. The Business Software Analyst ensures that the software solutions meet business needs, are scalable, and improve operational efficiency.</p>
<p><strong>Key Responsibilities:</strong></p>
<ul>
    <li><strong>Requirements Gathering:</strong> Collaborate with stakeholders, including business users, managers, and IT teams, to gather and document detailed business requirements.</li>
    <li><strong>Business Process Analysis:</strong> Analyze current business processes, identify gaps, and propose software solutions to enhance efficiency and productivity.</li>
    <li><strong>Software Evaluation:</strong> Evaluate existing software systems and recommend improvements or new software solutions that align with business goals.</li>
    <li><strong>Functional Specifications:</strong> Translate business requirements into functional specifications, user stories, or use cases that guide software development teams.</li>
    <li><strong>Project Management:</strong> Work with project managers to develop project plans, timelines, and resource requirements for software development projects.</li>
    <li><strong>Testing and Validation:</strong> Develop and execute test plans to ensure software solutions meet the defined requirements and are free of defects.</li>
    <li><strong>Training and Support:</strong> Provide training and support to end-users, ensuring they are proficient in using the software solutions.</li>
    <li><strong>Continuous Improvement:</strong> Identify opportunities for continuous improvement in software systems and processes, and implement best practices.</li>
    <li><strong>Stakeholder Communication:</strong> Communicate effectively with all stakeholders to ensure alignment and understanding of project objectives and progress.</li>
    <li><strong>Data Visualization:</strong> Microsoft Azure Power BI, Tableau.</li>
    <li><strong>Dynamics 365:</strong> Lead the implementation of Dynamics 365 Finance & Operations modules, ensuring alignment with business needs.</li>
    <li><strong>Solution Design:</strong> Design and configure Dynamics 365 Finance & Operations solutions to meet business requirements.</li>
</ul>
<p><strong>Requirements:</strong></p>
<p><strong>Qualifications</strong></p>
<ul>
    <li><strong>Education:</strong> Bachelor’s or Master’s degree in MIS, Information Technology, Business, Computer Science, or a related field.</li>
    <li><strong>Experience:</strong> minimum of two years of experience in the job offered or related.</li>
    <li><strong>Technical Skills:</strong> Proficiency in software analysis, design, and development methodologies.</li>
    <li>Strong understanding of software development life cycles (SDLC).</li>
    <li>Familiarity with business process modeling, data analysis, and requirements management tools.</li>
    <li>Experience with software testing, quality assurance, and user acceptance testing (UAT).</li>
    <li><strong>Soft Skills:</strong> Excellent analytical and problem-solving skills.</li>
    <li>Strong communication and interpersonal skills.</li>
    <li>Ability to work independently and as part of a team.</li>
    <li>Detail-oriented with strong organizational skills.</li>
    <li><strong>Certifications:</strong> Certification in Business Analysis (e.g., CBAP, CCBA) or relevant software analysis certifications are a plus.</li>
</ul>
<p><strong>Salary:</strong> $130,000.00 per year</p>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or apply here</p>`
    },
    {
        title: 'Senior ERP Developer',
        slug: 'senior-erp-developer',
        description: "We're looking for a Senior ERP Developer to join our team.",
        location: 'Woodland Hills, CA',
        type: 'Full-time',
        fullDescription: `<p><strong>Job Duties:</strong></p>
<ul>
    <li>Analyze clients' IT solutions requirements and design, develop, and implement Enterprise Resource Planning (ERP) solutions for the company's clients. Meet with clients to understand their business processes and organizational structure and develop project requirements based on operational needs and infrastructure capabilities.</li>
    <li>Create design documentation and corresponding technical specifications using technologies such as Microsoft Dynamics 365, SQL Server, Visual Studio, XX++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profile, and API developer.</li>
    <li>Develop the business process management software to automate workflow, increase productivity and customer retention, and decrease company production costs.</li>
    <li>Design data analysis models for the supply chain process of the ERP software to provide the client with a competitive advantage over its competitors.</li>
    <li>Lead the project team throughout ERP development, including coding, source control management, continuous integration, building processes, testing, and operations.</li>
    <li>Analyze the quality and performance of ERP solutions and develop strategies to detect, diagnose, and resolve software and network issues.</li>
    <li>Perform unit testing NUnit & supporting frameworks (moq, Microsoft Fakes) and integration testing of the new supply chain.</li>
    <li>Determine performance and operational-based indicators to track inventory information and back-end processes.</li>
    <li>Consult with clients on business optimization and reporting requirements best practices with the use of Power BI and Apps analytics.</li>
    <li>Facilitate user success by writing Dynamics 365 code, developing methods to integrate Dynamics 365 with third party platforms, and performing gap analysis between AX/Dynamics 365 Finance & Operations functionality and end user requirements.</li>
    <li>Analyze the migration of the client's data to be utilized by the ERP post development.</li>
    <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
    <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
    <li>It requires skills and knowledge in Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#.Net, Azure, ASP.Net, Trace Parser, SQL Profiler, API development, and Interface development.</li>
    <li>The position requires little travel -24 % of the work time several days but less than 60 days per year throughout the U.S.</li>
</ul>
<p><strong>Salary:</strong> $176,134.00 per year</p>
<p><strong>Job Site:</strong> Woodland Hills, CA</p>
<p><strong>Email Resume to:</strong> DAX Software Solutions, Inc. at <a href="mailto:apply@daxsws.com">apply@daxsws.com</a> or apply here</p>`
    },
];

    

    







