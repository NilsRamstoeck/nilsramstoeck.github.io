import { PlasmaWindow } from '@/components/PlasmaWindow';
import { Taskbar } from '@/components/Taskbar';
import { WindowManager, WindowManagerReducer } from '@/lib/WindowManager';
import style from '@/style/DesktopEnviroment.css';
import { createContext, h, Fragment } from 'preact';
import { useReducer } from 'preact/hooks';

type Props = {
};

export const WindowManagerContext = createContext<WindowManager>(null);

export function DesktopEnviroment({ }: Props) {

  const windowManager = useReducer(WindowManagerReducer, {
    windows: []
  });

  return <div className='desktop-enviroment'>
    <style>{style}</style>
    <WindowManagerContext.Provider value={windowManager}>

      <div className="desktop">
        {windowManager[0].windows.map((props) => <PlasmaWindow key={props.id} {...props}></PlasmaWindow>)}
      </div>

      <Taskbar></Taskbar>

    </WindowManagerContext.Provider>
  </div>;
}