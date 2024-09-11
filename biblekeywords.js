function getBibleVerse(inputKeyword) {
    const bibleVerses = {
        love: "1 Corinthians 13:4-5 - Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        faith: "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        hope: "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        strength: "Philippians 4:13 - I can do all this through him who gives me strength."
    };

    return bibleVerses[inputKeyword.toLowerCase()] || "Keyword not found. Please try 'love', 'faith', 'hope', or 'strength'.";
}

const userInput = prompt("Enter a keyword (love, faith, hope, strength):");
alert(getBibleVerse(userInput));
