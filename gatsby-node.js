exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "PropertiesJson") {
    createNodeField({
      node,
      name: `propertyImage`,
      value: `../images/${node.image}`,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPropertiesJson {
        nodes {
          answers {
            ans
            id
          }
          id
          infras
          description
          spots
          legals
          location
          name
          shortName
          price
          fields {
            propertyImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const allProperties = result.data.allPropertiesJson.nodes

  allProperties.forEach(property => {
    createPage({
      path: `/properties/${property.shortName}`,
      component: require.resolve(`./src/templates/properties.js`),
      context: { property },
    })
  })

  allProperties.forEach(subscriptionProperty => {
    createPage({
      path: `/subscription/${subscriptionProperty.shortName}`,
      component: require.resolve(`./src/templates/subscription.js`),
      context: { subscriptionProperty },
    })
  })
}
