export const trending = (req, res) => res.render("home", { pageTitle: "Home" });

export const see = (req, res) => res.render("watch", { pageTitle: "Videos" });

export const edit = (req, res) =>
  res.render("edit", { pageTitle: "edit Videos" });

export const search = (req, res) =>
  res.send("Search", { pageTitle: "Search Videos" });
export const upload = (req, res) =>
  res.send("Upload", { pageTitle: "Upload Videos" });

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
