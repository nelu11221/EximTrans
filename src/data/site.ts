import {
  Container,
  Package2,
  LayoutGrid,
  ShieldCheck,
  Zap,
  Snowflake,
  Truck,
  Boxes,
  Globe2,
  Clock3,
  MapPin,
  Phone,
  Mail,
  FileCheck2,
  Route,
  Headset,
  type LucideIcon,
} from 'lucide-react'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../components/ui/SocialIcons'

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */

export const brand = {
  name: 'EximTrans',
  /** Split for the two-tone logo: "Exim" + accent "Trans" */
  logo: ['Exim', 'Trans'] as const,
  legalName: 'EximTrans S.R.L.',
  tagline: 'Transport rutier de marfă și logistică integrată pentru companii moderne. Rapid, sigur, transparent.',
  // TODO: replace with real contact details
  phone: '+40 700 000 000',
  email: 'office@eximtrans.ro',
  address: 'Str. Logisticii nr. 1, București, România',
  hours: 'Luni – Vineri, 08:00 – 18:00 · Dispecerat 24/7',
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: 'Acasă', to: '/' },
  { label: 'Servicii', to: '/servicii' },
  { label: 'Flotă', to: '/flota' },
  { label: 'Despre noi', to: '/despre' },
  { label: 'Urmărire', to: '/urmarire' },
  { label: 'Contact', to: '/contact' },
]

/* ------------------------------------------------------------------ */
/*  Home                                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: 'Logistică redefinită',
  headline: ['MIȘCĂM', 'ECONOMIA ÎNAINTE.'],
  lead:
    'De la transport internațional de marfă la livrări precise pe ultimul kilometru, EximTrans oferă soluții logistice de mare viteză care țin afacerea ta în mișcare.',
  primaryCta: { label: 'Cere ofertă', to: '/contact' },
  secondaryCta: { label: 'Vezi flota', to: '/flota' },
  image:
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop',
}

export type Stat = { value: number; decimals?: number; suffix?: string; label: string }
export const stats: Stat[] = [
  { value: 99.8, decimals: 1, suffix: '%', label: 'Livrări la timp' },
  { value: 1.2, decimals: 1, suffix: 'M', label: 'Km lunar' },
  { value: 150, suffix: '+', label: 'Camioane în flotă' },
]

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'ftl',
    icon: Container,
    title: 'Transport complet (FTL)',
    description:
      'Camion dedicat pentru transporturile tale mari, livrare directă din punct în punct, fără transbordări.',
    features: ['Serviciu ușă-la-ușă', 'Urmărire GPS în timp real', 'Opțiuni cu temperatură controlată'],
  },
  {
    slug: 'expres',
    icon: Package2,
    title: 'Transport expres',
    description:
      'Când fiecare secundă contează. Echipa noastră de intervenție rapidă asigură că marfa urgentă ajunge înainte de termen.',
    features: ['Dispecerat 24/7', 'Ferestre de livrare garantate', 'Optimizare rute expres'],
    featured: true,
  },
  {
    slug: 'supply-chain',
    icon: LayoutGrid,
    title: 'Soluții supply chain',
    description:
      'Management complet de depozitare și distribuție, conceput pentru a optimiza fluxul de stocuri și costurile.',
    features: ['Gestiune stocuri', 'Logistică multimodală', 'Depozitare inteligentă'],
  },
  {
    slug: 'ltl',
    icon: Boxes,
    title: 'Transport grupaj (LTL)',
    description:
      'Plătești doar spațiul pe care îl folosești. Consolidăm mărfurile mai multor clienți pe aceeași rută, cu plecări regulate.',
    features: ['Plecări zilnice', 'Tarife per palet', 'Acoperire națională'],
  },
  {
    slug: 'frigo',
    icon: Snowflake,
    title: 'Transport frigorific',
    description:
      'Lanț de frig neîntrerupt pentru alimente, produse farmaceutice și mărfuri sensibile, între -25°C și +25°C.',
    features: ['Monitorizare temperatură', 'Certificare ATP', 'Rapoarte de conformitate'],
  },
  {
    slug: 'international',
    icon: Globe2,
    title: 'Transport internațional',
    description:
      'Rute stabile către toată Europa, cu documentație vamală și asigurare CMR incluse.',
    features: ['UE & non-UE', 'Vămuire asistată', 'Asigurare CMR completă'],
  },
]

export const process = [
  { icon: FileCheck2, title: 'Cerere de ofertă', text: 'Ne trimiți detaliile mărfii și ruta. Răspundem cu o ofertă clară în maxim 2 ore.' },
  { icon: Route, title: 'Planificare rută', text: 'Dispeceratul alocă vehiculul potrivit și optimizează traseul pentru timp și cost.' },
  { icon: Truck, title: 'Transport & urmărire', text: 'Marfa pleacă la drum. Vezi poziția camionului în timp real din contul tău.' },
  { icon: Headset, title: 'Livrare & suport', text: 'Confirmare de livrare cu POD electronic și suport post-livrare.' },
]

/* ------------------------------------------------------------------ */
/*  Fleet                                                              */
/* ------------------------------------------------------------------ */

