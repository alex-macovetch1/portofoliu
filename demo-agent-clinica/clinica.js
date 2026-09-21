/* ------------------------------------------------------------------
   DENTIRA — clinică stomatologică FICTIVĂ, folosită ca demonstrație.
   Ca să faci un demo pentru o clinică reală: copiază folderul,
   schimbă DOAR fișierul ăsta. Vezi ..\CUM-FAC-UN-DEMO-NOU.md
------------------------------------------------------------------- */

window.CLINICA = {

  nume:      "Dentira",
  handle:    "dentira.md",
  tagline:   "Clinică stomatologică · Chișinău",
  initiale:  "D",
  culoare1:  "#2563eb",
  culoare2:  "#7c3aed",

  adresa:    "str. Alexandru cel Bun 42, Chișinău",
  telefon:   "+373 60 12 34 56",
  oraLibera: "21:47",

  titlu: "Asistentul care răspunde pacienților când recepția nu poate",

  salut: "Bună! Sunt asistenta clinicii Dentira. Cu ce vă pot ajuta?",

  program: [
    ["Luni – Vineri", "09:00 – 19:00"],
    ["Sâmbătă",       "09:00 – 15:00"],
    ["Duminică",      "Închis"]
  ],

  servicii: [
    { nume: "Consultație + radiografie", pret: "250 lei",           durata: "30 min · se scade din tratament" },
    { nume: "Detartraj + air-flow",      pret: "700 lei",           durata: "45 min" },
    { nume: "Plombă (obturație)",        pret: "900 – 1.400 lei",   durata: "60 min" },
    { nume: "Tratament de canal",        pret: "2.200 – 3.500 lei", durata: "1 – 2 ședințe" },
    { nume: "Extracție simplă",          pret: "700 lei",           durata: "30 min" },
    { nume: "Albire profesională",       pret: "3.500 lei",         durata: "90 min · ambele arcade" },
    { nume: "Implant + coroană",         pret: "12.000 – 16.000 lei", durata: "plan în 2 etape" },
    { nume: "Coroană ceramică",          pret: "4.800 lei",         durata: "2 vizite" }
  ],

  faq: [
    { q: "Lucrați cu CNAM?",
      a: "Nu, suntem clinică privată. Pentru extracții și consultații se poate deconta parțial prin polița de asigurare medicală facultativă, dacă o aveți." },
    { q: "Se plătește în rate?",
      a: "Da, pentru lucrări de la 8.000 lei — rate 0% pe 6 luni prin card de cumpărături. Se aprobă în aceeași zi." },
    { q: "Consultația e gratuită?",
      a: "Consultația cu radiografie costă 250 lei și se scade integral din costul tratamentului, dacă începeți tratamentul la noi." },
    { q: "Primiți copii?",
      a: "Da, de la 4 ani. Avem un medic separat pentru copii, marți și joi." },
    { q: "Cât de repede pot veni dacă mă doare?",
      a: "Ținem două locuri libere în fiecare zi pentru urgențe. De obicei vă putem primi în aceeași zi sau a doua zi dimineață." },
    { q: "Unde parchez?",
      a: "Parcare gratuită în curtea clădirii, intrare din str. Bănulescu-Bodoni. Sunt 6 locuri, de obicei e liber." },
    { q: "Ce limbi vorbiți?",
      a: "Română și rusă. Un medic vorbește și engleză." }
  ],

  /* ----------------------------- SCENARII ----------------------------- */

  scenarii: [

    /* 1 — PACIENT NOU, durere + întrebare de preț */
    {
      titlu: "1 · Pacient nou",
      zi: "Sâmbătă, 21:47",
      ora: "21:47",
      descriere: "Sâmbătă seara, recepția e închisă de 7 ore. Pacientul nu așteaptă până luni.",
      mesaje: [
        { de:"pacient", text:"Bună, mă doare o măsea și vreau să știu cât costă consultația." },
        { de:"clinica", text:"Bună seara! Îmi pare rău că vă doare — hai să vedem ce putem face.",
          set:{ motiv:"Durere dentară", sursa:"Instagram DM" } },
        { de:"clinica", text:"Consultația cu radiografie e 250 lei și se scade din tratament dacă rămâneți la noi." },
        { de:"clinica", text:"Ca să știu cât e de urgent: durerea e continuă sau apare doar la rece și la dulce?" },
        { de:"pacient", text:"Continuă, de vreo două zile. Noaptea e mai rău.", pauza:1400 },
        { de:"clinica", text:"Durerea care se înrăutățește noaptea înseamnă de obicei că e prins nervul. Nu e de amânat până luni.",
          set:{ urgenta:"Urgent" } },
        { de:"clinica", text:"Ținem două locuri libere pentru urgențe. Mâine, duminică, suntem închiși, dar luni pot să vă bag la 09:30 sau la 14:00." },
        { de:"pacient", text:"09:30 e bine." },
        { de:"clinica", text:"Perfect. Îmi spuneți numele complet?" },
        { de:"pacient", text:"Andrei Munteanu" },
        { de:"clinica", text:"Mulțumesc, Andrei. Și un număr de telefon pentru confirmare?",
          set:{ nume:"Andrei Munteanu" } },
        { de:"pacient", text:"069 12 34 56" },
        { de:"clinica", text:"Gata. V-am notat luni, 09:30, str. Alexandru cel Bun 42. Recepția vă sună dimineață să confirme.",
          set:{ telefon:"069 12 34 56", cand:"Luni, 09:30" } },
        { de:"clinica", text:"Până atunci: puteți lua un analgezic obișnuit, dar nu puneți aspirină direct pe gingie — arde țesutul. Dacă durerea devine insuportabilă, scrieți-mi aici și vă mut mai devreme.",
          nota:"Marcat URGENT · recepția a primit notificare pe telefon" }
      ]
    },

    /* 2 — ÎNTREBARE DE PREȚ */
    {
      titlu: "2 · Întrebare de preț",
      zi: "Marți, 22:10",
      ora: "22:10",
      descriere: "Cea mai frecventă întrebare în DM. Fără răspuns, pacientul întreabă altă clinică.",
      mesaje: [
        { de:"pacient", text:"Bună ziua, cât costă un implant?" },
        { de:"clinica", text:"Bună seara! Implantul cu coroană e între 12.000 și 16.000 lei, în funcție de sistemul ales și dacă e nevoie de adiție de os.",
          set:{ motiv:"Implant", sursa:"Instagram DM" } },
        { de:"clinica", text:"Ca să vă dau o cifră exactă, aveți o radiografie panoramică făcută în ultimele 6 luni?" },
        { de:"pacient", text:"Nu am. Mi-a fost scos dintele acum vreo două luni.", pauza:1300 },
        { de:"clinica", text:"Atunci facem panoramica la noi. Costă 300 lei și intră în planul de tratament dacă mergeți mai departe." },
        { de:"clinica", text:"Două luni e un interval bun — osul încă nu s-a retras mult, deci probabil nu va fi nevoie de adiție. Asta ar ține prețul la capătul de jos." },
        { de:"pacient", text:"Și se poate în rate?" },
        { de:"clinica", text:"Da, de la 8.000 lei în sus avem rate 0% pe 6 luni. Aprobarea se face în aceeași zi, la recepție.",
          set:{ urgenta:"Normal" } },
        { de:"pacient", text:"Bine, aș vrea o consultație atunci." },
        { de:"clinica", text:"Sigur. Preferați dimineața sau după-amiaza?" },
        { de:"pacient", text:"Dimineața, dacă se poate joi." },
        { de:"clinica", text:"Joi am liber la 10:15. Numele complet și un telefon, vă rog." },
        { de:"pacient", text:"Victoria Croitoru, 078 55 44 33" },
        { de:"clinica", text:"Notat, Victoria — joi, 10:15, consultație cu panoramică. Vă trimit un memento miercuri seara.",
          set:{ nume:"Victoria Croitoru", telefon:"078 55 44 33", cand:"Joi, 10:15" } }
      ]
    },

    /* 3 — PROGRAM */
    {
      titlu: "3 · Întrebare de program",
      zi: "Duminică, 11:20",
      ora: "11:20",
      descriere: "Duminica, clinica e închisă. Pacientul pleacă totuși cu o oră rezervată pentru luni.",
      mesaje: [
        { de:"pacient", text:"Bună ziua, sunteți deschiși azi?" },
        { de:"clinica", text:"Bună ziua! Duminica suntem închiși. Mâine, luni, lucrăm 09:00 – 19:00.",
          set:{ sursa:"Instagram DM" } },
        { de:"clinica", text:"E ceva urgent, sau vă notez pentru mâine?" },
        { de:"pacient", text:"Nu e urgent, voiam un detartraj.", pauza:1100 },
        { de:"clinica", text:"Detartrajul cu air-flow e 700 lei și durează cam 45 de minute.",
          set:{ motiv:"Detartraj", urgenta:"Normal" } },
        { de:"clinica", text:"Mâine am liber la 11:00 și la 16:30. Care vă convine?" },
        { de:"pacient", text:"16:30" },
        { de:"clinica", text:"Perfect. Numele și un telefon, vă rog." },
        { de:"pacient", text:"Elena Cebotari, 060 77 88 99" },
        { de:"clinica", text:"Gata, Elena — mâine la 16:30. Parcarea e gratuită, în curte, intrare din Bănulescu-Bodoni.",
          set:{ nume:"Elena Cebotari", telefon:"060 77 88 99", cand:"Luni, 16:30" } }
      ]
    },

    /* 4 — URGENȚĂ */
    {
      titlu: "4 · Urgență",
      zi: "Sâmbătă, 08:05",
      ora: "08:05",
      descriere: "Sâmbătă dimineața, cu o oră înainte de deschidere. Asta e programarea care se pierde cel mai des.",
      mesaje: [
        { de:"pacient", text:"S-a rupt un dinte din față aseară. Am nuntă azi la 16:00. Se poate ceva??" },
        { de:"clinica", text:"Vai. Da, se rezolvă — hai să vă prindem azi.",
          set:{ motiv:"Dinte frontal rupt", urgenta:"Urgent", sursa:"Instagram DM" } },
        { de:"clinica", text:"Sâmbăta lucrăm 09:00 – 15:00 și am un loc liber la 09:40." },
        { de:"clinica", text:"S-a rupt doar colțul, sau se vede o parte închisă la culoare în mijlocul dintelui?" },
        { de:"pacient", text:"Doar colțul, dar se vede urât.", pauza:1200 },
        { de:"clinica", text:"Atunci e reconstrucție cu compozit, într-o singură ședință. 900 – 1.200 lei, cam o oră. Iese la culoarea dintelui, nu se vede." },
        { de:"clinica", text:"Rezerv 09:40. Pe ce nume?" },
        { de:"pacient", text:"Victor" },
        { de:"clinica", text:"Victor, și un număr de telefon?",
          set:{ nume:"Victor" } },
        { de:"pacient", text:"069 45 67 89" },
        { de:"clinica", text:"Gata, vă așteptăm la 09:40. Terminați până la 11:00, aveți timp berechet până la 16:00.",
          set:{ telefon:"069 45 67 89", cand:"Azi, 09:40" } },
        { de:"clinica", text:"Dacă întârziați, scrieți-mi aici și țin locul 15 minute.",
          nota:"Marcat URGENT · recepția a fost sunată automat la deschidere" }
      ]
    },

    /* 5 — PROGRAMARE DIRECTĂ */
    {
      titlu: "5 · Vrea direct programare",
      zi: "Miercuri, 19:55",
      ora: "19:55",
      descriere: "Pacient decis. Aici se pierd banii dacă îl lași să aștepte până a doua zi.",
      mesaje: [
        { de:"pacient", text:"Bună, vreau să mă programez la albire." },
        { de:"clinica", text:"Bună seara! Albirea profesională e 3.500 lei pentru ambele arcade, o ședință de 90 de minute.",
          set:{ motiv:"Albire", sursa:"Instagram DM", urgenta:"Normal" } },
        { de:"clinica", text:"Un singur lucru înainte: albirea se face pe dinți curățați. Dacă n-ați făcut detartraj în ultimele 6 luni, îl facem în aceeași zi." },
        { de:"pacient", text:"Nu l-am făcut de vreun an." },
        { de:"clinica", text:"Atunci vă rezerv 2 ore și jumătate și le facem pe amândouă în aceeași zi. 3.500 albirea plus 700 detartrajul, 4.200 lei în total, și scăpați de o a doua vizită." },
        { de:"clinica", text:"Am joi la 10:00 sau vineri la 15:00." },
        { de:"pacient", text:"Joi." },
        { de:"clinica", text:"Numele complet și un telefon, vă rog." },
        { de:"pacient", text:"Cristina Rusu, 069 33 22 11" },
        { de:"clinica", text:"Notat, Cristina — joi, 10:00, detartraj plus albire. Recepția vă sună mâine să confirme.",
          set:{ nume:"Cristina Rusu", telefon:"069 33 22 11", cand:"Joi, 10:00" } },
        { de:"clinica", text:"Cu 24 de ore înainte evitați cafeaua și vinul roșu, ca să prindă mai bine culoarea." }
      ]
    },

    /* 6 — ÎN RUSĂ */
    {
      titlu: "6 · Scrie în rusă",
      zi: "Joi, 20:30",
      ora: "20:30",
      descriere: "La Chișinău, jumătate din mesaje vin în rusă. Asistentul răspunde în limba în care i s-a scris.",
      mesaje: [
        { de:"pacient", text:"Здравствуйте, сколько стоит удаление зуба?" },
        { de:"clinica", text:"Здравствуйте! Простое удаление — 700 лей, вместе с анестезией.",
          set:{ motiv:"Extracție (RU)", sursa:"Instagram DM" } },
        { de:"clinica", text:"Если зуб сломан под десной или это зуб мудрости, цена может быть выше — это видно только по снимку. Снимок с консультацией — 250 лей." },
        { de:"pacient", text:"Это зуб мудрости, снизу. Он уже неделю болит.", pauza:1300 },
        { de:"clinica", text:"Неделя боли — это уже воспаление, лучше не тянуть.",
          set:{ urgenta:"Urgent" } },
        { de:"clinica", text:"У нас каждый день есть два места для срочных случаев. Завтра могу записать на 11:30 или на 17:00." },
        { de:"pacient", text:"11:30 подойдёт." },
        { de:"clinica", text:"Хорошо. Как вас зовут и номер телефона?" },
        { de:"pacient", text:"Сергей Морару, 068 11 22 33" },
        { de:"clinica", text:"Записала: завтра, 11:30, ул. Александру чел Бун 42. Регистратура позвонит утром для подтверждения.",
          set:{ nume:"Сергей Морару", telefon:"068 11 22 33", cand:"Mâine, 11:30" } }
      ]
    }
  ],

  /* ------------------- RĂSPUNSURI ÎN MODUL „SCRIE TU" -------------------
     Se verifică în ordine. Prima cheie găsită în text câștigă.
     Ține cheile fără diacritice — textul e normalizat oricum.          */

  raspunsuri: [

    { chei:["doare","durere","ma doare","urgent","urgenta","umflat","болит","боль"],
      set:{ motiv:"Durere dentară", urgenta:"Urgent" },
      raspuns:"Îmi pare rău. Ținem în fiecare zi două locuri libere pentru urgențe, deci vă putem primi azi sau mâine dimineață.\n\nDurerea e continuă sau apare doar la rece și la dulce?" },

    { chei:["implant"],
      set:{ motiv:"Implant" },
      raspuns:"Implantul cu coroană e între 12.000 și 16.000 lei, în funcție de sistem și dacă e nevoie de adiție de os.\n\nDe la 8.000 lei se poate în rate 0% pe 6 luni." },

    { chei:["albire","albit","отбеливание"],
      set:{ motiv:"Albire" },
      raspuns:"Albirea profesională e 3.500 lei pentru ambele arcade, o ședință de 90 de minute.\n\nSe face pe dinți curățați — dacă n-ați avut detartraj în ultimele 6 luni, îl facem în aceeași zi." },

    { chei:["detartraj","curatare","piatra","чистка"],
      set:{ motiv:"Detartraj" },
      raspuns:"Detartrajul cu air-flow e 700 lei și durează cam 45 de minute." },

    { chei:["canal","nerv"],
      set:{ motiv:"Tratament de canal" },
      raspuns:"Tratamentul de canal e între 2.200 și 3.500 lei, în una sau două ședințe, în funcție de câte canale are dintele." },

    { chei:["extractie","scos","sa scot","удаление"],
      set:{ motiv:"Extracție" },
      raspuns:"Extracția simplă e 700 lei, cu anestezie inclusă. Dacă e măsea de minte sau dinte rupt sub gingie, prețul se stabilește după radiografie." },

    { chei:["plomba","carie","obturatie","пломба"],
      set:{ motiv:"Plombă" },
      raspuns:"Plomba e între 900 și 1.400 lei, în funcție de mărimea cariei. O ședință, cam o oră." },

    { chei:["coroana","fatete","коронка"],
      set:{ motiv:"Coroană" },
      raspuns:"Coroana ceramică e 4.800 lei, în două vizite." },

    { chei:["copil","copii","ani are","pediatric","ребен","дет"],
      set:{ motiv:"Stomatologie pediatrică" },
      raspuns:"Da, primim copii de la 4 ani. Avem medic separat pentru copii, marți și joi." },

    { chei:["consultatie","control","verificare","consult"],
      raspuns:"Consultația cu radiografie e 250 lei și se scade integral din tratament dacă rămâneți la noi." },

    { chei:["cat costa","pret","preturi","cost","cati bani","tarif","сколько стоит","цена"],
      raspuns:"Vă spun exact dacă îmi ziceți ce vă interesează. Ca reper: consultația cu radiografie 250 lei, detartrajul 700, plomba de la 900, albirea 3.500, implantul de la 12.000." },

    { chei:["rate","in rate","credit","рассрочк"],
      raspuns:"Da — pentru lucrări de la 8.000 lei, rate 0% pe 6 luni. Aprobarea se face la recepție, în aceeași zi." },

    { chei:["cnam","asigurare","polita","страхов"],
      raspuns:"Suntem clinică privată, nu lucrăm prin CNAM. Cu poliță de asigurare facultativă se poate deconta parțial — aduceți polița la recepție." },

    { chei:["program","deschis","inchis","sambata","duminica","orar","ora inchideti","работаете","график"],
      raspuns:"Luni – Vineri 09:00 – 19:00, sâmbăta 09:00 – 15:00. Duminica suntem închiși." },

    { chei:["unde","adresa","locatie","cum ajung","harta","адрес","где"],
      raspuns:"str. Alexandru cel Bun 42, Chișinău. Parcare gratuită în curte, intrare din Bănulescu-Bodoni." },

    { chei:["parcare","parchez","парковк"],
      raspuns:"Parcare gratuită în curtea clădirii, 6 locuri, intrare din str. Bănulescu-Bodoni. De obicei e liber." },

    { chei:["telefon","sunati","numar","numarul"],
      raspuns:"Recepția: +373 60 12 34 56, în program. În afara programului scrieți-mi aici și vă notez eu." },

    { chei:["engleza","english","romana","rusa","limba"],
      raspuns:"Vorbim română și rusă, iar un medic vorbește și engleză." },

    { chei:["multumesc","merci","ok","bine","спасибо"],
      raspuns:"Cu plăcere! Dacă mai apare ceva, scrieți-mi oricând — răspund și în afara programului." },

    { chei:["buna","salut","hello","здравств","привет"],
      raspuns:"Bună! Cu ce vă pot ajuta?" }
  ]
};
