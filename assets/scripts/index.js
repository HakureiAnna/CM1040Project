const title = "home";

// create copy of links and remove home link
const links = [...commonLinks];
links.splice(0, 1);

// functions to implement the slideshow
// constructor to create the slideshow object
function Slideshow(id, issues, buttons, links, caption)  {
    return {
        id: id,
        issues: issues,
        buttons: buttons,
        links: links,
        caption: caption
    };
}

// adaptation of the static slideshow to allow dynamic content to be inserted into the slideshow correctly
function createSlideshow(slideshow) {
    let retVal = '<div class="slideshow">';
    retVal += '<a id="' + slideshow.links[0].id + '">';
    for (var i=0; i<slideshow.issues.length; ++i) {
        retVal += '<div class="slideshowSlide">';
        retVal += '<div class="slideshowNo">' + (i+1) + '/' + slideshow.issues.length + '</div>';
        retVal += '<img src="' + slideshow.issues[i].image + '">';
        retVal += '</div>';
    }
    retVal += '</a>';

    retVal += '<a class="slideshowPrevBtn" id="' + slideshow.buttons[0].id + '" onclick="changeSlide(-1)">&#10094;</a>';
    retVal += '<a class="slideshowNextBtn" id="'  + slideshow.buttons[1].id + '" onclick="changeSlide(1)">&#10095;</a>';

    retVal += '<a id="' + slideshow.links[1].id + '">';
    retVal += '<div class="slideshowCaption">';
    retVal += '<p id="' + slideshow.caption.id + '"></p>';
    retVal += '</div>';
    retVal += '</a>';

    retVal += '<div class="slideshowRow">';
    for (var i=0; i<slideshow.issues.length; ++i) {
        retVal += '<div class="slideshowCol">';
        retVal += '<img class="slideshowTB" src="' + slideshow.issues[i].image + '" onclick="currentSlide(' + i + ')" alt="Issue #' + slideshow.issues[i].issueNo + ' ' + slideshow.issues[i].title + '">';
        retVal += '</div>';
    }
    retVal += '</div>';

    retVal += '</div>';

    return retVal;
}

// initialize slideshow object with correct values
const slideshow = new Slideshow(
    'slideshow',
    issues,
    [
        {
            id: 'prev',
        },
        {
            id: 'next',
        },
    ],
    [
        {
            id: 'imageLink',
        },
        {
            id: 'captionLink'
        },
    ],
    {
        id: 'caption'
    }
);

// helper used to change displayed issue with the prev, next buttons
function changeSlide(i) {    
    showSlides(slideIndex += i);
}

// helper used to change displayed issue when the thumbprint of the relevant issue is clicked.
function currentSlide(i) {
    showSlides(slideIndex = i);
}

// function used to correctly render the currently selected issue and make adjustments according to if the selected issue is available
function showSlides(i) {
    const slides = $('.slideshowSlide');
    const thumbprints = $('.slideshowTB');
    const caption = $('#' + slideshow.caption.id);
    const imageLink = $('#' + slideshow.links[0].id);
    const captionLink = $('#' + slideshow.links[1].id);
    
    if (i >= slides.length) {
        slideIndex = 0;
    } else if (i < 0) {
        slideIndex = slides.length-1;
    }

    slides.each(function(index) {
        $(this).css('display', 'none');        
        if (index == slideIndex) {
            $(this).css('display', 'block');

            if (slideshow.issues[slideIndex].available) {
                imageLink.attr('href', './issues/issue' + (slideIndex + 1) + '.html');
            } else {
                imageLink.removeAttr('href');
            }
        }
    });
    thumbprints.each(function(index) {
        $(this).removeClass('active');
        if (index == slideIndex) {
            $(this).addClass('active');
            caption.html($(this).attr('alt'));
            if (slideshow.issues[slideIndex].available) {
                captionLink.attr('href', './issues/issue' + (slideIndex + 1) + '.html');
            } else {
                captionLink.removeAttr('href');
            }
        }
    });
}

const content = [
    {
        title: 'Welcome & Introduction',
        content: `
        <p>
            Although use of cassette tapes, in particular music cassettes seems to be a relic of the past. There has been a renewed interest in cassette tapes and relevant technologies both in older and younger generations. People who are enjoying cassettes for a variety of reasons, including but not limited to the retro feel of analog music, or for that warm unique sound that changes with each winding of the tape that is unique to analog music, and impossible to experience in the current digital era. We are creating this magazine, Cassette Maniacs, in the hope of educating and attracting more people to enjoy cassettes.
        </p>
        <p>
            We are using the term Cassette Maniacs, not in the everyday English usage of the word 'maniac' which usually have a negative meaning associated with it. But rather used in its colloquial Japanese meaning (カセット　マニアック)，which simply means people who are really interested and dedicated to something.
        <p>
        `,
    },
    {
        title: 'Exciting Content',
        content: `
    <p>
        As per our stated goal to introduce and attract more people to cassette tapes, we will be publishing a weekly issued bitesize magazine, going indepth with cassette related topics. Check out some of our past issues below.
    </p>    
    ` + createSlideshow(slideshow)
    },
    {
        title: 'subscribe to us today!',
        content: `
    <p>
    To avoid missing up on the latest issue and to receive updates about cassette related events around the globe, be sure to subscribe to our site.
    </p>
    <a id="subscribeBtn" href="./subscribe.html">Subcribe</a>
    `  
    }
];