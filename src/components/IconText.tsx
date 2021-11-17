import { IconProps } from "../types";


export function IconText({ icon, children }: IconProps) {
  return (
    <div className="flex gap-1 items-center">
      {icon}
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default IconText;
