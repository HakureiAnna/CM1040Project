const title = "past issues directory";

// copy links and remove directory links
const links = [...commonLinks];
links.splice(2, 1);

// this function is used to create the HTML required to display issues as a list
function listIssues(issues) {
    issues.sort((issueA, issueB) => issueA.issueNo > issueB.issueNo? -1: 1);
    let retVal = '<div id="pastIssues">';
    for (var i=0; i<issues.length; ++i) {
        retVal += '<div class="pastIssue';
        if (!issues[i].available) {
            retVal += ' unavailable';
        }
        retVal += '">';
        if (issues[i].available) {
            retVal += '<a href="./issues/issue' + issues[i].issueNo + '.html">';
        }
        retVal += '<img class="issueImg" src="' + issues[i].image + '" alt="' + issues[i].title + '">';
        retVal += '<div class="issueMiddle">';
        retVal += '<span class="issueTitle">Issue #' + issues[i].issueNo + '</span><br/>';
        if (!issues[i].available)
        {
            retVal += '<span class="issueSubtitle">(Temporarily Unavailable)</span>';
        }
        retVal += '</div>';
        if (issues[i].available) {
            retVal += '</a>';
        }
        retVal += '</div>';
    }
    retVal += '</div>';
    return retVal;
}

const content = [
    {
        title: 'past issues directory',
        content: `
        <p>Take a look at our past issues to learn more about cassettes!</p>
        <p>Note: past issues may be made temporarily unavailable due to a variety of reasons （content update, routine site maintenance etc.). Be sure to check back regularly if some of the site content is currently unavailable.</p>
        ` + listIssues(issues) + `
        <p class="center">More issues coming soon...</p>
        `
    }
]