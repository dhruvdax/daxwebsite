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
    { name: 'Alice Johnson', role: 'Founder & CEO', imageId: 'team-member-1', bio: 'With over 20 years of experience in strategic consulting, Alice leads our team with a passion for innovation and client success.' },
    { name: 'Bob Williams', role: 'Head of Strategy', imageId: 'team-member-2', bio: 'Bob is a master of market dynamics and corporate strategy, helping businesses navigate complex challenges with confidence.' },
    { name: 'Charlie Brown', role: 'Lead Analyst', imageId: 'team-member-3', bio: 'Charlie\'s analytical prowess turns raw data into actionable insights, driving informed decision-making for our clients.' },
    { name: 'Diana Miller', role: 'Operations Expert', imageId: 'team-member-4', bio: 'Diana specializes in optimizing business processes for maximum efficiency and scalability.' },
];

export const CASE_STUDIES = [
    {
        title: 'A Practical View of Dynamics 365 Integration for Modern Organizations',
        client: 'DynamicsCon',
        imageId: 'case-study-1',
        summary: 'In today\'s fast-paced business environment, organizations often rely on multiple software systems.',
        challenge: 'GlobalMart was facing stiff competition from online-native retailers and struggling with an outdated legacy IT infrastructure. Customer engagement was low, and operational costs were high.',
        solution: 'Our team developed a multi-phase digital transformation strategy. This included migrating to a cloud-based infrastructure, implementing a new e-commerce platform with personalized customer experiences, and automating key supply chain processes.',
        outcome: 'Achieved a 40% year-over-year increase in online sales. Reduced operational costs by 25% through automation. Customer satisfaction scores improved by 35%.',
        icons: [Rocket, Zap, Target]
    },
    {
        title: 'Cloud ERP vs. On-Premise: Why Dynamics 365\'s Cloud Model Wins',
        client: 'ERP Insights',
        imageId: 'case-study-2',
        summary: 'Introduction: The Shift from Legacy ERP to Cloud. For decades, businesses depended on on-premise...',
        challenge: 'InnovateIO had a groundbreaking product but lacked a clear strategy for entering a crowded market. They needed to identify the right target audience and differentiate themselves from established players.',
        solution: 'We conducted extensive market research to identify a niche audience segment. We then developed a go-to-market strategy that focused on content marketing, strategic partnerships, and a freemium pricing model to drive user acquisition.',
        outcome: 'Successfully acquired 10,000 active users in 6 months. Achieved a 15% conversion rate from free to paid plans. Established InnovateIO as a key player in their niche.',
        icons: [BarChart3, Users, Target]
    },
    {
        title: 'Data-Driven Insights: Using Power BI with Dynamics 365 for Analytics',
        client: 'BI Weekly',
        imageId: 'case-study-3',
        summary: 'Turning Overwhelm Data into Real-Time Intelligence. Every day, businesses generate vast amounts of data.',
        challenge: 'SwiftLogistics was struggling with inefficient routing, high fuel consumption, and manual dispatch processes that led to delays and errors.',
        solution: 'Our solution involved developing a custom AI platform that optimized delivery routes in real-time, automated the dispatch process, and provided predictive maintenance alerts for their fleet. The platform integrated with their existing TMS.',
        outcome: 'Reduced average delivery times by 30%. Cut fuel costs by 15% through optimized routing. Eliminated 95% of manual dispatching errors.',
        icons: [Bot, Rocket, Zap]
    },
    {
        title: 'D365 PSA Managed Support Services for a Leading Aviation Company',
        client: 'Aviation Leader',
        imageId: 'case-study-5',
        summary: 'Explore how we provided D365 PSA managed support services, ensuring smooth operations for a leading aviation company.',
    },
    {
        title: 'D365 Field Service Implementation & D365 Transformation for a Global OEM',
        client: 'Global OEM',
        imageId: 'case-study-6',
        summary: 'Learn about our D365 Field Service implementation and transformation for a global original equipment manufacturer.',
    },
    {
        title: 'Implementation of Dynamics 365 Business Central',
        client: 'Mid-Sized Retailer',
        imageId: 'case-study-7',
        summary: 'Discover our successful implementation of Dynamics 365 Business Central for a mid-sized retail company, improving their efficiency.',
    },
    {
        title: 'D365 Field Service Implementation & D365 Transformation for a Drug-testing Service Provider',
        client: 'Service Provider',
        imageId: 'case-study-8',
        summary: 'A case study on our D365 Field Service implementation for a leading drug-testing service provider, enhancing their field operations.',
    },
    {
        title: 'Power Apps & Portal for an LA-based Non-Profit Organization',
        client: 'LA Non-Profit',
        imageId: 'case-study-9',
        summary: 'See how we utilized Power Apps and Portal to create a solution for a Los Angeles-based non-profit organization.',
    },
    {
        title: 'Detailed Assessment, Functional & Technical Fit Gap for K-12 school district',
        client: 'K-12 School District',
        imageId: 'case-study-10',
        summary: 'An in-depth assessment and analysis for a K-12 school district to ensure a perfect fit with their new system.',
    },
     {
        title: 'AX 2012 to D365 F&O implementation for an import and distribution food ingredients company',
        client: 'Food Ingredients Co.',
        imageId: 'case-study-11',
        summary: 'Upgrading from AX 2012 to Dynamics 365 Finance & Operations for a food ingredients import and distribution company.',
    },
    {
        title: 'CFO-approved tool to address Incurred Cost Submission (ICE) for Government Contractors',
        client: 'Government Contractor',
        imageId: 'case-study-12',
        summary: 'A CFO-approved tool for Incurred Cost Submission, tailored for government contractors to ensure compliance and accuracy.',
    },
     {
        title: 'D365 Implementation solution for a leading IT Services Company',
        client: 'IT Services Leader',
        imageId: 'case-study-13',
        summary: 'Our comprehensive D365 implementation solution for a leading IT services company, streamlining their business processes.',
    },
    {
        title: 'End-to-End Business Integration',
        client: 'Manufacturing Inc.',
        imageId: 'case-study-14',
        summary: 'A complete end-to-end business integration solution for a manufacturing company, connecting all their critical systems.',
    },
    {
        title: 'Seamless implementation and integrations with Dynamics 365',
        client: 'Tech Innovator',
        imageId: 'case-study-15',
        summary: 'We provided a seamless implementation and integration of Dynamics 365 for a tech innovator, enhancing their capabilities.',
    },
    {
        title: 'Strategic planning & process standardization for a multi-billion-dollar enterprise',
        client: 'Global Enterprise',
        imageId: 'case-study-16',
        summary: 'Our strategic planning and process standardization helped a multi-billion-dollar enterprise achieve new levels of efficiency.',
    },
    {
        title: 'AX 2012 to D365 F&O migration for a leading furniture management company',
        client: 'Furniture Co.',
        imageId: 'case-study-17',
        summary: 'Migrating a leading furniture management company from AX 2012 to Dynamics 365 Finance & Operations.',
    },
    {
        title: 'Streamlining existing D365 Finance and Operations',
        client: 'Financial Firm',
        imageId: 'case-study-18',
        summary: 'How we streamlined and optimized the existing Dynamics 365 Finance and Operations for a major financial firm.',
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
