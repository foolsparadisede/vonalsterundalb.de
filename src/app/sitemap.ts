import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.HOST + "/",
      lastModified: new Date(),
    },
    {
      url: process.env.HOST + "/de",
      lastModified: new Date(),
    },
  ];
}
