/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const mainContent = document.querySelector('main');
const navUL = document.querySelector('#navbar__list');
const navContainer = document.querySelector('.nav-icon-container')
const sections = [
    {
        "header": "This is my header 1",
        "navtext": "Section 1",
        "paragraphs": [
            "Paragraph 1 Section 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Paragraph 2 Section 1 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
    {
        "header": "This is my header 2",
        "navtext": "Section 2",
        "paragraphs": [
            "Paragraph 1 Section 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Paragraph 2 Section 2 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
    {
        "header": "This is my header 3",
        "navtext": "Section 3",
        "paragraphs": [
            "Paragraph 1 Section 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Paragraph 2 Section 3 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
    {
        "header": "This is my header 4",
        "navtext": "Section 4",
        "paragraphs": [
            "Paragraph 1 Section 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Paragraph 2 Section 4 Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    }
]

// Height of VP to use to compare against how much of sector elem that is in VP
let viewPortHeight = window.innerHeight;
// Element whos vertical mid point is closest to the viewportActiveCutoffPoint
// will be set in active state
let viewportActiveCutoffPoint = viewPortHeight / 3;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/* Report viewportheight and recalculate on window resize */
function reportWindowHeight() {
    viewPortHeight = window.innerHeight
}
window.addEventListener('resize', reportWindowHeight);

/* Helper functions for creating a Content Section*/
function makeSectionElem(sectionId, sectionNavText) {
    const section = document.createElement('section');
    section.setAttribute('id', sectionId);
    section.setAttribute('data-nav', sectionNavText.toLowerCase());

    return section;
}

function makeSectionContainer() {
    const container = document.createElement('div')
    container.setAttribute('class', 'landing__container');
    return container
}

function makeSectionHeader(headerStr) {
    const headerElem = document.createElement('h2');
    const headerTextNode = document.createTextNode(headerStr)
    headerElem.appendChild(headerTextNode);
    return headerElem
}

function makeParagraphContent(paragraphs) {
    const paraGraphContainer = document.createElement("div");
    for (paragraph of paragraphs) {
        let paragraphElem = document.createElement('p');
        let paragraphContent = document.createTextNode(paragraph);
        paragraphElem.appendChild(paragraphContent);
        paraGraphContainer.appendChild(paragraphElem);
    }
    return paraGraphContainer
}

function makeSection(sectionNavText, headerStr, paragraphs) {
    const sectionId = sectionNavText.toLowerCase().replace(' ', '')
    const section = makeSectionElem(sectionId, sectionNavText);
    const container = makeSectionContainer();
    const header = makeSectionHeader(headerStr);
    const paragraphContent = makeParagraphContent(paragraphs);
    container.appendChild(header);
    container.appendChild(paragraphContent);
    section.appendChild(container);
    return section
}

function getTargetActiveSection(elems) {
    let leastDistance = null
    let leastDistanceElemId = null

    elems.forEach(function (e) {
        elemRect = e.getBoundingClientRect();
        elemMidpointPos = elemRect.top + elemRect.height / 2;
        ElemDistansMidpont = Math.abs(viewportActiveCutoffPoint - elemMidpointPos);
        if (!leastDistance) {
            leastDistance = ElemDistansMidpont;
            leastDistanceElemId = e.id;
        } else if (ElemDistansMidpont <= leastDistance) {
            leastDistance = ElemDistansMidpont;
            leastDistanceElemId = e.id;
        }
    })
    return document.querySelector('#' + leastDistanceElemId);
}

function setActiveState() {
    const elems = document.querySelectorAll('section');
    // Find section where mid position is positive and closest to 0
    let targetActiveSection = getTargetActiveSection(elems);
    // Get current activesection
    let activeSection = document.querySelector('.your-active-class');
    // If Target and current differ set correct activeSection
    if (targetActiveSection !== activeSection) {
        // If there is an active section remove active class attribute
        if (activeSection) {
            activeSection.removeAttribute('class', 'your-active-class');
        }
        targetActiveSection.setAttribute('class', 'your-active-class');
    }
}

// Navigation functions

function toggleMenu() {
    navList = document.querySelector('#navbar__list');
    if (navList.classList.contains('hidden')) {
        navList.removeAttribute('class', 'hidden');
    } else {
        navList.setAttribute('class', 'hidden');
    }
}

function scrollNav(event) {
    const targetSectionDataNav = event.target.getAttribute('data-nav');
    const targetSection = document.querySelector('#' + targetSectionDataNav);
    targetSection.scrollIntoView();
    toggleMenu()
}

// Create Navigation Element functions
function makeListItem(section) {
    elem = document.createElement('li');
    elem.setAttribute('class', 'menu__link');
    elem.setAttribute('data-nav', section.navtext.toLowerCase().replace(' ', ''))
    navText = document.createTextNode(section.navtext);
    elem.appendChild(navText);
    return elem;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// make ContentSections and Nav

sections.forEach(function (section) {
    // Sections
    sectionElem = makeSection(section.navtext, section.header, section.paragraphs);
    mainContent.appendChild(sectionElem);

    // Nav
    navListElem = makeListItem(section);
    navListElem.addEventListener('click', scrollNav)
    navUL.appendChild(navListElem);
});

// Add class 'active' to section when near viewportActiveCutoffPoint of viewport
document.addEventListener('scroll', setActiveState)

// Add eventlistener to menu

navContainer.addEventListener("click", toggleMenu)
