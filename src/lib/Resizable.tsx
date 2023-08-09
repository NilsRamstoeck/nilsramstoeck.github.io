import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import type { PropsWithChildren } from "preact/compat";

type Props = {
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
  resizable?: boolean;
};

export function Resizable({ width, minWidth, maxWidth, height, minHeight, maxHeight, resizable = true, children }: PropsWithChildren<Props>) {

  const [size, setSize] = useState({ w: width ?? 0, h: height ?? 0 });
  // const [minSize, setMinSize] = useState({ w: minWidth, h: minHeight } as typeof size);
  // const [maxSize, setMaxSize] = useState({ w: maxWidth, h: maxHeight } as typeof size);
  const minSize = { w: minWidth ?? 0, h: minHeight ?? 0 };
  const maxSize = { w: maxWidth ?? Number.MAX_SAFE_INTEGER, h: maxHeight ?? Number.MAX_SAFE_INTEGER };
  const ref = useRef<HTMLDivElement>();

  function mouseMove(e: MouseEvent) {
    setSize({
      w: (e.clientX) - ref.current.getBoundingClientRect().x,
      h: (e.clientY) - ref.current.getBoundingClientRect().y,
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    // setMinSize({
    //   w: ref.current.clientWidth,
    //   h: ref.current.clientHeight
    // });
  }, [ref]);

  return <div
    ref={ref}
    style={{
      position: 'relative',
      width: Math.min(Math.max(minSize.w, size.w), maxSize.w) || 'inherit',
      height: Math.min(Math.max(minSize.h, size.h), maxSize.h) || 'inherit',
    }}
  >
    {children}
    {!resizable || <div
      style={{
        position: 'absolute',
        right: '-3px',
        bottom: '-3px',
        display: 'flex',
        cursor: 'nwse-resize',
      }}
      onMouseDown={(e) => {
        if (!resizable) return;
        if (!ref.current) return;
        const listener = (e: MouseEvent) => mouseMove(e);
        addEventListener('mousemove', listener);
        addEventListener('mouseup', () => {
          removeEventListener('mousemove', listener);
        }, { once: true });
      }}
    >
      <FontAwesomeIcon style={{
        transform: 'rotate(-45deg)',
        'aspectRatio': '1/1'
      }} icon={faCaretDown}></FontAwesomeIcon>
    </div>}
  </div >;
}