"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          placeholder=" "
          className={cn(
            "peer w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-healing-teal bg-white resize-y min-h-[120px]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        <label
          className={cn(
            "absolute top-3 left-4 text-slate transition-all duration-200 pointer-events-none",
            "peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-healing-teal peer-focus:bg-white peer-focus:px-1",
            "peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1",
            error && "peer-focus:text-red-500"
          )}
        >
          {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
