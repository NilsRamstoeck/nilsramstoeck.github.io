import { faArrowsRotate, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { h } from "preact";
import { MutableRef } from "preact/hooks";

type Props = {
  ref: MutableRef<any>;
};

export function HomeMenu({ }: Props) {

  return <div className='homemenu plasma-box-inline'>

    <span className='plasma-button plasma-box-top'>
      <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
      <span className='plasma-center'>Reboot</span>
    </span>

    <span className='plasma-button plasma-box-top'>
      <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
      <span className='plasma-center'>Shutdown</span>
    </span>
  </div>;
}