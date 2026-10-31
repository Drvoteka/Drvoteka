const P=window.__BASE||'';

/* ===== Kontakt podaci — zamenite pravim ===== */
const CONTACT={
  phone:'+381 64 413 8528', phoneRaw:'+381644138528',
  mail:'mojadrvoteka@gmail.com',
  ig:'@drvoteka', igUrl:'https://www.instagram.com/drvoteka/',
  company:'Stolarska radnja Drvoteka'
};
const IMG={cover:(P+'img/55710807ef.webp'),dining:(P+'img/c36b19c4ae.webp'),side:(P+'img/d0100be193.webp'),joint:(P+'img/e9d3e149b5.webp'),bench:(P+'img/0c9d9f8f22.webp'),bath:(P+'img/15aded4ea4.webp'),resto:(P+'img/bcaa55b10e.webp'),ward:(P+'img/7e2dac1116.webp'),kitchen:(P+'img/e9c1f202b1.webp'),table:(P+'img/1635dc8c1b.webp')};

function woodURL(r,g,b,seed,freq){
  const m=`0 0 0 ${r[0]} ${r[1]}  0 0 0 ${g[0]} ${g[1]}  0 0 0 ${b[0]} ${b[1]}  0 0 0 0 1`;
  const s=`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='600'><filter id='w'><feTurbulence type='fractalNoise' baseFrequency='${freq||'0.004 0.09'}' numOctaves='4' seed='${seed}'/><feColorMatrix values='${m}'/></filter><rect width='100%' height='100%' filter='url(#w)'/></svg>`;
  return `url('data:image/svg+xml,${encodeURIComponent(s).replace(/'/g,'%27')}')`;
}
const WOOD={
  oak:woodURL([.52,.36],[.40,.24],[.26,.13],7),
  walnut:woodURL([.36,.14],[.24,.08],[.16,.05],3),
  ash:woodURL([.36,.44],[.33,.37],[.28,.28],11),
  cherry:woodURL([.52,.26],[.30,.11],[.20,.07],5),
  beech:woodURL([.30,.56],[.24,.42],[.20,.30],9,'0.003 0.11'),
  acacia:woodURL([.46,.26],[.36,.16],[.18,.06],13,'0.003 0.12')
};

