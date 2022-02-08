import React from 'react';
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck"
});

const withToastify = (OriginalComponent) => {
  class UpdatedComponent extends React.Component {
    constructor(props) {
      super(props)
    }

    animateCss() {
      toast.dark("Hey 👋, see how easy!", {
        transition: bounce
      });
    }
  
    animista() {
      toast.dark("Hey 👋, see how easy!", {
        transition: swirl
      });
    }

    render() {
      return(
        <OriginalComponent animateCss={this.animateCss} animista={this.animista}>
          <ToastContainer transition={bounce}>

          </ToastContainer>
        </OriginalComponent>
        
      )
    }
  }

  return UpdatedComponent
}

export default withToastify

// export default function ToastifyWrapper({children}) {



//   return(
//     <ToastContainer transition={bounce}>
//       {children}
//     </ToastContainer>
    

//   )
// }