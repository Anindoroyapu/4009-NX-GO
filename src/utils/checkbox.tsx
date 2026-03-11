"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/src/utils/cn";

interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, checked, defaultChecked, onCheckedChange, onChange, ...props },
    ref,
  ) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(
      defaultChecked || (checked as boolean) || false,
    );

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked as boolean);
      }
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;

      if (checked === undefined) {
        setIsChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
      onChange?.(event);
    };

    const handleClick = () => {
      if (props.disabled) return;

      const newChecked = !(checked !== undefined ? checked : isChecked);

      if (checked === undefined) {
        setIsChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked !== undefined ? (checked as boolean) : isChecked}
          onChange={handleChange}
          className="sr-only peer"
          {...props}
        />
        <div
          onClick={handleClick}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border-2 ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "peer-checked:bg-[#8A38F5] peer-checked:text-primary-foreground",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "flex items-center justify-center transition-colors cursor-pointer",
            isChecked || checked
              ? "bg-[#8A38F5] text-primary-foreground border-[#8A38F5]"
              : "border-[#021713]",
            props.disabled ? "opacity-50 cursor-not-allowed" : "",
            className,
          )}
        >
          {(isChecked || checked) && <Check className="h-3 w-3 checkIcon" />}
        </div>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
