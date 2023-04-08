let quizdata =[{
        question: "What define you as a gender",
        options: [
            {
            "label": "A",
            "text": "Man"
        },
        {
            "label": "B",
            "text": "Woman"
        }
    ]},
    {
        "question": "Which type of party do you prefer?",
        "options": [
            {
            "label": "A",
            "text": "Formal or SemiFormal"
        },
        {
            "label": "B",
            "text": "HouseParty"
        }
    ]},
    {
        "question": "Day-Off! What do you wanna do?",
        "options": [
            {
            "label": "A",
            "text": "Hangout with friends in the pub & nice restaurant"
        },
        {
            "label": "B",
            "text": "Netflix in the bed"
        }
    ]},
    {
        "question": "You meet up with friends after a long time!",
        "options": [
            {
            "label": "A",
            "text": "Excited to hear their lives"
        },
        {
            "label": "B",
            "text": "Excited to talk about your life to them"
        }
    ]},
    {
        "question": "Which type of person you do feel more comfortable?",
        "options": [
        {
            "label": "A",
            "text": "Someone I can take care of"
        },
        {
            "label": "B",
            "text": "Someone who takes care of me"
        }
    ]},
    {
        "question": "Which event do you prefer?",
        "options": [
        {
            "label": "A",
            "text": "A workshop with lots of activities and networking"
        },
        {
            "label": "B",
            "text": "A speech from prominent experts on your field"
        }
    ]}
];


