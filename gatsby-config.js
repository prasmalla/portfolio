module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "dqxbrore",
        dataset: "production",
        watchMode: true,
      },
    },
  ],
}
