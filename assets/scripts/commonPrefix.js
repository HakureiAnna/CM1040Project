/*
 * Common javascript is split into two files, commonPrefix.js and commonSuffix.js.
 * This is done such that we can in the prefix file, we can perform initialization
 * that is required before page specific javascript is executed, such as the 
 * initialization of commonLinks, since we want a common avenue to define the links
 * within the site, while creating a unique copy and splicing irrelevant links 
 * within each individual page.
 */
// site title
const siteTitle = "cassette maniacs";

// template for different parts that are common across the site
const titleLayout= `
{{upper1st title}} - {{upper1st siteTitle}}
`;

const headerLayout = `
    <div id="siteTitle">
        <img width="32" height="32" src="{{prefix}}/assets/images/icon.png"/>&nbsp;
        {{upper1st siteTitle}}
    </div>
    <div id="pageTitle">
        {{upper1st title}}
    </div>
`;

const navBarLayout = `
    <div id="navBarTitle">Navigation</div>
    {{#each links}}
        <a class="navBarLink" href="{{../prefix}}{{this.link}}">{{upper1st this.text}}</a>
    {{/each}}
`;

const sideBarLayout = `
    <div id="sideBarTitle">Links</div>
    {{#each links}}
        <a class="sideBarLink" href="{{../prefix}}{{this.link}}">{{upper1st this.text}}</a>
    {{/each}}
`;

const contentBoxLayout = `
    {{#sections content}}
    {{/sections}}
`;

const footerLayout = `
<div id="footerContent">
    &copy; L.Anna Productions 2021
</div>
`;

const layout = `
<div id="header">
    {{>header}}
</div>
<div id="navBar">
    {{>navBar prefix=prefix}}
</div>
<div id="sideBar">
    {{>sideBar}}
</div>
<div id="contentBox">
    {{>contentBox}}
</div>
<div id="footer">
    {{>footer}}
</div>
`;

// common list of links used across the entire site.
const commonLinks = [
    {
        text: 'home',
        link: '/index.html',
    },
    {
        text: 'current issue',
        link: '/issues/issue4.html',
    },
    {
        text: 'past issues',
        link: '/directory.html',
    },
    {
        text: 'subscribe',
        link: '/subscribe.html',
    },
    {
        text: 'about us',
        link: '/about.html'
    }
];

// path prefix that can be different across pages depending on the location the current page is.
let prefix = ".";

// common list of issues available on the site
const issues = [
    {
        issueNo: 1,
        title: 'New Era of Music Cassettes',
        image: './assets/images/issue1.png',
        available: false,   // flag indicating availability of the issue
    },
    {
        issueNo: 2,
        title: 'History of the Music Cassette',
        image: './assets/images/issue2.png',
        available: false,
    },
    {
        issueNo: 3,
        title: 'Cassette Decks',
        image: './assets/images/issue3.png',
        available: false,
    },
    {
        issueNo: 4,
        title: 'Cassette Categories',
        image: './assets/images/issue4.png',
        available: true
    }
];

/*
 * helper to capitalize every 1st character of each word within the string
 */
function upper1st(context) {
    var words = context.split(' ');
    var retVal = '';
    for (var i=0; i<words.length; ++i) {
        retVal += words[i][0].toUpperCase() + words[i].substr(1);
        if (i < words.length - 1)
            retVal += ' ';            
    }
    return retVal;
}

// helper registration(s)
Handlebars.registerHelper('upper1st', upper1st);

Handlebars.registerHelper('sections', function(context, option) {
    let retVal = '';
    for (var i=0; i<context.length; ++i) {
        retVal += '<div class="section ' + (i%2==0?'oddSection':'evenSection') + '">';
        retVal += '<h3>' + upper1st(context[i].title) + '</h3>';
        retVal += '<div class="content">' + context[i].content + '</div>';
        retVal += '</div>';
    }
    return retVal;
});

// partial registration(s)
Handlebars.registerPartial('header', headerLayout);
Handlebars.registerPartial('navBar', navBarLayout);
Handlebars.registerPartial('sideBar', sideBarLayout);
Handlebars.registerPartial('contentBox', contentBoxLayout);
Handlebars.registerPartial('footer', footerLayout);
