const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const url_schema = new Schema(
  {
    domain: { type: String, required: true },
    short_url: { type: String, required: true, default: "" },
    rating: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const url_model = mongoose.model("url", url_schema);

const generate_hash = (url) => {
  return crypto.createHash("md5").update(url).digest("hex").slice(0, 6);
};

const create_short_url = async (domain) => {
  return generate_hash(domain);
};

const check_domain_exists = async (domain) => {
  return await url_model.findOne({ domain });
};

const create_url = async (domain) => {
  try {
    let existing_url = await check_domain_exists(domain);
    if (existing_url) {
      console.log("URL already exists:", existing_url);
      return existing_url;
    }

    const short_url = await create_short_url(domain);
    return new url_model({
      domain: domain,
      short_url: `${process.env.HOST}:${process.env.PORT}/${short_url}`,
      rating: 0,
    });
  } catch (err) {
    console.error(err);
  }
};

const get_short_url_and_increase_rating = async (slug) => {
  const short_url = `${process.env.HOST}:${process.env.PORT}/${slug}`;

  let url = await url_model.findOneAndUpdate(
    { short_url },
    { $inc: { rating: 1 } }
  );
  return url;
};

module.exports = { url_model, create_url, get_short_url_and_increase_rating };
