import Accordion from "./Accordion";

export default function FAQSections() {
    return (
      <div className="flex  flex-col space-y-3 text-center bg-white w-full items-center justify-center ">
        <div className="p-3 ">
          <h2 className="text-3xl font-bold text-indigo-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-14">
            Find answers to common questions about our platform.
          </p>

          <div className="divide-y-1 divide-zinc-200">
            <Accordion
              title="How does Elite Edu Tech protect student data?"
              accordionOpen={true}
              answer="We take data privacy seriously. All student data is encrypted both in transit and at rest. We comply with FERPA, COPPA, and GDPR regulations. Our platform undergoes regular security audits, and we never sell student data to third parties."
            />
            <Accordion
              title="Something here"
              answer="Answer 2 :  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, beatae excepturi. Illo amet obcaecati, quaerat hic ipsam a distinctio harum possimus ea similique voluptatem totam eius ipsum vel omnis minima!"
            />
            <Accordion
              title="Can Elite Edu Tech integrate with existing LMS platforms?"
              answer="Yes, our platform is designed to integrate seamlessly with major Learning
                Management Systems including Canvas, Blackboard, Moodle, and Google Classroom. We also offer an API for
                custom integrations with proprietary systems."
            />
            <Accordion
              title="Is training provided for educators and administrators?"
              answer="Absolutely! We provide comprehensive training resources including live webinars,
                on-demand video tutorials, documentation, and personalized onboarding sessions. Our customer success
                team is also available to provide ongoing support and training."
            />
            <Accordion
              title="What devices are compatible with Elite Edu Tech?"
              answer="Our platform works on all modern devices including desktops, laptops, tablets, and
                smartphones. We support the latest versions of Chrome, Firefox, Safari, and Edge browsers. Our mobile
                apps are available for both iOS and Android devices."
            />
            <Accordion
              title="How does the AI Learning Assistant work?"
              answer="Our AI Learning Assistant uses advanced natural language processing and machine
                learning to provide personalized help. It can answer questions, explain concepts, provide practice
                problems, and adapt its teaching style based on your learning patterns. The more you use it, the better
                it becomes at addressing your specific needs."
            />
          </div>
        </div>
      </div>
    );
};
