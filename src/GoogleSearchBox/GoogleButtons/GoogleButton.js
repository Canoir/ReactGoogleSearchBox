import React from "react";
import styled from "styled-components";

const GoogleButton = (props) => {
  const Button = styled.input`
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    color: #5f6368;
    font-family: arial, sans-serif;
    font-size: 14px;
    margin: 0px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
      background-color: #f8f8f8;
      border: 1px solid #c6c6c6;
      color: #222;
    }
  `;
  return (
    <Button type="submit" onClick={props.onClick.bind()} value={props.value} />
  );
};

export default GoogleButton;
