import { Avatar } from "@mui/material";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--bg-primary);
  border-top-right-radius: 0px;

  @media screen and (min-width: 1250px) {
    flex-direction: column;
    height: 100vh;
    width: 115px;
    border-top-right-radius: 25px;
  }

  .first-section {
    flex: 1;
  }

  .logo {
    height: 115px;
    width: 115px;
    display: flex;
    flex-direction: column;
    border-radius: 0 6px 0 15px;

    background-color: var(--primary);
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      z-index: 1;
    }

    > div {
      flex: 1 1 0;
    }

    &__top {
      background-color: var(--primary);
      border-top-right-radius: 25px;
    }
    &__bottom {
      background-color: rgb(145, 119, 253);
      border-bottom-right-radius: 25px;
      border-top-left-radius: 25px;
      position: relative;
    }
  }

  .spacer {
    align-self: stretch;
    width: 1px;
    background-color: gray;

    @media screen and (min-width: 1250px) {
      height: 1px;
      width: 100%;
    }
  }

  .avatar-container {
    padding: 0 1.5rem;

    @media screen and (min-width: 1250px) {
      padding: 1.5rem 0;
    }
  }
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="first-section">
        <div className="logo">
          <div className="logo__top"></div>
          <div className="logo__bottom"></div>
        </div>
        <div className="theming"></div>
      </div>
      <div className="spacer"></div>
      <div className="avatar-container">
        <Avatar sx={{ width: "56px", height: "56px" }}>B</Avatar>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
