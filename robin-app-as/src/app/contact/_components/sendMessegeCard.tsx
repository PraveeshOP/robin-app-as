"use client";

import { useState } from "react";

export default function SendMessegeCard() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let internalEmail = "";

    if (selectedService === "itService") {
      internalEmail = "it@robinapp.no";
    } else if (selectedService === "accountingService") {
      internalEmail = "regnskap@robinapp.no";
    } else {
      alert("Please select a service.");

      return;
    }
    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          subject,
          selectedService,
          internalEmail,
          message,
        }),
      });

      const data = await response.json();

      console.log("Response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to send contact message");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-col gap-4 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6">
      <h1 className="text-2xl font-bold">Send us a message</h1>
      <p className="text-[var(--muted)]">
        Have a question or want to work together? Fill out the form below and
        we&apos;ll get back to you as soon as possible.
      </p>
      <form className="flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="h-full w-full rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)]"
            >
              <option value="">Select a service</option>

              <option value="itService">IT Service</option>

              <option value="accountingService">Accounting Service</option>
            </select>
          </div>
        </div>
        <textarea
          placeholder="Your Message ..."
          className="h-45 w-full resize-none rounded-lg border border-[color:var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="mt-auto w-full py-3 bg-[#42a9b8] text-white rounded-lg hover:bg-[#42a9b8]/90 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
