"use client";

import { useState } from "react";
import { site } from "@/data/site";

const types = [
  "Student Application",
  "Parent Info Packet",
  "School Partnership",
  "Pilot / Mentor",
  "Sponsorship",
  "General Inquiry",
];

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get("first") || "");
    const last = String(data.get("last") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("org") || "");
    const type = String(data.get("type") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${first} ${last}`,
      `Email: ${email}`,
      org ? `Organization: ${org}` : "",
      `Inquiry type: ${type}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Mid-South Inquiry — ${type}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
          First Name *
          <input name="first" required className="form-field" />
        </label>
        <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
          Last Name *
          <input name="last" required className="form-field" />
        </label>
      </div>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
        Email *
        <input name="email" type="email" required className="form-field" />
      </label>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
        School / Organization
        <input name="org" className="form-field" />
      </label>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
        Inquiry Type
        <select name="type" className="form-field" defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
        Message *
        <textarea name="message" required rows={5} className="form-field resize-y min-h-32" />
      </label>
      <button
        type="submit"
        className="btn-solid mt-2 px-7 py-3.5 text-xs tracking-[0.18em] uppercase"
      >
        Submit Strategic Inquiry
      </button>
      {sent ? (
        <p className="text-sm" style={{ color: "var(--gold-2)" }}>
          Your email client should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}
