"use client";
import React, { useState, FormEvent } from "react";
import Input from "./Input";
import {
  PersonStandingIcon,
  MailIcon,
  PhoneIcon,
  Code2Icon,
  MessageSquareIcon,
} from "lucide-react";
import type { ContactFormData, ApiResponse } from '@/types/contact';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  setSubmitStatus("loading");

  const form = e.currentTarget; // 👈 save reference early
  const formData = new FormData(form);

  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    tel: (formData.get("tel") as string) || undefined,
    service: (formData.get("service") as string) || undefined,
    message: formData.get("message") as string,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: ApiResponse = await response.json();

    if (response.ok) {
      setSubmitStatus("success");
      form.reset(); // 👈 use saved ref, not e.currentTarget

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      setSubmitStatus("error");
      console.error("Server error:", result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
    setSubmitStatus("error");
  }
};


  const isSubmitting = submitStatus === 'loading';

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
      >
        {/* Name */}
        <Input
          type="text"
          name="name"
          placeholder="Matthew R. Stewart"
          required
          icon={<PersonStandingIcon size={20} className="text-[#696969] group-hover:text-white" />}
        />

        {/* Email */}
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          required
          icon={<MailIcon size={20} className="text-[#696969] group-hover:text-white" />}
        />

        {/* Phone */}
        <Input
          type="tel"
          name="tel"
          placeholder="Phone number"
          icon={<PhoneIcon size={20} className="text-[#696969] group-hover:text-white" />}
        />

        {/* Services (select) */}
        <Input
          as="select"
          name="service"
          placeholder="Services"
          icon={<Code2Icon size={20} className="text-[#696969] group-hover:text-white" />}
          options={[
            "Web Development",
            "Mobile Apps",
            "AI / Machine Learning",
            "Other",
          ]}
        />

        {/* Message (textarea, full width) */}
        <Input
          as="textarea"
          name="message"
          placeholder="Message"
          required
          icon={<MessageSquareIcon size={20} className="text-[#696969] group-hover:text-white" />}
          c="md:col-span-2"
        />

        {/* Submit button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 hover:bg-black hover:text-white font-medium transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Your Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600 font-medium">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600 font-medium">
              Failed to send message. Please try again or contact me directly.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}