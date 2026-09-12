// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";
import { EXTRA_LINKS } from "@/constants";

// Define the Contact component.
const Contact = () => {
  // Use the useSectionInView custom hook to track when the "Contact" section is in view.
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes.
  const handleChange = (e: FormEvent) => {
    // Extract the field name and value from the event.
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  // Validate the form on submission.
  const validateForm = (): boolean => {
    // Extract form fields.
    const { name, email, message } = form;

    // Validate the name field.
    if (name.trim().length < 3) {
      toast.error("Invalid Name");
      return false;
    }

    // Regular expression for email validation.
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Validate the email field.
    if (!email.trim().toLowerCase().match(emailRegex)) {
      toast.error("Invalid E-mail");
      return false;
    }

    // Validate the message field.
    if (message.trim().length < 5) {
      toast.error("Invalid Message");
      return false;
    }

    return true;
  };

  // Handle form submission.
  const handleSubmit = (e: FormEvent) => {
    // Prevent the default page reload.
    e.preventDefault();

    // Validate the form.
    if (!validateForm()) return false;

    // Show a loading indicator.
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xhjsmdb",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_q5ng8ti",
        {
          to_name: form.name,
          to_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "WIBL4zPkEHlKJg4xK",
      )
      .then(
        () => {
          // Success: Display a success message using toast.
          toast.success(
            "Thank You. I will get back to you as soon as possible."
          );
        },
        (error) => {
          // Error handling: Display an error message and log the error.
          console.log(error);
          toast.error("Sorry. Something went wrong.");
        }
      )
      .finally(() => {
        // Clear the loading indicator, and reset the form fields.
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  // Return the Contact section with animations and the contact form.
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My contact</SectionHeading>
      <p className="-mt-6 text-white/55">
        Please contact me directly at my{" "}
        <Link className="underline transition-colors hover:text-blue-300" href={`mailto:${EXTRA_LINKS.email}`}>
          e-mail
        </Link>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        autoComplete="off"
        autoCapitalize="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {/* Input fields for name, email, and message. */}
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="h-14 rounded-lg border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-white/25 focus:border-blue-400/40 transition-all"
          required
          maxLength={200}
          autoComplete="off"
          autoCapitalize="off"
        />

        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          className="my-4 h-14 rounded-lg border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-white/25 focus:border-blue-400/40 transition-all"
          required
          maxLength={100}
          autoComplete="off"
          autoCapitalize="off"
        />

        <textarea
          className="mb-4 h-52 rounded-lg border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/25 focus:border-blue-400/40 transition-all"
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          cols={30}
          rows={10}
          required
          maxLength={500}
        />

        {/* Submit button with conditional rendering for loading state. */}
        <button
          type="submit"
          className="group flex self-center sm:self-start items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-lg border border-blue-400/30 bg-blue-400/10 text-blue-200 outline-none transition-all hover:bg-blue-400/20 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

// Export the Contact component.
export default Contact;