const T={
sr:{
 cm_h:"Kontakt",
 cm_p:"Izaberite način koji vam odgovara.",
 s3_label:"Od skice do komada",
 s3_h:"Skica, 3D model, gotov komad",
 s3_p:"Ideja sa papira postaje precizan 3D model, a zatim gotov komad iz naše radionice. Vidite kako će izgledati pre nego što isečemo prvu dasku. Primer: TV komoda od hrasta.",
 s3_1:"Skica",
 s3_1s:"ideja i mere na papiru",
 s3_2:"3D model",
 s3_2s:"proporcije i detalji pre izrade",
 s3_3:"Gotov komad",
 s3_3s:"hrast, izrađen u radionici",
 s3_hint:"Okrenite model",
 nav_svc:"Usluge",
 svc_h:"Šta još radimo",
 svc_p:"Pored nameštaja radimo i pojedinačne poslove: zaštitu, sečenje, graviranje, tokarenje i projektovanje. Pojedinačno ili serijski.",
 svc:[["Ulje i lak", "Komade štitimo uljima bezbednim za kontakt sa hranom, a po želji poliuretanskim lakom. Možemo da obnovimo završnu obradu i na vašim starim drvenim predmetima.", "ulje · poliuretanski lak"], ["Sečenje", "Sečemo sve vrste drveta na CNC mašinama, tačno po vašim merama.", "CNC · po meri"], ["Graviranje i rezbarenje", "Laserska i CNC gravura i rezbarenje: posveta na kutiji za vino, logo firme na stalku za vizitkarte, stihovi na dasci. Ukrašavamo i frontove kuhinja i nameštaj.", "laser · CNC · rezbarenje"], ["Tokarenje", "Izrađujemo noge za stolove, činije, varjače, oklagije i dekorativne elemente, po želji sa rezbarijom.", "noge · posuđe · dekor"], ["3D projektovanje", "Pre izrade vidite komad u 3D. Projektujemo i kuhinje, dečje sobe, kancelarije i cele prostore.", "komadi · kuhinje · enterijeri"]],
 svc_note:"Pravimo i manje predmete: kuhinjski pribor, lampe, opremu za kancelariju i kupatilo, stvari za ljubimce i poklone sa posvetom. Od jednog komada do serije.",
 nav_custom:'Po meri',nav_proj:'Projekti',nav_mat:'Materijali',nav_process:'Kako radimo',nav_col:"Predmeti",nav_des:'Za dizajnere',nav_contact:'Kontakt',
 bag:'Upit',cta_inquiry:'Pošaljite upit',cta_call:'Pozovite',cta_project:'Razgovarajmo o projektu',copy:'Kopiraj',close:'Zatvori',
 hero_k:'Radionica nameštaja od drveta<br>Beograd<i class="dot"></i>od 2018.',
 hero_h:'Nameštaj od drveta, <span class="w">stvoren za vaš&nbsp;dom.</span>',
 hero_p:'Kuhinje, stolovi, ormari i celi enterijeri po vašim merama i skici. Masiv i furnir plemenitih vrsta, završna obrada ručno.',
 hero_cap:'Trpezarija',hero_cap2:'orah, ručna obrada',
 c_phone:'Telefon',c_phone_a:'Pozovite',c_msg_a:'Pišite nam',c_mail_a:'Pošaljite skicu',c_ws:'Radionica',c_route:'Prikaži rutu',c_route_s:'Ruta',c_hours:'Posete',c_hours_v:'Posete radionici uz prethodni dogovor',c_company:'Podaci firme',c_open_map:'Otvori mapu',
 custom_h:"Nameštaj po meri vašeg prostora",
 custom_p:'Svaki komad nastaje od nule: od prvog merenja do montaže. Bilo koja složenost, bilo koje dimenzije, iz bilo kog drveta koje izaberete.',
 custom_foot:'Imate skicu, fotografiju iz časopisa ili samo ideju? To je dovoljno: pre izrade ćemo vam je pokazati u 3D.',
 cats:[["Kuhinje", "Od čistih frontova do kuhinja od masiva sa ostrvom."], ["Stolovi i trpezarije", "Masivne ploče i čvrsti spojevi koji traju decenijama."], ["Komode i ormari", "Fioke koje klize tiho, ručke od drveta."], ["Kupatila", "Ormarići za lavabo, ogledala i police otporni na vlagu."], ["Garderoberi", "Unutrašnjost planirana prema vašim stvarima."], ["Poslovni prostori", "Restorani, hoteli, kancelarije, saloni i berbernice."]],
 proj_h:'Izabrani projekti',proj_p:'Deo radova iz naše radionice. Svaki projekat počinje razgovorom i merenjem na licu mesta.',
 p1:'Trpezarija',p1s:'hrast, ulje',p2:'Komoda',p2s:'hrast, kose noge',p3:'Fioka',p3s:'lastin rep, orah',
 mat_h:'Drvo koje birate vi',mat_p:'Radimo sa masivom šest vrsta drveta i plemenitim furnirom. Izaberite drvo da vidite njegov karakter.',
 woods:{oak:['Hrast','Tvrd, žilav i postojan, sa izraženom šarom. Lepo prima ulje, bajc i lak. Klasika za stolove, kuhinje i vrata.'],walnut:['Orah','Tamnosmeđ, sa tamnijim prugama i bogatom teksturom. Odličan za tokarenje i nameštaj od masiva.'],ash:['Jasen','Svetao, sa prirodnim sjajem i ravnim vlaknima. Veoma elastičan. Za nameštaj, stepenice i parket.'],cherry:['Trešnja','Bledo ružičastosmeđa, vremenom postaje duboka zlatnosmeđa. Fina za ručnu obradu i rezbarenje.'],beech:['Bukva','Bež drvo, posle parenja blago ružičasto. Čvrsta, elastična i lako se obrađuje. Za nameštaj, daske i posluženje.'],acacia:['Bagrem','Izražen kontrast tamnog srca i svetlog ruba, topao žuti ton. Jedno od najdugotrajnijih domaćih drva.']},
 facts:[['Masiv','hrast, orah, jasen, trešnja, bukva, bagrem'],['Ulja','sertifikovana za kontakt sa hranom'],['Lak','poliuretanski, po želji']],
 mat_note:'Po želji kombinujemo drvo sa metalom, kamenom ili kožom.',
 proc_h:'Kako radimo',proc_p:"Porodična radionica: razgovarate direktno sa ljudima koji prave vaš nameštaj.",
 steps:[["Razgovor", "Pozovite ili pošaljite skicu i fotografije prostora."], ["Merenje", "Dolazimo i uzimamo tačne mere."], ["Projekat", "Crteži i 3D model, izbor drveta i obrade, obračun cene."], ["Izrada", "Sve pravimo u našoj radionici u Beogradu."], ["Montaža", "Dostavljamo, montiramo i savetujemo kako da održavate nameštaj."]],
 col_h:'Sitni predmeti i pokloni',col_p:'Komadi za kuhinju, sto i dom. Svaki pravimo i po vašim merama, uz gravuru ili posvetu po želji.',
 prods:[['Daska za sečenje','jasen'],['Činija za voće','orah'],['Stalak za vino','javor i venge'],['Stona lampa','bukva'],['Stalak za činije ljubimaca','bor']],
 price:'Cena na upit',add:'Dodaj u upit',added:'U upitu',
 des_h:'Za dizajnere enterijera i arhitekte',des_p:'Izrađujemo po vašem projektu i crtežima, uz poštovanje rokova i detalja.',
 des_list:['Izrada po crtežima i specifikaciji','3D projekat pre izrade','Uzorci drveta i završne obrade','Od jednog komada do serijske proizvodnje'],des_cta:'Pišite nam',
 ig_h:'Radionica na Instagramu',ig_p:"Novi radovi i proces izrade.",ig_cta:'Pratite nas',
 ct_h:'Razgovarajmo o vašem projektu',ct_p:'Pozovite, pišite na Viber ili WhatsApp, ili ostavite upit. Javljamo se u najkraćem roku.',
 f_h:'Upit za projekat',f_p:'Što više detalja, to precizniji odgovor.',f_name:'Ime',f_phone:'Telefon',f_mail:'E-mail (nije obavezno)',f_what:'Šta planirate',
 chips:['Kuhinja','Sto','Orman','Garderober','Drugo'],f_dims:'Približne dimenzije',f_dims_ph:'npr. 240 × 90 cm',f_msg:'Poruka',f_msg_ph:'Opišite ideju, prostor, željeno drvo…',
 f_file:'Priložite skicu ili fotografiju',f_send:'Pošaljite upit',f_small:'Podatke koristimo samo da bismo vam odgovorili.',f_err:'Upišite ime',f_err_phone:'Upišite broj telefona',
 t_sent:'Hvala! Javićemo vam se uskoro.',t_copied:'Kopirano',t_added:'Dodato u upit',
 d_h:'Vaš upit',d_hint:'Izabrani komadi idu uz upit. Cenu i rokove dobijate od nas.',d_empty:'Još niste dodali nijedan komad.',d_go:'Nastavi na upit',d_remove:'Ukloni',
 d_msg:'Zanima me:',foot_p:'Porodična radionica nameštaja od drveta po meri. Beograd, od 2018.',foot_nav:'Sajt',swipe:'Prevucite za još',
 o_full_k:'Detaljan upit',o_full_h:'Opišite svoj projekat',o_full_p:"Navedite komad, mere i drvo da bismo odmah dali precizniju procenu.",o_full_1:'Vrsta nameštaja i dimenzije',o_full_2:'Drvo i završna obrada',o_full_3:'Skice i fotografije prostora',o_full_cta:'Popunite upit',
 o_quick_k:'Brzi upit',o_quick_h:'Pozvaćemo vas',o_quick_p:'Ostavite ime i broj telefona, a detalje dogovaramo u razgovoru.',o_quick_cta:'Ostavite broj',
 m_title:'Upit',m_tab_quick:'Brzi upit',m_tab_full:'Detaljan upit',m_quick_p:'Ostavite ime i broj, javićemo se u najkraćem roku.',m_quick_send:'Pozovite me',
 g_what:'Šta pravimo',g_size:'Dimenzije',g_mat:'Materijal',g_desc:'Opis i skice',g_contact:'Kontakt',g_via:'Kako da vas kontaktiramo',
 d_w:'Širina',d_add:'Dodaj dimenzije',d_item:'Komad',d_remove:'Ukloni',d_d:'Dubina',d_h:'Visina',d_hint:'Približne mere su dovoljne, tačne uzimamo na licu mesta.',
 types:['Kuhinja','Sto','Komoda','Orman','Garderober','Kupatilo','Poslovni prostor','Drugo'],
 mats:['Hrast','Orah','Jasen','Trešnja','Bukva','Bagrem','Savetujte me'],fins:['Ulje','Vosak','Lak','Toniranje','Svejedno'],
 via:['Poziv','Viber','WhatsApp','E-mail'],via_mail_hint:'Prvo upišite e-mail',
 f_file_s:'JPG, PNG ili PDF, može više fajlova',f_files:'fajla izabrano',
 done_h:'Upit je poslat',done_quick:'Hvala, {n}! Pozvaćemo vas u najkraćem roku.',done_full:'Hvala, {n}! Pogledaćemo detalje i javiti se sa predlogom.'
},
en:{
 cm_h:"Contact",
 cm_p:"Choose whatever suits you best.",
 s3_label:"From sketch to piece",
 s3_h:"Sketch, 3D model, finished piece",
 s3_p:"An idea on paper becomes a precise 3D model, then a finished piece from our workshop. You see how it will look before we cut the first board. Example: an oak TV console.",
 s3_1:"Sketch",
 s3_1s:"idea and measurements on paper",
 s3_2:"3D model",
 s3_2s:"proportions and details before making",
 s3_3:"Finished piece",
 s3_3s:"oak, made in our workshop",
 s3_hint:"Drag to rotate",
 nav_svc:"Services",
 svc_h:"What else we do",
 svc_p:"Beyond furniture we take on individual jobs: finishing, cutting, engraving, turning and design. One-off or in batches.",
 svc:[["Oil and lacquer", "We finish pieces with food-safe oils, or with polyurethane lacquer on request. We can also refresh the finish on your old wooden items.", "oil · polyurethane lacquer"], ["Cutting", "We cut any wood species on CNC machines, exactly to your measurements.", "CNC · made to measure"], ["Engraving and carving", "Laser and CNC engraving and carving: a dedication on a wine box, a company logo on a card holder, lyrics on a board. We also decorate kitchen fronts and furniture.", "laser · CNC · carving"], ["Turning", "We turn table legs, bowls, spoons, rolling pins and decorative elements, carved if you wish.", "legs · tableware · decor"], ["3D design", "See your piece in 3D before it is made. We also design kitchens, children’s rooms, offices and whole spaces.", "pieces · kitchens · interiors"]],
 svc_note:"We also make smaller items: kitchenware, lamps, office and bathroom accessories, things for pets and personalised gifts. From a single piece to a batch.",
 nav_custom:'Made to order',nav_proj:'Projects',nav_mat:'Materials',nav_process:'How we work',nav_col:"Pieces",nav_des:'For designers',nav_contact:'Contact',
 bag:'Inquiry',cta_inquiry:'Send an inquiry',cta_call:'Call us',cta_project:'Let’s talk about your project',copy:'Copy',close:'Close',
 hero_k:'Solid wood furniture workshop<br>Belgrade<i class="dot"></i>since 2018',
 hero_h:'Wooden furniture, <span class="w">made for your&nbsp;home.</span>',
 hero_p:'Kitchens, tables, wardrobes and whole interiors to your measurements and sketch. Solid wood and veneer of fine species, finished by hand.',
 hero_cap:'Dining room',hero_cap2:'walnut, hand finished',
 c_phone:'Phone',c_phone_a:'Call',c_msg_a:'Message us',c_mail_a:'Send a sketch',c_ws:'Workshop',c_route:'Get directions',c_route_s:'Route',c_hours:'Visits',c_hours_v:'Workshop visits by appointment',c_company:'Company details',c_open_map:'Open map',
 custom_h:"Furniture made for your space",
 custom_p:'Every piece is built from scratch: from the first measurement to installation. Any complexity, any size, in any wood you choose.',
 custom_foot:'Have a sketch, a magazine photo or just an idea? That’s enough: we’ll show it to you in 3D before we build it.',
 cats:[["Kitchens", "From clean fronts to solid wood kitchens with an island."], ["Tables and dining", "Solid tops and sturdy joinery that lasts for decades."], ["Sideboards and cabinets", "Drawers that glide quietly, wooden handles."], ["Bathrooms", "Vanity units, mirrors and shelves made to resist moisture."], ["Wardrobes", "Interiors planned around what you own."], ["Commercial spaces", "Restaurants, hotels, offices, salons and barbershops."]],
 proj_h:'Selected projects',proj_p:'A few pieces from our workshop. Every project starts with a conversation and an on-site measurement.',
 p1:'Dining room',p1s:'oak, oil',p2:'Sideboard',p2s:'oak, angled legs',p3:'Drawer',p3s:'dovetail, walnut',
 mat_h:'The wood is your choice',mat_p:'We work with six solid wood species and fine veneer. Choose a wood to see its character.',
 woods:{oak:['Oak','Hard, tough and durable with a pronounced grain. Takes oil, stain and lacquer beautifully. The classic for tables, kitchens and doors.'],walnut:['Walnut','Dark brown with deeper streaks and a rich texture. Ideal for turning and solid wood furniture.'],ash:['Ash','Light, with a natural sheen and straight grain. Very elastic. For furniture, stairs and flooring.'],cherry:['Cherry','Pale pinkish brown that deepens to golden brown with time and light. Fine for hand work and carving.'],beech:['Beech','Beige wood with a soft pink tone after steaming. Strong, elastic and easy to work. For furniture, boards and serveware.'],acacia:['Acacia','Strong contrast between a dark heart and light edges, with a warm yellow tone. One of the most durable local woods.']},
 facts:[['Solid wood','oak, walnut, ash, cherry, beech, acacia'],['Oils','certified for food contact'],['Lacquer','polyurethane, on request']],
 mat_note:'On request we combine wood with metal, stone or leather.',
 proc_h:'How we work',proc_p:"A family workshop: you talk directly to the people who make your furniture.",
 steps:[["Conversation", "Call us or send a sketch and photos of the space."], ["Measuring", "We come over and take exact measurements."], ["Design", "Drawings and a 3D model, choice of wood and finish, a price estimate."], ["Making", "Everything is built in our Belgrade workshop."], ["Installation", "We deliver, install and advise on caring for your furniture."]],
 col_h:'Small pieces and gifts',col_p:'Pieces for the kitchen, table and home. Each can be made to your measurements, with an engraving or dedication if you wish.',
 prods:[['Cutting board','ash'],['Fruit dish','walnut'],['Wine rack','maple and wenge'],['Table lamp','beech'],['Pet bowl stand','pine']],
 price:'Price on request',add:'Add to inquiry',added:'In inquiry',
 des_h:'For interior designers and architects',des_p:'We build to your designs and drawings, respecting deadlines and details.',
 des_list:['Built to drawings and specifications','3D design before production','Wood and finish samples','From a single piece to batch production'],des_cta:'Write to us',
 ig_h:'The workshop on Instagram',ig_p:"New work and the making process.",ig_cta:'Follow us',
 ct_h:'Let’s talk about your project',ct_p:'Call, message us on Viber or WhatsApp, or leave an inquiry. We reply as soon as we can.',
 f_h:'Project inquiry',f_p:'The more detail, the more precise our answer.',f_name:'Name',f_phone:'Phone',f_mail:'E-mail (optional)',f_what:'What are you planning',
 chips:['Kitchen','Table','Cabinet','Wardrobe','Other'],f_dims:'Approximate size',f_dims_ph:'e.g. 240 × 90 cm',f_msg:'Message',f_msg_ph:'Describe the idea, the space, the wood you like…',
 f_file:'Attach a sketch or photo',f_send:'Send inquiry',f_small:'We use your details only to reply to you.',f_err:'Enter your name',f_err_phone:'Enter a phone number',
 t_sent:'Thank you! We’ll be in touch soon.',t_copied:'Copied',t_added:'Added to inquiry',
 d_h:'Your inquiry',d_hint:'Selected pieces go with your inquiry. We’ll reply with price and timing.',d_empty:'You haven’t added any pieces yet.',d_go:'Continue to inquiry',d_remove:'Remove',
 d_msg:'I’m interested in:',foot_p:'A family workshop making wooden furniture to order. Belgrade, since 2018.',foot_nav:'Site',swipe:'Swipe for more',
 o_full_k:'Detailed inquiry',o_full_h:'Describe your project',o_full_p:"Tell us the piece, size and wood so we can give a more precise estimate right away.",o_full_1:'Type of furniture and dimensions',o_full_2:'Wood and finish',o_full_3:'Sketches and photos of the space',o_full_cta:'Fill in the inquiry',
 o_quick_k:'Quick inquiry',o_quick_h:'We’ll call you',o_quick_p:'Leave your name and phone number, and we’ll discuss the details on the call.',o_quick_cta:'Leave your number',
 m_title:'Inquiry',m_tab_quick:'Quick',m_tab_full:'Detailed',m_quick_p:'Leave your name and number, and we’ll get back to you shortly.',m_quick_send:'Call me back',
 g_what:'What are we making',g_size:'Dimensions',g_mat:'Material',g_desc:'Description and sketches',g_contact:'Contact',g_via:'How should we contact you',
 d_w:'Width',d_add:'Add dimensions',d_item:'Piece',d_remove:'Remove',d_d:'Depth',d_h:'Height',d_hint:'Approximate sizes are enough, we measure on site.',
 types:['Kitchen','Table','Sideboard','Cabinet','Wardrobe','Bathroom','Commercial space','Other'],
 mats:['Oak','Walnut','Ash','Cherry','Beech','Acacia','Advise me'],fins:['Oil','Wax','Lacquer','Staining','No preference'],
 via:['Call','Viber','WhatsApp','E-mail'],via_mail_hint:'Enter your e-mail first',
 f_file_s:'JPG, PNG or PDF, several files allowed',f_files:'files selected',
 done_h:'Inquiry sent',done_quick:'Thank you, {n}! We’ll call you shortly.',done_full:'Thank you, {n}! We’ll review the details and get back with a proposal.'
},
ru:{
 cm_h:"Связаться",
 cm_p:"Выберите удобный способ связи.",
 s3_label:"От эскиза до изделия",
 s3_h:"Эскиз, 3D-модель, готовое изделие",
 s3_p:"Идея на бумаге превращается в точную 3D-модель, а затем в готовое изделие. Вы видите результат до того, как мы распилим первую доску. Пример: ТВ-комод из дуба.",
 s3_1:"Эскиз",
 s3_1s:"идея и размеры на бумаге",
 s3_2:"3D-модель",
 s3_2s:"пропорции и детали до изготовления",
 s3_3:"Готовое изделие",
 s3_3s:"дуб, сделано в мастерской",
 s3_hint:"Покрутите модель",
 nav_svc:"Услуги",
 svc_h:"Что ещё мы делаем",
 svc_p:"Помимо мебели берём отдельные работы: покрытие, распил, гравировку, токарку и проектирование. Штучно или серийно.",
 svc:[["Масло и лак", "Покрываем изделия маслами, безопасными для контакта с едой, а по желанию полиуретановым лаком. Можем обновить покрытие и на ваших старых деревянных вещах.", "масло · полиуретановый лак"], ["Распил", "Распиливаем любые породы на станках с ЧПУ точно по вашим размерам.", "ЧПУ · по размерам"], ["Гравировка и резьба", "Лазерная и ЧПУ-гравировка, резьба: посвящение на коробке для вина, логотип компании на подставке для визиток, строки песни на доске. Украшаем и кухонные фасады, и мебель.", "лазер · ЧПУ · резьба"], ["Токарные работы", "Вытачиваем ножки для столов, чаши, ложки, скалки и декоративные элементы, при желании с резьбой.", "ножки · посуда · декор"], ["3D-проектирование", "До начала работ вы видите изделие в 3D. Проектируем и кухни, детские, офисы, пространства целиком.", "изделия · кухни · интерьеры"]],
 svc_note:"Делаем и небольшие вещи: кухонные принадлежности, лампы, аксессуары для офиса и ванной, вещи для питомцев и подарки с гравировкой. От одного экземпляра до серии.",
 nav_custom:'На заказ',nav_proj:'Проекты',nav_mat:'Материалы',nav_process:'Как мы работаем',nav_col:"Предметы",nav_des:'Дизайнерам',nav_contact:'Контакты',
 bag:'Заявка',cta_inquiry:'Оставить заявку',cta_call:'Позвонить',cta_project:'Обсудить проект',copy:'Скопировать',close:'Закрыть',
 hero_k:'Мастерская мебели из дерева<br>Белград<i class="dot"></i>с 2018 года',
 hero_h:'Мебель из дерева, <span class="w">созданная для вашего&nbsp;дома.</span>',
 hero_p:'Кухни, столы, шкафы и интерьеры целиком по вашим размерам и эскизу. Массив и шпон ценных пород, ручная отделка.',
 hero_cap:'Столовая',hero_cap2:'орех, ручная отделка',
 c_phone:'Телефон',c_phone_a:'Позвонить',c_msg_a:'Написать',c_mail_a:'Отправить эскиз',c_ws:'Мастерская',c_route:'Проложить маршрут',c_route_s:'Маршрут',c_hours:'Визиты',c_hours_v:'Посещение мастерской по договорённости',c_company:'Реквизиты',c_open_map:'Открыть карту',
 custom_h:"Мебель под ваш интерьер",
 custom_p:'Каждое изделие создаётся с нуля: от первого замера до монтажа. Любая сложность, любые размеры, любая порода дерева.',
 custom_foot:'Есть эскиз, фото из журнала или просто идея? Этого достаточно: перед изготовлением покажем её в 3D.',
 cats:[["Кухни", "От лаконичных фасадов до кухонь из массива с островом."], ["Столы и столовые", "Массивные столешницы и надёжные соединения на десятилетия."], ["Комоды и шкафы", "Бесшумные ящики, деревянные ручки."], ["Ванные", "Тумбы под раковину, зеркала и полки, устойчивые к влаге."], ["Гардеробные", "Наполнение, продуманное под ваши вещи."], ["Коммерческие интерьеры", "Рестораны, отели, офисы, салоны и барбершопы."]],
 proj_h:'Избранные проекты',proj_p:'Часть работ нашей мастерской. Каждый проект начинается с разговора и замера на месте.',
 p1:'Столовая',p1s:'дуб, масло',p2:'Комод',p2s:'дуб, наклонные ножки',p3:'Ящик',p3s:'ласточкин хвост, орех',
 mat_h:'Дерево выбираете вы',mat_p:'Работаем с массивом шести пород и ценным шпоном. Выберите породу, чтобы увидеть её характер.',
 woods:{oak:['Дуб','Твёрдый, вязкий и долговечный, с выразительной текстурой. Хорошо принимает масло, морилку и лак. Классика для столов, кухонь и дверей.'],walnut:['Орех','Тёмно-коричневый с более тёмными прожилками и богатой текстурой. Идеален для токарных работ и мебели из массива.'],ash:['Ясень','Светлый, с естественным блеском и ровными волокнами. Очень упругий. Для мебели, лестниц и паркета.'],cherry:['Вишня','Бледно-розовато-коричневая, со временем и на свету становится глубокой золотисто-коричневой. Хороша для ручной обработки и резьбы.'],beech:['Бук','Бежевое дерево, после пропаривания с лёгким розоватым оттенком. Прочный, упругий, легко обрабатывается. Для мебели, досок и сервировки.'],acacia:['Акация','Яркий контраст тёмной сердцевины и светлого края, тёплый жёлтый тон. Одна из самых долговечных местных пород.']},
 facts:[['Массив','дуб, орех, ясень, вишня, бук, акация'],['Масла','сертифицированы для контакта с пищей'],['Лак','полиуретановый, по желанию']],
 mat_note:'По желанию сочетаем дерево с металлом, камнем или кожей.',
 proc_h:'Как мы работаем',proc_p:"Семейная мастерская: вы общаетесь напрямую с теми, кто делает вашу мебель.",
 steps:[["Разговор", "Позвоните или пришлите эскиз и фото помещения."], ["Замер", "Приезжаем и снимаем точные размеры."], ["Проект", "Чертежи и 3D-модель, выбор дерева и отделки, расчёт стоимости."], ["Изготовление", "Всё делаем в нашей мастерской в Белграде."], ["Монтаж", "Привозим, собираем и подсказываем, как ухаживать за мебелью."]],
 col_h:'Предметы и подарки',col_p:'Вещи для кухни, стола и дома. Любую сделаем по вашим размерам, с гравировкой или посвящением по желанию.',
 prods:[['Разделочная доска','ясень'],['Блюдо для фруктов','орех'],['Подставка для вина','клён и венге'],['Настольная лампа','бук'],['Подставка с мисками для питомца','сосна']],
 price:'Цена по запросу',add:'В заявку',added:'В заявке',
 des_h:'Дизайнерам интерьера и архитекторам',des_p:'Изготавливаем по вашему проекту и чертежам, соблюдая сроки и детали.',
 des_list:['Изготовление по чертежам и спецификации','3D-проект до начала работ','Образцы дерева и отделки','От одного изделия до серийного производства'],des_cta:'Написать нам',
 ig_h:'Мастерская в Instagram',ig_p:"Новые работы и процесс изготовления.",ig_cta:'Подписаться',
 ct_h:'Обсудим ваш проект',ct_p:'Позвоните, напишите в Viber или WhatsApp, или оставьте заявку. Ответим в ближайшее время.',
 f_h:'Заявка на проект',f_p:'Чем больше деталей, тем точнее ответ.',f_name:'Имя',f_phone:'Телефон',f_mail:'E-mail (необязательно)',f_what:'Что планируете',
 chips:['Кухня','Стол','Шкаф','Гардеробная','Другое'],f_dims:'Примерные размеры',f_dims_ph:'например, 240 × 90 см',f_msg:'Сообщение',f_msg_ph:'Опишите идею, помещение, желаемое дерево…',
 f_file:'Приложите эскиз или фото',f_send:'Отправить заявку',f_small:'Используем данные только для ответа вам.',f_err:'Введите имя',f_err_phone:'Введите номер телефона',
 t_sent:'Спасибо! Скоро свяжемся с вами.',t_copied:'Скопировано',t_added:'Добавлено в заявку',
 d_h:'Ваша заявка',d_hint:'Выбранные изделия прикрепятся к заявке. Цену и сроки сообщим мы.',d_empty:'Вы пока ничего не добавили.',d_go:'Перейти к заявке',d_remove:'Убрать',
 d_msg:'Интересует:',foot_p:'Семейная мастерская мебели из дерева на заказ. Белград, с 2018 года.',foot_nav:'Сайт',swipe:'Листайте вбок',
 o_full_k:'Подробная заявка',o_full_h:'Опишите проект',o_full_p:"Укажите изделие, размеры и дерево, чтобы мы сразу точнее оценили работу.",o_full_1:'Тип мебели и размеры',o_full_2:'Порода дерева и отделка',o_full_3:'Эскизы и фото помещения',o_full_cta:'Заполнить заявку',
 o_quick_k:'Быстрая заявка',o_quick_h:'Мы вам перезвоним',o_quick_p:'Оставьте имя и номер телефона, детали обсудим в разговоре.',o_quick_cta:'Оставить номер',
 m_title:'Заявка',m_tab_quick:'Быстрая',m_tab_full:'Подробная',m_quick_p:'Оставьте имя и номер, мы свяжемся с вами в ближайшее время.',m_quick_send:'Перезвоните мне',
 g_what:'Что делаем',g_size:'Размеры',g_mat:'Материал',g_desc:'Описание и эскизы',g_contact:'Контакты',g_via:'Как с вами связаться',
 d_w:'Ширина',d_add:'Добавить размер',d_item:'Изделие',d_remove:'Удалить',d_d:'Глубина',d_h:'Высота',d_hint:'Достаточно примерных размеров, точные снимем на замере.',
 types:['Кухня','Стол','Комод','Шкаф','Гардеробная','Ванная','Коммерческий интерьер','Другое'],
 mats:['Дуб','Орех','Ясень','Вишня','Бук','Акация','Посоветуйте'],fins:['Масло','Воск','Лак','Тонирование','Не важно'],
 via:['Звонок','Viber','WhatsApp','E-mail'],via_mail_hint:'Сначала укажите e-mail',
 f_file_s:'JPG, PNG или PDF, можно несколько файлов',f_files:'файла выбрано',
 done_h:'Заявка отправлена',done_quick:'Спасибо, {n}! Перезвоним в ближайшее время.',done_full:'Спасибо, {n}! Изучим детали и вернёмся с предложением.'
}};