export type Vehicle = {
  name: string
  type: string
  image: string
  specs: { label: string; value: string }[]
  tags: string[]
}

export const fleet: Vehicle[] = [
  {
    name: 'Prelată standard',
    type: 'Semiremorcă 13.6 m',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
    specs: [
      { label: 'Capacitate', value: '24 t / 33 paleți' },
      { label: 'Volum', value: '90 m³' },
      { label: 'Încărcare', value: 'Laterală, spate, sus' },
    ],
    tags: ['FTL', 'Internațional'],
  },
  {
    name: 'Frigorific',
    type: 'Semiremorcă frigo',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1600&auto=format&fit=crop',
    specs: [
      { label: 'Capacitate', value: '22 t / 33 paleți' },
      { label: 'Temperatură', value: '-25°C … +25°C' },
      { label: 'Certificare', value: 'ATP / FRC' },
    ],
    tags: ['Frigo', 'Farma'],
  },
  {
    name: 'Mega trailer',
    type: 'Semiremorcă 3 m înălțime',
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1600&auto=format&fit=crop',
    specs: [
      { label: 'Capacitate', value: '24 t / 33 paleți' },
      { label: 'Volum', value: '100 m³' },
      { label: 'Înălțime utilă', value: '3.00 m' },
    ],
    tags: ['Volum mare', 'Auto'],
  },
  {
    name: 'Van 3.5 t',
    type: 'Autoutilitară expres',
    image: 'https://images.unsplash.com/photo-1566207474742-de921626ad0c?q=80&w=1600&auto=format&fit=crop',
    specs: [
      { label: 'Capacitate', value: '1.2 t / 8 paleți' },
      { label: 'Volum', value: '17 m³' },
      { label: 'Timp răspuns', value: '< 2 ore' },
    ],
    tags: ['Expres', 'Urban'],
  },
]

export const fleetHighlights = [
  { icon: Truck, value: 150, suffix: '+', label: 'Vehicule proprii' },
  { icon: Clock3, value: 3.2, decimals: 1, suffix: ' ani', label: 'Vârstă medie flotă' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'Euro 6' },
]

/* ------------------------------------------------------------------ */
/*  About / Mission                                                    */
/* ------------------------------------------------------------------ */

export const mission = {
  ghost: 'EXIM',
  headline: ['MISIUNE', 'FĂRĂ COMPROMIS'],
  lead:
    'Misiunea noastră este să susținem comerțul prin soluții de transport inovatoare, care pun pe primul loc siguranța, sustenabilitatea și excelența tehnologică. Credem că viitorul transportului stă la intersecția dintre echipamente puternice și software inteligent.',
  points: [
    {
      icon: ShieldCheck,
      title: 'Siguranța pe primul loc',
      text: 'Protocoale riguroase de mentenanță și instruire a șoferilor, peste standardele industriei.',
    },
    {
      icon: Zap,
      title: 'Flotă sustenabilă',
      text: 'Investim în vehicule electrice și cu emisii reduse pentru a ne micșora amprenta de carbon.',
    },
  ],
  fleet: {
    eyebrow: 'Vârful de lance',
    model: 'Cap tractor Euro 6 · Seria X',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
  },
}

