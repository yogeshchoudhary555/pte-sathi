// PTE Sathi - data.js
// SAB original practice content hai, apne shabdon me likha gaya.
// APEUni / Pearson ke asli questions, question bank ya code COPY nahi kiye gaye.
// Sirf concept inspire hai: section, practice flow, feedback.

// ---------- VOCAB: word, English meaning, Hindi meaning (Devanagari), example ----------
const VOCAB = [
 {w:"adopt", en:"to start using something new", hi:"अपनाना", ex:"Students should adopt good study habits."},
 {w:"hinder", en:"to make progress difficult", hi:"रोकना / बाधा डालना", ex:"Lack of practice can hinder your score."},
 {w:"promote", en:"to help something grow", hi:"बढ़ावा देना", ex:"Reading promotes better thinking."},
 {w:"library", en:"a place with books to read and study", hi:"पुस्तकालय", ex:"The library opens early in the morning."},
 {w:"digital", en:"using computers and the internet", hi:"डिजिटल / कंप्यूटर से जुड़ा", ex:"Digital learning is very flexible."},
 {w:"climate", en:"usual weather of a place", hi:"जलवायु", ex:"Climate change affects farming."},
 {w:"flexible", en:"easy to change or adapt", hi:"लचीला", ex:"Online study is flexible for working students."},
 {w:"accessible", en:"easy to reach or use", hi:"सुलभ / आसानी से मिलने वाला", ex:"This course is accessible for all students."},
 {w:"emphasise", en:"to give special importance", hi:"ज़ोर देना", ex:"The teacher emphasised regular practice."},
 {w:"assignment", en:"work given to students", hi:"गृहकार्य / असाइनमेंट", ex:"Submit your assignment before the deadline."},
 {w:"deadline", en:"last date to finish something", hi:"अंतिम तिथि", ex:"Do not miss the deadline."},
 {w:"renewable", en:"energy that does not finish", hi:"नवीकरणीय", ex:"Solar power is renewable energy."},
 {w:"analyse", en:"to study something carefully", hi:"विश्लेषण करना", ex:"AI can analyse large data quickly."},
 {w:"conclusion", en:"final result or decision", hi:"निष्कर्ष", ex:"Write a clear conclusion at the end."},
 {w:"suggest", en:"to give an idea", hi:"सुझाव देना", ex:"Experts suggest daily revision."},
 {w:"improve", en:"to make better", hi:"सुधार करना", ex:"Practice improves pronunciation."},
 {w:"pronunciation", en:"way of saying words", hi:"उच्चारण", ex:"Clear pronunciation helps in speaking."},
 {w:"fluency", en:"smooth and natural speaking", hi:"प्रवाह / धाराप्रवाह बोलना", ex:"Fluency comes from daily speaking."},
 {w:"vocabulary", en:"words known and used", hi:"शब्दावली", ex:"Learn 10 new words every day."},
 {w:"pollution", en:"harmful dirt in air or water", hi:"प्रदूषण", ex:"Traffic increases air pollution."},
 {w:"opportunity", en:"a good chance", hi:"अवसर", ex:"Study abroad is a big opportunity."},
 {w:"community", en:"group of people living together", hi:"समुदाय", ex:"Small businesses help the local community."},
 {w:"environment", en:"surroundings, nature around us", hi:"पर्यावरण", ex:"Protect the environment."},
 {w:"technology", en:"machines, tools and systems", hi:"तकनीक", ex:"Technology changes education fast."},
 {w:"effective", en:"working well, giving good result", hi:"प्रभावी", ex:"Daily revision is very effective."},
 {w:"significant", en:"important, large enough to matter", hi:"महत्वपूर्ण", ex:"Practice made a significant difference."},
 {w:"available", en:"ready to use", hi:"उपलब्ध", ex:"Free notes are available here."},
 {w:"require", en:"to need something", hi:"आवश्यक होना", ex:"This course requires daily practice."},
 {w:"discipline", en:"controlled, regular behaviour", hi:"अनुशासन", ex:"Discipline beats motivation."},
 {w:"confidence", en:"belief in yourself", hi:"आत्मविश्वास", ex:"Speaking daily builds confidence."},
 {w:"challenge", en:"a difficult task", hi:"चुनौती", ex:"PTE is a challenge, but you can clear it."},
 {w:"advantage", en:"a benefit, plus point", hi:"फायदा", ex:"Take advantage of free practice."},
 {w:"resource", en:"something useful, like books or time", hi:"संसाधन", ex:"The library is a great resource."},
 {w:"academic", en:"related to study and education", hi:"शैक्षणिक", ex:"PTE is an academic English test."},
 {w:"overall", en:"in general, total", hi:"कुल मिलाकर", ex:"Your overall score is 58."},
 {w:"situation", en:"condition at a time", hi:"परिस्थिति", ex:"Respond politely to the situation."},
];