const CAT_IMG=[{img:IMG.kitchen,pos:'45% 55%'},{img:IMG.table,pos:'50% 60%'},{img:IMG.side,pos:'50% 55%'},{img:IMG.bath,pos:'50% 55%'},{img:IMG.ward,pos:'60% 45%'},{img:IMG.resto,pos:'50% 55%'}];
const PRODS=[{img:(P+'img/5483890f43.webp'),pos:'50% 50%'},{img:(P+'img/0b49e04533.webp'),pos:'50% 50%'},{img:(P+'img/6f53cebc3b.webp'),pos:'50% 50%'},{img:(P+'img/5c01f4456d.webp'),pos:'50% 50%'},{img:(P+'img/1ed5ade93b.webp'),pos:'50% 50%'}];
const IG=[{img:(P+'img/2465afa57f.webp')},{img:(P+'img/6e35eb302e.webp')},{img:(P+'img/b8cb814d0a.webp')},{img:(P+'img/bb7e81a8f2.webp')},{img:(P+'img/2c982ee326.webp')},{img:(P+'img/a71a79118f.webp')},{img:(P+'img/d0a2290b2e.webp')}];
window.__OAK_TEX__=(P+'img/372a949176.webp');
const WOOD_KEYS=['oak','walnut','ash','cherry','beech','acacia'];
const WOODIMG={oak:"url('"+P+"img/b4f3349b1a.webp')",walnut:"url('"+P+"img/09d8c3d76f.webp')",ash:"url('"+P+"img/372a949176.webp')",cherry:"url('"+P+"img/b4c832534b.webp')",beech:"url('"+P+"img/85ce96dab7.webp')",acacia:"url('"+P+"img/2daa4dda82.webp')"};

