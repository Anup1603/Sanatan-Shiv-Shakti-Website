"use client";

import { useState } from "react";
import { HeartHandshake, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ErrorPanel, SuccessPanel } from "./contact-form";
import { Honeypot } from "./honeypot";

type Status = "idle" | "sending" | "success" | "error";

export function JoinForm({
  interestAreas,
}: {
  interestAreas: { value: string; label: string }[];
}) {
  const t = useTranslations("forms.join");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SuccessPanel
        title={t("successTitle")}
        message={t("successMessage")}
        action={tc("sendAnother")}
        onReset={() => setStatus("idle")}
      />
    );
  }

  if (status === "error") {
    return (
      <ErrorPanel
        title={tc("errorTitle")}
        message={tc("errorMessage")}
        action={tc("tryAgain")}
        onReset={() => setStatus("idle")}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <Honeypot />
      <Field id="j-name" label={t("fullName")} required>
        <Input id="j-name" name="fullName" autoComplete="name" required aria-required />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="j-mobile" label={t("mobile")} required>
          <Input
            id="j-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required
          />
        </Field>
        <Field id="j-email" label={t("email")}>
          <Input id="j-email" name="email" type="email" autoComplete="email" />
        </Field>
      </div>

      <Field id="j-address" label={t("address")}>
        <Input id="j-address" name="address" autoComplete="street-address" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="j-occupation" label={t("occupation")}>
          <Input id="j-occupation" name="occupation" />
        </Field>
        <Field id="j-age" label={t("age")}>
          <Input id="j-age" name="age" type="number" min={10} max={100} inputMode="numeric" />
        </Field>
      </div>

      <Field id="j-interest" label={t("interestArea")} required>
        <select
          id="j-interest"
          name="interestArea"
          required
          aria-required
          defaultValue=""
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-card px-3.5 text-sm shadow-sm transition-colors",
            "focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30",
          )}
        >
          <option value="" disabled>
            {t("selectInterest")}
          </option>
          {interestAreas.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="j-message" label={t("message")}>
        <Textarea
          id="j-message"
          name="message"
          placeholder={t("messagePlaceholder")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={status === "sending"} className="mt-1 w-full sm:w-fit">
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {tc("sending")}
          </>
        ) : (
          <>
            <HeartHandshake className="size-4" />
            {t("submit")}
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}
