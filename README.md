node-express-multiapp
=====================

### About
This project cloned from: https://github.com/hitokun-s/node-express-multiapp-demo

It is used to achieve "multi app" in node.js with Express.

The directory structure was modified slightly to suit my purposes 

### Structure

    |  node-express-multiapp
        |
        +-- app.js (<-- main. sometimes named "server.js")  
    
    |  root  
        |
        +-- app1  
        |   +-- img  
        |   |    +-- sample.jpg  
        |   +-- index.js  
        +-- app2  
        |   +--- img  
        |   |   +-- sample.jpg  
        |   +--- index.js  
        +-- manager.js  

"app1" and "app2" represent independent app(context).  
In each "index.js", you can code in the same way in "app.js", like this:  

    app.get([path to this context], function(req,res){  
        //do something  
    })  

### Magic Spells

- in app.js 

        require("../root/manager.js").init(app, express);  
    
- in "index.js" of each context(ex. "app1","app2")  

        var app = require("../manager.js").getApp(__dirname);  
    
