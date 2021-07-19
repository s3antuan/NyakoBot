module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log('Logged in as');
    console.log(client.user.username);
    console.log(client.user.id);
    console.log('------------');
    client.user.setActivity('nya');
  },
}