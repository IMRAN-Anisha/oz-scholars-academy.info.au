import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD700] shadow-lg">
                <Zap className="h-7 w-7 text-black" fill="black" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Oz Scholars Academy</h3>
                <p className="text-xs text-gray-400">Systems-Driven Education</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Engineering academic success through data-driven tutoring and optimized learning systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Our System</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Book a Call</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-bold">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#0080FF] transition-colors">Mathematics</a></li>
              <li><a href="#" className="hover:text-[#0080FF] transition-colors">Sciences</a></li>
              <li><a href="#" className="hover:text-[#0080FF] transition-colors">Language Arts</a></li>
              <li><a href="#" className="hover:text-[#0080FF] transition-colors">Test Prep</a></li>
              <li><a href="#" className="hover:text-[#0080FF] transition-colors">College Counseling</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#00D66B]" />
                <a href="mailto:info@ozscholars.com" className="hover:text-[#00D66B] transition-colors">
                  info@ozscholars.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#0080FF]" />
                <a href="tel:+1234567890" className="hover:text-[#0080FF] transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#FFD700]" />
                <span>
                  123 Education Blvd<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/10 p-6">
          <h4 className="mb-3 flex items-center gap-2 font-bold text-[#FFD700]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD700] text-xs text-black">!</span>
            Important Notice: End of Semester Exam Fees
          </h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <strong>Additional fees apply for end-of-semester comprehensive examinations.</strong> These fees are separate from monthly tuition and cover:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-400">
              <li>Comprehensive exam preparation materials and practice tests</li>
              <li>Extended tutoring sessions during exam preparation period</li>
              <li>Personalized exam strategy consultation</li>
              <li>Post-exam performance analysis and review</li>
            </ul>
            <p className="pt-2 text-gray-400">
              Exam fees range from $150-$350 per subject depending on the tier and exam type. You will be notified 4 weeks before the exam period with detailed pricing. All exam fees are optional but highly recommended for optimal results.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Oz Scholars Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Social Proof Badge */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="rounded-lg bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur">
            ✓ BBB Accredited
          </div>
          <div className="rounded-lg bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur">
            ✓ Licensed Educators
          </div>
          <div className="rounded-lg bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur">
            ✓ FERPA Compliant
          </div>
          <div className="rounded-lg bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur">
            ✓ Data Secure
          </div>
        </div>
      </div>
    </footer>
  );
}
