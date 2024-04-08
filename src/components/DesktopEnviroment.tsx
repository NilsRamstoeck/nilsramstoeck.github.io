import { PlasmaWindow } from '@/components/PlasmaWindow';
import { Taskbar } from '@/components/Taskbar';
import { WindowManager, WindowManagerReducer } from '@/lib/WindowManager';
import { BingoProgram } from '@/programs';
import { createContext, h } from 'preact';
import { useEffect, useReducer } from 'preact/hooks';
import '@/style/DesktopEnviroment.css';

type Props = {
};

export const WindowManagerContext = createContext<WindowManager>(null);

export let WindowManagerInstance: WindowManager = [
  { windows: [] },
  () => { throw new Error('WindowManager is not available. Desktop Enviroment may not be running'); }
];


export function DesktopEnviroment({ }: Props) {

  const windowManager = useReducer(WindowManagerReducer, {
    windows: []
  });

  WindowManagerInstance = windowManager;

  useEffect(() => {
    BingoProgram.launch(windowManager);
    // MonacoEditorProgram.launch(windowManager);
    // MonacoEditorProgram.launch(windowManager);
  }, []);

  return <div className='desktop-enviroment'>
    <WindowManagerContext.Provider value={windowManager}>

      <div className="desktop">
        {windowManager[0].windows.map((props) => <PlasmaWindow key={props.id} {...props}></PlasmaWindow>)}
      </div>

      <Taskbar></Taskbar>

    </WindowManagerContext.Provider>
  </div>;
}