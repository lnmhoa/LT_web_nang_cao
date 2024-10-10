const viewEngine = (app) =>{
    app.set("view engine", "ejs")
    app.set("views", "./Pages")
}

export default viewEngine