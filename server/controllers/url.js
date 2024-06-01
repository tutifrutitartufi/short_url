const { url_model, create_url } = require("../models/url");

const createUrl = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a url",
    });
  }

  const url = await create_url(body?.long_url);

  if (!url) {
    return res.status(400).json({ success: false, error: err });
  }

  url
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        short_url: url.short_url,
        message: "Url created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Url not created!",
      });
    });
};

const deleteUrl = async (req, res) => {
  await url_model
    .findOneAndDelete({ _id: req.params.id }, (err, url) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!url) {
        return res.status(404).json({ success: false, error: `Url not found` });
      }

      return res.status(200).json({ success: true, data: url });
    })
    .catch((err) => console.log(err));
};

const getUrlById = async (req, res) => {
  await url_model
    .findOne({ _id: req.params.id }, (err, url) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!url) {
        return res.status(404).json({ success: false, error: `Url not found` });
      }
      return res.status(200).json({ success: true, data: url });
    })
    .catch((err) => console.log(err));
};

const getUrls = async (req, res) => {
  await url_model
    .find({}, (err, urls) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!urls.length) {
        return res
          .status(404)
          .json({ success: false, error: `Urls not found` });
      }
      return res.status(200).json({ success: true, data: urls });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createUrl,
  deleteUrl,
  getUrls,
  getUrlById,
};