export const values = [
  { icon: ShieldCheck, title: 'Siguranță', text: 'Zero compromisuri la mentenanță, instruire și respectarea timpilor de odihnă.' },
  { icon: Clock3, title: 'Punctualitate', text: '99.8% livrări la timp. Termenele promise sunt termene respectate.' },
  { icon: Globe2, title: 'Transparență', text: 'Urmărire GPS, tarife clare și un dispecer dedicat pentru fiecare client.' },
  { icon: Zap, title: 'Inovație', text: 'Optimizare de rute asistată de software și tranziție către o flotă cu emisii reduse.' },
]

export const timeline = [
  { year: '2009', title: 'Începuturi', text: 'EximTrans pornește cu 3 camioane și un singur client fidel.' },
  { year: '2014', title: 'Rute europene', text: 'Deschidem primele linii regulate către Germania, Italia și Franța.' },
  { year: '2018', title: 'Depozit propriu', text: 'Inaugurăm hub-ul logistic de 8.000 m² din apropierea Bucureștiului.' },
  { year: '2022', title: 'Digitalizare', text: 'Lansăm platforma de urmărire în timp real și POD electronic.' },
  { year: '2026', title: 'Astăzi', text: 'Peste 150 de vehicule, 200+ angajați și clienți în 14 țări.' },
]

/* ------------------------------------------------------------------ */
/*  CTA / Contact / Footer                                             */
/* ------------------------------------------------------------------ */

export const cta = {
  headline: ['GATA SĂ-ȚI', 'TRIMITEM MARFA', 'LA DRUM?'],
  lead: 'Consultanții noștri sunt pregătiți să construiască strategia logistică potrivită afacerii tale. Începe astăzi.',
  primary: { label: 'Contactează-ne', to: '/contact' },
  secondary: { label: 'Urmărește coletul', to: '/urmarire' },
}

export const contactInfo = [
  { icon: Phone, label: 'Telefon', value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
  { icon: MapPin, label: 'Adresă', value: brand.address },
  { icon: Clock3, label: 'Program', value: brand.hours },
]

export const footer = {
  columns: [
    {
      title: 'Servicii',
      links: [
        { label: 'Transport complet (FTL)', to: '/servicii#ftl' },
        { label: 'Transport grupaj (LTL)', to: '/servicii#ltl' },
        { label: 'Transport frigorific', to: '/servicii#frigo' },
        { label: 'Transport internațional', to: '/servicii#international' },
      ],
    },
    {
      title: 'Companie',
      links: [
        { label: 'Despre noi', to: '/despre' },
        { label: 'Flota noastră', to: '/flota' },
        { label: 'Standarde de siguranță', to: '/despre#valori' },
        { label: 'Cariere', to: '/contact' },
      ],
    },
    {
      title: 'Suport',
      links: [
        { label: 'Dispecerat 24/7', to: '/contact' },
        { label: 'Cere ofertă', to: '/contact' },
        { label: 'Urmărire expediere', to: '/urmarire' },
        { label: 'Termeni și condiții', to: '/contact' },
      ],
    },
  ],
  socials: [
    { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
    { icon: TwitterIcon, label: 'X / Twitter', href: '#' },
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
  ],
  legal: [
    { label: 'Politica de confidențialitate', to: '/contact' },
    { label: 'Termeni transportator', to: '/contact' },
  ],
  copyright: `© ${new Date().getFullYear()} ${brand.legalName} Toate drepturile rezervate.`,
}
