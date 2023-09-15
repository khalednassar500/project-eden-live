import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const FAKE_DATA = [
  {
    id: 1,
    image: "/assets/images/smart-box.svg",
    name: "Floor Heating Control",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 2,
    image: "/assets/images/smart-box.svg",
    name: "Motorized Shutter Control",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 3,
    image: "/assets/images/smart-box.svg",
    name: "Smart Door Access with Strike ",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
  },
];

const HomeServiceList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(FAKE_DATA);
  }, []);

  return (
    <section>
      {list &&
        list.map((x) => (
          <div key={x.id} className={styles.itemCon}>
            <div className={styles.itemImgCon}>
              <div className={styles.itemImg}>
                <div className={styles.IImg}>
                  <img src={x.image} alt="service icon" />
                </div>
              </div>
            </div>
            <div className={styles.itemTextCon}>
              <h3>{x.name}</h3>
              <p className={styles.itemDesc}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              {x.its_services && (
                <div className={styles.itemServices}>
                  <p>
                    <strong>Services from it :</strong>
                  </p>
                  <div className={styles.itemServicesCon}>
                    {x.its_services.map((s) => (
                      <p key={s.id}>{s.name}</p>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.itemLink}>
                <a href="#">view this service</a>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default HomeServiceList;
