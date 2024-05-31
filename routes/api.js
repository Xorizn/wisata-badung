//server
__path = process.cwd();
var express = require("express");
var router = express.Router();
var axios = require("axios");

function GithubStalk(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get(
        `https://api.github.com/users/${user}`
      );
      if (data.message) return resolve(data.message);
      const {
        login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = data;
      var hasil = {
        user: {
          login: login,
          id: id,
          node_id: node_id,
          avatar_url: avatar_url,
          gravatar_id: gravatar_id,
          url: url,
          html_url: html_url,
          followers_url: followers_url,
          following_url: following_url,
          gists_url: gists_url,
          starred_url: starred_url,
          subscriptions_url: subscriptions_url,
          organizations_url: organizations_url,
          repos_url: repos_url,
          events_url: events_url,
          received_events_url: received_events_url,
          type: type,
          site_admin: site_admin,
          name: name,
          company: company,
          blog: blog,
          location: location,
          email: email,
          hireable: hireable,
          bio: bio,
          twitter_username: twitter_username,
          public_repos: public_repos,
          public_gists: public_gists,
          followers: followers,
          following: following,
          created_at: created_at,
          updated_at: updated_at,
        },
      };
      resolve(hasil);
    } catch (err) {
      console.error(err);
    }
  });
}

router.get("/", (req, res, next) => {
  GithubStalk("xorizn").then((data) => {
    res.json({
      developer: "xorizn",
      instagram: "balaxdh",
      github: "xorizn",
      youtube: "xorizn",
      data: data,
    });
  });
});

module.exports = router;
