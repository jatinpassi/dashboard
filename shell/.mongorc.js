var ops = 0;
db = connect("localhost:27017/dashboard")
prompt = function () {
    let time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${db}  ${++ops}$ `
}