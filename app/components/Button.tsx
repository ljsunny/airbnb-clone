'use client' //Next.js 13과 같은 최신 프레임워크에서 등장하며, 이 디렉티브는 특정 코드가 클라이언트 측에서 실행되어야 함을 명시합니다. 이는 서버 측에서 실행되지 않고 브라우저에서만 실행되어야 함을 의미합니다.

import { IconType } from "@/node_modules/react-icons/lib/iconBase";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon:Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-100
            transition
            w-full
            ${outline ? 'bg-white' : 'bg-rose-500'}
            ${outline ? 'border-black' : 'border-rose-500'}
            ${outline ? 'text-black' : 'text-white'}
            ${ small ? 'py-1' : 'py-3' } 
            ${small ? 'text-sm' : 'text-md'}
            ${ small ? 'font-light' : 'font-semibold' }
            ${ small ? 'border-[1px]' : 'border-2' }
            `}>
            {Icon && (
                <Icon
                    size={24}
                    className="
                       absolute
                       left-4
                       top-3 
                    " />
            )}
            {label}
        </button>
     );
}

export default Button;