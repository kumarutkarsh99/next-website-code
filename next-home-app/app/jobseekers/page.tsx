"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { User, Mail, Phone, Building2, FileText } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";
//const API_BASE_URL='http://localhost:3001'
const API_BASE_URL='http://72.61.229.100/:3001'
export default function JobSeekers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
    source:"",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${API_BASE_URL}//leads/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.company,
            role_to_hire: formData.role,
            requirements: formData.message,
            source:'Website – jobseekers Page'
          }),
        }
      );

      if (!response.ok) throw new Error("API Error");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        message: "",
        source:"",
      });
    } catch (err) {
      console.error("Lead submit error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Ready to Get Started?
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Upload your CV and let us match you with your perfect job opportunity.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    className="pl-10"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="pl-10"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company">Company</Label>
                <div className="relative mt-1">
                  <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="pl-10"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="role">Role to Hire</Label>
                <div className="relative mt-1">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="role"
                    placeholder="Software Engineer, HR Manager..."
                    className="pl-10"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Describe the skills, experience, and other requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </Button>

            {status === "success" && (
              <p className="text-green-600 text-center mt-2 font-medium">
                ✅ Your request has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