let lang='sr', woodSel='oak', bag=new Set(), first=true, mode='quick';
if(T[window.__LANG])lang=window.__LANG;
try{JSON.parse(localStorage.getItem('dv_bag2')||'[]').forEach(i=>bag.add(i))}catch(e){}

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const bg=o=>o.img?`background-image:url(${o.img});background-position:${o.pos||'center'}`:`background-image:${o.tex}`;

function fillContacts(){
  $$('.k-phone').forEach(e=>e.textContent=CONTACT.phone);
  $$('.k-mail').forEach(e=>e.textContent=CONTACT.mail);
  $$('.k-ig').forEach(e=>e.textContent=CONTACT.ig);
  $$('.k-company').forEach(e=>e.textContent=CONTACT.company);
  $$('.k-phone-link').forEach(e=>e.href='tel:'+CONTACT.phoneRaw);
  $$('.k-mail-link').forEach(e=>e.href='mailto:'+CONTACT.mail);
  $$('.k-wa-link').forEach(e=>e.href='https://wa.me/'+CONTACT.phoneRaw.replace('+',''));
  $$('.k-viber-link').forEach(e=>e.href='viber://chat?number=%2B'+CONTACT.phoneRaw.replace('+',''));
  $$('.k-ig-link').forEach(e=>e.href=CONTACT.igUrl);
}