// Hindi dictionary banane ke liye (word -> Hindi)
const DICT = {};
VOCAB.forEach(v => DICT[v.w.toLowerCase()] = v.hi);
// Extra mushkil words jo questions me aate hain
Object.assign(DICT, {
 "university":"विश्वविद्यालय","students":"छात्र","government":"सरकार","energy":"ऊर्जा","projects":"परियोजनाएँ",
 "international":"अंतरराष्ट्रीय","professor":"प्रोफेसर","committee":"समिति","results":"परिणाम","applications":"आवेदन",
 "farming":"खेती","health":"स्वास्थ्य","regions":"क्षेत्र","announce":"घोषणा करना","honest":"ईमानदार",
 "bicycle":"साइकिल","invention":"आविष्कार","affordable":"सस्ता / किफायती","leisure":"खाली समय का आनंद",
 "education":"शिक्षा","society":"समाज","knowledge":"ज्ञान","internet":"इंटरनेट","communication":"संचार",
 "exercise":"व्यायाम","muscles":"मांसपेशियाँ","stress":"तनाव","business":"व्यापार","customers":"ग्राहक",
 "artificial":"कृत्रिम","intelligence":"बुद्धिमत्ता / कृत्रिम बुद्धि","privacy":"निजता","diseases":"बीमारियाँ"
});

