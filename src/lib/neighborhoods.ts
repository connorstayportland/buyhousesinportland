export interface Neighborhood {
  slug: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  population?: string;
  highlights?: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "southeast-portland",
    name: "Southeast Portland",
    description:
      "A diverse collection of neighborhoods including Hawthorne, Belmont, and Division Street. Known for eclectic shops, restaurants, and a strong sense of community.",
    lat: 45.5000,
    lng: -122.6168,
    highlights: ["Hawthorne District", "Clinton Street", "Woodstock"],
  },
  {
    slug: "northwest-portland",
    name: "Northwest Portland",
    description:
      "Upscale urban neighborhood featuring the vibrant NW 23rd and NW 21st Avenue shopping corridors. Close to Forest Park trails and the Pearl District.",
    lat: 45.5285,
    lng: -122.6982,
    highlights: ["NW 23rd Ave", "Forest Park access", "Nob Hill"],
  },
  {
    slug: "northeast-portland",
    name: "Northeast Portland",
    description:
      "A thriving area encompassing Alberta Arts District, Irvington, and Beaumont. Home to diverse restaurants, galleries, and tree-lined streets.",
    lat: 45.5510,
    lng: -122.6168,
    highlights: ["Alberta Arts District", "Irvington", "Hollywood District"],
  },
  {
    slug: "pearl-district",
    name: "Pearl District",
    description:
      "Portland's premier urban neighborhood featuring converted warehouses, luxury condos, world-class restaurants, and Powell's Books. Highly walkable and bike-friendly.",
    lat: 45.5271,
    lng: -122.6839,
    highlights: ["Jamison Square", "Powell's Books", "Tanner Creek Park"],
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    description:
      "A thriving city just west of Portland, home to Nike's world headquarters and a booming tech corridor. Excellent schools and family-friendly neighborhoods.",
    lat: 45.4871,
    lng: -122.8037,
    highlights: ["Nike HQ", "Beaverton Town Square", "Top-rated schools"],
  },
  {
    slug: "gresham",
    name: "Gresham",
    description:
      "Oregon's fourth-largest city, offering affordable housing and convenient MAX light rail access to downtown Portland. A growing community with strong neighborhoods.",
    lat: 45.5001,
    lng: -122.4302,
    highlights: ["MAX light rail", "Outdoor recreation", "Affordable housing"],
  },
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    description:
      "An upscale city south of Portland centered around Lake Oswego, offering luxury waterfront homes, top-rated schools, and a charming downtown.",
    lat: 45.4207,
    lng: -122.6706,
    highlights: ["Lake access", "Top-rated schools", "Millennium Park"],
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    description:
      "Home to Intel's largest campus and a growing technology hub in Washington County. Offers affordable housing with excellent freeway and MAX access.",
    lat: 45.5229,
    lng: -122.9898,
    highlights: ["Intel campus", "Hillsboro Stadium", "MAX light rail"],
  },
  {
    slug: "tigard",
    name: "Tigard",
    description:
      "A family-friendly city between Portland and Tualatin with excellent shopping, dining, and parks. Great access to both I-5 and Highway 217.",
    lat: 45.4312,
    lng: -122.7714,
    highlights: ["Washington Square", "Fanno Creek Trail", "Downtown Tigard"],
  },
  {
    slug: "tualatin",
    name: "Tualatin",
    description:
      "A quiet suburban city along the Tualatin River with excellent parks, top-rated schools, and a growing downtown core. Perfect for families.",
    lat: 45.3840,
    lng: -122.7626,
    highlights: ["Tualatin River", "Tualatin Commons", "Family-friendly"],
  },
  {
    slug: "milwaukie",
    name: "Milwaukie",
    description:
      "Known as the 'Dogwood City,' Milwaukie sits just south of Portland along the Willamette River. Great value homes with easy access to downtown Portland via the Orange Line.",
    lat: 45.4468,
    lng: -122.6374,
    highlights: ["Orange MAX line", "Willamette River", "Riverfront Park"],
  },
  {
    slug: "happy-valley",
    name: "Happy Valley",
    description:
      "One of Oregon's fastest-growing cities, offering newer construction homes, excellent Clackamas County schools, and stunning views of Mt. Hood.",
    lat: 45.4457,
    lng: -122.5290,
    highlights: ["Mt. Hood views", "New construction", "Top schools"],
  },
  {
    slug: "oregon-city",
    name: "Oregon City",
    description:
      "Historic end of the Oregon Trail, now a vibrant city along the Willamette River. Offers charming Victorian homes, unique cliff-side elevator, and a growing arts scene.",
    lat: 45.3565,
    lng: -122.6068,
    highlights: ["Historic downtown", "Municipal elevator", "Oregon Trail"],
  },
  {
    slug: "clackamas",
    name: "Clackamas",
    description:
      "A growing unincorporated community in Clackamas County with easy I-205 access, proximity to Clackamas Town Center, and diverse housing options.",
    lat: 45.4040,
    lng: -122.5707,
    highlights: ["Clackamas Town Center", "I-205 access", "New development"],
  },
  {
    slug: "aloha",
    name: "Aloha",
    description:
      "An unincorporated community in Washington County with affordable housing, diverse culture, and convenient access to Beaverton and Hillsboro.",
    lat: 45.4874,
    lng: -122.8674,
    highlights: ["Affordable prices", "Diverse community", "Washington County"],
  },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
