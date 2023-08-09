import { createWindow } from "@/components/PlasmaWindow";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { h, JSX } from "preact";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { WindowManagerInstance } from "@/components/DesktopEnviroment";
import { WindowManager } from "@/lib/WindowManager";

type ProgramOptions = {
  name: string;
  icon?: FontAwesomeIconProps['icon'];
  WindowContents: () => JSX.Element;
  options?: Parameters<typeof createWindow>[0];
};

export class Program {
  options: Parameters<typeof createWindow>[0];

  constructor({ name, icon, WindowContents, options }: ProgramOptions) {

    this.options = {
      title: name,
      icon: icon ?? faFile,
      children: <WindowContents></WindowContents>,
      ...options ?? {}
    };

  }

  launch(windowManager?: WindowManager) {
    const [_, requestAction] = windowManager ?? WindowManagerInstance;
    console.log(requestAction);
    requestAction({
      action: 'CREATE',
      window: createWindow(this.options)
    });
  }
}