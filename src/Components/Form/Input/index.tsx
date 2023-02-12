import { forwardRef, InputHTMLAttributes } from "react";
import { BoxField, InputField, Label, ErrorMessage } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete?: string;
  error?: boolean;
  errorMessage?: any;
  label?: string;
  withLabel?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <BoxField>
      {props.withLabel && (
        <Label>{props?.label}</Label>
      )}
      <InputField
        data-testid={props?.label}
        label={props?.label}
        error={props?.error}
        {...props}
        ref={ref}
        autoComplete={props.autoComplete || "off"}
      />
      {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}

    </BoxField>
  );
});
