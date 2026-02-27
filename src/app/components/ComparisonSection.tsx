import { X, Check, TrendingDown, TrendingUp } from 'lucide-react';

export function ComparisonSection() {
  const traditional = [
    { label: 'Fixed Schedules', inefficient: true },
    { label: 'Generic Curriculum', inefficient: true },
    { label: 'Delayed Feedback', inefficient: true },
    { label: 'Limited Tracking', inefficient: true },
    { label: 'Manual Reports', inefficient: true },
    { label: 'One-Size-Fits-All', inefficient: true },
  ];

  const ozScholars = [
    { label: 'Dynamic Scheduling', optimized: true },
    { label: 'Personalized Paths', optimized: true },
    { label: 'Real-Time Analytics', optimized: true },
    { label: 'Automated Tracking', optimized: true },
    { label: 'Instant Insights', optimized: true },
    { label: 'AI-Optimized Learning', optimized: true },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#00D66B]/10 px-4 py-2 text-sm font-semibold text-[#00D66B]">
            <TrendingUp className="h-4 w-4" />
            The Difference
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            The "Effective School" Advantage
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Traditional education vs. systems-optimized learning. See the difference.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Traditional School */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-red-200 bg-white shadow-xl">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Traditional School</h3>
                  <p className="text-sm text-red-100">Legacy Systems & Bloat</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <X className="h-5 w-5" />
                  <span className="font-semibold">Inefficient Approach</span>
                </div>
              </div>

              <div className="space-y-3">
                {traditional.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50/50 p-4 transition-all hover:border-red-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                      <X className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-red-100 p-4 text-center">
                <p className="text-sm font-semibold text-red-800">
                  Results vary, progress is unpredictable
                </p>
              </div>
            </div>
          </div>

          {/* Oz Scholars Academy */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-white shadow-xl">
            <div className="bg-gradient-to-r from-[#00D66B] to-[#00B857] p-6 text-white">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Oz Scholars Academy</h3>
                  <p className="text-sm text-green-100">Systems-Optimized Learning</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 rounded-lg bg-green-50 p-4">
                <div className="flex items-center gap-2 text-[#00D66B]">
                  <Check className="h-5 w-5" />
                  <span className="font-semibold">Optimized Excellence</span>
                </div>
              </div>

              <div className="space-y-3">
                {ozScholars.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50/50 p-4 transition-all hover:border-green-300 hover:shadow-md"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00D66B]">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-green-100 p-4 text-center">
                <p className="text-sm font-semibold text-[#00D66B]">
                  Trackable, measurable, and continuously optimized
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-[#0080FF]/10 to-[#0080FF]/5 p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#0080FF]">2.3x</div>
            <p className="text-gray-700">Faster Progress</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#00D66B]/10 to-[#00D66B]/5 p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#00D66B]">54%</div>
            <p className="text-gray-700">More Retention</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#FF8C00]">100%</div>
            <p className="text-gray-700">Data-Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
}