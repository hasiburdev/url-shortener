import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputWithButtonProps {
  text?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function InputWithButton({
  placeholder,
  text,
  type = "text",
  className,
  inputClassName,
  buttonClassName,
}: InputWithButtonProps): JSX.Element {
  return (
    <div
      className={cn("flex w-full max-w-sm items-center space-x-2", className)}
    >
      <Input className={inputClassName} type={type} placeholder={placeholder} />
      <Button type="submit" className={buttonClassName}>
        {text}
      </Button>
    </div>
  );
}
