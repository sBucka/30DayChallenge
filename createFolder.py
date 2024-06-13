import os

class CreateFolder:
    def __init__(self, name, path ='./'):
        self.name = name.replace(" ", "-").lower()
        self.path = path
        
    def createFolder(self):
        if os.path.exists(self.path+self.name):
            print("File exists")
            return
        os.mkdir(self.path+self.name)
    
    def createHtml(self):
        i=0
        for _ in range(len(self.name)):
            if self.name[i].isdigit()==False:
                break
            i+=1
        title = self.name[i:].replace("-"," ").title()
        title = title[1:] if title[0] == " " else title
        if os.path.exists(f"{self.path+self.name}/index.html"):
            print(f"HTML file {self.path+self.name}/index.html already exists")
            return
        f = open(f"{self.path+self.name}/index.html","a")
        f.write(f"""<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css" />
        <script src="script.js" defer></script>
        <title>{title}</title>
    </head>
    <body>
        
    </body>
    </html>""")
        f.close
    
    def createCss(self):
        if os.path.exists(f"{self.path+self.name}/style.css"):
            print(f"Css file {self.path+self.name}/style.css already exists")
            return
        f = open(f"{self.path+self.name}/style.css","a")
        f.close
        
    def createJs(self):
        if os.path.exists(f"{self.path+self.name}/script.js"):
            print(f"Css file {self.path+self.name}/script.js already exists")
            return
        f = open(f"{self.path+self.name}/script.js","a")
        f.close
        
    def createAll(self):
        self.createFolder()
        self.createHtml()
        self.createCss()
        self.createJs()

if __name__ == "__main__":
    cf = CreateFolder("19 Unreal Webcam Fun")
    cf.createAll()
    
    