function render(){
  const d=T[lang];
  document.documentElement.lang=lang==='sr'?'sr-Latn':lang;
  $$('[data-t]').forEach(e=>{const v=d[e.dataset.t];if(v!=null)e.textContent=v});
  $$('[data-t-html]').forEach(e=>e.innerHTML=d[e.dataset.tHtml]);
  $$('[data-t-ph]').forEach(e=>e.placeholder=d[e.dataset.tPh]);
  $$('[data-t-aria]').forEach(e=>e.setAttribute('aria-label',d[e.dataset.tAria]));
  $$('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===lang));

  $('#cgrid').innerHTML=d.cats.map((c,i)=>`<a href="#kontakt" class="ccard rv" data-open="full" data-type="${[0,1,2,5,4,6][i]}" style="--d:${(i%3)*70}ms"><div class="ph" style="${bg(CAT_IMG[i])}"></div><h3>${c[0]}</h3><p>${c[1]}</p></a>`).join('');
  $('#steps').innerHTML='<div class="runner" aria-hidden="true"><i></i></div>'+d.steps.map((s,i)=>`<div class="step rv" style="--d:${i*60}ms;--si:${i}"><i>0${i+1}</i><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
  $('#svc').innerHTML=d.svc.map((s,i)=>`<div class="svc-row rv" style="--d:${i*50}ms"><i>0${i+1}</i><h3>${s[0]}</h3><p>${s[1]}<small>${s[2]}</small></p></div>`).join('');
  $('#facts').innerHTML=d.facts.map(f=>`<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join('');
  $('#swatches').setAttribute('aria-label',d.nav_mat);
  $('#swatches').innerHTML=WOOD_KEYS.map(k=>`<button class="sw" data-w="${k}" aria-pressed="${k===woodSel}" aria-label="${d.woods[k][0]}" style="background-image:${WOODIMG[k]}"></button>`).join('');
  setWood(woodSel,true);
  $('#prods').innerHTML=d.prods.map((p,i)=>{const on=bag.has(i);return `<article class="prod rv" style="--d:${i*60}ms"><div class="im" style="${PRODS[i].img?bg(PRODS[i]):''}">${PRODS[i].tex?`<div class="tex" style="background-image:${PRODS[i].tex}"></div>`:''}</div><h3>${p[0]}, ${p[1]}</h3><div class="meta"><span>${d.price}</span><button class="add" data-p="${i}" aria-pressed="${on}">${on?'✓ '+d.added:'+ '+d.add}</button></div></article>`}).join('');
  $('#desList').innerHTML=d.des_list.map(x=>`<li>${x}</li>`).join('');
  $('#igGrid').innerHTML=IG.map((o,i)=>`<a class="k-ig-link rv-img" style="--d:${i*50}ms;${bg(o)}" target="_blank" rel="noopener" aria-label="Instagram"></a>`).join('');
  renderChips(); updateFiles(); renderDims(); setMode(mode,true); if(typeof syncSteps==='function')setTimeout(syncSteps,50);
  if(!first)$$('#cgrid .rv,#steps .rv,#prods .rv,#igGrid .rv-img').forEach(e=>e.classList.add('in'));
  first=false; fillContacts(); renderBag(); observe();
  
}

function setWood(k,instant){
  const d=T[lang];woodSel=k;
  $$('.sw').forEach(b=>b.setAttribute('aria-pressed',b.dataset.w===k));
  $('#swName').textContent=d.woods[k][0];$('#swDesc').textContent=d.woods[k][1];$('#swTag').textContent=d.woods[k][0];
  const a=$('#swA'),b=$('#swB');
  if(instant){a.style.backgroundImage=WOODIMG[k];a.style.opacity=1;b.style.opacity=0;return}
  const [show,hide]=a.style.opacity==='0'?[a,b]:[b,a];
  show.style.backgroundImage=WOODIMG[k];show.style.opacity=1;hide.style.opacity=0;
}

function renderBag(){
  const d=T[lang],n=bag.size,b=$('#bagN');
  b.textContent=n;b.dataset.n=n;
  $('#dlist').innerHTML=n?[...bag].map(i=>`<div class="ditem"><div class="th" style="${PRODS[i].img?bg(PRODS[i]):''}">${PRODS[i].tex?`<div class="tex" style="background-image:${PRODS[i].tex}"></div>`:''}</div><div><b>${d.prods[i][0]}</b><span>${d.prods[i][1]} · ${d.price}</span></div><button class="icon-btn" data-rm="${i}" aria-label="${d.d_remove}"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>`).join(''):`<div class="empty">${d.d_empty}</div>`;
  try{localStorage.setItem('dv_bag2',JSON.stringify([...bag]))}catch(e){}
}

function syncAdds(){const d=T[lang];$$('.add').forEach(b=>{const on=bag.has(+b.dataset.p);b.setAttribute('aria-pressed',on);b.textContent=on?'✓ '+d.added:'+ '+d.add})}
/* toasts */
function toast(msg){
  const t=document.createElement('div');t.className='toast';t.innerHTML=`<svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg>${msg}`;
  const box=$('#toasts');box.appendChild(t);
  while(box.children.length>2)box.firstElementChild.remove();
  setTimeout(()=>{t.classList.add('out');setTimeout(()=>t.remove(),260)},2400);
}

/* reveal once */
let io;
function observe(){
  if(!('IntersectionObserver' in window)){$$('.rv,.rv-img').forEach(e=>e.classList.add('in'));return}
  io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  $$('.rv:not(.in),.rv-img:not(.in)').forEach(e=>io.observe(e));
}

/* header material */
const hdr=$('#hdr');let ticking=false;
addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{hdr.classList.toggle('solid',scrollY>40);ticking=false})},{passive:true});

