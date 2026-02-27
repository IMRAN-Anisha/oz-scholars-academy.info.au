import { Shield, BarChart3, Calendar, TrendingUp } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="bg-black px-6 py-20 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#00D66B]/20 px-4 py-2 text-sm font-semibold text-[#00D66B]">
            <Shield className="h-4 w-4" />
            Our Guarantee
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The <span className="text-[#FFD700]">Systems-First</span> Promise
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            We're confident in our approach because we measure everything.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFD700] bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #FFD700 1px, transparent 1px),
                              linear-gradient(to bottom, #FFD700 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>

          <div className="relative">
            {/* Main Guarantee */}
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD700] shadow-2xl">
                <Shield className="h-12 w-12 text-black" />
              </div>
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                30-Day Progress Guarantee
              </h3>
              <p className="mx-auto max-w-3xl text-lg text-gray-300">
                If you don't see measurable improvement in your student's organization, 
                study habits, and academic confidence within the first 30 days—
                <span className="font-bold text-[#FFD700]"> we'll refund your first month, no questions asked.</span>
              </p>
            </div>

            {/* What You'll See */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-[#0080FF]/30 bg-[#0080FF]/5 p-6 backdrop-blur">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0080FF]">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-2 text-xl font-bold">Measurable Data</h4>
                <p className="text-sm text-gray-300">
                  Weekly progress reports with actual metrics—not vague updates. See completion rates, time spent, and focus scores.
                </p>
              </div>

              <div className="rounded-xl border border-[#00D66B]/30 bg-[#00D66B]/5 p-6 backdrop-blur">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00D66B]">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-2 text-xl font-bold">Visible Improvement</h4>
                <p className="text-sm text-gray-300">
                  Your student will complete more homework, understand concepts faster, and feel less stressed about school.
                </p>
              </div>

              <div className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-6 backdrop-blur">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <h4 className="mb-2 text-xl font-bold">System Adoption</h4>
                <p className="text-sm text-gray-300">
                  Your student will be actively using our tracking system, attending scheduled sessions, and hitting weekly goals.
                </p>
              </div>
            </div>

            {/* Fine Print */}
            <div className="mt-12 rounded-lg border border-gray-700 bg-gray-900/50 p-6">
              <h5 className="mb-3 font-bold text-[#FFD700]">Why We Can Offer This:</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#00D66B]">✓</span>
                  <span>Our system tracks everything—we know within days if a student is progressing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#00D66B]">✓</span>
                  <span>We've refined our process over 10+ years to maximize early wins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#00D66B]">✓</span>
                  <span>Parents have full dashboard access to verify progress themselves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#00D66B]">✓</span>
                  <span>Less than 2% of families request refunds—the system works</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-gray-900 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[#0080FF]">No</div>
            <div className="text-sm text-gray-400">Long-term Contracts</div>
          </div>
          <div className="rounded-xl bg-gray-900 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[#00D66B]">Cancel</div>
            <div className="text-sm text-gray-400">Anytime Policy</div>
          </div>
          <div className="rounded-xl bg-gray-900 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[#FFD700]">Full</div>
            <div className="text-sm text-gray-400">Data Transparency</div>
          </div>
          <div className="rounded-xl bg-gray-900 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-[#FF0040]">Live</div>
            <div className="text-sm text-gray-400">Support Access</div>
          </div>
        </div>
      </div>
    </section>
  );
}
