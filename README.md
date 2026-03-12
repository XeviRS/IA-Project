# 🚴 Safe Bike — Seguretat Intel·ligent per a Ciclistes

## 💡 Origen del Projecte

Fa unes setmanes el meu pare va viatjar a Lanzarote per fer un *staff* esportiu amb l’equip del Centre Natació Mataró. Durant aquells dies van combinar entrenaments de **natació i bicicleta** aprofitant les condicions de l’illa.

Quan va tornar, parlant sobre l’experiència, em va dir: *“Per què no t’animes a fer bicicleta?”*.

La idea em va semblar interessant, però immediatament vaig pensar en una cosa: **no tots els llocs transmeten la mateixa sensació de seguretat quan vas en bici**. Depenent de la ruta, el trànsit, la meteorologia o fins i tot l’hora del dia, la percepció de risc pot canviar molt.

D’aquesta reflexió neix **Safe Bike**: la idea d’utilitzar **intel·ligència artificial i dades en temps real** per analitzar múltiples factors d’una ruta i oferir una **puntuació de seguretat personalitzada per a cada ciclista**.

L’objectiu és simple: ajudar a prendre decisions més informades abans de sortir a pedalar.

Demo web interactiva de **Safe Bike**, una aplicació de seguretat per a ciclistes basada en Intel·ligència Artificial que analitza més de 100 paràmetres en temps real per oferir una puntuació de seguretat personalitzada.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?logo=leaflet)

---

## 📋 Descripció

Safe Bike combina **5 IAs especialitzades** que analitzen en temps real:

- **Meteorologia** — 24 paràmetres (vent, pluja, temperatura, visibilitat, índex UV…)
- **Trànsit** — 18 paràmetres (densitat, velocitat mitjana, vehicles pesants…)
- **Superfície** — 16 paràmetres (tipus d'asfalt, estat del paviment, carril bici…)
- **Desnivell** — 12 paràmetres (pendent, altitud, corbes…)
- **Incidències** — 14 paràmetres (accidents recents, obres, zones de risc…)
- **Perfil Ciclista** — 10 paràmetres (nivell, edat, experiència…)
- **Hora/Data** — 8 paràmetres (hora punta, lluminositat, estació…)

**Total: +100 paràmetres** analitzats per generar una puntuació de seguretat personalitzada.

---

## 🖥️ Seccions de la Demo

| Secció | Descripció |
|---|---|
| **Hero** | Puntuació de seguretat animada amb badges flotants i estadístiques |
| **IA Multimodal** | Visualització en temps real del motor IA amb barres de paràmetres |
| **Simulador** | Configura dia, meteo, trànsit i nivell per calcular la seguretat |
| **Mapa de Ruta** | Ruta interactiva Camp Nou – Tibidabo – Vallvidrera amb Leaflet |
| **Perfil del Ciclista** | Selectors d'experiència, modalitat, edat, sexe i dispositiu |
| **Rutes Suggerides** | 4 rutes amb mapes, puntuació de seguretat i detalls tècnics |
| **Com Funciona** | Procés en 4 passos amb animacions |

---

## 🛠️ Stack Tecnològic

- **[Next.js 14](https://nextjs.org/)** — Framework React amb App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Tipatge estàtic
- **[TailwindCSS 3](https://tailwindcss.com/)** — Estils utility-first
- **[Framer Motion](https://www.framer.com/motion/)** — Animacions fluides
- **[Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/)** — Mapes interactius
- **[Lucide React](https://lucide.dev/)** — Icones SVG

---

## 🚀 Instal·lació i Execució

### Prerequisits

- Node.js >= 18
- npm

### Passos

```bash
# Clonar el repositori
git clone https://github.com/el-teu-usuari/safe-bike-demo.git
cd safe-bike-demo

# Instal·lar dependències
npm install --legacy-peer-deps

# Iniciar en mode desenvolupament
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000) al navegador.

### Build de producció

```bash
npm run build
npm start
```

---

## 📁 Estructura del Projecte

```
safe-bike-demo/
├── src/
│   ├── app/
│   │   ├── globals.css        # Estils globals + animacions
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Pàgina principal amb totes les seccions
│   └── components/
│       ├── MapSection.tsx     # Mapa Leaflet de la ruta principal
│       └── RouteMap.tsx       # Mapes individuals per a cada ruta
├── tailwind.config.ts         # Configuració TailwindCSS
├── next.config.js             # Configuració Next.js
├── tsconfig.json              # Configuració TypeScript
├── postcss.config.js          # PostCSS + Autoprefixer
└── package.json
```

---

## 📸 Captures de Pantalla

### Simulador de Seguretat
Configura les condicions meteorològiques, de trànsit i el nivell d'usuari per obtenir una puntuació de seguretat en temps real.

### Perfil del Ciclista
Personalitza el teu perfil amb nivell d'experiència, modalitat, edat, sexe i dispositiu preferit.

### Rutes Suggerides
Explora rutes personalitzades amb puntuació de seguretat, mapa, desnivell, superfície i temps estimat.

---

## 📄 Llicència

Aquest projecte és una demo interactiva amb finalitats demostratives.

---

Fet amb ❤️ a Barcelona
