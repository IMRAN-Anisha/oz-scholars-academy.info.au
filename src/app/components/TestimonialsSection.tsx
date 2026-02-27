import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Parent of High School Junior',
      content: 'The dashboard alone changed everything. I can see exactly what my daughter is working on in real-time. No more guessing games about homework.',
      rating: 5,
      subject: 'Mathematics & Physics',
      improvement: 'B+ to A-',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Parent of 8th Grader',
      content: 'Finally, a tutoring service that treats education like a system. The scheduled tracking and data reports make it easy to stay involved without micromanaging.',
      rating: 5,
      subject: 'Algebra & Chemistry',
      improvement: '2 Grade Levels Up',
    },
    {
      name: 'Dr. Patel',
      role: 'Parent & University Professor',
      content: 'As an educator myself, I appreciate the engineering approach. This is what modern education should look like—structured, measurable, and personalized.',
      rating: 5,
      subject: 'SAT Prep & English',
      improvement: '1380 to 1510',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FF8C00]">
            <Quote className="h-4 w-4" />
            Parent Testimonials
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Real Parents, Real Results
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Hear from families who switched to a systems-driven approach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FF8C00]/20 opacity-50 blur-2xl group-hover:opacity-75 transition-opacity"></div>
              
              <Quote className="mb-4 h-10 w-10 text-[#FFD700]" fill="#FFD700" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FFD700]" fill="#FFD700" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Improvement Badge */}
              <div className="mb-4 inline-flex rounded-full bg-[#00D66B]/10 px-4 py-2">
                <span className="text-sm font-semibold text-[#00D66B]">
                  {testimonial.improvement}
                </span>
              </div>

              {/* Author Info */}
              <div className="border-t-2 border-gray-100 pt-4">
                <div className="font-bold text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="mt-2 text-xs text-gray-500">{testimonial.subject}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
