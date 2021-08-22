import express from 'express'

interface Post {
  pid: number,
  title: string,
  author: string,
  date: string
}

const app = express()
app.get('/posts', (_, res) => {
  const posts: Post[] = [
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' },
    { pid: 31067, title: '그 시즌 2 되고', author: 'e6a06a59c144405bbdcfb8cf9fcdbe3d', date: '2021.06.03' }
  ]
  // setTimeout(() => res.send(posts), 5000)
  res.send(posts)
})

export default app
