import { h } from "preact";
import logo from '@/public/logo.svg';
import { ClipLoader } from "react-spinners";


export function BootScreen() {
  return <div className="plasma-fill" style={{ background: "var(--backgroundprimary)" }}>

    <div className="plasma-composit plasma-fill">
      <div className="plasma-fill plasma-center flex-column" style={{top: "10px" }}><img style={{ width: '10vw', height: '10vw' }} src={logo} />
        <span style={{ color: "var(--primary)" }}>Coming Soon...</span>
      </div>
      <div className="plasma-fill plasma-center"><ClipLoader color="var(--primary) " size='10vw'></ClipLoader>
      </div>
    </div>
  </div >;
}