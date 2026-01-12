"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  source:string;
};
 const API_BASE_URL='http://72.61.229.100:3001'
//const API_BASE_URL='http://localhost:3001'

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
    source: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${API_BASE_URL}/leads/contact`,
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
            source:'Website – contact Page'
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />

      <div className="min-h-[90vh] flex items-center justify-center relative py-20">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Your Hiring Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Tell us about your requirements and we’ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  id="firstName"
                  label="First Name"
                  icon={<User />}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputField
                  id="lastName"
                  label="Last Name"
                  icon={<User />}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Email / Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  id="email"
                  label="Email"
                  icon={<Mail />}
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
                <InputField
                  id="phone"
                  label="Phone"
                  icon={<Phone />}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Company / Role */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  id="company"
                  label="Company"
                  icon={<Building2 />}
                  value={formData.company}
                  onChange={handleChange}
                />
                <InputField
                  id="role"
                  label="Role to Hire"
                  icon={<FileText />}
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-6 text-lg font-bold"
              >
                {loading ? "Processing..." : "Submit Request"}
                {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>

              {status === "success" && (
                <Status
                  icon={<CheckCircle />}
                  text="Request received! We'll be in touch."
                  type="success"
                />
              )}

              {status === "error" && (
                <Status
                  icon={<AlertCircle />}
                  text="Something went wrong. Please try again."
                  type="error"
                />
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function InputField({
  id,
  label,
  icon,
  value,
  onChange,
  type = "text",
}: any) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative mt-2">
        <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="pl-10 h-12"
          required
        />
      </div>
    </div>
  );
}

function Status({ icon, text, type }: any) {
  return (
    <div
      className={`flex items-center justify-center gap-2 mt-4 p-4 rounded-lg ${
        type === "success"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-red-50 text-red-700"
      }`}
    >
      {icon}
      <p className="font-medium">{text}</p>
    </div>
  );
}
