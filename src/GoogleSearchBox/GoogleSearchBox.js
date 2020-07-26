import React from "react";
import GoogleInput from "./GoogleInput/GoogleInput";
import GoogleButton from "./GoogleButtons/GoogleButton";

const GoogleSearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        flexDirection: "column",
      }}
    >
      <img
        alt="Google Icon"
        width={272}
        height={92}
        src="/assets/images/google.png"
      />
      <GoogleInput
        onVoiceClick={() => {
          alert("Voice");
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <GoogleButton
          onClick={() => {
            alert("S1");
          }}
          value="Google Search"
        />
        <GoogleButton
          onClick={() => {
            alert("S2");
          }}
          value="Feeling Lucky"
        />
      </div>
    </div>
  );
};

export default GoogleSearchBox;
