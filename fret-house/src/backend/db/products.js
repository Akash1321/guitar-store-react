import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ark New Era Euphonon Round Shoulder Style 8",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683919059/acoustic/ark-new-era-euphonon-main_pec3pk.jpg",
    description:
      "This Euphonon Round Shoulder is executed in 'Style 8', the most luxurious package of specifications. It features a beautiful rosewood body with an Adirondack top adorned with an abalone rosette and purfling.",
    inStock: true,
    rating: "4.1",
    price: "7599",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Lakewood M45 Custom Ziricote European Spruce",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683919923/acoustic/lakewood-m45_xdge6i.jpg",
    description:
      "The Lakewood M45 is a product of the brand's Custom Shop, and is equipped with beautiful woods. For example, the sound box is made of ziricote, which provides definition and resonance in the low-tone spectrum. The European spruce top provides a powerful sound with a distinct clarity",
    inStock: true,
    rating: "4.5",
    price: "9000",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Martin D28GE Golden Era Brazilian Adirondack 2001",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683920720/acoustic/martin-golden-era_o0qen7.jpg",
    description:
      "Only about 600 'Golden Era' D28's were made, of which this is #307, so we don't often see this model in our shop. As the name suggests, it is based on the guitars from Martin's Golden Era and features forward shifted scalloped bracing , herringbone purfling and, of course, Brazilian rosewood back and sides!",
    inStock: false,
    rating: "4.8",
    price: "12000",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Martin 00028 Modern Deluxe 2021",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683921543/acoustic/Martin00028_poj3gs.jpg",
    description:
      "The 00028 Modern Deluxe is a new take on Martin Vintage. This guitar is packed with custom details and modern technology that you really need to see, feel and hear for yourself. Vintage details include a Sitka spruce Vintage Tone System (VTS) top, dovetail neck joint and natural protein glue construction that give the guitar a full, mature Martin sound that has inspired musicians for generations.",
    inStock: true,
    rating: "3.2",
    price: "5000",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Taylor GS Mini-E Special Edition Caramel Burst",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683921966/acoustic/taylorGS_bpxueh.jpg",
    description:
      "A Carmel Burst top adds a rich hue to this special edition of the GS Mini, providing a unique visual appearance to match its bold tone. A solid spruce top delivers a bright, powerful sound with plenty of volume to hold its own alongside other musicians, while the compact body and short, easy-to-play Taylor neck provide an enjoyable playing experience no matter your skill level.",
    inStock: false,
    rating: "3.8",
    price: "6000",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Waanders Grand Concert Sitka Walnut 2012",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683922236/acoustic/febo-waanders_cfdpar.jpg",
    description:
      "Febo Waanders is a respected builder who lives and works in Daarlerveen. Coming from a family of woodworkers, Febo was the first to combine this passion with his love of music. From this came an extraordinary talent for building guitars. Built with a combination of walnut for the back and sides and Sitka spruce for the top.",
    inStock: true,
    rating: "4.0",
    price: "10,500",
    category: "acoustic",
  },
  {
    _id: uuid(),
    title: "Fender American Pro II Precision Bass Miami Blue MN",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683922946/bass/fender-american-pro_iqlsqy.jpg",
    description:
      "The American Professional II Precision Bass draws on over sixty years of innovation, inspiration and evolution to meet the demands of today's player.",
    inStock: true,
    rating: "5.0",
    price: "60,990",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Fender Custom Shop 1958 Precision Bass Heavy Relic 2021",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683924698/bass/fender-custom1958_puhjoa.jpg",
    description:
      "This 1958 Precision Bass recreates the legendary P-bass as only the Fender Custom Shop can, with a few custom touches to enhance the playing experience. The two-piece alder body carries a Vintage White finish with Heavy Relic finish, giving it the look of a true 'road warrior' that has seen many a stage.",
    inStock: true,
    rating: "3.9",
    price: "23,399",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Fender Vintage Custom 1951 Precision Bass NOS Nocaster Blonde",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683925061/bass/fender-custom-vintage_qtq0db.jpg",
    description:
      "The Vintage Custom 1951 Precision Bass offers the features that made the original the undisputed champion of working bassists worldwide, including an extremely fast and comfortable quartersawn maple neck with a 7.25 fingerboard radius and '51 Vintage P bass bridge. It also features an ash  body with a NOS lacquer finish that allows the instrument to breathe more organically and show some of the natural grain through the finish.",
    inStock: false,
    rating: "2.6",
    price: "19,570",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Music Man Stingray Special 5 Snowy Night",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683925500/bass/music-man-stingray_eaf01x.jpg",
    description:
      "The StingRay was the first production bass to feature a built-in active EQ, and it has stayed true to this principle ever since. The five-string bass is equipped with a powerful humbucker with active tone control, which together make for an extremely versatile instrument.",
    inStock: true,
    rating: "4.5",
    price: "55,000",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Sandberg California VS Passive",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683925779/bass/sandberg-california_jsidnc.jpg",
    description:
      "The Sandberg California VS Passive offers the reliability of modern instruments, but also a classic sound. The alder body is provided with a 'Hardcore Aged' finish with which Sandberg shows that they are masters of artificially aging guitars. In addition, the brand also produces all its basses in a left-handed version, which is of course very cool.",
    inStock: false,
    rating: "3.2",
    price: "21,390",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Sandberg California II",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683926208/bass/sandberg-california-II_pwtkrg.jpg",
    description:
      "This California II from the new California Central Series guarantees countless classic humbucker sounds: crystal clear with the treble fully open, warm and round with the treble further closed. The alder body is connected to a maple neck, offering comfortable playability.",
    inStock: true,
    rating: "4.0",
    price: "41,785",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Schecter Wembley J4",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683926495/bass/schecter-wembley-j4_qmn3nx.jpg",
    description:
      "This J4 is simply a bass guitar that will appeal to any bass guitarist. It is in excellent condition and has only a few minor signs of wear next to the relic. Comes in a case with a certificate of authenticity.",
    inStock: true,
    rating: "3.5",
    price: "29,850",
    category: "bass",
  },
  {
    _id: uuid(),
    title: "Fender Custom Shop 56 Stratocaster",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683927013/electric/fender-custom-shop-56_xh9mnd.jpg",
    description:
      "This Custom Shop 1956 Stratocaster takes you back to the early days of the Stratocaster in terms of specs. In terms of appearance, it's like going back in time and buying a new one!. The maple neck has a '10/56 V' profile and a 9.5 inch radius fingerboard.",
    inStock: true,
    rating: "4.1",
    price: "39,455",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Fender Custom Shop 1957 Stratocaster",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683927344/electric/fender-custom-shop-1957_pai6j7.jpg",
    description:
      "When the Stratocaster first appeared on the scene in 1954, its distinctive, distinctive sound took the world by storm, making the original 1950s models some of the most coveted guitars today. As a result, Fender has ensured that the '57 Custom Shop Strat encapsulates all that scintillating, vintage tonal quality.",
    inStock: false,
    rating: "3.3",
    price: "25,990",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Gibson Custom Shop 58 Korina Explorer Cardinal Red VOS",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683927663/electric/gibson-custom-red_xydbq2.jpg",
    description:
      "Gibson Custom Shop is the pinnacle of craftsmanship, quality and sound excellence. Each instrument celebrates Gibson's legacy through accuracy, authenticity and attention to detail.",
    inStock: true,
    rating: "2.2",
    price: "17,890",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Kauffmann 63 S Olympic White Aged HSS",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683927973/electric/kauffmann-63_qzsdrs.jpg",
    description:
      "auffman Guitars builds guitars that pay homage to the iconic models that have dominated the guitar world for so long. From the headquarters in Alphen aan de Rijn, the guitars are carefully provided with a beautifully aged look that gives the instrument a played-in feel.",
    inStock: true,
    rating: "4.6",
    price: "50,499",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Kauffmann Cozy JM Gold Sparkle",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683928236/electric/kauffmann-cozy_qsbbnl.jpg",
    description:
      "The Kauffmann Cozy combines vintage looks with an extremely comfortable playing feel. It is an offset guitar with a fairly large body. Despite its size, it weighs only 3 kilograms, thanks to the lightweight Paulownia body.",
    inStock: false,
    rating: "4.3",
    price: "58,300",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Maybach S61 3-Tone Sunburst Aged 2016",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683928578/electric/maybach-2016_qjzj3d.jpg",
    description:
      "With the Stradovari, Maybach has produced a versatile instrument. With its three single-coil pickups and five-position switch, there are plenty of tonal options available to produce any tone you desire. With a Swamp Ash body, a maple neck and a rosewood fingerboard, this guitar immediately gives a familiar feeling.",
    inStock: true,
    rating: "4.8",
    price: "69,000",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "PRS Paul's Guitar Charcoal Burst",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683928849/electric/pauls-guitar-charcoal-burst_v4xphw.jpg",
    description:
      "The Paul's Guitar model uses two TCI humbuckers (Tuned Capacitance and Inductance) in combination with two mini switches that allow you to switch each of the pickups from humbucker to true single coil mode.",
    inStock: true,
    rating: "5.0",
    price: "85,599",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Schecter Banshee Elite-6 Gross",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683929134/electric/schecter-diamond-series_gkn9ja.jpg",
    description:
      "The Schecter Banshee Elite-6 is an extremely expressive instrument. Not only do you get the rock-solid construction and great playability that Schecter Diamond Series guitars are known for, with a pair of Schecter USA SuperCharger Mach-6 humbucker pickups you're guaranteed amazing tones whether fingerpicking delicately or strumming aggressively.",
    inStock: true,
    rating: "2.8",
    price: "24,900",
    category: "electric",
  },
  {
    _id: uuid(),
    title: "Boston El Clasico Classical Case",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683929523/bags/boston-el-clasico_myphis.jpg",
    description:
      "To safely store and transport an acoustic guitar, a good case is essential. This Boston El Clasico suitcase is an excellent choice in that respect; the molded case is made of wood and finished with a carbon look.",
    inStock: true,
    rating: "4.5",
    price: "4999",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Gibson Dreadnought Brown Hardshell Case",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683929770/bags/gibson-dreadnought-brown_vtqnbi.jpg",
    description:
      "Gibson cases are designed to protect your Gibson instrument in style. Made from the highest quality materials and hardware, they meet Gibson's strict factory specifications and come in a variety of sizes to perfectly fit your beloved Gibson.",
    inStock: false,
    rating: "4.8",
    price: "8,500",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Lowden F Style Case B Stock",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683930175/bags/lowden-f-style-case_gtkaoe.jpg",
    description:
      "The construction of these cases consists of a molded, high impact  ABS plastic exterior bonded directly to a cellular foam inner mold specifically designed to fit their guitars seamlessly. This inner shape is feather light and, being semi-rigid  , it is designed to absorb shocks from the outside world.",
    inStock: true,
    rating: "3.4",
    price: "2990",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Dunlop 87N Trigger Capo Nickel Electric",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683930515/capo/dunlop-dunlop-87n-trigger-capo-nickel-electric_refnhj.png",
    description:
      "Your sound should not change when using a capo. With Dunlop, you'll be heard loud and clear, and tuned precisely. For acoustic guitar (curved) and in a nickel finish.",
    inStock: true,
    rating: "3.6",
    price: "500",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Kyser Meredith Quick-Change Acoustic Capo",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683930795/capo/kyser-meredith-capo_pfgllz.jpg",
    description:
      "The /'Meredith' honors a 40-year legacy while pushing for a more inclusive and connected Kyser community. Powder coated in a chrome Candy Teal finish, with a low tension spring designed for ultimate usability, the Meredith represents more than just the future of acoustic guitar.",
    inStock: true,
    rating: "4.0",
    price: "430",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Kyser Quick-Change Acoustic Capo Maple",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683931082/capo/kyser-maple_per3qh.jpg",
    description:
      "This beautifully designed capo from Kyser is intended for the acoustic guitar. As its name suggests (Quick Change), it changes the pitch of your guitar in an instant. The Kyser Quick-Change capo is expertly designed and built to last.",
    inStock: false,
    rating: "2.5",
    price: "150",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Taylor Acoustic Capo",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683931725/capo/taylor-acoustic-capo_pnqjpx.jpg",
    description:
      "Guitar capo with 'yoke' design around the neck to ensure superior tone, intonation and tuning stability. Easy to place behind the comb when not in use. This capo is made in the USA and has a black nickel finish.",
    inStock: true,
    rating: "4.2",
    price: "200",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Dugain Standug Tulip Wood",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683952905/plectrums/dugain-wood_yimfbv.png",
    description:
      "This Dugain Tulip Wood pick will blow your mind with the warm tone it creates. It has a natural wood grain that goes vertically downwards, allowing the tone to flow better from your strings while also adding strength to the pick. It has tapered edges that allow for a quick release from your strings.",
    inStock: true,
    rating: "3.9",
    price: "139",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Taylor Premium Thermex Ultra Picks",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683953171/plectrums/taylor-premium-picks_pyo4hh.jpg",
    description:
      "Taylor Premium Thermex Ultra Ruby Swirl Picks are the most popular picks in the Taylor DarkTone Series, made with an exclusive thermobonding process that helps them produce a warmer, more articulate guitar tone.",
    inStock: false,
    rating: "3.2",
    price: "70",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Taylor Premium Thermex Ultra Picks Blue",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683953397/plectrums/taylor-premium-blue-swi_l8gyjw.jpg",
    description:
      "Taylor Premium Thermex Ultra Blue Swirl Picks are the most popular of the Taylor DarkTone series picks, made with an exclusive thermobonding process that helps them produce a warmer, more articulate guitar tone.",
    inStock: true,
    rating: "2.7",
    price: "55",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Dunlop Heavies Thumbpick",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683953619/plectrums/dunlop-thumbpic_efhkpz.png",
    description:
      "Heavies Thumbpicks provide smoother playability, longer life and a snug fit. They have lengthened and reshaped the tip and increased the mass of the pick.",
    inStock: true,
    rating: "4.4",
    price: "90",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Fender Classic Picks",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683953861/plectrums/fender-classic-picks_thrgvt.jpg",
    description:
      "Experience the classic feel of Fender no matter what guitar or bass you play. Fender picks offer comfort and premium flexibility for any performer, with a variety of sizes, shapes and thicknesses to suit every guitarist's playing styles and preferences.",
    inStock: true,
    rating: "4.0",
    price: "75",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Gibson Primrose Strap",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1683998961/strap/gibson-primrose-strap_ehohzw.jpg",
    description:
      "Gibson The Primrose Strap is handcrafted in the USA from quality materials. It has leather ends with gold Gibson logo. It is 5 cm wide and the length is adjustable from 88 cm to 153 cm.",
    inStock: true,
    rating: "3.9",
    price: "495",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Taylor Elements Distressed Leather Strap",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1684257218/strap/taylor-gs-mini-strap-_i0jrx4.jpg",
    description:
      "The Taylor Element Distressed Leather Guitar Strap perfectly embodies the enduringly popular distressed leather look. This rustic strap features a rich multilayered dark brown coloring, detailed with Element designs to make it a perfect match for any 800 Series Taylor.",
    inStock: true,
    rating: "4.2",
    price: "630",
    category: "accessories",
  },
  {
    _id: uuid(),
    title: "Righton Peppers",
    image:
      "https://res.cloudinary.com/dnj52nahi/image/upload/v1684257742/strap/righton-peppers_grghfu.jpg",
    description:
      "The Boxeo strap is a smooth strap, without prints or ornaments, made of a rich fabrics and great colors that fits great with you guitar or bass. Smart and simple.",
    inStock: false,
    rating: "3.7",
    price: "365",
    category: "accessories",
  },
];
