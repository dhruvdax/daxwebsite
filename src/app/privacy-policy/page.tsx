'use client';
import Link from 'next/link';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Privacy Policy | DAX Software Solutions",
  description: "Read the DAX Software Solutions privacy policy to understand how we collect, use, and protect your personal information in accordance with GDPR and other regulations.",
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Effective July 1, 2021
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-headline mb-4">Purpose</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300"> This Privacy Policy applies to the information Dax Software Solutions, Inc. and its subsidiaries (collectively, “Dax Software Solutions,” “we,” “us,” or “our”) collects, including through our website or other online products and services (“Site”).</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">This Privacy Policy describes our personal information collection practices, such as the types of personal information we collect, how we may use that information, and for what purposes. By using this Site or purchasing our products or services, you consent to this Privacy Policy.</p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Personal Information</h2>
            <h3 className="text-2xl font-bold font-headline mb-4">Collection of Personal Information</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may collect information that identifies, relates to, describes, references, is capable of being associated with, or reasonably could be linked, directly or indirectly, with a specific individual, consumer, or personal device, which may include your name, postal and/or email address, telephone number, financial information, and date of birth (“Personal Information”).</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may collect such information from you when you use the Site or provide us information in response to marketing efforts. We also receive Personal Information about you from our business partners and/or clients who share Personal Information with us to provide services or goods pursuant to a contract. Business partners, for purposes of this Privacy Policy, are defined as companies or organizations that Dax software solutions provides goods or services to, or that Dax software solutions does business with.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may also collect Personal Information about you through your use of the Site. This information could include the type of device you are using, your IP address, the pages you visit while navigating the Site, and how long you visit certain pages. This information is collected for a variety of purposes, including enhancing or improving the Site or the services we offer to you.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Use of Personal Information</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may use Personal Information collected for one or more of the following business purposes:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="mb-2">To complete requests or orders we receive from our business partners or consumers;</li>
                <li className="mb-2">To inform you of products and services we offer;</li>
                <li className="mb-2">To communicate, service, and bill accounts or business partners;</li>
                <li className="mb-2">To obtain and update information with appropriate third parties;</li>
                <li className="mb-2">To monitor and administer accounts and the services provided;</li>
                <li className="mb-2">To fulfill contractual obligations;</li>
                <li className="mb-2">To comply with or satisfy a legal or regulatory requirement;</li>
                <li className="mb-2">To fulfill any additional commercial purposes, with your consent as required by law;</li>
                <li className="mb-2">To perform analytics to enable us to monitor and analyze web traffic;</li>
                <li className="mb-2">To utilize heat mapping services to identify where Site users most frequently move the mouse or click, which shows points of interest on the Site;</li>
                <li className="mb-2">To interact with data collection platforms or other services;</li>
                <li className="mb-2">To use third-party live chat platforms for being contacted by Site support services; and</li>
                <li className="mb-2">To manage contracts and customer contact databases to communicate with you and manage your profile.</li>
            </ul>
            <p className="mb-4 text-gray-700 dark:text-gray-300">More detail regarding collection and use of Personal Information through our Site can be found in our Cookie Policy referenced below. We will not collect additional categories or types of Personal Information or use the Personal Information for materially different, unrelated, or incompatible purposes without providing you additional notice.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Disclosing Personal Information</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Dax Software Solutions has not sold and will not sell your Personal Information. We may share and disclose your Personal Information for permitted business purposes in order to provide and/or market our products and services to you. The parties with whom we share Personal Information include our affiliates, service providers, our marketing business partners, and third parties to whom you or your agents authorize us to disclose your Personal Information in connection with products or services we provide to you or our clients. We may also share data with our marketing business partners to send communications through their services. Where we do share your information with third parties, we contract for appropriate levels of data protection are in place in accordance with the law. We may also be required to share Personal Information with government or law enforcement authorities if required by law or to protect our legal interests or in cases of suspected fraud or illegal activities, and/or if ordered by a subpoena, search warrant, or other court order.</p>

            <h2 className="text-3xl font-bold font-headline mb-4">Children’s Information</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Our Site and our products and services are not directed at children. We do not knowingly collect Personal Information from children under the age of 16. If you are a parent or guardian and believe your child has provided us with Personal Information without your consent, please contact us by using the information in the “Dax Software Solutions Contact Information” section, below, and we will take steps to delete such Personal Information from our systems.</p>

            <h3 className="text-2xl font-bold font-headline mb-4">Retention of Personal Information</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We keep your information as long as is necessary for the purposes for which it was collected or as required by applicable law. The length of time we retain your Personal Information is determined by operational and legal considerations. Personal Information collected for purposes related to the performance of a contract shall be retained until such contract has been fully performed.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may be permitted to retain Personal Information for a longer period if you or our client has given consent to such processing, as long as such consent is not withdrawn. Furthermore, we may be obliged to retain Personal Information for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.</p>

            <h2 className="text-3xl font-bold font-headline mb-4">Cookies</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We use “cookies” on our Site. A “cookie” is a piece of information stored on a Site visitor’s hard drive to help us improve your access to our Site and identify repeat visitors. Cookies enable us to track and target the interests of our Site users to enhance their experience on our Site. It is possible to switch off cookies by setting your browser preferences. Turning cookies off may result in a loss of functionality when using our Site.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">To learn more and for a detailed cookie policy, <Link href="/cookie-policy" className="text-primary hover:underline">click here</Link>.</p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Security</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We employ commercially reasonable security methods and technologies to help secure the Personal Information we collect and store, and to protect this information from loss, misuse and unauthorized access, disclosure, alteration and destruction. We cannot, however, fully eliminate security risks associated with the storage and transmission of Personal Information.</p>

            <h2 className="text-3xl font-bold font-headline mb-4">European Economic Area</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The following section, in conjunction with the information above, describes Dax Software Solutions’ data practices in accordance with the EU General Data Protection Regulation (“GDPR”). Any terms defined in GDPR have the same meaning when used in this section of this Privacy Policy.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Data Processor</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">In many circumstances, Dax software solutions is the Data Processor in relation to your Personal Information and is committed to protecting the privacy rights of individuals, including your rights. Dax software solutions commits to privacy and data security in these circumstances.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Methods of Processing</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Dax Software Solutions takes commercially reasonable security measures to attempt to prevent unauthorized access, disclosure, modification, or unauthorized destruction of Personal Information.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Personal Information processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In some cases, Personal Information may be accessible to certain types of persons in charge, involved with the operation of this Site (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by Dax Software Solutions. The updated list of these parties may be requested from Dax Software Solutions at any time.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Legal Basis of Processing</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Dax Software Solutions is committed to cooperating with the EU data protection authorities (DPAs) and the Swiss Federal Data Protection and Information Commissioner (FDPIC)  and complying with the advice given by such authorities with regard to human resources and non-human resources data transferred from the EU and Switzerland as required by applicable law.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We will only process Personal Information subject to th GDPR as it is described in this Privacy Policy if we have a lawful basis for doing so, including those listed below. Under some legislation, Dax Software Solutions may be allowed to process Personal Information until you affirmatively object to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="mb-2">Provision of Personal Information is necessary for the performance of an agreement and/or for any pre-contractual obligations thereof;</li>
                <li className="mb-2">Processing is necessary for compliance with a legal obligation;</li>
                <li className="mb-2">Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in Dax software solutions; or</li>
                <li className="mb-2">Processing is necessary for the purposes of the legitimate interests pursued by Dax software solutions or by a third party that are not overridden by the data subject’s interests or fundamental rights and freedoms.</li>
            </ul>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If your affirmative consent is required for certain processing of any Personal Information subject to the GDPR, we will obtain your consent before so processing such information.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">In any case, we can help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information subject to the GDPR is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>

            <h3 className="text-2xl font-bold font-headline mb-4">Place</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Personal Information is processed at Dax software solutions’ operating offices and in any other places where the parties involved in the processing are located. Depending on your location, data transfers may involve transferring the Personal Information to a country other than the one in which the data subject resides.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If broader protection standards are applicable, you are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.</p>

            <h3 className="text-2xl font-bold font-headline mb-4">Information Transfer and Consent</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">With respect to personal data received or transferred pursuant to the Privacy Shield Framework, Dax software solutions is subject to the regulatory enforcement powers of the U.S. Federal Trade Commission. In certain situations, Dax software solutions may be required to disclose personal data in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Your Personal Information may be transferred to and stored the United States, and may be processed and accessed by us, our affiliates and our unaffiliated service providers in the United States and in other jurisdictions where we or they operate. We comply with the EU-U.S. Privacy Shield Framework and Swiss-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of Personal Information transferred from the European Union and Switzerland to the United States.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Dax software solutions is responsible for the processing of personal data it receives under the Privacy Shield Framework and subsequently transfers to a third party acting as an agent on its behalf. Dax software solutions complies with the Privacy Shield Principles for all onward transfers of personal data from the EU and Switzerland, including the onward transfer liability provisions.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">In compliance with the Privacy Shield Principles, Dax software solutions commits to resolve complaints about our collection or use of your Personal Information. EU and Swiss individuals with inquiries or complaints regarding our Privacy Shield policy should first contact Dax software solutions at: <a href="mailto:contact@daxsws.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact@daxsws.com</a>.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">By using the Services, you consent to this transfer, processing, storage and access of your Personal Information in and/or outside of the jurisdiction in which you reside. Courts and other authorities in these jurisdictions may, in certain circumstances, be entitled to access your Personal Information. We will transfer your Personal Information subject to suitable safeguards, including in accordance with Privacy Shield Principles and/or standard contractual clauses where appropriate.</p>

            <h3 className="text-2xl font-bold font-headline mb-4">Access to Information and Your Rights</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">You have certain rights relating to your Personal Information, subject to local data protection laws. These rights may include:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="mb-2">To access your Personal Information held by us (right to access);</li>
                <li className="mb-2">To rectify inaccurate Personal Information and, taking into account the purpose of processing the Personal Information, ensure it is complete (right to rectification);</li>
                <li className="mb-2">To erase/delete your Personal Information, to the extent permitted by applicable data protection laws (right to erasure; right to be forgotten);</li>
                <li className="mb-2">To restrict our processing of your Personal Information to the extent permitted by law (right to restriction of processing);</li>
                <li className="mb-2">To transfer your Personal Information to another controller or processor, to the extent possible (right to data portability);</li>
                <li className="mb-2">To object to any processing of your Personal Information carried out on the basis of our legitimate interests (right to object). Where we process your Personal Information for direct marketing purposes or share it with third parties for their own direct marketing purposes, you can exercise your right to object at any time to such processing without having to provide any specific reason for such objection;</li>
                <li className="mb-2">To not be subject to a decision based solely on automated processing, including profiling, which produces legal effects (“Automated Decision-Making”); Automated Decision-Making currently does not take place on our websites or in our services; and</li>
                <li className="mb-2">To the extent we base the collection, processing, and sharing of your Personal Information on your consent, to withdraw your consent at any time, without affecting the lawfulness of the processing based on such consent before its withdrawal.</li>
            </ul>
            <p className="mb-4 text-gray-700 dark:text-gray-300">To exercise these rights, please submit your specific request to exercise these rights by using the information in the “Dax Software Solutions Contact Information” section below.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Timeframe for Responding to Requests</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Dax Software Solutions will respond to your request within thirty (30) days of receipt.</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The period of response may be extended to forty-five (45) or sixty (60) days if more time is required. In that event, we will inform you of the reason and extension period in writing.</p>

            <h3 className="text-2xl font-bold font-headline mb-4">Fee</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Your California Privacy Rights</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If you are a California resident, California law may provide you with additional rights regarding our use of your Personal Information. To learn more about your California privacy rights with respect to your Personal Information that we may collect via the Site, visit the Privacy Notice for California Residents.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Links to Other Sites</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">We may offer links to sites that are not operated by us. If you visit one of these linked sites, you should review their privacy and other policies. We are not responsible for the policies and practices of others.</p>
            
            <h3 className="text-2xl font-bold font-headline mb-4">Changes to Privacy Policy</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">From time to time, we may change this Privacy Policy with or without notice. Any changes will be effective <strong>immediately</strong> upon the posting of the revised Privacy Policy unless otherwise specified. Your continued use of our Site constitutes your acceptance of such changes.</p>
            
            <h2 className="text-3xl font-bold font-headline mb-4">Dax Software Solutions Contact Information</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">If you have any questions about the Privacy Policy or our privacy practices, please contact us at:</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Name: Privacy Officer<br />
                Email Address: <a href="mailto:contact@daxsws.com" className="text-primary hover:underline">contact@daxsws.com</a><br />
                Address: DAX Software Solutions Inc. 6303 Owensmouth Ave, 10th floor, Woodland Hills, CA 91367
            </p>
        </div>
      </section>
    </div>
  );
}

    