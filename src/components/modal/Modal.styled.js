import styled from 'styled-components';

const ModalWindow = styled.div`
  .open {
    overflow: hidden;
  }
  .close {
    overflow: visible;
  }
  .overlay {
    position: fixed;
    top: 80px;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(33, 33, 33, 0.12);
    z-index: 1200;
  }

  .modal {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    height: 100vh;
    box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
    padding: 0 15px;
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    outline: none;
    background-image: url('./image/icon-close.svg');
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    transition: all 300ms ease-in;
  }

  .closeButton:hover,
  .closeButton:focus {
    background-image: url('./image/icon-close-wite.svg');
    background-color: #fc842d;
  }
  .arrowCloseButton {
    position: absolute;
    top: -23px;
    left: 15px;
    width: 14px;
    height: 9px;
    padding: 10px 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    outline: none;
    background-image: url('./image/arrow-close.svg');
    background-repeat: no-repeat;
    transition: all 300ms ease-in;
  }
  .arrowCloseButton:hover,
  .arrowCloseButton:focus {
    background-image: url('./image/arrow-close-orange.svg');
  }

  @media (max-width: 767px) {
    .modal {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .modal {
      max-width: 594px;
      height: auto;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 40px;
    }
  }

  @media (min-width: 1280px) and (orientation: landscape) {
    .modal {
      max-width: 690px;
      padding: 0 90px;
    }
    .overlay {
      top: 170px;
    }
  }
`;
export default ModalWindow;