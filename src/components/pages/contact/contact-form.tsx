"use client";

import { useState } from "react";
import { Button } from "@/components/sample-a/ui";
import {
  SubmittedCard,
  TextAreaField,
  TextField,
} from "@/components/pages/join/form-fields";

/** Short general-enquiry form for /contact, with a submitted thank-you state. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SubmittedCard
        title="Thanks — your message is on its way."
        actions={
          <Button href="/" variant="secondary" arrow={false}>
            Back to home
          </Button>
        }
      >
        We&apos;ve received your enquiry and a member of the team will get back
        to you soon.
      </SubmittedCard>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl bg-snow p-6 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] ring-1 ring-line/60 md:p-9"
    >
      <div className="flex flex-col gap-5">
        <TextField
          id="contactName"
          label="Your name"
          required
          autoComplete="name"
          placeholder="e.g. Sam Rivers"
        />
        <TextField
          id="contactEmail"
          label="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
        <TextAreaField
          id="contactMessage"
          label="Message"
          required
          rows={5}
          placeholder="Tell us what you'd like to talk about…"
        />
        <button
          type="submit"
          className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
        >
          Send message
          <span
            aria-hidden
            className="text-lime transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}
