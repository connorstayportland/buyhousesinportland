"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitLead, type LeadFormState } from "@/lib/actions/submit-lead";

const initialState: LeadFormState = {
  success: false,
  message: "",
};

interface LeadFormProps {
  source?: string;
  variant?: "hero" | "inline";
}

export function LeadForm({ source = "website", variant = "inline" }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          We Got Your Request!
        </h3>
        <p className="text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="source" value={source} />

      {/* Property Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
          Property Address *
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="123 Oak St, Portland OR 97201"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 placeholder-gray-400"
        />
        {state.errors?.address && (
          <p className="text-red-600 text-sm mt-1">{state.errors.address[0]}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
          Your Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(503) 555-0100"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 placeholder-gray-400"
        />
        {state.errors?.phone && (
          <p className="text-red-600 text-sm mt-1">{state.errors.phone[0]}</p>
        )}
      </div>

      {/* Property Condition */}
      <div>
        <label htmlFor="condition" className="block text-sm font-semibold text-gray-700 mb-1">
          Property Condition
        </label>
        <select
          id="condition"
          name="condition"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 bg-white"
        >
          <option value="">Select condition...</option>
          <option value="great">Great — move-in ready</option>
          <option value="minor">Minor repairs needed</option>
          <option value="major">Major work needed</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-1">
          Timeline to Sell
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 bg-white"
        >
          <option value="">Select timeline...</option>
          <option value="asap">ASAP</option>
          <option value="30days">Within 30 days</option>
          <option value="60-90days">60–90 days</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email Address <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 placeholder-gray-400"
        />
        {state.errors?.email && (
          <p className="text-red-600 text-sm mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      {state.message && !state.success && (
        <p className="text-red-600 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
      >
        {isPending ? "Sending..." : "Get In Touch With Our Team →"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Free consultation. No obligation. We respond within 24 hours.
      </p>
    </form>
  );
}
