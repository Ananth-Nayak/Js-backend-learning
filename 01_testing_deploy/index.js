import express from 'express'
import 'dotenv/config'

const app = express();

const PORT = 5000;

const githubData = {
  "login": "Ananth-Nayak",
  "id": 119912068,
  "node_id": "U_kgDOByW2hA",
  "avatar_url": "https://avatars.githubusercontent.com/u/119912068?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ananth-Nayak",
  "html_url": "https://github.com/Ananth-Nayak",
  "followers_url": "https://api.github.com/users/Ananth-Nayak/followers",
  "following_url": "https://api.github.com/users/Ananth-Nayak/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ananth-Nayak/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ananth-Nayak/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ananth-Nayak/subscriptions",
  "organizations_url": "https://api.github.com/users/Ananth-Nayak/orgs",
  "repos_url": "https://api.github.com/users/Ananth-Nayak/repos",
  "events_url": "https://api.github.com/users/Ananth-Nayak/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ananth-Nayak/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ananth Nayak",
  "company": null,
  "blog": "",
  "location": "Gangolli",
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-12-06T03:34:03Z",
  "updated_at": "2024-12-20T14:10:49Z"
}

app.get('/',(req,res) => {
  res.send("My first Server")
});

app.get('/github',(req,res) => res.json(githubData))

app.listen(process.env.PORT,()=>{
  console.log(`Server is listening on ${process.env.PORT}`)
});