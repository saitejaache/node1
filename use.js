const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(`system uptime is ${os.uptime()} seconds`)
const currentOS={
name:os.type(),
relase:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem(),

}
console.log(currentOS)