let results = {
    "AAAAAA": {
        image: "resultimg/AAAAAA.png",
        description: "You're someone who has a calm and tidy style, and enjoys some alone time. But when it comes to things you're confident about, you actively participate and know how to lead. It's like you're a conductor of an amateur orchestra - independent yet charismatic!",
    },
    "AAAAAB": {
        image: "resultimg/AAAAAB.png",
        description: "You have a composed and calm personality, but you also enjoy being active and leading others. You have a charismatic demeanor that's as soothing as a husky playing the piano. You remind me of a cool senior student who was the president of the student council.",
    },
    "AAAABA": {
        image: "resultimg/AAAABA.png",
        description: "You have a tidy and calm personality. You're like a mysterious man who ignites the protective instincts in others. Everyone would be curious about your thoughts as you tend to get lost in them while watering the flowers alone. It makes me feel like I want to take care of you for some reason.",
    },
    "AAAABB": {
        image: "resultimg/AAAABB.png",
        description: "You're a cool, collected person with a tidy style who's like a meerkat riding a unicycle - it brings out your protective instincts! But when it's time to have fun, you know how to let loose. You have a special charm and unique personality that draws others to you, and you take good care of those around you.",
    },
    "AAABAA": {
        image: "resultimg/AAABAA.png",
        description: "You are a person with a neat style and an active attitude towards achieving what you want, possessing leadership qualities. You enjoy active hobbies and have a solid yet cheerful demeanor. It's like you would say, Let's take out the hot pack from my wool coat and go play VR games on a cold winter day.",
    },
    "AAABAB": {
        image: "resultimg/AAABAB.png",
        description: "You are a charismatic leader who enjoys actively pursuing hobbies with others. You have the classic style of a neat and tidy person, but with a surprising charm. You could be compared to a trump card, with various sides to your personality. Let's go buy tickets together for an indie music festival and have a great time!",
    },
    "AABAAA": {
        image: "resultimg/AABAAA.png",
        description: "You are a quiet and reliable person. You try to keep good manners and have a considerate and honest personality. Your calm demeanor makes people feel warm and comfortable around you.",
    },
    "AABAAB": {
        image: "resultimg/AABAAB.png",
        description: "You are a calm and mature person with a tremendous presence. Even without saying much, you naturally become the center of the crowd. Your innate charisma is irreplaceable.",
    },
    "AABABA": {
        image: "resultimg/AABABA.png",
        description: "You have a quiet and diligent style. You know how to enjoy your alone time, and I can picture you reading a book in the library on a sunny day. Perhaps you could even recommend a book to someone. I feel like I need to keep an eye on you.",
    },
    "AABABB": {
        image: "resultimg/AABABB.png",
        description: "You work quietly but persistently, and sometimes show a determined side. Although you may be slow, you always accomplish what you set out to do, and some people are touched by your determination. Your demeanor reminds me of a baby fox writing a heartfelt letter.",
    },
    
    "AABBAA": {
        image: "resultimg/AABBAA.png",
        description: "You're not the type to feel lonely. You're a bright and mature person who can control your emotions well. Sometimes you seem to draw a line with people and show restraint, but if you go inside that line, you might show unexpected sides of yourself.",
    },
    "AABBAB": {
        image: "resultimg/AABBAB.png",
        description: "You're the type that people love even though you're quiet. People laugh at every word you say, even unintentionally. Maybe it's because you're full of your own special charm. You've become an insider without even realizing it.",
    },
    "AABBBA": {
        image: "resultimg/AABBBA.png",
        description: "You're someone who is a bit guarded with strangers, but once you get comfortable, your lively personality shines through. You may come off as indifferent to those outside of your boundaries, but you let your guard down around those who you find special. Do people often say you're cute? You remind me of a shy baby rabbit.",
    },
    "AABBBB": {
        image: "resultimg/AABBBB.png",
        description: "You have a lively and cute style. You may not like moving around too much, but you enjoy being with people. Your cute and sparkling eyes make everyone's heart flutter. Just your presence alone can be healing for someone.",
    },
    "ABAAAA": {
        image: "resultimg/ABAAAA.png",
        description: "You are a serious and calm person. However, you have a surprising charm like a passionate dancing rhinoceros. I wonder what kind of passion is hidden behind your serious face that's hard to read.",
    },
    "ABAAAB": {
        image: "resultimg/ABAAAB.png",
        description: "You are a relaxed yet simultaneously tension-inducing and mature person. You are perfect in everything you do, whether it's sports or studying. You remind me of a popular senior in school that I used to know.",
    },
    "ABAABA": {
        image: "resultimg/ABAABA.png",
        description: "You are a calm and sometimes protective person. You may look cute, but your efforts to do things on your own add a new charm to you. You have a natural friendliness and are loved wherever you go.",
    },
    "ABAABB": {
        image: "resultimg/ABAABB.png",
        description: "You are a chatty and cute person. You have a sleepy and comfortable charm that stimulates protective instincts. Like a cream bun floating around with a balloon, you are active and calmly take on new challenges.",
    },
    "ABABAA": {
        image: "resultimg/ABABAA.png",
        description: "You are a very attractive person. You seem like a fun person, but also exude a certain charisma that can't be taken lightly. You make people curious about you, but you don't easily let them into your life, which makes them want you even more. You have a feeling that some people have shed tears because of you.",
    },
    "ABABAB": {
        image: "resultimg/ABABAB.png",
        description: "You are a reliable and active person, and your style is popular among many people. With a personality that is open to others and easy to make friends with, you always walk the path of being an insider. Your humorous sense that is pleasant but doesn't cross the line will bring joy to many people.",
    },
    "ABABBA": {
        image: "resultimg/ABABBA.png",
        description: "You are an energetic and independent person who can handle things on your own. You have a gentle side, but also possess the strength to overcome challenges. You're likely to be good at games.",
    },
    "ABABBB": {
        image: "resultimg/ABABBB.png",
        description: "You are full of humor and quite a cute person. Everything you do seems to be cute to others. People can't help but keep an eye on you, as they worry you might get into trouble. It seems like there are always people around you.",
    },
    "ABBAAA": {
        image: "resultimg/ABBAAA.png",
        description: "You have a calm leadership style with a relaxed demeanor. You prefer quietness over noise and you are always dependable. You remind me of a silent, sturdy rhinoceros who quietly hands over a hangover cure after a night of drinking.",
    },
    "ABBAAB": {
        image: "resultimg/ABBAAB.png",
        description: "You have a comfortable yet significant presence. You have a surprising sense of humor but at the same time, you are also mature. You are a reliable and composed person who is fun to be around and can be trusted.",
    },
    "ABBABA": {
        image: "resultimg/ABBABA.png",
        description: "You have a calm personality and tend to lead a solitary life, often arousing protective instincts in others. You're a thoughtful person who enjoys being alone, but for some reason, people feel drawn to you and want to disturb your peace. You're someone who wants to share a warm cup of tea and enjoy a lazy, relaxed time together.",
    },
    "ABBABB": {
        image: "resultimg/ABBABB.png",
        description: "You have a gentle heart and love people. You enjoy sharing even the smallest things with others and find joy in it. Although it may not be anything grand or spectacular, everyone will appreciate and recognize the value of your precious heart.",
    },
    "ABBBAA": {
        image: "resultimg/ABBBAA.png",
        description: "You have a leadership style that calmly leads people. With a warm yet intense presence, people would believe anything you say. Although you also enjoy your alone time, you generously show your warm and sweet side to those around you. ",
    },
    "ABBBAB": {
        image: "resultimg/ABBBAB.png",
        description: "You have a bright smile that illuminates everything around you! You have a sturdy and lovely appearance, like a Samoyed. You know how to find something special in your everyday life, and being around you, it feels like joy is contagious!",
    },
    "ABBBBA": {
        image: "resultimg/ABBBBA.png",
        description: "You seem to enjoy being a homebody, cozying up in bed and just rolling around. While you are cheerful and lovely, you also value your alone time. It's important for you to have some time to yourself!",
    },
    "ABBBBB": {
        image: "resultimg/ABBBBB.png",
        description: "As a cute person who likes to chat with close friends, you don't like to move around too much, but you surprisingly participate diligently in group events. You cherish those around you and enjoy sharing even the smallest things. You are a sweet person!",
    },
    "BAAAAA": {
        image: "resultimg/BAAAAA.png",
        description: "You're a cool person who knows how to focus on what you're confident in. At first glance, you may not seem like it, but you know how to enjoy your alone time and you have a deep and calm personality. Your ability to pursue your own passions and stay committed to them is impressive, and it reminds me of a diligent music student who never gives up on practicing.",
    },
    "BAAAAB": {
        image: "resultimg/BAAAAB.png",
        description: "You have a calm but strong charisma. Your soft-spoken words have an irresistible weight to them, and it's as if you're a boss who can hold a meeting with ease. People can't help but be drawn to your charm, and it seems like there are many who fall for your charismatic personality.",
    },
    "BAAABA": {
        image: "resultimg/BAAABA.png",
        description: "You are a fascinating woman who arouses protective instincts in others! You may seem calm and quiet, but you are actually quite competent and able to handle things on your own. Like a baby chick singing in the rain, you are curious and intriguing, and people can't help but want to know more about you.",
    },
    "BAAABB": {
        image: "resultimg/BAAABB.png",
        description: "You are a man with a tidy style and a calm personality, who rides a one-wheeled bicycle like a meerkat, arousing protective instincts in others. However, you also know how to have fun when it's time to play. You have a special personality and charm that make those around you feel well taken care of.",
    },
    "BAABAA": {
        image: "resultimg/BAABAA.png",
        description: "You have a strong and clear set of principles, and you're proactive while still staying within your boundaries. Your calm charisma makes people feel secure and want to rely on you, while your energetic and lively personality brings joy to those around you.",
    },
    "BAABAB": {
        image: "resultimg/BAABAB.png",
        description: "You're like a colorful peacock that leads people to enjoy hobbies together. Your clean and polished style is classic, but you're also versatile and fun to be around, just like a versatile trump card. You give off a startup team leader's energetic vibe.",
    },
    "BAABBA": {
        image: "resultimg/BAABBA.png",
        description: "You are an adorable yet reliable person! You don't shy away from group activities but also enjoy solo adventures. Despite being often showered with cuteness, you're not weak and can handle social situations with ease. You're like a hardworking penguin carrying a backpack almost as big as yourself.",
    },
    "BAABBB": {
        image: "resultimg/BAABBB.png",
        description: "You love being lively and hanging out with people. You have a knack for making others happy and are welcomed in any group. Your lively and chirpy nature is surprisingly attractive, making you remind me of an innocent little bird.",
    },
    "BABAAA": {
        image: "resultimg/BABAAA.png",
        description: "You are a calm and wise person who listens well to others and provides thoughtful responses. Your quiet and diligent approach to your work is attractive to everyone around you, and people can always count on you for support. You give off a warm and comforting presence that makes others feel at ease.",
    },
    "BABAAB": {
        image: "resultimg/BABAAB.png",
        description: "You are a composed and mature woman. Even without saying much, you naturally become the center of attention and take on a leadership role among your peers. Everyone becomes completely captivated by your ability to lead others.",
    },
    "BABABA": {
        image: "resultimg/BABABA.png",
        description: "You have a quiet and diligent style. You seem like someone who would read a book while soaking in a cocoa bath, and you might even recommend books to those around you. When people see you, they feel like they want to protect you, but in reality, you're doing just fine on your own",
    },
    "BABABB": {
        image: "resultimg/BABABB.png",
        description: "You go about your work in a steady and persistent manner, but sometimes you show a determined side. You have a cute side like a sweet cupcake, and sometimes you may be a bit shy, but you always follow through on what you set your mind to. You make others think of a cupcake with a heartfelt message in a letter. Your sincerity will be conveyed to everyone around you.",
    },
    "BABBAA": {
        image: "resultimg/BABBAA.png",
        description: "You are a bright and mature person who can control your emotions well. You don't get lonely when you're alone. You have clear boundaries, but within them, you are generous and trustworthy to everyone",
    },
    "BABBAB": {
        image: "resultimg/BABBAB.png",
        description: "You are the type of person who is liked by everyone even though you are quiet. Like a poodle that reads books alone, but everyone shows affection. Your every word seems to make people around you feel good. You've become an insider without even realizing it.",
    },
    "BABBBA": {
        image: "resultimg/BABBBA.png",
        description: "You are someone who is a bit reserved with strangers, but if you get to know them, they can see your lively personality. You may seem indifferent to people outside of your boundaries, but you let your guard down around those who you consider special. Do people often tell you that you're cute? You remind me of a shy baby rabbit.",
    },
    "BABBBB": {
        image: "resultimg/BABBBB.png",
        description: "You have a lively and cute style. You may not like moving around too much, but you enjoy being with people. Your adorable eyes make everyone's heart skip a beat. Just your presence alone can heal someone.",
    },
    "BBAAAA": {
        image: "resultimg/BBAAAA.png",
        description: "You make a strong and cool impression with your active personality. You seem like a cool older sister with a hidden secret. It's hard to approach you, but you shine brightly even on your own. You're the kind of person that once you meet, you'll never forget.",
    },
    "BBAAAB": {
        image: "resultimg/BBAAAB.png",
        description: "You're a passionate and brave person who approaches tasks calmly and maturely. Do people often ask for your help because of your reliable and cheerful leadership? It's hard to refuse your confident and cheerful nature!",
    },
    "BBAABA": {
        image: "resultimg/BBAABA.png",
        description: "You enjoy a comfortable atmosphere and are a calm person who doesn't raise their voice even when angry. People find your calm demeanor somewhat cute, and I wonder if your hobby is searching for good restaurants. You're like a hamster eating sunflower seeds all contentedly!",
    },
    "BBAABB": {
        image: "resultimg/BBAABB.png",
        description: "You're a lovely person who enjoys being with others, but you're not reckless. You're always diligent. Even when choosing food, people find your serious demeanor adorable.",
    },
    "BBABAA": {
        image: "resultimg/BBABAA.png",
        description: "You are a very charming woman. Your eloquent words can easily sway others. However, you tend to keep others at arm's length, which only makes them more attracted to you. You have probably made many people shed tears because of you.",
    },
    "BBABAB": {
        image: "resultimg/BBABAB.png",
        description: "You have an attractive and popular style. With a personality that is not shy to approach anyone, you always have many friends. Your cheerful leadership style is like that of a kumiho, leading people to you effortlessly.",
    },
    "BBABBA": {
        image: "resultimg/BBABBA.png",
        description: "You are someone who is active but also capable of working alone with determination. You may be sensitive to emotions and have a hard time dealing with moments of hurt, but you also possess resilience to overcome them. You are like a cute otter building its clam shell home, with both cuteness and passion!",
    },
    "BBABBB": {
        image: "resultimg/BBABBB.png",
        description: "You are a cute person with a bit of a playful side. You enjoy frolicking and wandering around, and your unpredictable nature adds to your charm. Oh, you also seem to enjoy drinking, although you may get tipsy quickly. With your lively personality, there always seems to be a crowd around you! : Casual English interpretation",
    },
    "BBBAAA": {
        image: "resultimg/BBBAAA.png",
        description: "You are someone who leads others in a calm and composed manner. You remind me of a graceful doe, enjoying a cup of coffee alone with a book in a sunny cafe. You prefer peace and comfort over loudness and activity, and always seem to have an abundance of leisure time.",
    },
    "BBBAAB": {
        image: "resultimg/BBBAAB.png",
        description: "You are mature but also have a bit of a playful side to you. You enjoy sharing everyday moments with others, but tend to seek out relaxation rather than chaos. I can imagine you enjoying a glass of soju at a local pocha, and your charming personality is reminiscent of a cute and dainty sheep.",
    },
    "BBBABA": {
        image: "resultimg/BBBABA.png",
        description: "You are a calm person with a protective instinct. You are like a mochi cake wrapped in a blanket, reading a book in your cozy room. You have a cute heart that somehow makes people feel warm and fuzzy inside. You enjoy drinking warm tea with someone and spending lazy, relaxing time together. ",
    },
    "BBBABB": {
        image: "resultimg/BBBABB.png",
        description: "You are a person who is a bit shy, but actually loves people a lot. You appreciate even small things and enjoy sharing them with others. Everyone will appreciate your precious heart, even if it's not something grand or extravagant.",
    },
    "BBBBAA": {
        image: "resultimg/BBBBAA.png",
        description: "You have a calming presence and your gentle smile can make anyone feel at ease. At the same time, you have your own lively and cheerful personality that leads people in a comfortable way. It feels like you will suggest going together to a cafe where you went alone yesterday and had a delicious latte.",
    },
    "BBBBAB": {
        image: "resultimg/BBBBAB.png",
        description: "You are someone who knows how to find the special moments in everyday life. You seem to pursue comfortable yet exciting things like wearing pajamas with a blanket and setting off fireworks at home rather than going to fancy restaurants. Being around you makes people naturally happy.",
    },
    "BBBBBA": {
        image: "resultimg/.png",
        description: "You seem to be quite a homebody, enjoying being one with your bed and phone. Despite being cheerful and lovely, you value your alone time, as it is essential for you to unwind!",
    },
    "BBBBBB": {
        image: "resultimg/.png",
        description: "You're a cute person who enjoys chatting about little things. You're like a lazy panda who doesn't like to move around much, but surprisingly, you don't mind joining in on drinking sessions. You're happiest when you're chatting with your comfortable friends in a comfortable place! ",
    },
};
