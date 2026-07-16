"use client";

import { useState } from "react";
import { Button } from "@/components/sample-a/ui";
import {
  CheckField,
  GroupHeader,
  SelectField,
  SubmittedCard,
  TextAreaField,
  TextField,
} from "@/components/pages/join/form-fields";

/**
 * The Pathways registration form — the standout of the /join page. Grouped
 * into four friendly steps, two-column where it helps on desktop, single on
 * mobile. On submit it swaps to a warm confirmation state (nothing is sent).
 */
export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [updates, setUpdates] = useState(true);
  const [consent, setConsent] = useState(false);

  if (submitted) {
    return (
      <SubmittedCard
        title="Thank you for registering your interest in Pathways."
        actions={
          <>
            <Button href="/programme" variant="primary">
              Explore the programme
            </Button>
            <Button href="/" variant="secondary" arrow={false}>
              Back to home
            </Button>
          </>
        }
      >
        A member of the team will be in touch with the next steps and
        information about the upcoming programme.
      </SubmittedCard>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="rounded-3xl bg-snow p-6 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] ring-1 ring-line/60 md:p-10"
    >
      <div className="flex flex-col gap-12">
        {/* 1 — About you */}
        <fieldset className="flex flex-col gap-6">
          <GroupHeader
            step="1"
            title="About you"
            hint="Just enough to say hello and confirm you're eligible."
          />
          <div className="grid gap-5">
            <TextField
              id="fullName"
              label="Full name"
              required
              autoComplete="name"
              placeholder="e.g. Sam Rivers"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="ageOrDob"
                label="Date of birth or age"
                placeholder="e.g. 18, or 04/09/2007"
                hint="Used only to confirm you're aged 16–25."
              />
              <TextField
                id="pronouns"
                label="Pronouns"
                optional
                placeholder="e.g. she/her, they/them"
              />
            </div>
            <TextField
              id="postcode"
              label="Cardiff postcode / area"
              placeholder="e.g. CF10, or Grangetown"
              hint="Roughly where you're based — you don't need to give a full address."
            />
          </div>
        </fieldset>

        <div className="h-px bg-line" />

        {/* 2 — How to reach you */}
        <fieldset className="flex flex-col gap-6">
          <GroupHeader
            step="2"
            title="How to reach you"
            hint="We'll use these to send details about the upcoming programme."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              id="email"
              label="Email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
            <TextField
              id="phone"
              label="Phone number"
              type="tel"
              autoComplete="tel"
              placeholder="07…"
            />
          </div>
        </fieldset>

        <div className="h-px bg-line" />

        {/* 3 — Where you're at */}
        <fieldset className="flex flex-col gap-6">
          <GroupHeader
            step="3"
            title="Where you're at right now"
            hint="Answer as much or as little as you like — there are no wrong answers."
          />
          <div className="grid gap-5">
            <TextAreaField
              id="interests"
              label="What are you currently interested in?"
              placeholder="Music, design, gaming, film, coding, business, something else…"
            />
            <TextAreaField
              id="ideas"
              label="Are you working on any creative, digital or business ideas?"
              placeholder="Tell us about anything you're making or thinking about — even if it's rough."
            />
            <TextAreaField
              id="supportWith"
              label="What would you like support with?"
              placeholder="Skills, direction, confidence, connections, opportunities…"
            />
            <TextAreaField
              id="blockers"
              label="What's currently making it hard to move forward?"
              placeholder="What's getting in the way right now?"
            />
            <TextAreaField
              id="accessNeeds"
              label="Do you have any access or support requirements?"
              optional
              placeholder="Anything that would help us make sessions work for you."
            />
          </div>
        </fieldset>

        <div className="h-px bg-line" />

        {/* 4 — A few last things */}
        <fieldset className="flex flex-col gap-6">
          <GroupHeader step="4" title="A few last things" />
          <SelectField id="heardAbout" label="How did you hear about Pathways?" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>Search engine</option>
            <option>Social media (Instagram, TikTok, LinkedIn)</option>
            <option>Friend or family</option>
            <option>School, college or university</option>
            <option>Youth or community organisation</option>
            <option>A mentor or teacher</option>
            <option>An event or workshop</option>
            <option>Other</option>
          </SelectField>

          <div className="grid gap-3">
            <CheckField id="updates" checked={updates} onChange={setUpdates}>
              I&apos;d like to receive Pathways updates about dates, sessions and
              opportunities.
            </CheckField>
            <CheckField id="consent" checked={consent} onChange={setConsent} required>
              I&apos;ve read and agree to the privacy and consent terms, and
              I&apos;m happy for Pathways to hold my details to contact me about
              the programme.
            </CheckField>
          </div>
        </fieldset>

        <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-relaxed text-ink-mute">
            Free to join · your details are used only to contact you about
            Pathways and are never shared.
          </p>
          <button
            type="submit"
            className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
          >
            Submit registration
            <span
              aria-hidden
              className="text-lime transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