// ---------- SCORED QUESTIONS: original, apne shabdon me ----------
// type: single | multi | input | order | drag | hiw
const QUESTIONS = [
// READING - FIB Dropdown (single select)
{id:"r-fib-1", sec:"reading", sub:"Fill in Blanks (Dropdown)", q:"Digital learning is flexible. Students can ___ new skills from home, at their own speed.", options:["adopt","hinder","ignore","promote"], answer:"adopt", exp:"Adopt = अपनाना। नई skill अपनाना सही collocation है।"},
{id:"r-fib-2", sec:"reading", sub:"Fill in Blanks (Dropdown)", q:"Students should take advantage ___ the library and its free resources.", options:["for","of","to","with"], answer:"of", exp:"Take advantage of = फिक्स्ड collocation, हमेशा of आता है।"},
{id:"r-fib-3", sec:"reading", sub:"Fill in Blanks (Dropdown)", q:"She has been studying English ___ 2022 and her score is improving every month.", options:["for","since","from","at"], answer:"since", exp:"Since + point of time (2022)। For + duration (3 years) होता है।"},
{id:"r-fib-4", sec:"reading", sub:"Fill in Blanks (Dropdown)", q:"Heavy rain and strong winds ___ flooding in many low areas last week.", options:["causes","caused","cause","causing"], answer:"caused", exp:"Last week = past, इसलिए caused। Rain + winds plural subject? वाक्य past में है, इसलिए caused सही है।"},
// READING - MCQ Single
{id:"r-mcq-1", sec:"reading", sub:"MCQ Single", passage:"Regular reading improves thinking. When people read different books, they meet new ideas, learn new words, and understand other views. This habit also improves focus and problem solving.", q:"What is the main idea of this passage?", options:["Reading only helps in exams","Reading improves thinking and problem solving","Reading is better than writing","People should read only fiction"], answer:"Reading improves thinking and problem solving", exp:"Passage का main idea thinking + problem solving है, बाकी options passage में नहीं हैं।"},
{id:"r-mcq-2", sec:"reading", sub:"MCQ Single", passage:"Small shops give personal service and change quickly for customers. Big companies are large, but small shops know their customers by name and understand local needs better.", q:"Why do small shops have an advantage?", options:["They are cheaper always","They know customers and local needs","They sell more products","They never face competition"], answer:"They know customers and local needs", exp:"Passage में यही कारण दिया है: personal service + local needs।"},
{id:"r-mcq-3", sec:"reading", sub:"MCQ Single", q:"Which sentence is correct?", options:["He is an honest man.","He is a honest man.","He is the honest man always.","He is honest man."], answer:"He is an honest man.", exp:"Honest में h silent है, आवाज़ o से शुरू होती है, इसलिए an।"},
{id:"r-mcq-4", sec:"reading", sub:"MCQ Single", q:"Choose the correct sentence for First Conditional:", options:["If it rains, we would stay home.","If it rains, we will stay home.","If it rains, we stayed home.","If it rain, we will stay home."], answer:"If it rains, we will stay home.", exp:"If + Present Simple → will। Would second conditional में आता है।"},
// READING - MCQ Multiple (multi, negative marking nahi - sirf practice)
{id:"r-mcma-1", sec:"reading", sub:"MCQ Multiple", type:"multi", passage:"Good study habits include daily revision, speaking practice, and learning new words. Students who revise daily remember more and feel less stress before the test.", q:"Which TWO habits are mentioned? (2 sahi chunna)", options:["Daily revision","Watching TV all day","Speaking practice","Sleeping in class"], answer:["Daily revision","Speaking practice"], exp:"Passage में daily revision + speaking practice दोनों हैं।"},
{id:"r-mcma-2", sec:"reading", sub:"MCQ Multiple", type:"multi", q:"Which TWO are collocations? (sahi jodi)", options:["Heavy rain","Strong rain","Take advantage of","Take advantage for"], answer:["Heavy rain","Take advantage of"], exp:"Heavy rain + take advantage of ही natural collocations हैं।"},
{id:"r-mcma-3", sec:"reading", sub:"MCQ Multiple", type:"multi", q:"Which TWO help fluency in Read Aloud?", options:["Reading in chunks","Stopping after every word","Keeping a steady pace","Rushing very fast"], answer:["Reading in chunks","Keeping a steady pace"], exp:"Chunks + steady pace = fluency। Rukna aur bahut tez bolna fluency kharab karta hai।"},
// READING - Re-order Paragraphs (order)
{id:"r-ord-1", sec:"reading", sub:"Re-order Paragraphs", type:"order", q:"Inhe sahi order me lagao (pehle se aakhri tak click karo):", sentences:["First, students should understand the question type.","Finally, they should check their answer before submitting.","Then, they should practice that type daily for 15 minutes.","Overall, regular practice builds confidence."], answerOrder:[0,2,1,3], exp:"Order: Understand → Practice daily → Check → Overall conclusion।"},
{id:"r-ord-2", sec:"reading", sub:"Re-order Paragraphs", type:"order", q:"Sahi order chunno:", sentences:["The library opens at 8 in the morning.","Students can borrow books and use computers there.","It also has a quiet room for reading.","Many students study there before exams."], answerOrder:[0,1,2,3], exp:"Opening → facilities → quiet room → students use it। Logical flow।"},
{id:"r-ord-3", sec:"reading", sub:"Re-order Paragraphs", type:"order", q:"Sahi order chunno:", sentences:["Climate change is affecting rainfall in many areas.","Some places face drought, others face floods.","Farmers find it hard to plan their crops.","Saving water and planting trees can help reduce the damage."], answerOrder:[0,1,2,3], exp:"Problem → effects → farmers problem → solution।"},
// READING - FIB Drag-Drop (click bank words in order)
{id:"r-drag-1", sec:"reading", sub:"Fill in Blanks (Drag-Drop)", type:"drag", q:"Bank se sahi words, sahi order me chunno: The ___ (1) has a new ___ (2) system for students.", bank:["university","digital","old","slow"], answer:["university","digital"], exp:"University + digital system = natural combination।"},
{id:"r-drag-2", sec:"reading", sub:"Fill in Blanks (Drag-Drop)", type:"drag", q:"Bank se chunno: Regular ___ (1) improves heart ___ (2) and reduces stress.", bank:["exercise","health","homework","rain"], answer:["exercise","health"], exp:"Exercise improves heart health = common health collocation।"},
{id:"r-drag-3", sec:"reading", sub:"Fill in Blanks (Drag-Drop)", type:"drag", q:"Bank se chunno: Students should ___ (1) their assignments before the ___ (2).", bank:["complete","deadline","ignore","holiday"], answer:["complete","deadline"], exp:"Complete assignments before deadline = PTE style sentence।"},
// LISTENING - MCQ Single
{id:"l-mcq-1", sec:"listening", sub:"MCQ (Listening)", q:"Speaker ka main point kya hota hai jab woh kehta hai: 'Practice daily, even for 15 minutes, is better than studying 5 hours once a week'?", options:["Long study is best","Daily short practice is better","Practice is not needed","Only weekend study works"], answer:"Daily short practice is better", exp:"Speaker daily short practice ko better bata raha hai।"},
{id:"l-mcq-2", sec:"listening", sub:"MCQ (Listening)", q:"'Take advantage of' ka matlab kya hai?", options:["Avoid something","Use a good chance","Ignore a chance","Delay work"], answer:"Use a good chance", exp:"Take advantage of = achhe mauke ka fayda uthana।"},
{id:"l-mcq-3", sec:"listening", sub:"MCQ (Listening)", q:"Agar sentence me 'lack, difficulties' words hain, to agla word positive hoga ya negative?", options:["Positive","Negative","Dono","Koi nahi"], answer:"Negative", exp:"Lack + difficulties = negative mood, isliye hinder jaisa negative word aayega, promote nahi।"},
// LISTENING - FIB (type answer)
{id:"l-fib-1", sec:"listening", sub:"Fill in Blanks (Listening)", type:"input", q:"Sunke likho (audio ki jagah sentence padho, phir chhupake likho): The university library opens early in the morning for students.", answer:"The university library opens early in the morning for students.", exp:"Write From Dictation jaisa: capital + full stop mat bhoolo, har word exact।"},
{id:"l-fib-2", sec:"listening", sub:"Fill in Blanks (Listening)", type:"input", q:"Is sentence ka aakhri word kya hai? 'Many students prefer to study in groups before their final ___'", answer:"exams", exp:"Final exams = common collocation।"},
{id:"l-fib-3", sec:"listening", sub:"Fill in Blanks (Listening)", type:"input", q:"Blank bharo: The professor emphasised that students should complete their ___ before the deadline.", answer:"assignments", exp:"Complete their assignments = fixed phrase।"},
// LISTENING - Highlight Correct Summary
{id:"l-hcs-1", sec:"listening", sub:"Highlight Correct Summary", q:"Lecture: 'Daily revision helps memory. Students who revise a little every day remember more than students who study only before exams.' Sahi summary chunno:", options:["Daily revision is useless","Daily short revision helps memory more than last-minute study","Exams are easy","Students should not revise"], answer:"Daily short revision helps memory more than last-minute study", exp:"Summary me main idea + comparison dono hone chahiye।"},
{id:"l-hcs-2", sec:"listening", sub:"Highlight Correct Summary", q:"Lecture: 'Small businesses give personal service and understand local needs.' Sahi summary:", options:["Small businesses are always cheap","Small businesses give personal service and know local needs","Big companies are small","Customers do not matter"], answer:"Small businesses give personal service and know local needs", exp:"Summary original idea ko badle bina, chhota karke de।"},
{id:"l-hcs-3", sec:"listening", sub:"Highlight Correct Summary", q:"Lecture: 'AI can analyse data fast and help doctors find diseases early, but rules are needed for privacy.' Sahi summary:", options:["AI is dangerous only","AI helps doctors early, but privacy rules are needed","AI replaces doctors fully","Privacy is not important"], answer:"AI helps doctors early, but privacy rules are needed", exp:"Dono parts: benefit + caution, dono summary me chahiye।"},
// LISTENING - Select Missing Word
{id:"l-smw-1", sec:"listening", sub:"Select Missing Word", q:"Sentence adhoora hai: 'Regular practice improves pronunciation, fluency, and ___ skills.' Missing word kya hoga?", options:["listening","sleeping","cooking","driving"], answer:"listening", exp:"Pronunciation, fluency, listening = speaking-listening group।"},
{id:"l-smw-2", sec:"listening", sub:"Select Missing Word", q:"'The committee will review applications and ___ the results next week.' Missing word?", options:["announce","hide","lose","forget"], answer:"announce", exp:"Review + announce results = natural pair।"},
{id:"l-smw-3", sec:"listening", sub:"Select Missing Word", q:"'Students should take advantage of the library and ___ new words daily.' Missing word?", options:["learn","break","avoid","sell"], answer:"learn", exp:"Learn new words daily = study habit।"},
// LISTENING - Highlight Incorrect Words (click wrong word)
{id:"l-hiw-1", sec:"listening", sub:"Highlight Incorrect Words", type:"hiw", q:"Is sentence me kaunsa word galat hai? (galat word par click karo) - 'The university library opens lately in the morning for students.' Original me 'early' hona chahiye tha.", sentenceWords:["The","university","library","opens","lately","in","the","morning","for","students."], answer:"lately", exp:"Lately = haal hi me, early = jaldi subah। Yahan early sahi hai।"},
{id:"l-hiw-2", sec:"listening", sub:"Highlight Incorrect Words", type:"hiw", q:"Galat word chunno: 'Many students prefer to study in groups before their final holidays.' Original me 'exams' tha.", sentenceWords:["Many","students","prefer","to","study","in","groups","before","their","final","holidays."], answer:"holidays.", exp:"Final exams sahi hai, final holidays nahi।"},
{id:"l-hiw-3", sec:"listening", sub:"Highlight Incorrect Words", type:"hiw", q:"Galat word chunno: 'Climate change affects farming, water supply, and public wealth in many regions.' Original me 'health' tha.", sentenceWords:["Climate","change","affects","farming,","water","supply,","and","public","wealth","in","many","regions."], answer:"wealth", exp:"Public health sahi collocation hai, public wealth nahi।"},
// LISTENING - Write From Dictation (type full sentence)
{id:"l-wfd-1", sec:"listening", sub:"Write From Dictation", type:"input", q:"Sentence likho: Many students prefer to study in groups before their final exams.", answer:"Many students prefer to study in groups before their final exams.", exp:"Har word, capital M, full stop check karo।"},
{id:"l-wfd-2", sec:"listening", sub:"Write From Dictation", type:"input", q:"Sentence likho: The professor explained the main idea with a clear example.", answer:"The professor explained the main idea with a clear example.", exp:"Explained (past) + clear example = dhyan se likho।"},
{id:"l-wfd-3", sec:"listening", sub:"Write From Dictation", type:"input", q:"Sentence likho: Regular practice improves pronunciation, fluency, and listening skills for the exam.", answer:"Regular practice improves pronunciation, fluency, and listening skills for the exam.", exp:"Comma ke baad space, list ke words exact।"},
// SPEAKING - Answer Short Question (input, 1-2 words)
{id:"s-asq-1", sec:"speaking", sub:"Answer Short Question", type:"input", q:"Kitab likhne wale ko kya kehte hain? (English me 1 word)", answer:"author", exp:"Author = लेखक।"},
{id:"s-asq-2", sec:"speaking", sub:"Answer Short Question", type:"input", q:"Hot ka opposite kya hai? (1 word)", answer:"cold", exp:"Hot ↔ Cold।"},
{id:"s-asq-3", sec:"speaking", sub:"Answer Short Question", type:"input", q:"Ek hafte me kitne din hote hain? (English number word)", answer:"seven", exp:"Seven days in a week।"},
{id:"s-asq-4", sec:"speaking", sub:"Answer Short Question", type:"input", q:"Madhumakkhiyan kya banati hain? (1 word)", answer:"honey", exp:"Bees make honey = शहद।"},
{id:"s-asq-5", sec:"speaking", sub:"Answer Short Question", type:"input", q:"December ke baad kaunsa mahina aata hai?", answer:"january", exp:"January = जनवरी।"},
];

