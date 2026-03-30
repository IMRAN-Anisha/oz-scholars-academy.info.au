import { Mail, User, MessageSquare, Send } from 'lucide-react';

export function ContactFormSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-white via-gray-50 to-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold text-[#FF8C00]">
            <Mail className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Have Questions? <span className="text-[#FFD700]">Let's Talk</span>
          </h2>
          <p className="text-xl text-gray-600">
            Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-2xl md:p-12">
          <form action="https://formbold.com/s/94dQj" method="POST" className="space-y-6">
            <input type="hidden" name="_redirect" value="https://IMRAN-Anisha.github.io/oz-scholars-academy.info.au" />
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <User className="h-4 w-4 text-[#0080FF]" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#0080FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0080FF]/20"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Mail className="h-4 w-4 text-[#00D66B]" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#00D66B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00D66B]/20"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageSquare className="h-4 w-4 text-[#FF8C00]" />
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#FF8C00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20"
                placeholder="What is this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageSquare className="h-4 w-4 text-[#FFD700]" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#FFD700] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/20"
                placeholder="Tell us about your student's needs, goals, or any questions you have..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full rounded-xl bg-[#FF0040] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#FF3366] hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center shadow-md">
            <Mail className="mx-auto mb-2 h-8 w-8 text-[#0080FF]" />
            <div className="font-semibold text-gray-900">Email Us</div>
            <span className="text-sm text-gray-600">ozscholarsacademy@gmail.com</span>
          </div>
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center shadow-md">
            <MessageSquare className="mx-auto mb-2 h-8 w-8 text-[#00D66B]" />
            <div className="font-semibold text-gray-900">Response Time</div>
            <div className="text-sm text-gray-600">Within 24 hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}