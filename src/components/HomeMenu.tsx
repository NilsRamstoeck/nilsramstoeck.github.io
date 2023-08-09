import { WindowManagerContext } from "@/components/DesktopEnviroment";
import { BingoProgram } from "@/programs";
import { faArrowsRotate, faFile, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { h } from "preact";
import { MutableRef, useContext } from "preact/hooks";

type Props = {
  ref: MutableRef<any>;
};

export function HomeMenu({ }: Props) {

  const windowManager = useContext(WindowManagerContext);

  return <div className='homemenu plasma-box-inline'>

    <span onClick={() => {
      BingoProgram.launch(windowManager);
    }} className='plasma-button plasma-box-top'>
      <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
      <span className='plasma-center'>Bingo</span>
    </span>

    <span className='plasma-button plasma-box-top'>
      <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
      <span className='plasma-center'>Shutdown</span>
    </span>
  </div>;
}