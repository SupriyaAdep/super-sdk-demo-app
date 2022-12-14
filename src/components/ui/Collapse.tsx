import React, { useEffect, useRef, useState } from "react";
import { DownArrow, UpArrow } from "../../assets/icons";
import "./ui.css";

interface Props {
  open?: boolean;
  header: string;
  children: React.ReactNode;
}

export default function Collapse(props: Props) {
  const { open = false, header = "", children } = props;
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const [isOpen, setIsOpen] = useState(open);

  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      // Adding 20 to height to prevent cutting off of text
      setHeight(el[0].contentRect.height + 20);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) {
      let divHeight = ref.current?.getBoundingClientRect().height || 0;
      divHeight = divHeight + 20;
      // Adding 20 to height to prevent cutting off of text
      setHeight(divHeight);
    } else setHeight(0);
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="--header">
        <div className="--title">{header}</div>
        <div>
          <button className="btn --icon" onClick={toggle}>
            {isOpen ? <UpArrow /> : <DownArrow />}
          </button>
        </div>
      </div>
      <div className="--content" style={{ height }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
}
