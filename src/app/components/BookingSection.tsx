import { Calendar, Video } from 'lucide-react';
import { useEffect } from 'react';

export function BookingSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="bg-gradient-to-br from-[#0080FF]/5 via-white to-[#00D66B]/5 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0080FF]/10 px-4 py-2 text-sm font-semibold text-[#0080FF]">
            <Calendar className="h-4 w-4" />
            Book Your Call
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Schedule Your 20-Minute Systems Audit
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Let's analyze your student's needs and design a custom learning system.
          </p>
        </div>

        {/* Booking Details Banner */}
        <div className="mx-auto mb-8 max-w-4xl rounded-xl border-2 border-[#0080FF]/20 bg-white p-4 shadow-md">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-[#0080FF]" />
              <span className="font-semibold text-gray-900">20-Minute Video Call</span>
            </div>
            <div className="hidden h-4 w-px bg-gray-300 md:block" />
            <span>Meet via Google Meet or Zoom</span>
            <div className="hidden h-4 w-px bg-gray-300 md:block" />
            <span>Confirmation email sent automatically</span>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-gray-200 shadow-2xl">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/ozscholarsacademy/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0080FF&text_color=030213&background_color=ffffff"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-[#00D66B]">500+</div>
            <div className="text-sm text-gray-600">Calls Completed</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-[#0080FF]">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-[#FFD700]">15 min</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}