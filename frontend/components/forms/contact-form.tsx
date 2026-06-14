"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const t = useTranslations("forms.contact");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    // ──────────────────────────────────────────────────────────────
    // BACKEND HOOK: replace this block with a fetch to your API / email
    // service (e.g. Formspree, Resend, a Next.js route handler, etc.).
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    // ──────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 700));
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] submission (UI-only):", data);
    }

    setStatus("success");
    form.reset();
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

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <Field id="c-name" label={t("name")} required>
        <Input id="c-name" name="name" autoComplete="name" required aria-required />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="c-email" label={t("email")} required>
          <Input id="c-email" name="email" type="email" autoComplete="email" required aria-required />
        </Field>
        <Field id="c-phone" label={t("phone")}>
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </Field>
      </div>
      <Field id="c-message" label={t("message")} required>
        <Textarea
          id="c-message"
          name="message"
          placeholder={t("messagePlaceholder")}
          required
          aria-required
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
            <Send className="size-4" />
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

export function SuccessPanel({
  title,
  message,
  action,
  onReset,
}: {
  title: string;
  message: string;
  action: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
        <CheckCircle2 className="size-8" />
      </span>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="max-w-md text-muted-foreground">{message}</p>
      <Button variant="outline" onClick={onReset}>
        {action}
      </Button>
    </div>
  );
}
