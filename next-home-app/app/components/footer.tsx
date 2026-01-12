// src/components/footer.tsx
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";

export default function() {
  return (
    <footer className="bg-slate-800 text-white py-16 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">TalentConnect</h3>
            <p className="text-slate-300 mb-6">
              Connecting exceptional talent with outstanding opportunities across industries.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2 text-teal-400" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-2 text-teal-400" /> hello@talentconnect.com
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-2 text-teal-400" /> 123 Business Ave, Suite 100
              </div>
            </div>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Browse CVs</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Upload CV</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Salary Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-slate-300 mb-4">Get the latest job market insights and career tips.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" />
              <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>© 2023 TalentConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
