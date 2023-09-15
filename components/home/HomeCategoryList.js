import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const FAKE_DATA = [
  {
    id: 1,
    image: "/assets/images/category1.svg",
    name: "Doors and Gates",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
    its_services: [
      { id: 1, name: "Floor Heating Control" },
      { id: 2, name: "Lighting On/Off Control with Energy Meter" },
      { id: 3, name: "Lighting On/Off and Dimming Control" },
    ],
  },
  {
    id: 2,
    image: "/assets/images/category2.svg",
    name: " Energy and Resourses",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
    its_services: [
      { id: 1, name: "some text" },
      { id: 2, name: "some text" },
      { id: 3, name: "some text" },
    ],
  },
  {
    id: 3,
    image: "/assets/images/category3.svg",
    name: "Lighting and Ambiance ",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print,  and publishing industries for previewing layouts and visual mockups.",
    its_services: [
      { id: 1, name: "some text" },
      { id: 2, name: "some text" },
      { id: 3, name: "some text" },
    ],
  },
];

const HomeCategoryList = () => {
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
                  <img src={x.image} alt="category icon" />
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
                <a href="#">view this category</a>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default HomeCategoryList;
