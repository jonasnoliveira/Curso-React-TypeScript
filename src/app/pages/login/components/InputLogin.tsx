import React from 'react';

interface InputLoginProps {
  label: string;
  value: string;
  type: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, InputLoginProps>(
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
