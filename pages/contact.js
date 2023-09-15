import MainLoading from "@/components/Loading.js/MainLoading";
import { useEffect, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(!loading);
  }, []);

  return (
    <>
      <MainLoading loading={loading} />
      <h1>contact</h1>
    </>
  );
};
export default Contact;
