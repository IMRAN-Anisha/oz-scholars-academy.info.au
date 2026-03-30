import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ozscholarsacademy@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white px-6 py-20 md:py-32">
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
          {isSubmitted ? (
            <div className="py-12 text-center">
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-[#00D66B]" />
              <h3 className="mb-2 text-2xl font-bold text-black">Message Sent!</h3>
              <p className="text-gray-600">
                Your email client should open shortly. We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#00D66B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00D66B]/20"
                  placeholder="your.email@example.com"
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
                  value={formData.message}
                  onChange={handleChange}
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
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 text-center shadow-md">
            <Mail className="mx-auto mb-2 h-8 w-8 text-[#0080FF]" />
            <div className="font-semibold text-gray-900">Email Us</div>
            <a
              href="mailto:ozscholarsacademy@gmail.com"
              className="text-sm text-gray-600 transition-colors hover:text-[#0080FF]"
            >
              ozscholarsacademy@gmail.com
            </a>
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