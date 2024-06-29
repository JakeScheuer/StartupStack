"use client";
import { useFormStatus } from "react-dom";

interface Props {
  text?: string;
  className?: string;
  formAction: (formData: FormData) => void;
}

// Button that displays loading state
// Must be a child in a form
const FormSubmitButton = ({ text, className, formAction }: Props) => {
  const { pending } = useFormStatus();
  const style = className ?? "btn my-8 w-full";

  return (
    <button
      className={style}
      aria-disabled={pending}
      disabled={pending}
      formAction={formAction}
    >
      {pending ? (
        <span className="loading loading-spinner"></span>
      ) : (
        text ?? "Submit"
      )}
    </button>
  );
};

export default FormSubmitButton;
