import "./ProfilePage.css";
import calendarIcon from "../../assets/sidebar/events.svg";
import locationIcon from "../../assets/location.svg";
import profilePhoto from "../../assets/photo.jpg";

function Profile() {
  const profileData = {
    photo: "../assets/profile/profilePhoto.jpg",
    fullName: "Коссе Иван",
    role: "Ученик",
  };

  const mainInfoItems = [
    { title: "Логин", value: "smirnov" },
    { title: "Город", value: "Екатеринбург" },
    { title: "ФИО", value: "Коссе Иван Николаевич" },
    { title: "Пол", value: "Мужской" },
    { title: "Номер телефона", value: "+79655390067" },
    { title: "Класс", value: "5" },
    { title: "Дата рождения", value: "20.01.2014" },
  ];

  const rankInfoItems = [
    { title: "Кю / Дан", value: "1 дан" },
    { title: "Дата аттестации", value: "20.01.2021" },
  ];

  const parentsInfoItems = [
    { title: "ФИО родителя", value: "Коссе Николай" },
    { title: "Телефон родителя", value: "+79505266895" },
  ];

  return (
    <>
      <h1 className="profile__header" data-oid="td_3r6g">
        Профиль
      </h1>
      <div className="profile" data-oid="rz3a0sd">
        <div className="profile__card data" data-oid="d9.6_wy">
          <div className="profile__data" data-oid="qxdjwae">
            <div className="profile__photo" data-oid="l:-j69f">
              <img
                className="profile__photo__img"
                src={profilePhoto}
                alt="Фото"
                data-oid="b8pvgh0"
              ></img>
            </div>
            <div className="profile__nameRole" data-oid="qyc297d">
              <p className="profile__name" data-oid="-c7xql6">
                {profileData.fullName}
              </p>
              <p className="profile__role" data-oid="wb:xmxg">
                {profileData.role}
              </p>
            </div>
          </div>
        </div>
        <div className="profile__card mainInfo" data-oid="dc_ldnx">
          <p className="profile__card__title" data-oid="lcvi3i8">
            Основная информация
          </p>
          <div className="profile__card__items" data-oid="41.7c:c">
            {mainInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="-oe.0-t"
              >
                <p className="item__title" data-oid="dp5x8uq">
                  {item.title}
                </p>
                <div className="item__content" data-oid="beo8-vi">
                  <p className="item__content-value" data-oid="4xewnfu">
                    {item.value}
                  </p>
                  {item.title === "Дата рождения" && (
                    <img
                      className="dateOfBirth__img"
                      src={calendarIcon}
                      alt="Дата рождения"
                      data-oid="cv0uc84"
                    />
                  )}
                  {item.title === "Город" && (
                    <img
                      className="city__img"
                      src={locationIcon}
                      alt="Город"
                      data-oid="l77a-.c"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile__card rankInfo" data-oid="odh.x_6">
          <p className="profile__card__title" data-oid="kmdghiq">
            Информация о ранге
          </p>
          <div className="profile__card__items rank" data-oid="9::.ct:">
            {rankInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="y4:_.o2"
              >
                <p className="item__title" data-oid="s20_j8.">
                  {item.title}
                </p>
                <div className="item__content" data-oid="tmjm_q1">
                  <p className="item__content-value" data-oid="hkn:367">
                    {item.value}
                  </p>
                  {item.title === "Дата аттестации" && (
                    <img
                      className="attestationDate__img"
                      src={calendarIcon}
                      alt="Дата аттестации"
                      data-oid="k692kfn"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="profile__card__title" data-oid="shud_ti">
            Данные родителя
          </p>
          <div className="profile__card__items rank" data-oid="n8a43-a">
            {parentsInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="rrnci5f"
              >
                <p className="item__title" data-oid="8e-csfg">
                  {item.title}
                </p>
                <div className="item__content" data-oid="m6egphe">
                  <p className="item__content-value" data-oid="hhqkrs3">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
