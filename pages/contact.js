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
      <section style={{ padding: "20vh 0", textAlign: "center" }}>
        <img style={{ width: "200px" }} src="/assets/icons/comming-soon.svg" />
      </section>
    </>
  );
};
export default Contact;
