import { Activity, Clock, BarChart3, Calendar, CheckCircle2, Target } from 'lucide-react';

export function SystemSection() {
  return (
    <section className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0080FF]/10 px-4 py-2 text-sm font-semibold text-[#0080FF]">
            <Activity className="h-4 w-4" />
            The System
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Study Tracking & Scheduling
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            A complete software solution for monitoring student progress, scheduling sessions, and optimizing learning outcomes.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-2xl md:p-8">
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#0080FF] p-4 text-white">
            <div>
              <h3 className="text-2xl font-bold">Student Dashboard</h3>
              <p className="text-sm text-blue-100">Real-time monitoring & analytics</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 backdrop-blur">
              <div className="h-3 w-3 animate-pulse rounded-full bg-[#00FF00]"></div>
              <span className="text-sm font-semibold">Live</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Metrics */}
            <div className="space-y-4">
              <div className="rounded-xl border-2 border-[#0080FF] bg-white p-5 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[#0080FF]" />
                    <span className="font-semibold text-gray-700">Weekly Hours</span>
                  </div>
                  <span className="text-2xl font-bold text-[#0080FF]">18.5</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[92%] rounded-full bg-[#0080FF]"></div>
                </div>
                <p className="mt-2 text-xs text-gray-500">92% of weekly goal</p>
              </div>

              <div className="rounded-xl border-2 border-[#00D66B] bg-white p-5 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00D66B]" />
                    <span className="font-semibold text-gray-700">Completion</span>
                  </div>
                  <span className="text-2xl font-bold text-[#00D66B]">94%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[94%] rounded-full bg-[#00D66B]"></div>
                </div>
                <p className="mt-2 text-xs text-gray-500">Above target threshold</p>
              </div>

              <div className="rounded-xl border-2 border-[#FFD700] bg-white p-5 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#FF8C00]" />
                    <span className="font-semibold text-gray-700">Focus Score</span>
                  </div>
                  <span className="text-2xl font-bold text-[#FF8C00]">8.7</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[87%] rounded-full bg-[#FFD700]"></div>
                </div>
                <p className="mt-2 text-xs text-gray-500">Excellent concentration</p>
              </div>
            </div>

            {/* Middle Column - Schedule */}
            <div className="space-y-4">
              <div className="rounded-xl border-2 border-gray-300 bg-white p-5 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0080FF]" />
                  <h4 className="font-bold text-gray-900">This Week's Schedule</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-[#0080FF]/30 bg-[#0080FF]/5 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0080FF] text-sm font-bold text-white">
                      MON
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Mathematics</p>
                      <p className="text-sm text-gray-600">4:00 PM - 5:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-[#00D66B]/30 bg-[#00D66B]/5 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00D66B] text-sm font-bold text-white">
                      WED
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Physics</p>
                      <p className="text-sm text-gray-600">3:30 PM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-[#FF8C00]/30 bg-[#FFD700]/5 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF8C00] text-sm font-bold text-white">
                      FRI
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Chemistry</p>
                      <p className="text-sm text-gray-600">5:00 PM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Activity Feed */}
            <div className="space-y-4">
              <div className="rounded-xl border-2 border-gray-300 bg-white p-5 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#FF0040]" />
                  <h4 className="font-bold text-gray-900">Recent Activity</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#00D66B]/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#00D66B]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Completed assignment</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#0080FF]/20 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-[#0080FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Session scheduled</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <Target className="h-4 w-4 text-[#FF8C00]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Goal milestone reached</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#FF0040]/20 flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-[#FF0040]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Progress report generated</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-[#0080FF]/10 to-[#0080FF]/5 p-4 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#0080FF]">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Live Tracking</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-[#00D66B]/10 to-[#00D66B]/5 p-4 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#00D66B]">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Auto Validation</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 p-4 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C00]">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Smart Scheduling</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-[#FF0040]/10 to-[#FF0040]/5 p-4 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0040]">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-900">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
