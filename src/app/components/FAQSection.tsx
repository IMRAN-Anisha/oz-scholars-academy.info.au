import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How is this different from regular tutoring?',
      answer:
        "Traditional tutoring is reactive - students show up with questions, and tutors answer them. We take a systems-engineering approach: structured lesson plans, weekly progress tracking, data-driven feedback loops, and scheduled accountability. Every student gets a personalized dashboard to track their progress in real-time, and parents have full visibility into what's working and what needs adjustment.",
    },
    {
      question: 'What subjects do you cover?',
      answer:
        'We specialize in Mathematics (all levels), English, Computer Science, Selective School Exam preparation, and ATAR-focused subjects. Our educators are 95+ ATAR achievers with deep subject expertise and are trained in our systematic approach to learning optimization.',
    },
    {
      question: "Can I see my child's progress in real-time?",
      answer:
        "Yes! Every family gets access to our student dashboard that shows weekly task completion rates, time spent on each subject, achievement badges, upcoming sessions, and performance trends. We believe in full transparency - you shouldn't have to guess how your child is doing.",
    },
    {
      question: "What if my child doesn't like the system?",
      answer:
        "We have a 30-day progress guarantee. If you don't see measurable improvement in organization, study habits, and academic confidence within the first month, we'll refund your first month's tuition. We also offer flexible scheduling and can adjust our approach based on your student's learning style.",
    },
    {
      question: 'Do you offer catch-up lessons if my child misses a session?',
      answer:
        "Yes! If a session is missed with at least 24 hours notice, we'll schedule a make-up lesson at no additional charge. For last-minute cancellations (less than 24 hours), we offer catch-up lessons at a discounted rate or you can choose to receive a partial credit toward your next month.",
    },
    {
      question: 'What are the end-of-semester exam fees?',
      answer:
        "Comprehensive exam preparation (including practice tests, extended sessions, strategy consultation, and post-exam review) costs $150-$350 per subject depending on your tier. You'll be notified 4 weeks in advance with exact pricing. These fees are optional but highly recommended for students preparing for major assessments.",
    },
    {
      question: 'Are there any discounts available?',
      answer:
        'Yes! We offer: 50% off your first lesson, 15% sibling discount, 10% referral credit, 10% multi-subject discount (2+ subjects), and 12% early bird discount for full upfront payment. Discounts can be combined up to a maximum of 30% total savings.',
    },
    {
      question: 'How does the 20-minute strategy call work?',
      answer:
        "Book a free 20-minute call with our team to discuss your student's current challenges, academic goals, and how our system can help. We'll assess their needs, explain our approach, and recommend a personalized learning plan. There's no pressure - just honest advice about whether we're the right fit.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "No long-term contracts required. You can cancel anytime with 2 weeks' notice. We believe in earning your business every month through results, not locking you into commitments.",
    },
    {
      question: 'Are your educators qualified?',
      answer:
        'All educators are WWCC verified, hold 95+ ATAR scores, and have undergone extensive training in our systematic teaching methodology. Many are current university students or graduates in their respective fields with real-world experience.',
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:py-32" id="faq">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FF8C00]">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-8 text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-[#FFD700] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t-2 border-gray-100 bg-gray-50 p-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border-2 border-[#FFD700] bg-gradient-to-br from-[#FFD700]/5 to-transparent p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-black">
            Still have questions?
          </h3>
          <p className="mb-6 text-gray-600">
            Book a free 20-minute strategy call to discuss your student's needs.
          </p>
          <button className="rounded-xl bg-[#FF0040] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#FF3366]">
            Schedule Your Call
          </button>
        </div>
      </div>
    </section>
  );
}