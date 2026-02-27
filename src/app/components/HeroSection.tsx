import { Zap, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFFEF0] to-[#FFF9E6] px-6 py-20 md:py-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                          linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD700] shadow-lg">
            <Zap className="h-7 w-7 text-black" fill="black" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-black">Oz Scholars Academy</h1>
            <p className="text-sm text-gray-600">Systems-Driven Education</p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-black md:text-6xl lg:text-7xl">
              Academic Success,
              <br />
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Engineered.
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 md:text-2xl">
              Data-driven tutoring with real-time tracking, systematic scheduling, and optimized learning paths.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="group relative overflow-hidden rounded-xl bg-[#FF0040] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book 20-Min Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0040] to-[#FF3366] opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
              
              <button className="rounded-xl border-2 border-black bg-transparent px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-black hover:text-white">
                View System Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="rounded-xl bg-white p-4 shadow-md">
                <div className="text-3xl font-bold text-[#0080FF]">1:4</div>
                <div className="text-sm text-gray-600">Student Ratio</div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-md">
                <div className="text-3xl font-bold text-[#00D66B]">3 Yrs</div>
                <div className="text-sm text-gray-600">Avg Improvement</div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-md">
                <div className="text-3xl font-bold text-[#FFD700]">2014</div>
                <div className="text-sm text-gray-600">Est. Founded</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual mockup */}
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white shadow-md">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00FF00]"></div>
              Founded by a Software Engineer
            </div>
            
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#0080FF]/20 via-[#FFD700]/20 to-[#00D66B]/20 opacity-75 blur-3xl"></div>
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-[#FF0040]"></div>
                <div className="h-2 w-2 rounded-full bg-[#FFD700]"></div>
                <div className="h-2 w-2 rounded-full bg-[#00D66B]"></div>
                <div className="ml-2 text-xs text-gray-500">Dashboard</div>
              </div>
              
              <div className="space-y-4">
                {/* Week Progress Bar */}
                <div className="rounded-lg border-2 border-[#0080FF] bg-gradient-to-r from-[#0080FF]/5 to-transparent p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">This Week</span>
                    <span className="text-sm font-bold text-[#0080FF]">12/15 Tasks</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="absolute h-3 w-[80%] animate-pulse rounded-full bg-gradient-to-r from-[#0080FF] to-[#00D66B]"></div>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-6 flex-1 rounded ${
                          i < 12 ? 'bg-[#00D66B]' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Achievement Badges */}
                <div className="rounded-lg border-2 border-[#00D66B] bg-[#00D66B]/5 p-4">
                  <div className="mb-3 text-sm font-semibold text-gray-700">Recent Achievements</div>
                  <div className="flex gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF8C00] shadow-lg">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0080FF] to-[#00D66B] shadow-lg">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF0040] to-[#FF3366] shadow-lg">
                      <span className="text-lg">🔥</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
                      <span className="text-lg text-gray-400">+</span>
                    </div>
                  </div>
                </div>
                
                {/* Next Session Countdown */}
                <div className="rounded-lg border-2 border-[#FFD700] bg-gradient-to-r from-[#FFD700]/5 to-transparent p-4">
                  <div className="mb-2 text-sm font-semibold text-gray-700">Next Session</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-[#FF8C00]">Mathematics</div>
                      <div className="text-xs text-gray-600">Tomorrow at 4:00 PM</div>
                    </div>
                    <div className="rounded-lg bg-[#FFD700] px-3 py-2 text-center">
                      <div className="text-lg font-bold text-black">23h</div>
                      <div className="text-xs text-black/70">away</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}