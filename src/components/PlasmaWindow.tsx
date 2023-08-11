import { Draggable } from "@/lib/Draggable";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import style from '@/style/PlasmaWindow.css';
import { WindowManagerContext } from "@/components/DesktopEnviroment";
import { Resizable } from "@/lib/Resizable";
import { h, createContext, createRef } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { FunctionComponent, PropsWithChildren } from "preact/compat";

type Props = {
  title?: string;
  Icon?: FontAwesomeIconProps['icon'] | FunctionComponent;
  resizable?: boolean;
  minimized?: boolean;
  x?: number;
  y?: number;
  id: number;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
};

let idCounter = 1;

export const PlasmaWindowContext = createContext<Props>(null);

export function createWindow(props: Omit<PropsWithChildren<Props>, 'id'>): Props {
  const id = idCounter++;
  return {
    ...props,
    id
  };
}

export function PlasmaWindow(props: PropsWithChildren<Props>) {
  const {
    title,
    children,
    resizable,
    minimized = false,
    x,
    y,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    Icon
  } = props;

  const [{ windows }, requestAction] = useContext(WindowManagerContext);
  const [isDraggable, setDraggable] = useState(false);
  const inFocus = windows.at(-1).id == props.id && !minimized;
  const draggableRef = createRef<HTMLDivElement>();


  //effect to center the window if no start position was specified
  useEffect(() => {
    if (!draggableRef.current) return;
    draggableRef.current.style.left = (x ?? document.body.clientWidth / 2 - draggableRef.current.clientWidth / 2) + 'px';
    draggableRef.current.style.top = (y ?? document.body.clientHeight / 2 - draggableRef.current.clientHeight / 2) + 'px';
  }, []);

  return <Draggable _ref={draggableRef} x={x} y={y} active={isDraggable}>
    <style>{style}</style>
    <div style={{
      display: minimized ? 'none' : undefined
    }}
      className={`plasma-window ${inFocus ? 'plasma-box-glow' : ''} plasma-box`}
      onMouseDown={() => requestAction({
        action: 'FOCUS',
        window: props
      })}
    >
      <div
        onMouseDown={(_e) => {
          setDraggable(true);
          addEventListener('mouseup', () => {
            setDraggable(false);
          }, { once: true });
        }} className='plasma-window-titlebar plasma-box-bottom'>
        <span className='plasma-window-title'>
          {typeof Icon == 'function' ? <Icon></Icon> : <FontAwesomeIcon icon={Icon}></FontAwesomeIcon>}{title}
        </span>
        <span>
          <div className="plasma-button plasma-fill plasma-square" onClick={() => requestAction({
            action: 'MINIMIZE',
            window: props
          })}>
            <FontAwesomeIcon style={{ 'fontSize': '0.9em' }} icon={faWindowMinimize}></FontAwesomeIcon>
          </div>
          <div className="plasma-button plasma-fill plasma-square" onClick={() => requestAction({
            action: 'CLOSE',
            window: props
          })}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </div>
        </span>
      </div>
      <Resizable minHeight={minHeight} minWidth={minWidth} maxHeight={maxHeight} maxWidth={maxWidth} height={height} width={width} resizable={resizable}>
        <PlasmaWindowContext.Provider value={props}>
          <div className="plasma-window-content">
            {children}
          </div>
        </PlasmaWindowContext.Provider>
      </Resizable>
    </div>
  </Draggable>;
}