import styled, { keyframes } from "styled-components";
import { MdOutlineWavingHand } from "react-icons/md";

const shakeHand = keyframes`
  0%{
    transform: rotate(-45deg);
  }
  50%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(-45deg);
  }

`;
const blink = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.3;
  }
  100%{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0%{
    top: 0;
    opacity: 1;
    background: #ffffff;
  }
  100%{
    top:-100vh;
    opacity: 0;
    background: #ffffff00;
  }
`;

const LoadingComponent = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  background: #ffffff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${fadeOut} 3s ease-in-out 2s forwards;
  .hand {
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
    transform: rotate(-45deg);
    animation: ${shakeHand} 2s ease infinite;
  }
  h1 {
    font-size: 50px;
    font-weight: bolder;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    animation: ${blink} 2.5s ease infinite;
  }
`;

const Loading = () => {
  return (
    <LoadingComponent>
      <MdOutlineWavingHand className="hand" />
      <h1>Hello Today</h1>
    </LoadingComponent>
  );
};

export default Loading;
