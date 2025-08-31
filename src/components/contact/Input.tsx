import React, { ComponentProps } from "react";

type InputBaseProps = {
  icon: React.ReactNode;
  c?: string;
  as?: "input" | "textarea" | "select";
  options?: string[]; // only for select
  type ?: string,
  placeholder : string
  name ?: string
};

type InputProps =
  | (InputBaseProps & { as?: "input" } & ComponentProps<"input">)
  | (InputBaseProps & { as: "textarea" } & ComponentProps<"textarea">)
  | (InputBaseProps & { as: "select"; options: string[] } & ComponentProps<"select">);

export default function Input({
  icon,
  type,
  name,
  placeholder,
  c = "",
  as = "input",
  options = [],
  ...rest
}: InputProps) {
  return (
    <div className={`${c} flex items-start group`}>
      {/* Icon bubble */}
      <div className="border border-gray-200 rounded-full p-5 group-hover:bg-black text-white transition-colors duration-500">
        {icon}
      </div>

      {/* Dynamic field */}
      {as === "textarea" ? (
        <textarea
          name="message"
          placeholder={placeholder}
          className="border hover:border-black border-gray-200 rounded-3xl px-6 py-5 text-[#696969] font-medium outline-none w-full h-40 resize-none"
          {...(rest as ComponentProps<"textarea">)}
        />
      ) : as === "select" ? (
        <select
          name="service"
          className="border hover:border-black border-gray-200 rounded-full px-6 py-5 text-[#696969] font-medium outline-none w-full"
          defaultValue=""
          {...(rest as ComponentProps<"select">)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border hover:border-black border-gray-200 rounded-full px-6 py-5 text-[#696969] font-medium outline-none w-full"
          {...(rest as ComponentProps<"input">)}
        />
      )}
    </div>
  );
}
