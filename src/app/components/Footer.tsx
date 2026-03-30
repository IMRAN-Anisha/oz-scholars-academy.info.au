import { Mail, MapPin, AlertCircle, Shield, GraduationCap, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-2xl font-bold text-[#FFD700]">Oz Scholars Academy</h3>
            <p className="mb-2 text-sm font-semibold text-gray-300">Systems-Driven Education</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Engineering academic success through data-driven tutoring and optimised learning systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#system" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                  Our System
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                  Book a Call
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-[#FFD700]">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Mathematics</li>
              <li className="text-gray-400">English</li>
              <li className="text-gray-400">Computer Science</li>
              <li className="text-gray-400">Selective Exams</li>
              <li className="text-gray-400">ATAR</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-[#FFD700]">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD700]" />
                <a
                  href="mailto:ozscholarsacademy@gmail.com"
                  className="text-gray-400 transition-colors hover:text-[#FFD700]"
                >
                  ozscholarsacademy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD700]" />
                <span className="text-gray-400">Based in Sydney, NSW</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-12 rounded-2xl border-2 border-[#FFD700] bg-gradient-to-br from-[#FFD700]/10 to-transparent p-6">
          <div className="mb-3 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-[#FF8C00]" />
            <h4 className="text-xl font-bold text-white">
              Important Notice: End of Semester Exam Fees
            </h4>
          </div>
          <p className="mb-4 text-sm text-gray-300 leading-relaxed">
            Additional fees apply for end-of-semester comprehensive examinations. These fees are separate from monthly tuition and cover:
          </p>
          <ul className="mb-4 space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#00D66B]">✓</span>
              <span>Comprehensive exam preparation materials and practice tests</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00D66B]">✓</span>
              <span>Extended tutoring sessions during exam preparation period</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00D66B]">✓</span>
              <span>Personalized exam strategy consultation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00D66B]">✓</span>
              <span>Post-exam performance analysis and review</span>
            </li>
          </ul>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Exam fees range from $150-$350 per subject</span> depending on the tier and exam type. You will be notified 4 weeks before the exam period with detailed pricing. All exam fees are optional but highly recommended for optimal results.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3">
            <Shield className="h-5 w-5 text-[#00D66B]" />
            <span className="text-xs text-gray-300">WWCC Verified Educators</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3">
            <GraduationCap className="h-5 w-5 text-[#0080FF]" />
            <span className="text-xs text-gray-300">95+ ATAR Educators</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3">
            <Lock className="h-5 w-5 text-[#FFD700]" />
            <span className="text-xs text-gray-300">Privacy Compliant</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3">
            <Lock className="h-5 w-5 text-[#FF0040]" />
            <span className="text-xs text-gray-300">SSL Secured Platform</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2026 Oz Scholars Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 transition-colors hover:text-[#FFD700]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}