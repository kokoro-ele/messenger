/*
 * @Author: kokoro
 * @Date: 2023-05-31 23:09:41
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-01 16:21:35
 * @Description: 请填写简介
 */
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    inline-flex
    w-full
    justify-center
    rounded-md
    bg-white
    py-2
    text-gray-500
    shadow-sm
    ring-1
    ring-inset
    focus:outline-offset-0
    "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
