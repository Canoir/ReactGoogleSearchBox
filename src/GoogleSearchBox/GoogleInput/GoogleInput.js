import React from "react";
import styled from "styled-components";

const GoogleInput = (props) => {
  let inHo = React.createRef();
  const onInputFocus = (a) => {
    if (inHo.current) {
      if (a) {
        inHo.current.style.boxShadow = "0 1px 6px 0 rgba(32, 33, 36, 0.28)";
        inHo.current.style.border= "1px solid rgba(223, 225, 229, 0)";
      } else {
        inHo.current.style.boxShadow = "none";
        inHo.current.style.border= "1px solid #dfe1e5";
      }
    }
  };
  const InputHolder = styled.div`
    width: 582px;
    background: #fff;
    display: flex;
    border:  1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    height: 44px;
    margin-top: 24px;
    flex-direction: row;
    padding: 0 16px;
    &:hover {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      border-color: rgba(223, 225, 229, 0);
    }
  `;
  const Input = styled.input`
    font: 16px arial, sans-serif;
    line-height: 34px;
    background-color: transparent;
    border: none;
    color: rgba(0,0,0,.87);
    outline: none;
    display: flex;
    height: 34px;
    font-size: 16px;
    width:100%;
    height:100%;
    padding:16px;
    }
  `;
  const SearchIconHolder = styled.span`
    display: inline-block;
    fill: currentColor;
    line-height: 24px;
    position: relative;
    margin: auto 0;
    color: #9aa0a6;
    height: 20px;
    width: 20px;
  `;
  return (
    <InputHolder ref={inHo}>
      <SearchIconHolder>
        <svg
          style={{ display: "block", height: "100%", width: "100%" }}
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </SearchIconHolder>
      <Input
        type="text"
        onFocus={onInputFocus.bind(undefined,true)}
        onBlur={onInputFocus.bind(undefined,false)}
      />
      <svg
        onClick={props.onVoiceClick.bind()}
        style={{
          verticalAlign: "middle",
          width: "24px",
          height: "24px",
          margin: "auto 0",
          cursor: "pointer",
        }}
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
          fill="#4285f4"
        ></path>
        <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
        <path
          d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          fill="#f4b400"
        ></path>
        <path
          d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          fill="#ea4335"
        ></path>
      </svg>
    </InputHolder>
  );
};

export default GoogleInput;
