import { ReactNode } from "react";
import "./ShadowBox.css";

type ShadowBoxMode = "top" | "mid" | "bot";

type ShadowBoxProps = {
    children: ReactNode;
    mode: ShadowBoxMode;
};

export default function ShadowBox({ children, mode }: ShadowBoxProps) {
    let boxClassName = "shadowbox-top-style";
    if (mode === "mid") {
        boxClassName = "shadowbox-mid-style";
    }

    return (
        <div className="shadowBox">
            <div className={boxClassName}>
                <div className="shadowbox-inner-style">{children}</div>
            </div>
        </div>
    );
}
