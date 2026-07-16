"use client";

import { useState } from "react";
import { Button } from "@/components/sample-a/ui";
import {
  SelectField,
  SubmittedCard,
  TextAreaField,
  TextField,
} from "@/components/pages/join/form-fields";

/**
 * Warm referral form for /refer — someone refers a young person on their
 * behalf. Reassuring copy, safeguarding note, and a submitted thank-you state.
 */
export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SubmittedCard
        title="Thanks for the referral — we'll reach out thoughtfully."
        actions={
          <>
            <Button href="/join" variant="primary">
              Share the registration page
            </Button>
            <Button href="/" variant="secondary" arrow={false}>
              Back to home
            </Button>
          </>
        }
      >
        We&apos;ll always contact a young person respectfully and never share
        their details. If you gave us your contact, we may be in touch if we have
        any questions.
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
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="referrerName"
            label="Your name"
            required
            autoComplete="name"
            placeholder="e.g. Alex Morgan"
          />
          <SelectField
            id="relationship"
            label="Your relationship to them"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Parent or guardian</option>
            <option>Teacher or youth worker</option>
            <option>Friend</option>
            <option>Other</option>
          </SelectField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="youngPersonName"
            label="Their first name"
            required
            placeholder="e.g. Jordan"
          />
          <TextField
            id="youngPersonContact"
            label="Their contact (email or phone)"
            required
            placeholder="Email or phone number"
            hint="However they're easiest to reach."
          />
        </div>

        <TextAreaField
          id="referralNote"
          label="Anything you'd like us to know?"
          optional
          rows={4}
          placeholder="A little about them, or why you think Pathways could help."
        />

        <div className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink-soft">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[11px] text-lime-ink">
            ♥
          </span>
          <p>
            We&apos;ll always contact a young person respectfully and never share
            their details. Referrals are handled with care and in line with our
            safeguarding approach.
          </p>
        </div>

        <button
          type="submit"
          className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
        >
          Send referral
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
