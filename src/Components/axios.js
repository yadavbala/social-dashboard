axios.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  ])
  .then(axios.spread((userRes, postRes) => {
      console.log(postRes)
    const user=userRes.data
    const posts=postRes.data
    this.setState({user,posts})
  }));