/* language */
document.addEventListener('click',e=>{
  const l=e.target.closest('.langs button');if(l){const t=l.dataset.l;if(t!==lang)location.href=(window.__URLS[t]||'./')+location.hash;}
  const sw=e.target.closest('.sw');if(sw&&sw.dataset.w!==woodSel)setWood(sw.dataset.w);
  const add=e.target.closest('.add');
  if(add){const i=+add.dataset.p,d=T[lang];
    if(bag.has(i)){bag.delete(i);add.setAttribute('aria-pressed','false');add.textContent='+ '+d.add}
    else{bag.add(i);add.setAttribute('aria-pressed','true');add.textContent='✓ '+d.added;toast(d.t_added);
      $('#bagN').animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(0.23,1,0.32,1)'})}
    renderBag()}
  const rm=e.target.closest('[data-rm]');if(rm){bag.delete(+rm.dataset.rm);renderBag();syncAdds()}
  const cp=e.target.closest('[data-copy]');
  if(cp){const v=cp.dataset.copy==='phone'?CONTACT.phone:CONTACT.mail;
    (navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).catch(()=>{}).finally(()=>toast(T[lang].t_copied))}
});

/* drawer */
let lastFocus=null;
function openDrawer(){lastFocus=document.activeElement;$('#drawer').classList.add('on');$('#scrim').classList.add('on');$('#drawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>$('#dClose').focus(),50)}
function closeDrawer(silent){if(!$('#drawer').classList.contains('on'))return;$('#drawer').classList.remove('on');$('#scrim').classList.remove('on');$('#drawer').setAttribute('aria-hidden','true');document.body.style.overflow='';if(!silent&&lastFocus)lastFocus.focus()}
$('#bagBtn').onclick=openDrawer;$('#dClose').onclick=closeDrawer;$('#scrim').onclick=closeDrawer;
$('#dGo').onclick=()=>{const d=T[lang];const msg=bag.size?d.d_msg+' '+[...bag].map(i=>d.prods[i].join(', ')).join('; '):'';closeDrawer(true);openModal('full',{msg})};

/* mobile sheet */
const sheet=$('#sheet'),mb=$('#menuBtn');
function closeSheet(){sheet.classList.remove('on');mb.setAttribute('aria-expanded','false');document.body.style.overflow=''}
mb.onclick=()=>{const on=!sheet.classList.contains('on');sheet.classList.toggle('on',on);mb.setAttribute('aria-expanded',on);document.body.style.overflow=on?'hidden':'';hdr.classList.toggle('solid',on||scrollY>40)};
/* lightbox */
const lb=$('#lb');let lbFrom=null;
function openLb(fig){lbFrom=document.activeElement;const img=fig.querySelector('img');$('#lbImg').src=img.src;$('#lbCap').innerHTML=fig.querySelector('figcaption').innerHTML;lb.classList.add('on');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>$('#lbX').focus(),40)}
function closeLb(){if(!lb.classList.contains('on'))return;lb.classList.remove('on');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';lbFrom&&lbFrom.focus()}
$$('.proj figure .im').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.onclick=()=>openLb(el.closest('figure'));el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLb(el.closest('figure'))}}});
lb.onclick=e=>{if(e.target===lb||e.target.closest('#lbX'))closeLb()};
addEventListener('keydown',e=>{if(e.key==='Escape'){if(modal.classList.contains('on'))return closeModal();closeDrawer();closeSheet();closeLb()}});