// ---------- SPEAKING / WRITING PROMPTS (self-practice, AI scoring NAHI - sirf sample + checklist) ----------
const PROMPTS = [
 {sec:"speaking", sub:"Read Aloud", title:"RA 1 - Bicycle", prompt:"The history of the bicycle shows how a simple invention can change daily life. Early bicycles were difficult to ride and expensive to buy, but later designs became safer, lighter and more affordable. Today, millions of people use bicycles for travel, exercise and leisure in cities around the world.", tip:"Chunks me padho, comma par pause, 3 second se zyada chup mat raho.", sample:"Natural speed, saaf awaaz, har word exact."},
 {sec:"speaking", sub:"Read Aloud", title:"RA 2 - Education", prompt:"Modern universities are changing the way students learn. Instead of only attending lectures in large halls, students now use online platforms, digital libraries and interactive tools to study at their own pace.", tip:"Content words par zor do: universities, online, digital, pace.", sample:"Rukna nahi, galti ho to aage badho."},
 {sec:"speaking", sub:"Read Aloud", title:"RA 3 - Climate", prompt:"Climate change is affecting rainfall, farming and water supply in many parts of the world. Rising temperatures increase droughts in some regions and floods in others, which creates serious problems for food production.", tip:"Full stop par awaaz thodi neeche le jao.", sample:"Steady pace, na bahut tez, na bahut dheema."},
 {sec:"speaking", sub:"Read Aloud", title:"RA 4 - Health", prompt:"Regular exercise improves heart health, strengthens muscles and reduces stress. Doctors recommend at least thirty minutes of walking, cycling or swimming on most days of the week.", tip:"List me har item saaf bolo: walking, cycling, swimming.", sample:"List ke baad pause mat lamba karo."},
 {sec:"speaking", sub:"Repeat Sentence", title:"RS 1-4", prompt:"Audio ki jagah inhe ek baar padho, phir chhupake bolo: 1) The university library opens early in the morning for students. 2) Many students prefer to study in groups before their final exams. 3) The professor explained the main idea with a clear example. 4) Regular practice improves pronunciation, fluency, and listening skills.", tip:"3-4 chunks me yaad karo, shuru + aakhri words pakke pakdo.", sample:"Adha fluent sentence, poore atke hue sentence se behtar hai."},
 {sec:"speaking", sub:"Describe Image", title:"DI 1 - Bar Chart", prompt:"Chart: Online shopping 2020 me 30%, 2024 me 55%. Sabse badi badhotri 2022 ke baad hui. Is chart ko 35 second me describe karo.", tip:"Template: chart shows [topic] → main point + figure → doosra point → overall conclusion.", sample:"The bar chart shows online shopping. The main point is that it rose from 30% to 55%. Overall, online shopping grew fast."},
 {sec:"speaking", sub:"Describe Image", title:"DI 2 - Pie Chart", prompt:"Pie chart: Students ka din - Study 40%, Sleep 30%, Sports 15%, Other 15%. Describe karo.", tip:"Sabse bada slice pehle, phir baaki.", sample:"The pie chart shows how students spend their day. The largest part is study at 40%, followed by sleep at 30%."},
 {sec:"speaking", sub:"Describe Image", title:"DI 3 - Line Graph", prompt:"Line graph: Ek sheher me cycle use 2019 me 10%, 2023 me 28% ho gaya. Describe karo.", tip:"Trend batao: rose, increased, grew.", sample:"The line graph shows cycle use rising from 10% to 28%."},
 {sec:"speaking", sub:"Retell Lecture", title:"RL 1", prompt:"Lecture suno (padho): 'Daily revision helps memory. Students who revise a little every day remember more than students who study only before exams.' Ab apne shabdon me 40 second me dobara batao.", tip:"Template: The lecture was about [topic]. First... Then... In conclusion...", sample:"The lecture was about daily revision. First, the speaker explained that small daily revision helps memory. In conclusion, daily revision is better than last-minute study."},
 {sec:"speaking", sub:"Retell Lecture", title:"RL 2", prompt:"Lecture: 'Small businesses give personal service and understand local needs. They change quickly for customers.' Retell karo.", tip:"Keywords likho, poora sentence mat likho.", sample:"The lecture was about small businesses. The speaker said they give personal service and understand local needs."},
 {sec:"speaking", sub:"Summarize Group Discussion", title:"SGD 1", prompt:"Discussion: Ek student kehta hai online study flexible hai. Doosra kehta hai classroom me focus zyada hota hai. Teesra kehta hai dono ka mix best hai. 2 minute me summary bolo, apni rai mat do.", tip:"Template: The group discussed [topic]. One speaker argued... Another pointed out... Overall, the group agreed...", sample:"Formal, third-person me bolo, 'I think' mat kaho."},
 {sec:"speaking", sub:"Summarize Group Discussion", title:"SGD 2", prompt:"Discussion: Topic - should homework be less? Ek: kam homework se stress kam hoga. Doosra: practice ke liye homework zaroori hai. Summary bolo.", tip:"Har speaker ka point alag note karo.", sample:"Overall agreement ya disagreement saaf batao."},
 {sec:"speaking", sub:"Respond to a Situation", title:"RTS 1", prompt:"Situation: Hotel me AC kharab hai, reception par polite request karo, 40 second me.", tip:"Template: Problem acknowledge → clear request → short reason → polite close (Thank you).", sample:"Excuse me, the AC in my room is not working. Could you please send someone to check it? I would really appreciate your help. Thank you."},
 {sec:"speaking", sub:"Respond to a Situation", title:"RTS 2", prompt:"Situation: Boss se 2 din ki leave maango, reason: family function.", tip:"Polite + clear + short reason.", sample:"Good morning, may I take leave for two days for a family function? I will complete my work before leaving. Thank you."},
 {sec:"speaking", sub:"Respond to a Situation", title:"RTS 3", prompt:"Situation: Library me book late return hui, fine maaf karne ki request karo.", tip:"Sorry bolo, reason do, request saaf rakho.", sample:"I am sorry, my book is late because I was ill. Could you please waive the fine this time? Thank you."},
 {sec:"writing", sub:"Summarize Written Text", title:"SWT 1", prompt:"Passage: 'Daily revision helps memory. Students who revise a little every day remember more than students who study only before exams. Regular practice also reduces stress.' Sirf 1 sentence me summary likho, 5-75 words.", tip:"Template: [Main idea], because [point 1], and [point 2]. Full stop sirf ek.", sample:"Daily revision helps memory because small regular revision improves recall and reduces stress."},
 {sec:"writing", sub:"Summarize Written Text", title:"SWT 2", prompt:"Passage: 'Small businesses create jobs and support local communities. They give personal service and change quickly for customers.' 1 sentence summary likho.", tip:"2 sentences banaye to Form 0 ho jayega.", sample:"Small businesses support communities because they create jobs and give personal service."},
 {sec:"writing", sub:"Essay", title:"Essay 1", prompt:"Topic: Should students study online or in classroom? Apni rai ke saath 200-300 words ka essay likho.", tip:"Intro (topic + position + 2 reasons) → Body 1 → Body 2 → Conclusion. Time: 2 min plan + 15 min likhna + 3 min check.", sample:"Intro me dono side mat uljhao, apni position saaf rakho."},
 {sec:"writing", sub:"Essay", title:"Essay 2", prompt:"Topic: Is technology making students lazy? Essay likho, example ke saath.", tip:"Har body me: reason + explain + example.", sample:"Example real life se do, imaginary data mat banao."},
 {sec:"listening", sub:"Summarize Spoken Text", title:"SST 1", prompt:"Lecture (padho): 'Daily revision helps memory and reduces stress. Students who revise daily remember more.' 50-70 words me summary likho, 3-4 sentences.", tip:"Topic + point 1 + point 2 + conclusion.", sample:"The lecture was about daily revision. It helps memory and reduces stress. Students who revise daily remember more than last-minute learners."},
 {sec:"listening", sub:"Summarize Spoken Text", title:"SST 2", prompt:"Lecture: 'AI can analyse data fast and help doctors find diseases early, but privacy rules are needed.' 50-70 words summary likho.", tip:"Benefit + caution dono likho.", sample:"AI helps doctors by analysing data fast and finding diseases early, but privacy rules are needed for safe use."},
];

// Mock ke liye 10 IDs (mixed, scored wale)
const MOCK_IDS = ["r-fib-1","r-mcq-1","r-mcma-1","r-drag-1","l-mcq-1","l-hcs-1","l-smw-1","l-hiw-1","s-asq-1","r-fib-2"];
