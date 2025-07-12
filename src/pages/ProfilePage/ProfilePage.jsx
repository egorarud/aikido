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
      <h1 className="profile__header" data-oid=":.jvqir">
        Профиль
      </h1>
      <div className="profile" data-oid="iesnmhm">
        <div className="profile__card data" data-oid="::r5b39">
          <div className="profile__data" data-oid="tvmjvsm">
            <div className="profile__photo" data-oid=".ir-o.a">
              <img
                className="profile__photo__img"
                src={profilePhoto}
                alt="Фото"
                data-oid="yoha440"
              ></img>
            </div>
            <div className="profile__nameRole" data-oid="itp-1a:">
              <p className="profile__name" data-oid="0.ivovs">
                {profileData.fullName}
              </p>
              <p className="profile__role" data-oid="3du8fgt">
                {profileData.role}
              </p>
            </div>
          </div>
        </div>
        <div className="profile__card mainInfo" data-oid="4v9lai8">
          <p className="profile__card__title" data-oid="lk56t:z">
            Основная информация
          </p>
          <div className="profile__card__items" data-oid="x-2yq.f">
            {mainInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="ta44z5o"
              >
                <p className="item__title" data-oid="80rqncf">
                  {item.title}
                </p>
                <div className="item__content" data-oid="-ysb0-w">
                  <p className="item__content-value" data-oid="btt4244">
                    {item.value}
                  </p>
                  {item.title === "Дата рождения" && (
                    <img
                      className="dateOfBirth__img"
                      src={calendarIcon}
                      alt="Дата рождения"
                      data-oid=":y2xz7n"
                    />
                  )}
                  {item.title === "Город" && (
                    <img
                      className="city__img"
                      src={locationIcon}
                      alt="Город"
                      data-oid="3tkrmoq"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile__card rankInfo" data-oid="4ymo5ck">
          <p className="profile__card__title" data-oid="jjvxm8m">
            Информация о ранге
          </p>
          <div className="profile__card__items rank" data-oid="6sy5u_8">
            {rankInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="iuzc7cc"
              >
                <p className="item__title" data-oid="vqc1yr4">
                  {item.title}
                </p>
                <div className="item__content" data-oid="2gr8emn">
                  <p className="item__content-value" data-oid="e-62212">
                    {item.value}
                  </p>
                  {item.title === "Дата аттестации" && (
                    <img
                      className="attestationDate__img"
                      src={calendarIcon}
                      alt="Дата аттестации"
                      data-oid="xbss4y8"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="profile__card__title" data-oid="88kk-1g">
            Данные родителя
          </p>
          <div className="profile__card__items rank" data-oid="7abx2e6">
            {parentsInfoItems.map((item, index) => (
              <div
                key={index}
                className="profile__card__item"
                data-oid="gvrw9ac"
              >
                <p className="item__title" data-oid=".pq5b3r">
                  {item.title}
                </p>
                <div className="item__content" data-oid="tu2.h-q">
                  <p className="item__content-value" data-oid="56_uqya">
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
