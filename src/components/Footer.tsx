"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="font-bold text-lg text-white">
                Lawctopus <span className="text-amber-500">Law School</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              India's most trusted platform for practical legal education. 20,000+ students trained. 93.2/100 average rating. Built by lawyers, for lawyers.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#why" className="hover:text-amber-500 transition-colors">Why This Course</a></li>
              <li><a href="#curriculum" className="hover:text-amber-500 transition-colors">Curriculum</a></li>
              <li><a href="#mentors" className="hover:text-amber-500 transition-colors">Mentors</a></li>
              <li><a href="#career" className="hover:text-amber-500 transition-colors">Career Support</a></li>
              <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:courses@lawctopus.com" className="hover:text-white transition-colors">
                  courses@lawctopus.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Support: 24-hour response</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>Lawctopus Law School, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Lawctopus Law School. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with ❤️ for the legal community
          </p>
        </div>
      </div>
    </footer>
  );
}
