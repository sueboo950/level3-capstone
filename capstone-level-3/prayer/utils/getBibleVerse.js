export function getBibleVerse(inputText = "", userName = "Guest") {
    const bibleVerses = {
        love: "1 Corinthians 13:4-5 - Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        faith: "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        hope: "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        strength: "Philippians 4:13 - I can do all this through him who gives me strength.",
        depression: "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.",
        suicide: "John 10:10 - The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.",
        addiction: "1 Corinthians 10:13 - No temptation has overtaken you that is not common to man. God is faithful.",
        hunger: "Psalms 22:26 - The afflicted shall eat and be satisfied; those who seek him praise the Lord.",
        pain: "Psalms 25:18 - Consider my affliction and my trouble, and forgive all my sins.",
        bereavement: "Psalm 34:18 - The Lord is near to the brokenhearted and saves the crushed in spirit.",
        anxiety: "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.",
        grace: "Psalm 86:6 - Give ear, O Lord, to my prayer; listen to my plea for grace.",
        finances: "Matthew 6:19 - Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal.",
        harm: "Exodus 21:22 - But if there is harm, then you shall pay life for life.",
        sick: "James 5:14 - Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord."
    };

    const inputWords = inputText.toLowerCase().split(/\W+/);
    let verseFound = false;
    let verse = "";

    for (const word of inputWords) {
        if (bibleVerses[word]) {
            verse = bibleVerses[word];
            verseFound = true;
            break;
        }
    }

    const messageContainer = document.getElementById('messageContainer');
    if (messageContainer) {
        // Clear previous content
        messageContainer.innerHTML = "";

        if (verseFound) {
            messageContainer.innerHTML = `
                Hi ${userName}! We want to thank you for your prayer request, someone will reach out to you shortly. According to your request, please see the Bible verse below for your reading.
            `;
        } else {
            messageContainer.innerHTML = `
                Thank you for your request! Someone will reach out to you within 48 hours.
            `;
        }
    }

    return verse;
}

