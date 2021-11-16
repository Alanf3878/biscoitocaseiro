module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "biscoitocaseiro",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
        options: {     
          typeName: "alldata",
          fieldName: "alldata",
          url: "https://api-us-east-1.graphcms.com/v2/ckvv1znfq0epa01wd6ec1ggyq/master",
        },
      }],
};
