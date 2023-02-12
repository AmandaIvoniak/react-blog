import classNames from "classnames";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles.scss";

import { getPortalElement } from "./portal";
export interface ModalContainerProps extends HTMLAttributes<any> {
    name: string;
    isOpen?: boolean;
    only?: boolean;
    onClose: () => void;
    divider: number;
}

interface IActiveModal {
    onClose: () => void;
    name: string;
    open: boolean;
}

function getModalPosition(ref: HTMLDivElement, divider: number) {
    const elementRect = ref.getBoundingClientRect();
    const centerYPos =
        document.documentElement.clientHeight / 2 - elementRect.height / 2;
    const centerXPos =
        document.documentElement.clientWidth / 2 - elementRect.width / 2;

    const y = centerYPos;
    const x = centerXPos - divider;
    console.log(x, y);
    return {
        x: x >= 0 ? x : 0,
        y: y >= 0 ? y : 0,
    };
}

const activeModals: { [key: string]: IActiveModal } = {};

function setActiveModal(name: string, modal: IActiveModal) {
    activeModals[name] = modal;
}

export function ModalContainer({
    children,
    name,
    isOpen = false,
    onClose,
    only = false,
    divider = 16,
    ...props
}: ModalContainerProps) {
    const modalWrapRef = useRef<HTMLDivElement>(null);
    const itemContent = document.getElementsByTagName(
        "body"
    ) as HTMLCollectionOf<HTMLElement>;
    const [margin, setMargin] = useState({
        x: 0,
        y: 0,
    });
    function ocultaScroll(item: any) {
        item[0].style.overflowY = "hidden";
    }

    function mostraScroll(item: any) {
        item[0].style.overflowY = "inherit";
    }

    useEffect(() => {
        setActiveModal(name, {
            name,
            onClose,
            open: isOpen,
        });

        isOpen ? ocultaScroll(itemContent) : mostraScroll(itemContent);
        return () => {
            delete activeModals[name];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, name, onClose]);

    useEffect(
        function closeActiveModal() {
            if (isOpen && only) {
                Object.keys(activeModals).forEach((modalActiveName) => {
                    const modal = activeModals[modalActiveName];
                    if (modal.name !== name) {
                        modal.onClose();
                    }
                });
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [only, isOpen]
    );

    useEffect(
        function setModalPosition() {
            function handleResize() {
                if (isOpen && modalWrapRef.current) {
                    setMargin(getModalPosition(modalWrapRef.current, divider));
                }
            }

            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleResize);
            handleResize();
            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleResize);
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isOpen, modalWrapRef]
    );
    return isOpen
        ? createPortal(
            <>
                <div
                    onClick={onClose}
                    className="tt-modal-shadow"
                    aria-hidden="true"
                />
                <div
                    ref={modalWrapRef}
                    className={classNames("tt-content", {
                        "tt-content--open": isOpen,
                    })}
                    style={{
                        left: margin.x,
                        top: margin.y,
                    }}
                    {...props}
                >

                    {children}
                </div>
            </>,
            getPortalElement()
        )
        : null;
}

export interface ModalProps extends HTMLAttributes<any> {
    name: string;
    isOpen?: boolean;
    only?: boolean;
    onClose: () => void;
    children: any;
    divider: number;
}

export default function Modal({
    name,
    isOpen = false,
    only = false,
    onClose,
    children,
    divider = 16,
}: ModalProps) {

    return (
        <ModalContainer
            name={name}
            onClose={() => onClose()}
            isOpen={isOpen}
            only={only}
            divider={divider}
        >
            {children}
        </ModalContainer>
    );
}
