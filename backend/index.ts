import express from 'express'
import axios from 'axios'

interface PostTitle {
  pid: number,
  comments: number,
  title: string,
  uuid: string,
  username?: string,
  date: string
}

const app = express()
app.get('/posts', async (_, res) => {
  const posts: PostTitle[] = [
    { pid: 31067, title: '그 시즌 2 되고', uuid: '6c5ca9078db442a886f84e2138bcc256', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 1 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 },
    { pid: 31067, title: '그 시즌 2 되고', uuid: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03', comments: 0 }
  ]
  for (const post of posts) {
    post.username = (await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${post.uuid}`)).data.name
  }
  // setTimeout(() => res.send(posts), 5000)
  res.send(posts)
})

export default app
