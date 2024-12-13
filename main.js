const friends = [
    { friend: "user0", quote: "mail0" },
    { friend: "winbo", quote: "dumbfuck from poland" },
    { friend: "orca", quote: "chatgtp is racist" },
    { friend: "IanMStudios", quote: "Welcome to PolishBoi's Github Page!" },
    { friend: "CITPMHE", quote: "No" },
    { friend: "Windows12X", quote: "the most epic website of all1!1!1! wowzers!1!1!1!11" },
    { friend: "PolishBoiYT", quote: "im friends with myself thats crazy"}
];

const splashText = $(".splashtext");

function typeText(text, element) {
    let i = 0;
    element.text("");
    const interval = setInterval(function() {
        if (i < text.length) {
            element.text(element.text() + text.charAt(i));
            i++;
        } else {
            clearInterval(interval);
            setTimeout(function() {
                backspaceText(element);
            }, 1000);
        }
    }, 50);
}

function backspaceText(element) {
    let text = element.text();
    const interval = setInterval(function() {
        if (text.length > 0) {
            text = text.slice(0, -1);
            element.text(text);
        } else {
            clearInterval(interval);
            setTimeout(function() {
                changeQuote();
            }, 250);
        }
    }, 10);
}

function changeQuote() {
    const rand = Math.floor(Math.random() * friends.length);
    const friend = friends[rand];
    const quoteText = `${friend.friend} - ${friend.quote}`;
    typeText(quoteText, splashText);
}

$(document).ready(function() {
    changeQuote();
});

function showFriends() {
    $(".friends").toggle();
    $(".windowdim").toggle();
}

function showSocials() {
    $(".socials").toggle();
    $(".windowdim").toggle();
}

function showProjects() {
    $(".projects").toggle();
    $(".windowdim").toggle();
}