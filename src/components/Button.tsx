// 버튼 타입 지정 ( 크기: size, 타입: type )
type Variant = "default" | "primary" | "warning";
type Size = "fit" | "full";

// 버튼 Props 지정
interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

interface ButtonComponentProps extends ButtonStyleProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// 타입에 따른 스타일 지정
const buttonColor = {
  default: "bg-[#a2a2a2] hover:bg-[#909090] active:bg-[#c8c8c8]",
  primary: "bg-[#307eec] hover:bg-[#1261e0] active:bg-[#4c90ff]",
  warning: "bg-[#ff6254] hover:bg-[#ff7f74] active:bg-[#ff6522]",
};

// 타입에 따른 버튼 스타일 연산
const BTN_BASE =
  "flex justify-center items-center py-2 rounded-xl text-white font-bold text-mg";

const buttonClassName = ({
  variant = "default",
  size = "fit",
}: ButtonStyleProps) => {
  const colorStyle = buttonColor[variant];
  const sizeStyle = size == "fit" ? "w-content px-4" : "w-full";

  return `${BTN_BASE} ${colorStyle} ${sizeStyle}`;
};

// 버튼 Return
export default function Button({
  children,
  onClick,
  disabled = false,
  ...styleProps
}: ButtonComponentProps) {
  return (
    <button
      type="button"
      className={`${buttonClassName({ ...styleProps })}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
