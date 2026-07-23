"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialLinks from "@/components/shared/SocialLinks";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "golamrabbi73hr@gmail.com",
    href: "mailto:golamrabbi73hr@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+880 1608-177973",
    href: "https://wa.me/8801608177973",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bangladesh",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.log(error);
    setStatus("error");
  }
};

  return (
    <section
      id="contact"
      className="bg-base-100 py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project idea or want to discuss an opportunity? Feel free to contact me."
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3 className="mb-4 font-display text-3xl font-bold">
              Build something amazing 🚀
            </h3>

            <p className="mb-8 leading-relaxed text-base-content/60">
              I'm open to freelance projects, remote opportunities, and
              collaborations where I can build modern web applications.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-xl text-accent">
                      <Icon />
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-widest text-base-content/40 uppercase">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer"
                          className="font-medium transition hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="rounded-3xl border border-base-content/10 bg-base-200 p-8 shadow-xl">
              {/* Success Message */}
              {status === "success" && (
                <div className="alert alert-success mb-6 text-sm">
                  Message prepared successfully 🎉
                  I will get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status==="error" && (
                <div className="alert alert-error mb-6">
                  Failed to send message. Please try again.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-base-100"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="input input-bordered w-full bg-base-100"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="input input-bordered w-full bg-base-100"
                  required
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="textarea textarea-bordered w-full resize-none bg-base-100"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-accent w-full rounded-full font-semibold"
                >
                  {
                    status==="sending"
                    ?
                    "Sending..."
                    :
                    "Send Message"
                  }
                  <FaEnvelope />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}