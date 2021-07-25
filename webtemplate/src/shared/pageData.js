/*
This is where everything starts.  This is the "database" of the web site

This JSON object variable holds all the specific data used to construct
the web site.  That way, the Reactjs application becomes a framework,
not a hard coded app.  If one changes this JSON, you can create a 
brand new website using the app,
or at least I think so

*/

const pageData = {
    about: {
        title: "The About This Server Page",
        description: "All about why I do these crazy things.",
        pagename: "about",
        linkback: "/home",
        linkto: "/about",
        menutitle: "About",
        WPurl: "https://daveonduty.wordpress.com",
        WPwidth: "800",
        WPheight: "600",
        header: "This the header info."
    },
    mystuff: {
        title: "Stuff about me page",
        description: "The place to keep stuff about me.",
        pagename: "mystuff",
        linkback: "/home",
        linkto: "/mystuff",
        menutitle: "MyStuff",
        header: "This the header info."
    },
    contact: {
        title: "The Contacts Page",
        description: "This is the place where some can contact me, sometimes.",
        pagename: "contact",
        linkback: "/home",
        linkto: "/contact",
        menutitle: "Contact",
        header: "This is the header info."
    },
}

export default pageData;