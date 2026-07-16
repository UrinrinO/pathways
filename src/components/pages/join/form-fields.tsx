import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

/**
 * Shared, presentational form primitives for the Pathways inner-page forms.
 * No hooks — the interactive state lives in the client form components that
 * consume these. Matches the LIGHT theme tokens used across Sample A.
 */

const fieldBase =
  "w-full rounded-xl border border-line bg-snow px-4 py-3 text-ink placeholder:text-ink-mute transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/30";

function LabelRow({
  htmlFor,
  label,
  required,
  optional,
}: {
  htmlFor: string;
  label: ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-baseline justify-between gap-3">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </span>
      {optional && (
        <span className="text-xs font-medium text-ink-mute">Optional</span>
      )}
    </label>
  );
}

export function TextField({
  id,
  label,
  hint,
  optional,
  ...props
}: {
  id: string;
  label: ReactNode;
  hint?: string;
  optional?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <LabelRow htmlFor={id} label={label} required={props.required} optional={optional} />
      <input id={id} name={id} className={fieldBase} {...props} />
      {hint && <p className="mt-2 text-xs leading-relaxed text-ink-mute">{hint}</p>}
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  hint,
  optional,
  rows = 3,
  ...props
}: {
  id: string;
  label: ReactNode;
  hint?: string;
  optional?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <LabelRow htmlFor={id} label={label} required={props.required} optional={optional} />
      <textarea
        id={id}
        name={id}
        rows={rows}
        className={`${fieldBase} min-h-[110px] resize-y leading-relaxed`}
        {...props}
      />
      {hint && <p className="mt-2 text-xs leading-relaxed text-ink-mute">{hint}</p>}
    </div>
  );
}

export function SelectField({
  id,
  label,
  hint,
  optional,
  children,
  ...props
}: {
  id: string;
  label: ReactNode;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <LabelRow htmlFor={id} label={label} required={props.required} optional={optional} />
      <div className="relative">
        <select id={id} name={id} className={`${fieldBase} appearance-none pr-11`} {...props}>
          {children}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {hint && <p className="mt-2 text-xs leading-relaxed text-ink-mute">{hint}</p>}
    </div>
  );
}

export function CheckField({
  id,
  checked,
  onChange,
  required,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer select-none items-start gap-3.5 rounded-2xl border border-line bg-snow p-4 transition-colors hover:border-ink/20"
    >
      <span
        className={`relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all focus-within:ring-2 focus-within:ring-lime/30 ${
          checked ? "border-lime bg-lime" : "border-line bg-snow"
        }`}
      >
        <input
          id={id}
          name={id}
          type="checkbox"
          required={required}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 text-lime-ink transition-opacity ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="text-sm leading-relaxed text-ink-soft">
        {children}
        {required && <span className="text-clay"> *</span>}
      </span>
    </label>
  );
}

export function GroupHeader({
  step,
  title,
  hint,
}: {
  step: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-lime text-sm font-bold text-ink">
        {step}
      </span>
      <div>
        <h3 className="text-lg font-bold tracking-tight text-ink">{title}</h3>
        {hint && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{hint}</p>}
      </div>
    </div>
  );
}

/** Centred lime success card body — shared confirmation UI for every form. */
export function SubmittedCard({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="card-swap flex flex-col items-center rounded-3xl bg-snow p-10 text-center shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] md:p-14">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-lime-ink">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <h3 className="mt-7 max-w-md text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        {children}
      </p>
      {actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>}
    </div>
  );
}
