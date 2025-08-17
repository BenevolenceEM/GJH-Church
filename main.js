/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

/*Verse of the Day Randomizer*/
document.addEventListener('DOMContentLoaded', function() {
    const verses = [
        "2 Corinthians 5:7 - For we walk by faith, not by sight.",
        "1 Corinthians 16:14 - Let all that you do be done in love.",
        "Romans 3:23 - for all have sinned and fall short of the glory of God,",
        "Genesis 1:1 - In the beginning, God created the heavens and the earth.",
        "Exodus 14:14 - The Lord will fight for you, and you have only to be silent.”",
        "Proverbs 16:3 - Commit your work to the Lord, and your plans will be established.",
        "John 1:1 - In the beginning was the Word, and the Word was with God, and the Word was God.",
        "Ephesians 4:2 - With all humility and gentleness, with patience, bearing with one another in love.",
        "Romans 5:8 - but God shows his love for us in that while we were still sinners, Christ died for us.",
        "1 Samuel 1:27 - For this child I prayed, and the Lord has granted me my petition that I made to him.",
        "Acts 16:31 - And they said, “Believe in the Lord Jesus, and you will be saved, you and your household.”",
        "Romans 5:1 - Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
        "Deuteronomy 6:5 - You shall love the Lord your God with all your heart and with all your soul and with all your might.",
        "Psalm 46:10 - “Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!”",
        "Mark 11:24 - Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.",
        "1 John 4:4 - Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world.",
        "John 3:16 - “For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.'",
        "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        "Romans 15:13 - May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
        "1 Thessalonians 5:16-18 - Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
        "Romans 10:9 - because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.",
        "Romans 1:16 - For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.",
        "Revelation 3:20 -  Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.",
        "Leviticus 19:18 -  You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the Lord.",
        "Joshua 1:9 - Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.”",
        "Proverbs 3:5-6 - Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
        "1 Corinthians 13:4-5 - Love is patient and kind; love does, not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful.",
        "2 Corinthians 7:1 - Since we have these promises, beloved, let us cleanse ourselves from every defilement of body and spirit, bringing holiness to completion in the fear of God.",
        "Numbers 6:24-26: The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace.",
        "Colossians 3:23-24 - Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.",
        "Romans 12:2 - Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
        "John 11:25-26 - Jesus said to her, “I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?”",
        "2 Chronicles 7:14 - if my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
        "Philippians 4:6-7 - Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."
    ];

    const verseBox = document.getElementById('verses-box');

    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const different = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(different/oneDay);

    const verseIndex = dayOfYear % verses.length;
    const dailyVerse = verses[verseIndex];

    verseBox.textContent = dailyVerse;
});

//Share Verses
function shareVerse() {
    const verse = document.getElementById('verses-box').textContent;

    if (navigator.share) {
        navigator.share({
            title: 'Verse of the Day',
            text: verse,
            url: window.location.href
        }).catch((error) => console.log('Sharing failed:', error, 'Try again'));
    } else {
        navigator.clipboard.writeText(verse).then(() => {
            alert('Copied to clipboard!');
        });
    }
}