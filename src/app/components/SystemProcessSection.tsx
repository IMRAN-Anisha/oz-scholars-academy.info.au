import { Search, Target, BookOpen, BarChart3, RotateCcw } from 'lucide-react';

export function SystemProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Diagnose',
      subtitle: 'Initial Assessment',
      description:
        'We start with a comprehensive diagnostic test to identify knowledge gaps, learning style, and current performance baseline. This gives us the data we need to design a personalized system.',
      color: '#0080FF',
      metrics: ['Subject proficiency score', 'Learning speed analysis', 'Weakness mapping'],
    },
    {
      number: 2,
      icon: Target,
      title: 'Target Weaknesses',
      subtitle: 'Strategic Planning',
      description:
        "Using assessment data, we prioritize the highest-impact areas for improvement. We don't waste time on what students already know - we focus on filling critical gaps systematically.",
      color: '#FF0040',
      metrics: ['Priority topic list', 'Custom learning roadmap', 'Goal setting'],
    },
    {
      number: 3,
      icon: BookOpen,
      title: 'Structured Lessons',
      subtitle: 'Systematic Delivery',
      description:
        "Every session follows a proven structure: review previous concepts, introduce new material, guided practice, and independent work. No more random tutoring - every minute is optimised.",
      color: '#FFD700',
      metrics: ['Weekly lesson plans', 'Progress checkpoints', 'Homework assignments'],
    },
    {
      number: 4,
      icon: BarChart3,
      title: 'Weekly Exam Practice',
      subtitle: 'Applied Testing',
      description:
        'Students complete timed practice exams every week to build test-taking stamina, identify remaining weaknesses, and track improvement. We simulate real exam conditions.',
      color: '#00D66B',
      metrics: ['Mock exam scores', 'Time management data', 'Confidence tracking'],
    },
    {
      number: 5,
      icon: RotateCcw,
      title: 'Feedback Loop + Tracking',
      subtitle: 'Continuous Optimization',
      description:
        'After every session and practice exam, we analyze performance data and adjust the learning plan. Parents see real-time progress through the dashboard. We iterate until goals are met.',
      color: '#9333EA',
      metrics: ['Performance trends', 'Adjustment recommendations', 'Parent reports'],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FF8C00]">
            <RotateCcw className="h-4 w-4" />
            Our Proven Process
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            The <span className="text-[#FFD700]">5-Step Score Boost</span> System
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Engineering academic improvement through systematic, data-driven iteration.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Connecting Line */}
          <div className="absolute left-8 top-12 hidden h-[calc(100%-96px)] w-1 bg-gradient-to-b from-[#0080FF] via-[#FFD700] to-[#9333EA] opacity-20 md:block"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="grid gap-6 md:grid-cols-12 md:items-start">
                {/* Step Number & Icon */}
                <div className="flex items-start gap-4 md:col-span-3">
                  <div className="relative">
                    {/* Number Badge */}
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl font-bold text-white shadow-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-2xl">{step.number}</span>
                    </div>
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-xl transition-opacity group-hover:opacity-60"
                      style={{ backgroundColor: step.color }}
                    ></div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.subtitle}</p>
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:col-span-9">
                  <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all group-hover:scale-[1.02] group-hover:shadow-2xl">
                    <p className="mb-4 text-gray-700 leading-relaxed">{step.description}</p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {step.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="rounded-full px-4 py-2 text-sm font-semibold"
                          style={{
                            backgroundColor: `${step.color}15`,
                            color: step.color,
                          }}
                        >
                          ✓ {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#0080FF] bg-gradient-to-br from-[#0080FF]/5 to-transparent p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#0080FF]">Continuous</div>
            <div className="text-gray-700">No guesswork, only data-driven decisions</div>
          </div>
          <div className="rounded-2xl border-2 border-[#FFD700] bg-gradient-to-br from-[#FFD700]/5 to-transparent p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#FF8C00]">Measurable</div>
            <div className="text-gray-700">Track every metric, see every improvement</div>
          </div>
          <div className="rounded-2xl border-2 border-[#00D66B] bg-gradient-to-br from-[#00D66B]/5 to-transparent p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#00D66B]">Optimised</div>
            <div className="text-gray-700">Iterate and improve week after week</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-xl text-gray-700">
            See the system in action with a free assessment.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl bg-[#FF0040] px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#FF3366]">
            Book Your Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}