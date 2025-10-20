# Muzeul Verde - O călătorie pentru Planetă 🌍🌱

Un muzeu virtual interactiv creat pentru proiectul ETwinning "Green Routinators" al Liceului Tehnologic "Nicolae Titulescu" Medgidia.

## 📋 Despre Proiect

Acest site web este un muzeu virtual cu 4 săli interactive despre ecologie:
- **Sala 1**: Planeta în pericol 🌍
- **Sala 2**: Energie curată ⚡
- **Sala 3**: Reciclarea creativă ♻️
- **Sala 4**: Acțiunea noastră contează 🌱

## 🎯 Caracteristici

✅ Design modern și responsive (funcționează pe telefon, tabletă, PC)
✅ Animații și efecte interactive
✅ Galerii foto și video
✅ Quiz interactiv despre energie
✅ Secțiune "Promisiuni verzi" unde vizitatorii pot scrie mesaje
✅ Butoane de share pentru social media
✅ Optimizat pentru performanță

## 📁 Structura Proiectului

```
proiect/
├── index.html                  # Pagina principală (harta muzeului)
├── room1.html                  # Sala 1: Planeta în pericol
├── room2.html                  # Sala 2: Energie curată
├── room3.html                  # Sala 3: Reciclarea creativă
├── room4.html                  # Sala 4: Acțiunea noastră contează
├── css/
│   └── style.css              # Toate stilurile pentru website
├── js/
│   └── main.js                # JavaScript pentru interactivitate
├── WhatsApp Image *.jpeg      # Toate imaginile voastre
├── WhatsApp Video *.mp4       # Toate videoclipurile voastre
└── README.md                  # Acest fișier
```

## 🚀 Cum să vezi website-ul LOCAL (pe computerul tău)

### Metoda 1: Deschide direct în browser
1. Navighează la folder-ul `/home/edvin/proiect`
2. Dă dublu-click pe `index.html`
3. Se va deschide în browser-ul tău

### Metoda 2: Folosește Python (recomandat pentru testare)
```bash
cd /home/edvin/proiect
python3 -m http.server 8000
```
Apoi deschide browser-ul la: `http://localhost:8000`

## 🌐 Cum să PUBLICI website-ul ONLINE (GRATUIT)

Ai 3 opțiuni gratuite de hosting:

---

### 🏆 OPȚIUNEA 1: GitHub Pages (Recomandată - Cea mai ușoară)

#### Pas 1: Creează cont GitHub (dacă nu ai)
1. Mergi la https://github.com
2. Click pe "Sign up"
3. Completează cu email, parolă, username

#### Pas 2: Creează un repository nou
1. Click pe butonul verde "New" (sau "+" în dreapta sus)
2. Repository name: `muzeul-verde` (sau alt nume)
3. Setează ca **Public**
4. NU bifa "Add a README file"
5. Click "Create repository"

#### Pas 3: Urcă fișierele
##### Varianta A: Direct pe site (mai ușor)
1. Pe pagina repository-ului, click "uploading an existing file"
2. Trage TOATE fișierele din folder (HTML, CSS, JS, imagini, video)
3. Așteaptă să se încarce toate
4. Scrie un mesaj: "Adaugă Muzeul Verde"
5. Click "Commit changes"

##### Varianta B: Prin Git (pentru cei avansați)
```bash
cd /home/edvin/proiect

# Inițializează git
git init
git add .
git commit -m "Adaugă Muzeul Verde"

# Conectează la GitHub (înlocuiește USERNAME cu username-ul tău)
git branch -M main
git remote add origin https://github.com/USERNAME/muzeul-verde.git
git push -u origin main
```

#### Pas 4: Activează GitHub Pages
1. În repository, click pe "Settings"
2. În stânga, click pe "Pages"
3. La "Branch", selectează "main"
4. La folder, selectează "/ (root)"
5. Click "Save"
6. Așteaptă 1-2 minute

#### Pas 5: Accesează site-ul tău!
URL-ul va fi: `https://USERNAME.github.io/muzeul-verde/`

---

### OPȚIUNEA 2: Netlify (Foarte rapid, drag & drop)

#### Pas 1: Creează cont
1. Mergi la https://www.netlify.com
2. Click "Sign up" (poți folosi GitHub sau email)

#### Pas 2: Deploy site-ul
1. Click "Add new site" → "Deploy manually"
2. Trage întreg folder-ul `proiect` în zona de drop
3. Așteaptă 30 secunde
4. Gata! Primești un link gen: `https://random-name-123.netlify.app`

#### Pas 3 (Opțional): Schimbă numele
1. Site settings → Change site name
2. Alege un nume: `muzeul-verde-titulescu`
3. Noul URL: `https://muzeul-verde-titulescu.netlify.app`

---

### OPȚIUNEA 3: Vercel (Pentru cei tehnici)

#### Pas 1: Instalează Vercel CLI
```bash
npm install -g vercel
```

#### Pas 2: Deploy
```bash
cd /home/edvin/proiect
vercel
```

Urmează instrucțiunile și primești un link instant!

---

## ✅ Testare înainte de publicare

Verifică că totul funcționează:

1. ✅ Toate imaginile se încarcă corect
2. ✅ Toate videoclipurile se redau
3. ✅ Navigarea între săli funcționează
4. ✅ Quiz-ul din Sala 2 funcționează
5. ✅ Poți adăuga promisiuni în Sala 4
6. ✅ Butoanele de share funcționează
7. ✅ Site-ul arată bine pe telefon

## 🐛 Rezolvarea problemelor comune

### Imaginile nu se încarcă
- Verifică că toate imaginile sunt în același folder cu HTML-urile
- Verifică că numele fișierelor sunt identice (cu majuscule/minuscule)

### Videoclipurile nu se redau
- Asigură-te că fișierele .mp4 sunt urcate complet
- Unele browsere necesită codec-uri speciale pentru .mp4

### Site-ul nu arată frumos
- Verifică că folderul `css` și `js` sunt la același nivel cu index.html
- Deschide Console în browser (F12) și verifică erorile

## 📱 Compatibilitate

Website-ul funcționează perfect pe:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Windows, Mac, Linux
- ✅ Android, iOS
- ✅ Desktop, Laptop, Tablet, Telefon

## 🎨 Personalizare

### Schimbă culorile
Editează `/css/style.css`:
- Caută `#4CAF50` (verde principal)
- Înlocuiește cu culoarea dorită (ex: `#2196F3` pentru albastru)

### Adaugă mai multe imagini
1. Adaugă imaginea în folder
2. Editează HTML-ul corespunzător
3. Folosește același format ca exemplele existente

### Modifică textele
- Toate textele sunt în fișierele .html
- Caută textul și modifică-l direct

## 📞 Suport

Dacă ai probleme:
1. Verifică că TOATE fișierele sunt urcate
2. Verifică console-ul browserului (F12 → Console)
3. Asigură-te că structura de foldere este corectă

## 📄 Licență

Acest proiect a fost creat pentru scop educațional pentru:
- **Școală**: Liceul Tehnologic "Nicolae Titulescu" Medgidia
- **Proiect**: Green Routinators (ETwinning)
- **An**: 2025

---

## 🌟 Felicitări!

Ai creat un muzeu virtual interactiv! Împărtășește-l cu:
- Profesorii tăi
- Colegii de clasă
- Familia și prietenii
- Comunitatea ETwinning

**Succes cu proiectul! 🎉🌱**
