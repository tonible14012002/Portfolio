

const badgeUrl = {
    Dart: "https://img.shields.io/badge/Dart-0176C2?style=for-the-badge&logo=dart&logoColor=white",
    ReactJs: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    ReactNative: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    Django: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    Flask: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=",
    Postgres: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    MySql: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    Javascript: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
    HTML: "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white",
    CSS: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    Python: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    Flutter: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
    Kivy: "https://lowendplay.com/wp-content/uploads/2021/02/kivy.jpg"
}

const SkillBadge = ({name, ...props}) => {
    const source = badgeUrl[name]
    return (
        <img alt="name" src={source}
            {...props}
        />
    )
}

export default SkillBadge