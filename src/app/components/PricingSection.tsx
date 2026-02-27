import { Check, Zap, Crown, Sparkles } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: '.',
      icon: Zap,
      price: '.',
      color: '#0080FF',
      bgColor: 'from-[#0080FF]/10 to-[#0080FF]/5',
      borderColor: 'border-[#0080FF]',
      buttonBg: 'bg-[#0080FF] hover:bg-[#0066CC]',
      features: [
        'Weekly 1-on-1 Sessions',
        'Basic Progress Tracking',
        'Email Support',
        'Study Materials Access',
        'Monthly Progress Report',
      ],
    },
    {
      name: '.',
      icon: Crown,
      price: '.',
      color: '#00D66B',
      bgColor: 'from-[#00D66B]/10 to-[#00D66B]/5',
      borderColor: 'border-[#00D66B]',
      buttonBg: 'bg-[#00D66B] hover:bg-[#00B857]',
      popular: true,
      features: [
        'Bi-weekly 1-on-1 Sessions',
        'Advanced Analytics Dashboard',
        'Custom Study Plans',
        'Weekly Progress Reports',
        'Parent Portal Access',
      ],
    },
    {
      name: '.',
      icon: Sparkles,
      price: '.',
      color: '#FFD700',
      bgColor: 'from-[#FFD700]/10 to-[#FFD700]/5',
      borderColor: 'border-[#FF8C00]',
      buttonBg: 'bg-gradient-to-r from-[#FFD700] to-[#FF8C00] hover:from-[#FFC700] hover:to-[#FF7C00]',
      features: [
        'Dedicated Success Coach',
        'Daily Progress Updates',
        'College Prep Strategy',
        'Exam Prep Workshops',
      ],
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FF0040]/10 px-4 py-2 text-sm font-semibold text-[#FF0040]">
            <Crown className="h-4 w-4" />
            Investment Plans
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Choose Your Success Path
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Transparent pricing for world-class education. No hidden fees.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border-2 ${plan.borderColor} bg-gradient-to-br ${plan.bgColor} shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'ring-4 ring-[#00D66B]/20 lg:-mt-4 lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#00D66B] px-3 py-1 text-xs font-bold text-white shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
                      style={{ backgroundColor: plan.color }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                      <p className="text-sm text-gray-600">Tier {index + 1}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-black">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Per student, billed monthly</p>
                  </div>

                  <button
                    className={`mb-6 w-full rounded-xl ${plan.buttonBg} py-4 font-bold text-white shadow-lg transition-all hover:shadow-xl`}
                  >
                    Get Started
                  </button>

                  <div className="space-y-3">
                    <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      What's Included
                    </div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: plan.color }}
                        >
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 bg-white/50 p-4 text-center">
                  <p className="text-xs text-gray-600">
                    {index === 0 && 'Perfect for getting started'}
                    {index === 1 && 'Best value for serious students'}
                    {index === 2 && 'Maximum results & support'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
          <div className="text-center">
            <h4 className="mb-4 text-xl font-bold text-black">All Plans Include:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-lg bg-white px-4 py-2 shadow">
                <span className="text-sm font-semibold text-gray-700">✓ No Contracts</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow">
                <span className="text-sm font-semibold text-gray-700">✓ Cancel Anytime</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow">
                <span className="text-sm font-semibold text-gray-700">✓ Money-Back Guarantee</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow">
                <span className="text-sm font-semibold text-gray-700">✓ Free Trial Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
