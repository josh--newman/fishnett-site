exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "/mobile/",
    toPath: "https://apps.apple.com/au/app/fishnett/id6599842071",
    isPermanent: true,
  });
};
