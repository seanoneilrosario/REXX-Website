"use client";
import { useState } from "react";
export function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="signup-fields">
        <label className="sr-only" htmlFor="email">
          Your email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
        <button className="button button-red" type="submit">
          Subscribe <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="signup-note" role="status">
        {submitted
          ? "This is a static preview. Your email has not been saved or submitted."
          : "Launch updates preview — email subscriptions are not connected yet."}
      </p>
    </form>
  );
}
