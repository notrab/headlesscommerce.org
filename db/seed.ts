import { db, Product } from "astro:db";
import { nanoid } from "nanoid";

export default async function seed() {
  const productsData = [
    {
      name: "Netlify",
      logo: "https://media.graphassets.com/AAnAAIvOTU2qJYzFobgu",
      category: "Hosting",
      website: "https://www.netlify.com",
      launchYear: 2014,
      hasFreeTier: true,
    },
    {
      name: "Algolia",
      logo: "https://media.graphassets.com/ssFIf91nSTaTsuXSTTMX",
      category: "Search",
      website: "https://www.algolia.com",
      launchYear: 2012,
      hasFreeTier: true,
    },
    {
      name: "commercetools",
      logo: "https://media.graphassets.com/StyaVRrxS0mPx3lLJW6u",
      category: "Commerce",
      website: "https://commercetools.com",
      launchYear: 2010,
      hasFreeTier: false,
    },
    {
      name: "BigCommerce",
      logo: "https://media.graphassets.com/j7gYX5KSTYqxp8S40MA8",
      category: "Commerce",
      website: "https://www.bigcommerce.com",
      launchYear: 2009,
      hasFreeTier: false,
    },
    {
      name: "Contentful",
      logo: "https://media.graphassets.com/w5UD7hBhQGSEQnEQR7gX",
      category: "CMS",
      website: "https://www.contentful.com",
      launchYear: 2013,
      hasFreeTier: true,
    },
    {
      name: "Contentstack",
      logo: "https://media.graphassets.com/0b5DudzYSjDkMS5kmueT",
      category: "CMS",
      website: "https://www.contentstack.com",
      launchYear: 2012,
      hasFreeTier: true,
    },
    {
      name: "GraphCMS",
      logo: "https://media.graphassets.com/sVZ5BMKT6SZ7NtGzpOHQ",
      category: "CMS",
      website: "https://hygraph.com/",
      launchYear: 2017,
      hasFreeTier: true,
    },
    {
      name: "Elastic",
      logo: "https://media.graphassets.com/maQvnbZXQjOTLoyWJdmI",
      category: "Search",
      website: "https://www.elastic.co",
      launchYear: 2012,
      hasFreeTier: true,
    },
    {
      name: "Commerce Layer",
      logo: "https://media.graphassets.com/zAlllXgNSnbXGmY3W5kQ",
      category: "Commerce",
      website: "https://commercelayer.io",
      launchYear: 2017,
      hasFreeTier: false,
    },
    {
      name: "Apicart",
      logo: "https://media.graphassets.com/wU31RyANSZesHFUL1VkP",
      category: "Commerce",
      website: "https://apicart.net",
      launchYear: 2018,
      hasFreeTier: true,
    },
    {
      name: "CartQL",
      logo: "https://media.graphassets.com/c3ISJxCTFertKrjtIF7I",
      category: "Cart and Checkout",
      website: "https://cartql.com",
      launchYear: 2020,
      hasFreeTier: true,
    },
    {
      name: "Foxy",
      logo: "https://media.graphassets.com/MLZT7NY8TzuazmdBVexZ",
      category: "Commerce",
      website: "https://foxy.io",
      launchYear: 2005,
      hasFreeTier: false,
    },
    {
      name: "Gumroad",
      logo: "https://media.graphassets.com/49nf1g56QCyKRyIZJIFD",
      category: "Commerce",
      website: "https://gumroad.com",
      launchYear: 2011,
      hasFreeTier: false,
    },
    {
      name: "Snipcart",
      logo: "https://media.graphassets.com/Du5dvH17RuuNyLjiDA5V",
      category: "Cart and Checkout",
      website: "https://snipcart.com",
      launchYear: 2013,
      hasFreeTier: true,
    },
    {
      name: "Vendure",
      logo: "https://media.graphassets.com/VqsDQKcPSkCkAKASu6sO",
      category: "Commerce",
      website: "https://www.vendure.io",
      launchYear: 2019,
      hasFreeTier: true,
    },
    {
      name: "What3Words",
      logo: "https://media.graphassets.com/CcgdvYbBSWe0U4q8xVLd",
      category: "Address Verification",
      website: "https://what3words.com/",
      launchYear: 2013,
      hasFreeTier: true,
    },
    {
      name: "Sanity",
      logo: "https://media.graphassets.com/AvlVddPVQUaA6k6F297S",
      category: "CMS",
      website: "https://www.sanity.io/",
      launchYear: 2016,
      hasFreeTier: true,
    },
    {
      name: "Carthook",
      logo: "https://media.graphassets.com/5p4gSUWfT4eyIathsFzA",
      category: "Promotions",
      website: "https://carthook.com/",
      launchYear: 2015,
      hasFreeTier: false,
    },
    {
      name: "ButterCMS",
      logo: "https://media.graphassets.com/nRpng8ymQamYSjZdQfsQ",
      category: "CMS",
      website: "https://buttercms.com",
      launchYear: 2014,
      hasFreeTier: true,
    },
    {
      name: "EasyPost",
      logo: "https://media.graphassets.com/0QpLdD4THO7ekO4uHokw",
      category: "Shipping",
      website: "https://www.easypost.com/",
      launchYear: 2012,
      hasFreeTier: true,
    },
    {
      name: "Cosmic.js",
      logo: "https://media.graphassets.com/Ae7oy9PAQQOvoj50XwkH",
      category: "CMS",
      website: "https://www.cosmicjs.com/=",
      launchYear: 2015,
      hasFreeTier: true,
    },
    {
      name: "Shippo",
      logo: "https://media.graphassets.com/HpqHWs2dTbaB6wyRGlZQ",
      category: "Shipping",
      website: "https://goshippo.com",
      launchYear: 2013,
      hasFreeTier: false,
    },
    {
      name: "Dyspatch",
      logo: "https://media.graphassets.com/iF4ObsVERt223pY9tyAm",
      category: "Communication",
      website: "https://www.dyspatch.io/",
      launchYear: 2018,
      hasFreeTier: false,
    },
    {
      name: "SiftScience",
      logo: "https://media.graphassets.com/lcch4yeRTRyiwkQ39cUl",
      category: "Fraud",
      website: "https://sift.com",
      launchYear: 2011,
      hasFreeTier: false,
    },
    {
      name: "Onfleet",
      logo: "https://media.graphassets.com/CBGqB6FATuCgKN6cS6WZ",
      category: "Shipping",
      website: "https://onfleet.com",
      launchYear: 2015,
      hasFreeTier: false,
    },
    {
      name: "TaxJar",
      logo: "https://media.graphassets.com/LjM6dZXQFu2jw9F2U8ep",
      category: "Tax",
      website: "https://www.taxjar.com",
      launchYear: 2013,
      hasFreeTier: false,
    },
    {
      name: "TaxCloud",
      logo: "https://media.graphassets.com/HaS6nEfWRGqjYyUDMRSy",
      category: "Tax",
      website: "https://taxcloud.com",
      launchYear: 2010,
      hasFreeTier: false,
    },
    {
      name: "Postmark",
      logo: "https://media.graphassets.com/RXWzDN2wQcKpxR3L898w",
      category: "Communication",
      website: "https://postmarkapp.com",
      launchYear: 2009,
      hasFreeTier: true,
    },
    {
      name: "SendGrid",
      logo: "https://media.graphassets.com/y5Bs1tWJQdGUulqUj5km",
      category: "Communication",
      website: "https://sendgrid.com",
      launchYear: 2009,
      hasFreeTier: true,
    },
    {
      name: "MailChimp",
      logo: "https://media.graphassets.com/dLqd7LwYRIOzGibIoPNY",
      category: "Communication",
      website: "https://mailchimp.com",
      launchYear: 2001,
      hasFreeTier: true,
    },
    {
      name: "Twilio",
      logo: "https://media.graphassets.com/v53qjYM7QkWXuVUxML2A",
      category: "Communication",
      website: "https://www.twilio.com",
      launchYear: 2008,
      hasFreeTier: true,
    },
    {
      name: "customer.io",
      logo: "https://media.graphassets.com/IZGBrxTsapyeIbBVAQKA",
      category: "Communication",
      website: "https://customer.io",
      launchYear: 2012,
      hasFreeTier: false,
    },
    {
      name: "Auth0",
      logo: "https://media.graphassets.com/f55DUQixSeycOjbkJGBK",
      category: "Auth",
      website: "https://auth0.com",
      launchYear: 2013,
      hasFreeTier: true,
    },
    {
      name: "ShipStation",
      logo: "https://media.graphassets.com/8TMg0DfSTaPqmij9uXzg",
      category: "Fulfillment",
      website: "https://www.shipstation.com",
      launchYear: 2011,
      hasFreeTier: false,
    },
    {
      name: "Orderhive",
      logo: "https://media.graphassets.com/UuJUAjjeQxqXGdDtbapL",
      category: "OMS",
      website: "https://www.orderhive.com",
      launchYear: 2012,
      hasFreeTier: false,
    },
    {
      name: "Payhere",
      logo: "https://media.graphassets.com/3GM2LMbiREGr5hpAxSkh",
      category: "Storefront",
      website: "https://payhere.co",
      launchYear: 2018,
      hasFreeTier: false,
    },
    {
      name: "Stripe",
      logo: "https://media.graphassets.com/7w1ZGIcSi5UXCmvpo4wx",
      category: "Payment Gateways",
      website: "https://www.stripe.com/=",
      launchYear: 2010,
      hasFreeTier: false,
    },
    {
      name: "Vue Storefront",
      logo: "https://media.graphassets.com/GPU7kPWEQfqDJENnSjQp",
      category: "Storefront",
      website: "https://www.vuestorefront.io",
      launchYear: 2017,
      hasFreeTier: true,
    },
    {
      name: "Mailgun",
      logo: "https://media.graphassets.com/NzfY4hDRRSWdIVjJ3uLb",
      category: "Communication",
      website: "https://www.mailgun.com",
      launchYear: 2010,
      hasFreeTier: true,
    },
    {
      name: "Voucherify",
      logo: "https://media.graphassets.com/znrjonvCSUifPE9mo15K",
      category: "Promotions",
      website: "https://www.voucherify.io",
      launchYear: 2015,
      hasFreeTier: false,
    },
    {
      name: "Hasura",
      logo: "https://media.graphassets.com/GR8it445RU6p1w7k2p0k",
      category: "Content Mesh",
      website: "https://hasura.io",
      launchYear: 2017,
      hasFreeTier: true,
    },
    {
      name: "Subscribe Pro",
      logo: "https://media.graphassets.com/7cR6LhOHReeBD7HfDNvn",
      category: "Subscriptions",
      website: "https://www.subscribepro.com",
      launchYear: 2014,
      hasFreeTier: false,
    },
    {
      name: "Vercel",
      logo: "https://media.graphassets.com/05H5caiLRGqwYCmKK9Je",
      category: "Hosting",
      website: "https://vercel.com",
      launchYear: 2015,
      hasFreeTier: true,
    },
    {
      name: "Swell",
      logo: "https://media.graphassets.com/eu2m079Rruj1rkuhmtYJ",
      category: "Commerce",
      website: "https://www.swell.is",
      launchYear: 2019,
      hasFreeTier: false,
    },
    {
      name: "Front-Commerce",
      logo: "https://media.graphassets.com/odzBCmtqRy6KX8iG9m7u",
      category: "Storefront",
      website: "https://www.front-commerce.com",
      launchYear: 2018,
      hasFreeTier: false,
    },
    {
      name: "OneGraph",
      logo: "https://media.graphassets.com/IDc3ns1SomzQMdueFvQ5",
      category: "Content Mesh",
      website: "https://www.onegraph.com",
      launchYear: 2018,
      hasFreeTier: true,
    },
    {
      name: "Builder.io",
      logo: "https://media.graphassets.com/xMJn3xN7Tma2TqV1aPm9",
      category: "CMS",
      website: "https://www.builder.io/",
      launchYear: 2019,
      hasFreeTier: true,
    },
    {
      name: "Magic Link",
      logo: "https://media.graphassets.com/opgyEIF9TMipOZQqvKFb",
      category: "Auth",
      website: "https://magic.link/",
      launchYear: 2019,
      hasFreeTier: true,
    },
    {
      name: "Frontastic",
      logo: "https://media.graphassets.com/cWrulWBOQd2kM5mub0uj",
      category: "Storefront",
      website: "https://www.frontastic.cloud/",
      launchYear: 2017,
      hasFreeTier: false,
    },
    {
      name: "Crystallize",
      logo: "https://media.graphassets.com/3zBPh78vQQqQhPa7iULX",
      category: "Commerce",
      website: "https://crystallize.com",
      launchYear: 2016,
      hasFreeTier: true,
    },
    {
      name: "Storyblok",
      logo: "https://media.graphassets.com/dYVkLINMSg6zG1o1wQpF",
      category: "CMS",
      website: "https://www.storyblok.com/",
      launchYear: 2017,
      hasFreeTier: true,
    },
    {
      name: "LexasCMS",
      logo: "https://media.graphassets.com/3wpLeqraSQKiJjV163lA",
      category: "CMS",
      website: "https://www.lexascms.com",
      launchYear: 2020,
      hasFreeTier: false,
    },
    {
      name: "Alloy",
      logo: "https://media.graphassets.com/iRfzChO3QUKNiZ8WRocJ",
      category: "Operations",
      website: "https://runalloy.com/",
      launchYear: 2019,
      hasFreeTier: false,
    },
    {
      name: "MeiliSearch",
      logo: "https://media.graphassets.com/TSnxkvrTRva55xf3c4a1",
      category: "Search",
      website: "https://www.meilisearch.com/",
      launchYear: 2018,
      hasFreeTier: true,
    },
    {
      name: "Pipe17",
      logo: "https://media.graphassets.com/56e0p0CIT2i7qX3ZvYgN",
      category: "Operations",
      website: "https://pipe17.com/",
      launchYear: 2020,
      hasFreeTier: false,
    },
    {
      name: "ReCharge",
      logo: "https://media.graphassets.com/2jXHCkJbR3KDtHo94wYV",
      category: "Subscriptions",
      website:
        "https://rechargepayments.com/resources/headless-subscription-builds/",
      launchYear: 2014,
      hasFreeTier: false,
    },
    {
      name: "strapi",
      logo: "https://media.graphassets.com/lAoFt9LeRPOeaHi6uYbg",
      category: "CMS",
      website: "https://strapi.io",
      launchYear: 2015,
      hasFreeTier: true,
    },
    {
      name: "Octobat",
      logo: "https://media.graphassets.com/hxZqg7rQEuz0GURRcL7u",
      category: "Tax",
      website: "https://www.octobat.com",
      launchYear: 2014,
      hasFreeTier: true,
    },
    {
      name: "Agility CMS",
      logo: "https://media.graphassets.com/Y1nbjUaKQUu2WuNeeuWQ",
      category: "CMS",
      website: "https://agilitycms.com/",
      launchYear: 2016,
      hasFreeTier: true,
    },
    {
      name: "Chord",
      logo: "https://media.graphassets.com/Wr4f750VTgzu9F7c2red",
      category: "Commerce",
      website: "https://chord.co/",
      launchYear: 2020,
      hasFreeTier: false,
    },
    {
      name: "Plausible",
      logo: "https://media.graphassets.com/yGFbqsbbSesDX6BzCy0J",
      category: "Analytics",
      website: "https://plausible.io/",
      launchYear: 2019,
      hasFreeTier: false,
    },
    {
      name: "Medusa",
      logo: "https://media.graphassets.com/jsT4oZxyQqOGWkn3GjH8",
      category: "Commerce",
      website: "https://www.medusajs.com/",
      launchYear: 2021,
      hasFreeTier: true,
    },
    {
      name: "Saleor",
      logo: "https://media.graphassets.com/vSNzgaGaSS2YvV00pMjr",
      category: "Commerce",
      website: "https://saleor.io/",
      launchYear: 2016,
      hasFreeTier: true,
    },
    {
      name: "DatoCMS",
      logo: "https://media.graphassets.com/3XWzK3CcSyupGl92hzSM",
      category: "CMS",
      website: "https://www.datocms.com/",
      launchYear: 2016,
      hasFreeTier: true,
    },
    {
      name: "Fleetbase",
      logo: "https://media.graphassets.com/FTDdeB25Q2muo8dPwPZs",
      category: "Operations",
      website: "https://fleetbase.io/",
      launchYear: 2020,
      hasFreeTier: false,
    },
    {
      name: "Rally",
      logo: "https://media.graphassets.com/mS10sTBPRNizNCxbNUKJ",
      category: "Cart and Checkout",
      website: "https://rallyon.com",
      launchYear: 2021,
      hasFreeTier: false,
    },
    {
      name: "Openship",
      logo: "https://media.graphassets.com/MRUJ0lrMRFWwJKerulRL",
      category: "Operations",
      website: "https://openship.org",
      launchYear: 2021,
      hasFreeTier: false,
    },
  ];

  const productsWithIds = productsData.map((product) => ({
    ...product,
    id: nanoid(),
  }));

  await db.insert(Product).values(productsWithIds);

  console.log("Seed data inserted successfully!");
}
