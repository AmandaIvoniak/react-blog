import * as S from "./styled";
interface ModalProps {
    isOpen?: boolean;
    children: any;
}

export default function Modal({
    isOpen = false,
    children,
}: ModalProps) {

    return (
        <S.Modal open={isOpen}>
            <div className="contentCard">
                {children}
            </div>
        </S.Modal>
    );
}
