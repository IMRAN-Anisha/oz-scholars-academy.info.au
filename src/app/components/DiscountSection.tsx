import { Percent, Users, Gift, BookOpen, Zap, RefreshCw } from 'lucide-react';

export function DiscountSection() {
  const discounts = [
    {
      icon: Zap,
      title: 'First Lesson',
      discount: '50% OFF',
      description: 'Try our system risk-free with half-price first session',
      color: '#FF0040',
      bgColor: 'from-[#FF0040]/10',
    },
    {
      icon: Users,
      title: 'Sibling Discount',
      discount: '15% OFF',
      description: 'Save 15% when enrolling multiple children',
      color: '#0080FF',
      bgColor: 'from-[#0080FF]/10',
    },
    {
      icon: Gift,
      title: 'Referral Bonus',
      discount: '10% OFF',
      description: 'Refer a friend and both get 10% off next month',
      color: '#00D66B',
      bgColor: 'from-[#00D66B]/10',
    },
    {
      icon: BookOpen,
      title: 'Multiple Subjects',
      discount: '10% OFF',
      description: 'Enroll in 2+ subjects and save 10% on total tuition',
      color: '#FFD700',
      bgColor: 'from-[#FFD700]/10',
    },
    {
      icon: Percent,
      title: 'Early Bird',
      discount: '12% OFF',
      description: 'Pay for full semester upfront and save 12%',
      color: '#FF8C00',
      bgColor: 'from-[#FF8C00]/10',
    },
    {
      icon: RefreshCw,
      title: 'Catch-Up Guarantee',
      discount: 'FLEXIBLE',
      description: 'Missed lessons? Get make-up sessions or pro-rated refund',
      color: '#9333EA',
      bgColor: 'from-[#9333EA]/10',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/20 px-4 py-2 text-sm font-semibold text-[#FFD700]">
            <Percent className="h-4 w-4" />
            Save More, Learn More
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Exclusive <span className="text-[#FFD700]">Discounts</span> Available
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            We reward commitment, referrals, and multi-student families. Stack discounts up to 30% off.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {discounts.map((discount, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 transition-all hover:scale-105 hover:border-gray-700 hover:shadow-2xl"
            >
              {/* Background Glow */}
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${discount.bgColor} to-transparent opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}
              ></div>

              <div className="relative">
              {/* Icon + Badge Row */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${discount.color}20` }}
                >
                  <discount.icon className="h-7 w-7" style={{ color: discount.color }} />
                </div>

                {/* Discount Badge */}
                <div
                  className="inline-block rounded-full px-4 py-1 text-sm font-bold"
                  style={{ backgroundColor: `${discount.color}20`, color: discount.color }}
                >
                  {discount.discount}
                </div>
              </div>
                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-white">{discount.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{discount.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Rules */}
        <div className="mt-12 rounded-2xl border-2 border-[#FFD700]/30 bg-gray-900/50 p-8">
          <h3 className="mb-4 text-center text-2xl font-bold text-white">
            💰 How to <span className="text-[#FFD700]">Maximize Your Savings</span>
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-black/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <h4 className="font-bold text-white">Stack Discounts</h4>
              </div>
              <p className="text-sm text-gray-400">
                Combine multiple discounts up to a maximum of 30% total savings (e.g., First Lesson + Sibling + Multi-Subject = 25% off).
              </p>
            </div>
            <div className="rounded-lg bg-black/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <h4 className="font-bold text-white">Limited Time Offers</h4>
              </div>
              <p className="text-sm text-gray-400">
                First Lesson 50% OFF is available for new families only. Early Bird discount requires full semester payment at enrollment.
              </p>
            </div>
            <div className="rounded-lg bg-black/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                <h4 className="font-bold text-white">Catch-Up Policy</h4>
              </div>
              <p className="text-sm text-gray-400">
                Cancel with 24hr notice = free make-up lesson. Less than 24hr = discounted catch-up rate or pro-rated credit toward next month.
              </p>
            </div>
            <div className="rounded-lg bg-black/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <h4 className="font-bold text-white">Referral Program</h4>
              </div>
              <p className="text-sm text-gray-400">
                When your referral enrolls, you both receive 10% off your next month's tuition. No limit on referrals!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-xl text-gray-300">
            Ready to save while your student succeeds?
          </p>
          <button className="rounded-xl bg-[#FFD700] px-10 py-4 text-lg font-bold text-black shadow-2xl transition-all hover:scale-105 hover:bg-[#FFA500]">
            Claim Your First Lesson Discount
          </button>
        </div>
      </div>
    </section>
  );
}