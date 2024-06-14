import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Define the icon prop as React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [inputType, setInputType] = React.useState(type);

    const handleToggleEye = () => {
      // console.log(inputType);
      setInputType(inputType === "text" ? "password" : "text");
    };

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex h-[48px] w-[295px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && ( // Render the icon if provided
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div onClick={handleToggleEye}>{icon}</div>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