/* dimension rows */
const MAXDIM=6;
function dimRowHTML(n,vals={}){const d=T[lang];
  return `<div class="dim-row" data-n="${n}">${n>1?`<div class="dim-tag">${d.d_item} ${n}</div>`:''}
  ${['w','d','h'].map(k=>`<label class="fld"><span>${d['d_'+k]}</span><div class="unit"><input name="${k}${n}" inputmode="numeric" enterkeyhint="next" value="${vals[k]||''}"><em>cm</em></div></label>`).join('')}
  <button type="button" class="rm" aria-label="${d.d_remove}" ${n===1?'hidden':''}><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>`}
function readDims(){return $$('#dimRows .dim-row').map(r=>({w:r.querySelector('[name^=w]').value,d:r.querySelector('[name^=d]').value,h:r.querySelector('[name^=h]').value}))}
function renderDims(vals){vals=vals||readDims();if(!vals.length)vals=[{}];
  $('#dimRows').innerHTML=vals.map((v,i)=>dimRowHTML(i+1,v)).join('');$('#addDim').hidden=vals.length>=MAXDIM}
$('#addDim').onclick=()=>{const v=readDims();if(v.length>=MAXDIM)return;v.push({});renderDims(v);
  const rows=$$('#dimRows .dim-row'),last=rows[rows.length-1];last.classList.add('enter');last.querySelector('input').focus()};
$('#dimRows').addEventListener('click',e=>{const b=e.target.closest('.rm');if(!b)return;const rows=$$('#dimRows .dim-row');const idx=rows.indexOf(b.closest('.dim-row'));const v=readDims();v.splice(idx,1);renderDims(v);($$('#dimRows input')[Math.max(0,idx-1)*3]||$('#addDim')).focus()});


/* e-mail option only when an address is given */
function syncMailChip(form){
  const ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim());
  const inp=form.querySelector('.chips[data-name=via] input[value="3"]');if(!inp)return;
  inp.disabled=!ok;inp.closest('.chip').classList.toggle('off',!ok);
  inp.closest('.chip').title=ok?'':T[lang].via_mail_hint;
  if(!ok&&inp.checked){inp.checked=false}
}
['#fQuick','#fFull'].forEach(s=>$(s).email.addEventListener('input',()=>syncMailChip($(s))));

/* ===== inquiry modal ===== */
let mFrom=null;
const modal=$('#modal'),mscrim=$('#mscrim');
function chipsHTML(name,items,type,sel){return items.map((c,i)=>`<label class="chip"><input type="${type}" name="${name}" value="${i}" ${sel.has(i)?'checked':''}>${c}</label>`).join('')}
function renderChips(){
  const d=T[lang];
  [['#cType','type',d.types,'radio'],['#cWood','wood',d.mats,'radio'],['#cFin','finish',d.fins,'radio'],['#cVia','via',d.via,'radio'],['#cViaQ','via',d.via,'radio']].forEach(([s,n,items,ty])=>{
    const box=$(s);const sel=new Set($$(s+' input:checked').map(i=>+i.value));box.innerHTML=chipsHTML(n,items,ty,sel)});
  syncMailChip($('#fQuick'));syncMailChip($('#fFull'));
}
function setMode(m,instant){
  mode=m;$('#seg').dataset.mode=m;
  $$('#seg button').forEach(b=>b.setAttribute('aria-selected',b.dataset.mode===m));
  $('#fQuick').hidden=m!=='quick';$('#fFull').hidden=m!=='full';
  if(!instant)$('#mBody').scrollTop=0;
}
function trapFocus(e){
  if(e.key!=='Tab'||!modal.classList.contains('on'))return;
  const f=[...modal.querySelectorAll('button,input,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.closest('[hidden]')&&x.offsetParent!==null);
  if(!f.length)return;const a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
}
function openModal(m,opts={}){
  closeSheet();closeDrawer(true);
  mFrom=document.activeElement;
  $('#mDone').hidden=true;$('#mDone').classList.remove('show');
  setMode(m);
  if(opts.type!=null){const r=$(`#cType input[value="${opts.type}"]`);if(r)r.checked=true}
  if(opts.msg){const ta=$('#msg');if(!ta.value.includes(opts.msg))ta.value=(opts.msg+'\n'+ta.value).trim()}
  modal.classList.add('on');mscrim.classList.add('on');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  setTimeout(()=>{const i=(m==='quick'?$('#fQuick'):$('#fFull')).querySelector(m==='quick'?'input':'.chip');if(i&&matchMedia('(pointer:fine)').matches)(i.querySelector?.('input')||i).focus();else $('#mClose').focus()},60);
}
function closeModal(){
  if(!modal.classList.contains('on'))return;
  modal.classList.remove('on');mscrim.classList.remove('on');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';
  mFrom&&mFrom.focus&&mFrom.focus();
}
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]');
  if(o){e.preventDefault();openModal(o.dataset.open,{type:o.dataset.type!=null?+o.dataset.type:null})}
});
$$('#seg button').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('#mClose').onclick=closeModal;mscrim.onclick=closeModal;$('#doneClose').onclick=closeModal;
addEventListener('keydown',trapFocus);
/* swipe down to close (mobile sheet) */
(()=>{let y0=null,t0=0,dy=0;const head=$('.m-head');
  head.addEventListener('pointerdown',e=>{if(innerWidth>600||e.target.closest('button'))return;y0=e.clientY;t0=Date.now();dy=0;head.setPointerCapture(e.pointerId);modal.style.transition='none'});
  head.addEventListener('pointermove',e=>{if(y0==null)return;dy=e.clientY-y0;const v=dy>0?dy:-(Math.sqrt(-dy)*2);modal.style.transform=`translateY(${v}px)`});
  const end=()=>{if(y0==null)return;const vel=Math.abs(dy)/(Date.now()-t0);modal.style.transition='';modal.style.transform='';if(dy>120||(dy>20&&vel>0.11))closeModal();y0=null};
  head.addEventListener('pointerup',end);head.addEventListener('pointercancel',end);
})();
/* files */
function updateFiles(){
  const f=$('#fileIn').files,d=T[lang];
  $('#fileLbl').textContent=f.length?(f.length===1?f[0].name:`${f.length} ${d.f_files}`):d.f_file;
  $('#thumbs').innerHTML='';
  [...f].slice(0,8).forEach(x=>{const el=document.createElement('div');
    if(x.type.startsWith('image/')){const u=URL.createObjectURL(x);el.style.backgroundImage=`url(${u})`}else{el.className='pdf';el.textContent='PDF'}
    $('#thumbs').appendChild(el)});
}
$('#fileIn').onchange=updateFiles;
/* validation + submit */
function check(form){
  const n=form.name,p=form.phone;
  const nOk=n.value.trim().length>0,pOk=p.value.replace(/\D/g,'').length>=8;
  n.closest('.fld').classList.toggle('invalid',!nOk);p.closest('.fld').classList.toggle('invalid',!pOk);
  if(!nOk){n.focus();return false}if(!pOk){p.focus();return false}return true;
}
function done(form){
  const d=T[lang];
  /* Demo: ovde se upit šalje na server (e-mail, Telegram ili CRM). */
  const data=Object.fromEntries(new FormData(form));console.info('Upit',form.id,data);
  const name=form.name.value.trim().split(' ')[0];
  $('#doneP').textContent=(form.id==='fQuick'?d.done_quick:d.done_full).replace('{n}',name);
  form.reset();syncMailChip(form);if(form.id==='fFull'){renderDims([{}]);updateFiles();bag.clear();renderBag();syncAdds()}
  $('#fQuick').hidden=true;$('#fFull').hidden=true;
  const dn=$('#mDone');dn.hidden=false;requestAnimationFrame(()=>dn.classList.add('show'));
  $('#doneClose').focus();
}

