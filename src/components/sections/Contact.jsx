"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialLinks from "@/components/shared/SocialLinks";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-accent text-xl" />,
    label: "Email",
    value: "golamrabbi73hr@gmail.com",
    href: "mailto:golamrabbi73hr@gmail.com",
  },
  {
    icon: <FaPhone className="text-accent text-xl" />,
    label: "Phone",
    value: "+880 1608-177973",
    href: "tel:+8801608177973",
  },
  {
    icon: <FaWhatsapp className="text-accent text-xl" />,
    label: "WhatsApp",
    value: "+880 1608-177973",
    href: "https://wa.me/8801608177973",
  },
  {
    icon: <FaMapMarkerAlt className="text-accent text-xl" />,
    label: "Location",
    value: "Sirajganj sadar, Sirajganj, Bangladesh",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with EmailJS / Formspree / API route
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-base-100">
      <Container>
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Side */}
          <div className="flex-1">
            <h3 className="font-display font-bold text-2xl mb-3">
              Let's build something great
            </h3>
            <p className="text-base-content/60 leading-relaxed mb-8">
              I'm currently open to freelance projects and full-time
              opportunities. Whether you have a big idea or just want to
              connect, my inbox is always open.
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-content/40 uppercase tracking-widest font-semibold">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-base-content hover:text-accent transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base-content font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <SocialLinks />
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <div className="card bg-base-200 border border-base-content/10 p-8 shadow-xl">
              {status === "success" && (
                <div className="alert alert-success mb-6 text-sm">
                  <span>Message sent! I'll get back to you soon. 🎉</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input input-bordered input-sm h-11 bg-base-100 focus:input-accent"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text text-sm font-medium">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="input input-bordered input-sm h-11 bg-base-100 focus:input-accent"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-sm font-medium">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className="input input-bordered input-sm h-11 bg-base-100 focus:input-accent"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text text-sm font-medium">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="textarea textarea-bordered bg-base-100 focus:textarea-accent resize-none text-sm"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-accent w-full rounded-full font-semibold">
                  Send Message
                  <FaEnvelope className="ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}