require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const token = process.env.SANITY_READ_TOKEN
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        token,
        projectId: "dqxbrore",
        dataset: "production",
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["./src"],
      },
    },
  ],
}
