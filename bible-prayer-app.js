let apikey = 'YOUR_API_KEY';
let accesstoken = apikey
async function getBibleVerse(inputKeyword, accessToken) {
    const bibleVerses = {
        love: "1 Corinthians 13:4-5 - Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        faith: "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        hope: "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        strength: "Philippians 4:13 - I can do all this through him who gives me strength.",
        depression: "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.",
        suicide: "John 10:10 - The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.",
        addiction:"1 Corinthian 13:10 - No temptation has overtaken you that is not common to man.God is faithful",
        hunger: "psalms 22:26 - The afflicted shall eat and be satisfied;those who seek him praise the Lord",
        pain: "psalms 25:18 - Consider my affliction and my trouble,and forgive all my sins.",
        bereavement: "Psalm 34:18 - The Lord is near to the brokenhearted and save the crushed in spirit.",
        anxiety: "1 Peter 5:7 - casting all your anxieties on him, because he cares for you.",
        grace: "Psalm 86:6 - Give ear, O Lord, to my prayer;listen to my plea for grace.",
        finances: "Matthew 6:19 - “Do not lay up for yourselves treasures on earth, where moth and rust[e] destroy and where thieves break in and steal,",
        harm: "Exodus 21:22 -  But if there is harm,[d] then you shall pay life for life,",
        sick: "James 5:14- Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord.", 
        



    };

    const localVerse = bibleVerses[inputKeyword.toLowerCase()];
    if (localVerse) {
        return localVerse;
    }

    const storedVerse = localStorage.getItem(inputKeyword.toLowerCase());
    if (storedVerse) {
        return storedVerse;
    }

    const baseUrl = 'https://api.biblegateway.com/2/bible/osis/';
    const url = `${baseUrl}${inputKeyword}/NIV?access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const verseText = data.text; // Adjust this based on the actual API response structure
        localStorage.setItem(inputKeyword.toLowerCase(), verseText);
        return verseText;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return 'An error occurred while fetching the Bible verse.';
    }
}

// Example usage:
const userInput = prompt("Enter a keyword (love, faith, hope, strength, depression, suicide):");
const accessToken = 'your_access_token_here'; // Replace with your actual access token
getBibleVerse(userInput, accessToken).then(verse => alert(verse));



