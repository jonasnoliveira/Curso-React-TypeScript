import React from "react";

interface InputProps {
  label: string;
  value: string;
  type: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}</span>
        <input
          ref={ref}
          type={props.type}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);
