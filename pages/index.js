import React, { useMemo } from "react";
import Main from "../components/Main";

export default function App({ value }) {
  const options = useMemo(() => {
    return {
      params: {
        fields: {
          isDynamic: true,
        },
      },
    };
  }, []);
  return <Main id="f1" count={200} options={options} value={value} />;
}

export async function getServerSideProps() {
  console.log("Hello from SSR")
  return {
    props: {
      value: "Hello from SSR",
    },
  };
}
