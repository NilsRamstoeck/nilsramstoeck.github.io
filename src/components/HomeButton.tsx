import { HomeMenu } from "@/components/HomeMenu";
import { h, Fragment } from "preact";
import { useRef, useState } from "preact/hooks";
import logo from '@/public/logo.svg';
type Props = {

};

export function HomeButton({ }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();
  console.log(menuRef.current);
  
  return <>
    <div className='taskbar-homebutton plasma-button plasma-box-inline'
      onClick={() => {
        setShowMenu(!showMenu);
        if (!showMenu) {
          const controller = new AbortController();
          setTimeout(() => document.querySelector<HTMLDivElement>('.desktop-enviroment')
            ?.addEventListener('click', (e) => {
              // if (e.composedPath().some(target => target == menuRef.current().ref))
              //   return;
              console.log(e.composedPath(), menuRef.current);

              setShowMenu(false);
              controller.abort();
            }, { signal: controller.signal }));
        }
      }}>
      <img className="taskbar-homebutton" src={logo} alt="" />
    </div>
    {!showMenu || <HomeMenu ref={menuRef}></HomeMenu>}
  </>;
}