/* ===== Slanje upita na e-mail (FormSubmit) ===== */
const LEAD_ENDPOINT='https://formsubmit.co/ajax/'+CONTACT.mail;
const SEND_ERR={sr:'Slanje nije uspelo. Pozovite nas ili pokušajte ponovo.',en:'Sending failed. Please call us or try again.',ru:'Не удалось отправить. Позвоните нам или попробуйте ещё раз.'};
const MAX_UPLOAD=4.6*1024*1024;
const BIG_ERR={sr:'Fajlovi su preveliki (maks. ~4,5 MB). Uklonite neke ili pošaljite na e-mail.',en:'Files are too large (max ~4.5 MB). Remove some or email them to us.',ru:'Файлы слишком большие (макс. ~4,5 МБ). Уберите часть или отправьте на почту.'};
function shrinkImg(file){
  return new Promise(res=>{
    if(!file.type.startsWith('image/')||file.type==='image/gif'||file.size<300*1024)return res(file);
    const img=new Image(),u=URL.createObjectURL(file);
    img.onload=()=>{
      const k=Math.min(1,1600/Math.max(img.naturalWidth,img.naturalHeight));
      const c=document.createElement('canvas');c.width=Math.round(img.naturalWidth*k);c.height=Math.round(img.naturalHeight*k);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);
      c.toBlob(b=>res(b&&b.size<file.size?new File([b],file.name.replace(/\.[^.]+$/,'')+'.jpg',{type:'image/jpeg'}):file),'image/jpeg',.8);
    };
    img.onerror=()=>{URL.revokeObjectURL(u);res(file)};
    img.src=u;
  });
}
async function send(form){
  const btn0=form.querySelector('.submit');btn0.disabled=true;
  try{await send2(form)}finally{btn0.disabled=false}
}
async function send2(form){
  const sr=T.sr,fd=new FormData(form),out=new FormData();
  const pick=(k,arr)=>{const v=fd.get(k);return v!==null&&v!==''&&arr&&arr[+v]!=null?arr[+v]:''};
  const quick=form.id==='fQuick';
  out.append('_subject',(quick?'Brzi upit':'Detaljan upit')+' — '+fd.get('name'));
  out.append('_template','table');out.append('_captcha','false');
  out.append('Forma',quick?'Brzi upit (pozovite me)':'Detaljan upit');
  out.append('Ime',fd.get('name'));out.append('Telefon',fd.get('phone'));
  if(fd.get('email'))out.append('email',fd.get('email'));
  out.append('Kontakt preko',pick('via',sr.via));
  if(!quick){
    out.append('Šta se pravi',pick('type',sr.types));
    out.append('Dimenzije (Š×D×V)',readDims().filter(r=>r.w||r.d||r.h).map((r,i)=>(i+1)+': '+(r.w||'?')+' × '+(r.d||'?')+' × '+(r.h||'?')).join(' | '));
    out.append('Drvo',pick('wood',sr.mats));out.append('Završna obrada',pick('finish',sr.fins));
    out.append('Opis',fd.get('msg')||'');
    out.append('Izabrani modeli',[...bag].map(i=>sr.prods[i][0]).join(', '));
    const list=[...(form.files?form.files.files:[])].slice(0,8);
    const prepared=await Promise.all(list.map(shrinkImg));
    if(prepared.reduce((a,x)=>a+x.size,0)>MAX_UPLOAD){toast(BIG_ERR[lang]||BIG_ERR.sr);return}
    prepared.forEach(x=>out.append('attachment',x,x.name));
  }
  out.append('Jezik sajta',lang);out.append('Strana',location.href);
  const btn=form.querySelector('.submit');
  try{
    const r=await fetch(LEAD_ENDPOINT,{method:'POST',body:out,headers:{Accept:'application/json'}});
    const j=await r.json().catch(()=>({}));
    if(!r.ok||j.success==='false'||j.success===false)throw 0;
    done(form);
  }catch(err){toast(SEND_ERR[lang]||SEND_ERR.sr)}
  finally{btn.disabled=false}
}
['#fQuick','#fFull'].forEach(s=>{
  const f=$(s);
  f.onsubmit=e=>{e.preventDefault();if(check(f))send(f)};
  ['name','phone'].forEach(n=>f[n].addEventListener('input',e=>e.target.closest('.fld').classList.remove('invalid')));
});

render();

/* in-page links: close overlays first, then scroll (iOS-safe) */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');if(!a||a.hasAttribute('data-open'))return;
  const id=a.getAttribute('href');const el=id.length>1?document.querySelector(id):document.body;if(!el)return;
  e.preventDefault();closeSheet();
  requestAnimationFrame(()=>{const y=id==='#top'?0:el.getBoundingClientRect().top+scrollY-$('#hdr').offsetHeight+1;
    window.scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})});
},true);

/* sync step glow with vertical runner on phones */
function syncSteps(){const st=$('#steps');if(!st)return;const H=st.offsetHeight||1;
  $$('#steps .step').forEach(s=>s.style.setProperty('--sd',((s.offsetTop+7)/H*9-0.18).toFixed(2)+'s'))}
addEventListener('resize',syncSteps);setTimeout(syncSteps,100);
/* designers contact modal */
const desBtn=$('#desBtn'),cModal=$('#cModal'),cScrim=$('#cScrim');let cFrom=null;
function setC(on){cModal.classList.toggle('on',on);cScrim.classList.toggle('on',on);cModal.setAttribute('aria-hidden',!on);document.body.style.overflow=on?'hidden':'';
  if(on){cFrom=document.activeElement;setTimeout(()=>$('#cClose').focus({preventScroll:true}),40)}else cFrom&&cFrom.focus&&cFrom.focus({preventScroll:true})}
desBtn.onclick=()=>setC(true);$('#cClose').onclick=()=>setC(false);cScrim.onclick=()=>setC(false);
cModal.querySelectorAll('.clinks a').forEach(a=>a.addEventListener('click',()=>setTimeout(()=>setC(false),150)));
addEventListener('keydown',e=>{if(!cModal.classList.contains('on'))return;
  if(e.key==='Escape'){e.stopImmediatePropagation();setC(false)}
  if(e.key==='Tab'){const f=[...cModal.querySelectorAll('a,button')],i=f.indexOf(document.activeElement);
    if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}},true);

/* run the process light only while visible */
if('IntersectionObserver' in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('run');so.disconnect()}}),{rootMargin:'0px 0px -10% 0px'});so.observe($('#steps'))}else $('#steps').classList.add('run');
