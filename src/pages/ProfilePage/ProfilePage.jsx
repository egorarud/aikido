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
      <h1 className="profile__header">Профиль</h1>
      <div className="profile">
        <div className="profile__card data">
          <div className="profile__data">
            <div className="profile__photo">
              <img
                className="profile__photo__img"
                src={profilePhoto}
                alt="Фото"
              ></img>
            </div>
            <div className="profile__nameRole">
              <p className="profile__name">{profileData.fullName}</p>
              <p className="profile__role">{profileData.role}</p>
            </div>
          </div>
        </div>
        <div className="profile__card mainInfo">
          <p className="profile__card__title">Основная информация</p>
          <div className="profile__card__items">
            {mainInfoItems.map((item, index) => (
              <div key={index} className="profile__card__item">
                <p className="item__title">{item.title}</p>
                <div className="item__content">
                  <p className="item__content-value">{item.value}</p>
                  {item.title === "Дата рождения" && (
                    <img
                      className="dateOfBirth__img"
                      src={calendarIcon}
                      alt="Дата рождения"
                    />
                  )}
                  {item.title === "Город" && (
                    <img className="city__img" src={locationIcon} alt="Город" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile__card rankInfo">
          <p className="profile__card__title">Информация о ранге</p>
          <div className="profile__card__items rank">
            {rankInfoItems.map((item, index) => (
              <div key={index} className="profile__card__item">
                <p className="item__title">{item.title}</p>
                <div className="item__content">
                  <p className="item__content-value">{item.value}</p>
                  {item.title === "Дата аттестации" && (
                    <img
                      className="attestationDate__img"
                      src={calendarIcon}
                      alt="Дата аттестации"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="profile__card__title">Данные родителя</p>
          <div className="profile__card__items rank">
            {parentsInfoItems.map((item, index) => (
              <div key={index} className="profile__card__item">
                <p className="item__title">{item.title}</p>
                <div className="item__content">
                  <p className="item__content-value">{item.value}</p>
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
