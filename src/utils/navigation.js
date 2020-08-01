const getNavigation = (user) => {

    const links = {
        header: [{
            title: "❤ Home",
            link: "/"
        },
        {
            title: "❤ Contributers",
            link: "/contributers"
        },
        {
            title: "❤ Publications",
            link: "/publications"
        },
        {
            title: "❤ Post!",
            link: "/post"
        },
        {
            title: "❤ Profile",
            link: `/profile/${user.id}`
        },
        {
            title: "❤ Register",
            link: "/register"
        },
        {
            title: "❤ Login",
            link: "/login"
        },
        {
            title: "❤ Logout",
            link: "/login"
        }],
        footer: [{
            title: "❤ Contacts",
            link: "/contacts"
        },
        {
            title: "❤ Facebook",
            link: "https://www.facebook.com/"
        },
        {
            title: "❤ Instagram",
            link: "https://www.instagram.com/"
        }

        ],
        aside: [{
            title: "Pregnancy",
            link: "/category/pregnancy"
        },
        {
            title: "Mom Lifestyle",
            link: "/category/mom-lifestyle"
        },
        {
            title: "Baby",
            link: "/category/baby"
        },
        {
            title: "Kids",
            link: "/category/kids"
        }]
    }

    return links;

};

export default getNavigation