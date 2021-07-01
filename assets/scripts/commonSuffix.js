/*
 * Common javascript is split into two files, commonPrefix.js and commonSuffix.js.
 * In the suffix file, we perform the instantiation of the templates that are common
 * to all pages.
 */
// compile templates
const titleTemplate = Handlebars.compile(titleLayout);

const template = Handlebars.compile(layout);

// instantiate the templates and render within the page's DOM structure
$('title').html(titleTemplate({
    siteTitle: siteTitle,
    title: title
}));

$('#container').html(template({
    siteTitle: siteTitle,
    title: title,
    links: links,
    content: content,
    prefix: prefix   
}));
