"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          defaultValue=""
          className={cn(
            "peer w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-healing-teal bg-white appearance-none cursor-pointer",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        >
          <option value="" disabled hidden>
            {" "}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          className={cn(
            "absolute top-3 left-4 text-slate transition-all duration-200 pointer-events-none",
            "peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-healing-teal peer-focus:bg-white peer-focus:px-1",
            "peer-[:not(:has(option[value='']:checked))]:-top-2.5 peer-[:not(:has(option[value='']:checked))]:left-3 peer-[:not(:has(option[value='']:checked))]:text-xs peer-[:not(:has(option[value='']:checked))]:bg-white peer-[:not(:has(option[value='']:checked))]:px-1",
            error && "peer-focus:text-red-500"
          )}
        >
          {label}
        </label>
        {/* Dropdown arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-slate"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
